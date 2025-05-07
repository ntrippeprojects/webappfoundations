import NavigationMenu from '../components/NavigationMenu';
import DataTable from '../components/DataTable';

// css and fonts
import "../App.css";
import "../static/fonts/DMSans.ttf";

export default function Search() {
    return <>
        <div className="MainFont">
        <NavigationMenu />
        <h1 className="Title">AKC-Registered Breeds</h1>
        <DataTable />
        </div>
        </>
}

export {Search}