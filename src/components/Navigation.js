import "../styles/navigation.scss"
import logo from "../images/instagramLogo.png"
import searchIcon from "../images/searchIcon.png"
import Menu from "./Menu.js"

function Navigation(){
    return(
    <div className="navigation">
        <div className="conatiner"></div>
        <img classname="logo" src={logo} alt="instagram logo" />
        <div className="search">
            <img classname="searchIcon" src={searchIcon} alt="search icon" />
            <span className="searchText">Search</span>
        </div>
        <Menu/>

    </div>
    )
}

export default Navigation;