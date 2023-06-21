import "./CharacterCard.css"

export type Character = {
        id: number,
        name: string,
        image: string,
        status: string,
        origin: {
            name: string
        }
};

type Props = {
    character: Character
}

export default function CharacterCard({character}: Props){
    let statusClass;
    if (character.status === "Dead") {
        statusClass = "dead";
    } else if (character.status === "Alive") {
        statusClass = "alive";
    } else {
        statusClass = "unknown";
    }

    return (
    <section>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name + "image"}/>
        <span>{character.origin.name}</span>
        <p className={statusClass}>{character.status}</p>
    </section>
    )

}