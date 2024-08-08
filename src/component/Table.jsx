import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ companies, deleteCompany }) => {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>Company</th>
                    <th>Industry</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company) => (
                    <tr key={company._id}>
                        <td>{company.name}</td>
                        <td>{company.industry}</td>
                        <td><a href={company.domain} target="_blank" rel="noopener noreferrer">{company.domain}</a></td>
                        <td>
                            <button 
                                className="btn btn-danger" 
                                onClick={() => deleteCompany(company._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
