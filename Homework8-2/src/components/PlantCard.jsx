function PlantCard({ name, scientificName, sunlight, soilType, bloomSeason, height }) {
    return (
        <article className="plant-card">
            <h2>{name}</h2>
            <p><em>{scientificName}</em></p>
            <p>Sunlight: {sunlight}</p>
            <p>Soil type: {soilType}</p>
            <p>Bloom season: {bloomSeason}</p>
            <p>Height: {height} ft</p>
        </article>
    );
}

export default PlantCard;