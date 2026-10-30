const express = require('express');

const app = express();
const port = 3000;

//parse the JSON request bodies
app.use(express.json());
app.use(express.static('public'));

// In-memory plant data; changes are lost when the server restarts.
const plants = [
    { id: 1, name: "Monstera", species: "Monstera deliciosa", description: "A tropical plant with large, split leaves." },
    { id: 2, name: "Snake Plant", species: "Dracaena trifasciata", description: "A hardy plant with upright, sword-shaped leaves." },
    { id: 3, name: "Golden Pothos", species: "Epipremnum aureum", description: "A trailing vine that grows well indoors." },
    { id: 4, name: "Peace Lily", species: "Spathiphyllum wallisii", description: "A shade-tolerant plant with white flowers." },
    { id: 5, name: "Aloe Vera", species: "Aloe vera", description: "A succulent with thick, water-storing leaves." }
];

let nextId = 6;

function validatePlant(body) {
    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return "request body must be a JSON object";
    }
    const { name, species, description } = body;
    if (typeof name !== "string" || !name.trim()) return "name is required";
    if (typeof species !== "string" || !species.trim()) return "species is required";
    if (typeof description !== "string" || !description.trim()) return "description is required";
    return null;
}

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Plant API</title>
                <link rel="stylesheet" type="text/css" href="/css/style.css">
            </head>
            <body>
                <h1>Welcome to the Plant API</h1>
                <p>Use the following endpoints to interact with the API:</p>
                <ul>
                    <li>GET /plants - Get all plants</li>
                    <li>GET /plants/:id - Get a plant by ID</li>
                    <li>POST /plants - Create a new plant</li>
                    <li>PUT /plants/:id - Update a plant by ID</li>
                    <li>DELETE /plants/:id - Delete a plant by ID</li>
                </ul>
            </body>
        </html>
    `);
});

app.get("/plants", (req, res) => {
    res.status(200).json(plants);
});

app.get("/plants/:id", (req, res) => {
    const id = Number(req.params.id);
    const plant = plants.find((item) => item.id === id);
    if (!plant) {
        return res.status(404).json({ error: "Plant not found" });
    }
    res.status(200).json(plant);
});

app.post("/plants", (req, res) => {
    const error = validatePlant(req.body);
    if (error) {
        return res.status(400).json({ error });
    }
    const { name, species, description } = req.body;
    const newPlant = { id: nextId++, name, species, description };
    plants.push(newPlant);
    res.status(201).json(newPlant);
});

app.put("/plants/:id", (req, res) => {
    const id = Number(req.params.id);
    const plantIndex = plants.findIndex((item) => item.id === id);
    if (plantIndex === -1) {
        return res.status(404).json({ error: "Plant not found" });
    }
    const error = validatePlant(req.body);
    if (error) {
        return res.status(400).json({ error });
    }
    const { name, species, description } = req.body;
    const updatedPlant = { id, name, species, description };
    plants[plantIndex] = updatedPlant;
    res.status(200).json(updatedPlant);
});

app.delete("/plants/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = plants.findIndex((item) => item.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Plant not found" });
    }
    const [removedPlant] = plants.splice(index, 1);
    res.status(200).json({ message: "Plant deleted", plant: removedPlant });
});

//start our server
app.listen(port, () => {
    console.log(`Plant API is running on http://localhost:${port}`);
});