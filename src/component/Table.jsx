import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ companies, updateCompany, deleteCompany }) => {// destructuring the companies array deleteCompany as a prop
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
                                <input placeholder='Enter New Name'></input>
                                <button className="btn btn-primary" onClick={() => updateCompany(company._id)}>Update</button>
                            </td>
                            <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteCompany(company._id)}>
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
