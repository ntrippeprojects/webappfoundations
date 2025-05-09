import NavigationMenu from '../components/NavigationMenu';
import DUBreedForm from '../components/DUBreedForm';
import UpdateForm from '../components/UpdateForm';

// css and fonts
import "../App.css";
import "../static/fonts/DMSans.ttf";

export default function DUbreed() {
    return <>
        <div className="MainFont">
        <NavigationMenu />
        <h1 className="Title">Delete or Update a Dog Breed</h1>
        <h2 className="FirstSection">Feel free to delete or update any breed data!</h2>
        <DUBreedForm />
        <UpdateForm />
        </div>
        </>
}

export {DUbreed}