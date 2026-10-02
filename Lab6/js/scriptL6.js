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
    if(!heightInput) {
        alert("No height entered. Please try again.");
        return;
    }
    const filteredPlants = plants.filter(plant => plant.height >= parseInt(heightInput));
    displayPlants(filteredPlants);
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
    
    const stats = document.getElementById("stats");

    stats.innerHTML = `
        <h2>Plant Statistics</h2>
        <p>Total Plants: ${plants.length}</p>
        <p>Average Height: ${averageHeight} ft</p>
    `;
}

showAllPlants(); // Display all plants on page load