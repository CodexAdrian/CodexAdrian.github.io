import regis from "../Wordmark.png";

const RegisHeader = () => {
    return(
        <a href="https://regis.org">
            <header className="mobileHeader">
                <img src={regis} alt="regis logo" className="mobileRegisLogo"/>
            </header>
        </a>
    )
}

export default RegisHeader;