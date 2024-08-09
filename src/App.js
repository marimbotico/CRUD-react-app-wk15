import 'bootstrap/dist/css/bootstrap.min.css';
import CompaniesList from '../src/component/CompaniesList';
import './App.css';

const App = () => {
    return (
        <div className='container'>
            <h1>Company Management</h1>
            <CompaniesList />
        </div>
    );
}

export default App;
