
function Footer() {
    const date = new Date().getFullYear();
    return (
    <footer className="w3-container w3-center w3-margin-top">
        <p className="w3-text-white">Safar abbas © copyright @ {date} | all rights reserverd</p>
    </footer>
    )
}

export default Footer;
