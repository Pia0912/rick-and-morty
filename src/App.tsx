import { characters } from "./data.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import Header from "./Header.tsx";
import "./App.css";


console.log(characters);

export default function App() {
    
    return (
        <>

            <Header />
            <CharacterGallery characters={characters} />
        </>
    );
}
