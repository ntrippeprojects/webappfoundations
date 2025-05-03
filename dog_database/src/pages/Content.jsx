import NavigationMenu from '../components/NavigationMenu';
// css and fonts
import "../App.css";
import "../static/fonts/DMSans.ttf";

export default function Content() {
    return <>
        <div className="MainFont">
        <NavigationMenu />
        <h1 className="Title">Dog Content!</h1>
        <h2 className="FirstSection">Because who doesn't love a video of a cute dog?</h2>
        </div>
        </>
}

export {Content}