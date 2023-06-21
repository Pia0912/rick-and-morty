import "./Header.css"
const logo = "https://e1.pxfuel.com/desktop-wallpaper/80/926/desktop-wallpaper-rick-and-morty-logo-png-for-computer-supreme-rick-and-morty.jpg";

export default function Header(){

    return(
        <div className="container">
            <img src={logo} alt="Logo" />
        <h1>Rick & Morty</h1>
        </div>
    )
}