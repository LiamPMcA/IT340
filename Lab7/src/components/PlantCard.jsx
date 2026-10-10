function PlantCard(props) {
    return (
        <article className="plant-card">
            <h2>{props.name}</h2>
            <p>Sunlight: {props.sunlight}</p>
            <p>Bloom Season: {props.bloomSeason}</p>
            <p>Height: {props.height} ft</p>
        </article>
    );
}

export default PlantCard;