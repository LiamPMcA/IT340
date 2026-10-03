const plants = [
    {
        name: "Rose",
        sunlight: "Full Sun",
        bloomSeason: "Spring",
        height: 3
    },
    {
        name: "Lavender",
        sunlight: "Full Sun",
        bloomSeason: "Summer",
        height: 2
    },
    {
        name: "Fern",
        sunlight: "Shade",
        bloomSeason: "Fall",
        height: 4
    },
    {
        name: "Sunflower",
        sunlight: "Full Sun",
        bloomSeason: "Summer",
        height: 6
    },
    {
        name: "Hosta",
        sunlight: "Partial Shade",
        bloomSeason: "Summer",
        height: 2
    },
    {
        name: "Tulip",
        sunlight: "Full Sun",
        bloomSeason: "Spring",
        height: 1
    },
    {
        name: "Hydrangea",
        sunlight: "Partial Shade",
        bloomSeason: "Summer",
        height: 5
    },
    {
        name: "Daisy",
        sunlight: "Full Sun",
        bloomSeason: "Spring",
        height: 2
    },
    {
        name: "Peony",
        sunlight: "Partial Shade",
        bloomSeason: "Spring",
        height: 3
    },
    {
        name: "Marigold",
        sunlight: "Full Sun",
        bloomSeason: "Summer",
        height: 2
    },
    {
        name: "Iris",
        sunlight: "Full Sun",
        bloomSeason: "Spring",
        height: 3
    },
    {
        name: "Camellia",
        sunlight: "Partial Shade",
        bloomSeason: "Spring",
        height: 6
    },
    {
        name: "Zinnia",
        sunlight: "Full Sun",
        bloomSeason: "Summer",
        height: 3
    },
    {
        name: "Begonia",
        sunlight: "Partial Shade",
        bloomSeason: "Summer",
        height: 1
    },
    {
        name: "Crocus",
        sunlight: "Partial Shade",
        bloomSeason: "Spring",
        height: 1
    },
    {
        name: "Coneflower",
        sunlight: "Full Sun",
        bloomSeason: "Summer",
        height: 4
    },
    {
        name: "Lily",
        sunlight: "Partial Shade",
        bloomSeason: "Summer",
        height: 3
    },
    {
        name: "Aster",
        sunlight: "Full Sun",
        bloomSeason: "Fall",
        height: 3
    },
    {
        name: "Chrysanthemum",
        sunlight: "Full Sun",
        bloomSeason: "Fall",
        height: 2
    },
    {
        name: "Hellebore",
        sunlight: "Shade",
        bloomSeason: "Fall",
        height: 1
    }
];

// Javascript functions
//display plants
function displayPlants(plantArray) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; // Clear existing content
    //map()
    plantArray.map((plant) => {
        movieList.innerHTML += `
            <div class="movie">
                <h2>${plant.name}</h2>
                <p>Sunlight: ${plant.sunlight}</p>
                <p>Bloom Season: ${plant.bloomSeason}</p>
                <p class="rating">Height: ${plant.height} ft</p>
            </div>
        `;
    });
}

//show all plants
function showAllPlants() {
    displayPlants(plants);
}

//sort()
function sortAlphabetically() {
    const sortedPlants = [...plants].sort((a,b) => {
        return a.name.localeCompare(b.name);
    });
    displayPlants(sortedPlants);
}

//filter by sunlight
function filterBySunlight(){
    const sunlightInput = prompt("Enter sunlight type to filter by (e.g., Full Sun, Partial Shade, Shade):");
    if(!sunlightInput) {
        alert("No sunlight value entered. Please try again.");
        return;
    }
    const filteredPlants = plants.filter(plant => plant.sunlight.toLowerCase() === sunlightInput.toLowerCase());

    displayPlants(filteredPlants);
}

//filter by bloom season
function filterByBloomSeason() {
    const seasonInput = prompt("Enter a bloom season to filter by (e.g., Spring, Summer, Fall):");
    if(!seasonInput) {
        alert("No season entered. Please try again.");
        return;
    }
    const filteredPlants = plants.filter(plant => plant.bloomSeason.toLowerCase() === seasonInput.toLowerCase());

    displayPlants(filteredPlants);
}

//filter by height
function filterByHeight() {
    const heightInput = prompt("Enter a minimum height in feet (e.g., 3):");

    if (heightInput === null || heightInput.trim() === "") {
        alert("No height entered. Please try again.");
        return;
    }

    const minimumHeight = Number(heightInput);
    if (!Number.isFinite(minimumHeight)) {
        alert("Please enter a valid number.");
        return;
    }

    const heights = plants.map(plant => plant.height);
    const minHeight = Math.min(...heights);
    const maxHeight = Math.max(...heights);
    const averageHeight = heights.reduce((total, height) => total + height, 0) / heights.length;

    const filteredPlants = plants.filter(plant => plant.height >= minimumHeight);
    displayPlants(filteredPlants);

    const stats = document.getElementById("stats");
    stats.innerHTML = `
        <h2>Height Statistics</h2>
        <p>Shortest: ${minHeight} ft</p>
        <p>Tallest: ${maxHeight} ft</p>
        <p>Average: ${averageHeight.toFixed(2)} ft</p>
    `;
}

//find specific plant
function findPlant() {
    const nameInput = prompt("Enter the name of the plant to find:");

    const plantFound = plants.find(plant => plant.name.toLowerCase() === nameInput.toLowerCase());
    if (plantFound) {
        displayPlants([plantFound]);
    } else {
        alert("Plant not found.");
    }
}

//plant stats
function showPlantStats() {
    const totalHeight = plants.reduce((total, plant) => {
         return total + plant.height;
        }, 0);
    const averageHeight = (totalHeight / plants.length).toFixed(2);
    const minHeight = Math.min(...plants.map(plant => plant.height));
    const maxHeight = Math.max(...plants.map(plant => plant.height));
    const bloomSeasonCounts = plants.reduce((counts, plant) => {
        counts[plant.bloomSeason] = (counts[plant.bloomSeason] || 0) + 1;
        return counts;
    }, {});
    const bloomSeasonStats = Object.entries(bloomSeasonCounts)
        .map(([season, count]) => `<p>${season}: ${count} plants</p>`)
        .join("");
    const sunlightCounts = plants.reduce((counts, plant) => {
        counts[plant.sunlight] = (counts[plant.sunlight] || 0) + 1;
        return counts;
    }, {});
    const sunlightStats = Object.entries(sunlightCounts)
        .map(([sunlight, count]) => `<p>${sunlight}: ${count} plants</p>`)
        .join("");

    const stats = document.getElementById("stats");

    stats.innerHTML = `
        <h2>Plant Statistics</h2>
        <p>Total Plants: ${plants.length}</p>
        <p>Average Height: ${averageHeight} ft</p>
        <p>Minimum Height: ${minHeight} ft</p>
        <p>Maximum Height: ${maxHeight} ft</p>
        <h3>Plants by Bloom Season</h3>
        ${bloomSeasonStats}
        <h3>Plants by Sunlight Requirement</h3>
        ${sunlightStats}
    `;
}

showAllPlants(); // Display all plants on page load