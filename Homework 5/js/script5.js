const plants = [
  {
    name: "Butterfly Weed",
    native: true,
    scientificName: "Asclepias tuberosa",
    sunlight: "Full sun",
    soil: "Dry to medium, well-drained soil",
    height: "1 to 3 feet",
    bloomSeason: "June to August",
    wildlifeBenefits: "Provides nectar for butterflies and bees; its leaves feed monarch caterpillars."
  },
  {
    name: "Purple Loosestrife",
    native: false,
    scientificName: "Lythrum salicaria",
    sunlight: "Full sun",
    soil: "Moist to wet soil",
    height: "2 to 6 feet",
    bloomSeason: "June to September",
    wildlifeBenefits: "Flowers attract pollinators, but dense stands can displace native wetland plants."
  },
  {
    name: "Japanese Barberry",
    native: false,
    scientificName: "Berberis thunbergii",
    sunlight: "Full sun to partial shade",
    soil: "Dry to medium, well-drained soil",
    height: "3 to 6 feet",
    bloomSeason: "April to May",
    wildlifeBenefits: "Its berries are spread by birds, while dense thickets can crowd out native plants."
  },
  {
    name: "Black-Eyed Susan",
    native: true,
    scientificName: "Rudbeckia hirta",
    sunlight: "Full sun",
    soil: "Dry to medium, well-drained soil",
    height: "2 to 3 feet",
    bloomSeason: "June to September",
    wildlifeBenefits: "Offers nectar to bees and butterflies and seeds to finches and other birds."
  },
  {
    name: "New England Aster",
    native: true,
    scientificName: "Symphyotrichum novae-angliae",
    sunlight: "Full sun",
    soil: "Medium, moist soil",
    height: "3 to 6 feet",
    bloomSeason: "August to October",
    wildlifeBenefits: "Provides late-season nectar for bees and butterflies before winter."
  },
  {
    name: "Cardinal Flower",
    native: true,
    scientificName: "Lobelia cardinalis",
    sunlight: "Full sun to partial shade",
    soil: "Rich, moist to wet soil",
    height: "2 to 4 feet",
    bloomSeason: "July to September",
    wildlifeBenefits: "Produces nectar favored by ruby-throated hummingbirds and native bees."
  },
  {
    name: "Wild Bergamot",
    native: true,
    scientificName: "Monarda fistulosa",
    sunlight: "Full sun to partial shade",
    soil: "Medium, well-drained soil",
    height: "2 to 4 feet",
    bloomSeason: "June to September",
    wildlifeBenefits: "Provides abundant nectar for bees, butterflies, and hummingbirds."
  },
  {
    name: "Norway Maple",
    native: false,
    scientificName: "Acer platanoides",
    sunlight: "Full sun to partial shade",
    soil: "Moist, well-drained soil",
    height: "40 to 50 feet",
    bloomSeason: "April to May",
    wildlifeBenefits: "Its seeds are spread by wind, and it can shade out native understory plants."
  },
  {
    name: "Burning Bush",
    native: false,
    scientificName: "Euonymus alatus",
    sunlight: "Full sun to partial shade",
    soil: "Average, well-drained soil",
    height: "10 to 20 feet",
    bloomSeason: "May to June",
    wildlifeBenefits: "Birds spread its seeds, allowing it to form dense thickets in natural areas."
  },
  {
    name: "Switchgrass",
    native: true,
    scientificName: "Panicum virgatum",
    sunlight: "Full sun to partial shade",
    soil: "Medium to wet soil",
    height: "3 to 6 feet",
    bloomSeason: "July to September",
    wildlifeBenefits: "Offers seeds, shelter, and nesting material for birds and cover for small wildlife."
  },
  {
    name: "Eastern Red Columbine",
    native: true,
    scientificName: "Aquilegia canadensis",
    sunlight: "Partial shade to full sun",
    soil: "Moist, well-drained soil",
    height: "1 to 3 feet",
    bloomSeason: "April to June",
    wildlifeBenefits: "Nectar-rich flowers attract hummingbirds, butterflies, and native bees."
  },
  {
    name: "Wild Blue Phlox",
    native: true,
    scientificName: "Phlox divaricata",
    sunlight: "Partial shade",
    soil: "Moist, well-drained soil",
    height: "8 to 18 inches",
    bloomSeason: "April to June",
    wildlifeBenefits: "Provides nectar for butterflies, bees, and other early-season pollinators."
  },
  {
    name: "Golden Alexander",
    native: true,
    scientificName: "Zizia aurea",
    sunlight: "Full sun to partial shade",
    soil: "Medium to moist soil",
    height: "1 to 3 feet",
    bloomSeason: "May to June",
    wildlifeBenefits: "Supports native bees and is a host plant for black swallowtail caterpillars."
  },
  {
    name: "Joe-Pye Weed",
    native: true,
    scientificName: "Eutrochium purpureum",
    sunlight: "Full sun to partial shade",
    soil: "Moist to wet soil",
    height: "4 to 7 feet",
    bloomSeason: "July to September",
    wildlifeBenefits: "Its nectar-rich flowers attract butterflies, bees, and other pollinators."
  },
  {
    name: "Japanese Knotweed",
    native: false,
    scientificName: "Reynoutria japonica",
    sunlight: "Full sun to partial shade",
    soil: "Moist soil",
    height: "3 to 10 feet",
    bloomSeason: "July to September",
    wildlifeBenefits: "Its flowers attract pollinators, but it forms dense stands that displace native vegetation."
  }
];

const searchInput = document.getElementById("search");
const plantFilter = document.getElementById("genre-filter");
const nativityFilter = document.getElementById("year-filter");
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
      <p><strong>Nativity:</strong> ${plant.native ? "Native" : "Non-native"}</p>
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
  const selectedNativity = nativityFilter ? nativityFilter.value : "all";
  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm);
    const matchesPlant = selectedPlant === "All" || plant.name === selectedPlant;
    const matchesNativity = selectedNativity === "all"
      || (selectedNativity === "native" && plant.native)
      || (selectedNativity === "non-native" && !plant.native);
    return matchesSearch && matchesPlant && matchesNativity;
  });

  displayPlants(filteredPlants);
  if (plantCount) plantCount.textContent = `Showing: ${filteredPlants.length} plants`;
}

if (plantFilter) {
  plantFilter.addEventListener("change", filterPlants);
}

if (nativityFilter) nativityFilter.addEventListener("change", filterPlants);
if (searchInput) searchInput.addEventListener("input", filterPlants);
if (resetButton) {
  resetButton.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (plantFilter) plantFilter.value = "All";
    if (nativityFilter) nativityFilter.value = "all";
    filterPlants();
  });
}

displayPlants(plants);
filterPlants();