import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const Table = ({ companies, updateCompany, deleteCompany }) => {// destructuring the companies array deleteCompany as a prop
    const [newName, setNewName] = useState('');// useState to set up the name of the company, industry and domain.

    function submitUpdate(company,e) {
        e.preventDefault();
        console.log('onSubmit', newName);
        let newCompany = {
            name: newName,
            industry: company.industry,
            domain: company.domain,
            id: company.id
        }
        updateCompany(newCompany);
    }



    return (// bootstrap table settings
        <table className="table table-info">
            <thead className="thead-dark">
                <tr>
                    <th>Company</th>
                    <th>Industry</th>
                    <th>Website</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company, index) => (// iterates over the companies array to render a row for each company
                    <tr key={index}>
                        <td>{company.name}</td>
                        <td>{company.industry}</td>
                        <td><a href={company.domain} target="_blank" rel="noopener noreferrer">{company.domain}</a></td>

                            <td>
                                <input placeholder={company.name} onChange={(e) => setNewName(e.target.value)}></input>
                                <button className="btn btn-primary" onClick={(e) => submitUpdate(company, e)}>Update</button>
                            </td>
                            <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteCompany(company.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );// each row is assigned a company unique key using the companies id.
}// Had to google this: <a href={company.domain} target="_blank" rel="noopener noreferrer">: Makes the company’s website a clickable link that opens in a new tab.

export default Table;
