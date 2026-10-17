import { useState } from 'react'
import './index.css'
import Navigation from './components/Navigation'
import Footer from './components/footer'
import PlantFilters from './components/PlantFilters'
import PlantList from './components/PlantList'
import plants from './data/plants'

const initialFilters = {
  commonName: '',
  scientificName: '',
  sunlight: 'All',
  soilType: 'All',
  bloomSeason: 'All',
}

function App() {
  const [filters, setFilters] = useState(initialFilters)

  function handleFilterChange(event) {
    const { name, value } = event.target
    setFilters((currentFilters) => ({ ...currentFilters, [name]: value }))
  }

  function resetFilters() {
    setFilters(initialFilters)
  }

  const filteredPlants = plants.filter((plant) => {
    const matchesCommonName = plant.name
      .toLowerCase()
      .includes(filters.commonName.trim().toLowerCase())
    const matchesScientificName = plant.scientificName
      .toLowerCase()
      .includes(filters.scientificName.trim().toLowerCase())
    const matchesSunlight =
      filters.sunlight === 'All' || plant.sunlight === filters.sunlight
    const matchesSoilType =
      filters.soilType === 'All' || plant.soilType === filters.soilType
    const matchesBloomSeason =
      filters.bloomSeason === 'All' || plant.bloomSeason === filters.bloomSeason

    return (
      matchesCommonName &&
      matchesScientificName &&
      matchesSunlight &&
      matchesSoilType &&
      matchesBloomSeason
    )
  })

  return (
    <>
      <Navigation />
      <main>
        <h1>Plant Directory</h1>
        <PlantFilters
          filters={filters}
          onChange={handleFilterChange}
          onReset={resetFilters}
        />
        <p className="results-count" aria-live="polite">
          Plants found: {filteredPlants.length}
        </p>
        <PlantList plants={filteredPlants} />
      </main>
      <Footer />
    </>
  )
}

export default App