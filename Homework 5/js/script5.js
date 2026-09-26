const plants = [
  {
    name: "Butterfly Weed",
    scientificName: "Asclepias tuberosa",
    sunlight: "Full sun",
    soil: "Dry to medium, well-drained soil",
    height: "1 to 3 feet",
    bloomSeason: "June to August",
    wildlifeBenefits: "Provides nectar for butterflies and bees; its leaves feed monarch caterpillars."
  },
  {
    name: "Purple Coneflower",
    scientificName: "Echinacea purpurea",
    sunlight: "Full sun to partial shade",
    soil: "Average, well-drained soil",
    height: "2 to 5 feet",
    bloomSeason: "June to August",
    wildlifeBenefits: "Supplies nectar for pollinators and seeds for birds such as goldfinches."
  },
  {
    name: "Mountain Laurel",
    scientificName: "Kalmia latifolia",
    sunlight: "Partial shade to full sun",
    soil: "Acidic, moist, well-drained soil",
    height: "5 to 15 feet",
    bloomSeason: "May to July",
    wildlifeBenefits: "Provides cover and nesting habitat for birds and nectar for native pollinators."
  },
  {
    name: "Black-Eyed Susan",
    scientificName: "Rudbeckia hirta",
    sunlight: "Full sun",
    soil: "Dry to medium, well-drained soil",
    height: "2 to 3 feet",
    bloomSeason: "June to September",
    wildlifeBenefits: "Offers nectar to bees and butterflies and seeds to finches and other birds."
  },
  {
    name: "New England Aster",
    scientificName: "Symphyotrichum novae-angliae",
    sunlight: "Full sun",
    soil: "Medium, moist soil",
    height: "3 to 6 feet",
    bloomSeason: "August to October",
    wildlifeBenefits: "Provides late-season nectar for bees and butterflies before winter."
  },
  {
    name: "Cardinal Flower",
    scientificName: "Lobelia cardinalis",
    sunlight: "Full sun to partial shade",
    soil: "Rich, moist to wet soil",
    height: "2 to 4 feet",
    bloomSeason: "July to September",
    wildlifeBenefits: "Produces nectar favored by ruby-throated hummingbirds and native bees."
  },
  {
    name: "Wild Bergamot",
    scientificName: "Monarda fistulosa",
    sunlight: "Full sun to partial shade",
    soil: "Medium, well-drained soil",
    height: "2 to 4 feet",
    bloomSeason: "June to September",
    wildlifeBenefits: "Provides abundant nectar for bees, butterflies, and hummingbirds."
  },
  {
    name: "White Oak",
    scientificName: "Quercus alba",
    sunlight: "Full sun to partial shade",
    soil: "Deep, moist, well-drained soil",
    height: "50 to 80 feet",
    bloomSeason: "April to May",
    wildlifeBenefits: "Acorns feed many birds and mammals, while its foliage supports native caterpillars."
  },
  {
    name: "Spicebush",
    scientificName: "Lindera benzoin",
    sunlight: "Partial shade to full shade",
    soil: "Moist, well-drained soil",
    height: "6 to 12 feet",
    bloomSeason: "March to April",
    wildlifeBenefits: "Hosts spicebush swallowtail caterpillars and provides berries for migrating birds."
  },
  {
    name: "Switchgrass",
    scientificName: "Panicum virgatum",
    sunlight: "Full sun to partial shade",
    soil: "Medium to wet soil",
    height: "3 to 6 feet",
    bloomSeason: "July to September",
    wildlifeBenefits: "Offers seeds, shelter, and nesting material for birds and cover for small wildlife."
  }
];

const searchInput = document.getElementById("search");
const plantFilter = document.getElementById("genre-filter");
const resetButton = document.getElementById("reset-button");
const plantCount = document.getElementById("movie-count");
const plantContainer = document.getElementById("movie-container");

function displayPlants(plantList) {
  if (!plantContainer) return;

  plantContainer.innerHTML = "";

  if (plantList.length === 0) {
    plantContainer.innerHTML = "<p>No plants found. Try a different search.</p>";
    return;
  }

  plantList.forEach((plant) => {
    const plantElement = document.createElement("article");
    plantElement.classList.add("plant-card");
    plantElement.innerHTML = `
      <h2>${plant.name}</h2>
      <p><strong>Scientific name:</strong> ${plant.scientificName}</p>
      <p><strong>Sunlight:</strong> ${plant.sunlight}</p>
      <p><strong>Soil:</strong> ${plant.soil}</p>
      <p><strong>Height:</strong> ${plant.height}</p>
      <p><strong>Bloom season:</strong> ${plant.bloomSeason}</p>
      <p><strong>Wildlife benefits:</strong> ${plant.wildlifeBenefits}</p>
    `;
    plantContainer.appendChild(plantElement);
  });
}

function filterPlants() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
  const selectedPlant = plantFilter ? plantFilter.value : "All";
  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm);
    const matchesPlant = selectedPlant === "All" || plant.name === selectedPlant;
    return matchesSearch && matchesPlant;
  });

  displayPlants(filteredPlants);
  if (plantCount) plantCount.textContent = `Showing: ${filteredPlants.length} plants`;
}

if (plantFilter) {
  plantFilter.addEventListener("change", filterPlants);
}

if (searchInput) searchInput.addEventListener("input", filterPlants);
if (resetButton) {
  resetButton.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (plantFilter) plantFilter.value = "All";
    filterPlants();
  });
}

displayPlants(plants);
filterPlants();