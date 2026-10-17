const filterOptions = {
  sunlight: ['Full Sun', 'Partial Shade', 'Shade'],
  soilType: ['Well-drained', 'Sandy', 'Moist', 'Loamy', 'Acidic'],
  bloomSeason: ['Spring', 'Summer', 'Fall'],
}

function PlantFilters({ filters, onChange, onReset }) {
  return (
    <form className="plant-filters" onSubmit={(event) => event.preventDefault()}>
      <label>
        Common name
        <input
          type="search"
          name="commonName"
          value={filters.commonName}
          onChange={onChange}
          placeholder="e.g. Rose"
        />
      </label>

      <label>
        Scientific name
        <input
          type="search"
          name="scientificName"
          value={filters.scientificName}
          onChange={onChange}
          placeholder="e.g. Rosa"
        />
      </label>

      {Object.entries(filterOptions).map(([filterName, options]) => (
        <label key={filterName}>
          {filterName === 'soilType'
            ? 'Soil type'
            : filterName === 'bloomSeason'
              ? 'Bloom season'
              : 'Sunlight'}
          <select
            name={filterName}
            value={filters[filterName]}
            onChange={onChange}
          >
            <option value="All">All</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ))}

      <button type="button" onClick={onReset}>
        Reset filters
      </button>
    </form>
  )
}

export default PlantFilters
