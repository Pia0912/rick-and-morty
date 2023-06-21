import CharacterCard, {Character} from "./CharacterCard.tsx";
import "./CharacterGallery.css";

type Props = {
        characters: Character[],
}


export default function CharacterGallery({characters}: Props){

    return (
        <main>
            {characters.map((character: Character) => <CharacterCard key={character.id} character={character}/>)}
        </main>
    )

}