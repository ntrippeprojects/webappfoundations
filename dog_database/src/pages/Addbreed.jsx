import NavigationMenu from '../components/NavigationMenu';
import AddBreedForm from '../components/AddBreedForm';

// css and fonts
import "../App.css";
import "../static/fonts/DMSans.ttf";

export default function Addbreed() {
    return <>
        <div className="MainFont">
        <NavigationMenu />
        <h1 className="Title">Add a Dog Breed</h1>
        <h2 className="FirstSection">Feel free to add any breed not listed!</h2>
        <AddBreedForm />
        </div>
        </>
}

export {Addbreed}