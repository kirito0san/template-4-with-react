import "./index.css"
import avt from "./imgs/avatar.png"

const Header = () => {
    return (
        <header className="p-3 ">
            <label className="header-search p-[10px]" htmlFor="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="type a keyword" id="search" type="search" />
            </label>
            <div className="bell">
                <i className="fa-regular fa-bell"></i>
                <img src={avt} alt="" />
            </div>
        </header>
    );
}

export default Header;
