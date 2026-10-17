import PlantCard from './PlantCard';

function PlantList({ plants }) {
    return (
        <section>
            <h2>Plants</h2>
            {plants.length === 0 ? (
                <p>No plants match these filters. Try changing or resetting them.</p>
            ) : (
                <div className="plant-list">
                    {plants.map((plant) => (
                        <PlantCard
                            key={plant.name}
                            name={plant.name}
                            scientificName={plant.scientificName}
                            sunlight={plant.sunlight}
                            soilType={plant.soilType}
                            bloomSeason={plant.bloomSeason}
                            height={plant.height}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default PlantList;