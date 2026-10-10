import PlantCard from './PlantCard';

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
        name: "Venus flytrap",
        sunlight: "Full Sun",
        bloomSeason: "Spring",
        height: 2
    },
    {
        name: "Living Stone",
        sunlight: "Full Sun",
        bloomSeason: "Summer",
        height: 1
    }
];

function PlantList() {
    return (
        <section>
            <h2>Plants</h2>
            <div className="plant-list">
                {plants.map((plant) => (
                    <PlantCard 
                    key={plant.name}
                    name={plant.name}
                    sunlight={plant.sunlight}
                    bloomSeason={plant.bloomSeason}
                    height={plant.height}
                    />
                ))}
            </div>
        </section>
    );
}

export default PlantList;