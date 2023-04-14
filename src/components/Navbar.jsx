import { Link } from "react-router-dom";

function Navbar() {
    return (<div class="topbar">
        <span class="menu hide-on-desktop"><img src="/figma-images/menu.png" alt="" /></span>
        <Link to="/" ><span class="logo"><img src="/figma-images/gol-logo 1.png" alt="" /></span></Link>
        <Link to="/booking" class="hide-on-mobile">Booking</Link>
        <span class="top-profile">
            <img src="/figma-images/top profile pic.png" alt="" />
        </span>
    </div>);
}

export default Navbar;