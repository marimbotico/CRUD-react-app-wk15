const Company = ({ company, updateCompany, deleteCompany }) => {
    return (
        <div className="form-group">
            <h2>{company.name}</h2>
            <ul>
                <li>
                    <label>{`${company.name} - ${company.industry}`}</label>
                    <br />
                    <label>{`Website: ${company.domain}`}</label>
                    <br />
                    <input placeholder='Enter New Name'></input>
                    <button onClick={() => updateCompany(company._id)}>Update</button>
                    <button onClick={() => deleteCompany(company._id)}>Delete</button> 
                </li>
            </ul>
        </div>
    );
};

export default Company;
