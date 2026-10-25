import { useState } from "react";
import "./App.css";

const TREFLE_API_URL = "https://trefle.io/api/v1";
const LAST_PLANT_PAGE = 2500;

async function fetchTrefle(path) {
  const token = import.meta.env.VITE_TREFLE_TOKEN;
  if (!token) {
    throw new Error("Set VITE_TREFLE_TOKEN in .env.local to use plant search.");
  }

  const response = await fetch(`${TREFLE_API_URL}/${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Trefle request failed (${response.status}).`);
  }

  return response.json();
}

function App() {
  const [query, setQuery] = useState("");
  const [plants, setPlants] = useState([]);
  const [randomPlant, setRandomPlant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [error, setError] = useState("");

  async function searchPlants(event) {
    event.preventDefault();

    const searchTerm = query.trim();
    if (!searchTerm) {
      setError("Enter a plant name to search.");
      setPlants([]);
      return;
    }

    const params = new URLSearchParams({ q: searchTerm });
    setLoading(true);
    setLoadingMessage("Searching plants...");
    setError("");
    setPlants([]);

    try {
      const data = await fetchTrefle(`species/search?${params}`);
      setPlants(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Plant search failed.");
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  }

  async function showRandomPlant() {
    const page = Math.floor(Math.random() * LAST_PLANT_PAGE) + 1;
    setLoading(true);
    setLoadingMessage("Finding a random plant...");
    setError("");
    setRandomPlant(null);

    try {
      const data = await fetchTrefle(`plants?page=${page}`);
      if (!Array.isArray(data.data) || data.data.length === 0) {
        throw new Error("Trefle returned no plants for the selected page.");
      }

      const plant = data.data[Math.floor(Math.random() * data.data.length)];
      setRandomPlant(plant);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Could not load a plant.");
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  }

  function renderPlant(plant) {
    return (
      <article key={plant.id}>
        <h2>{plant.common_name || plant.scientific_name}</h2>
        {plant.image_url && (
          <img
            className="plant-image"
            src={plant.image_url}
            alt={plant.common_name || plant.scientific_name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.hidden = true;
            }}
          />
        )}
        {plant.common_name && <p>{plant.scientific_name}</p>}
        {plant.family && <p>Family: {plant.family}</p>}
      </article>
    );
  }

  return (
    <div className="app">
      <div className="dog-card">
        <h1>Plant Search</h1>

        <form onSubmit={searchPlants}>
          <label htmlFor="plant-query">Plant name </label>
          <input
            id="plant-query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Quercus"
          />
          <button type="submit" disabled={loading}>
            Search
          </button>
        </form>

        <button type="button" onClick={showRandomPlant} disabled={loading}>
          Show a Random Plant
        </button>

        {loading && <p className="loading">{loadingMessage}</p>}
        {error && <p className="error">{error}</p>}

        {randomPlant && (
          <section aria-label="Random plant">
            <h2>Random plant</h2>
            {renderPlant(randomPlant)}
          </section>
        )}

        {!loading && !error && plants.length === 0 && !randomPlant && (
          <p>Search for a plant or show a random plant.</p>
        )}

        {plants.map(renderPlant)}
      </div>
    </div>
  );
}

export default App;
