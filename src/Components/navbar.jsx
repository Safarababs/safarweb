import safar from "./images/safar.jpg";

function Navbar() {

   

    return (

<header>
<div className="user">
        <img src={safar} alt="" />
        <h3 className="name">Safar Abbas</h3>
        <p className="post">full stack web developer</p>
    </div>
    <nav className="navbar">
        <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#education">education</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>
    <div id="menu" className="fa fas fa-bars"></div>
</header>


    )
}

export default Navbar;




