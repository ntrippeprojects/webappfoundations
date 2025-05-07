import NavigationMenu from '../components/NavigationMenu';
import FetchData from '../components/FetchData';

// css and fonts
import "../App.css";
import "../static/fonts/DMSans.ttf";

export default function Search() {
    return <>
        <div className="MainFont">
        <NavigationMenu />
        <h1 className="Title">Look Up AKC-Registered Breeds</h1>
        <h2 className="FirstSection">Check out data on over 250 breeds!</h2>
        <FetchData />
        </div>
        </>
}

export {Search}