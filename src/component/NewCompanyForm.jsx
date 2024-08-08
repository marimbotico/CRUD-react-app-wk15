import { useState } from "react";

const NewCompanyForm = ({ addNewCompany }) => {
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [domain, setDomain] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && industry && domain) {
            addNewCompany({ name, industry, domain });
            setName('');
            setIndustry('');
            setDomain('');
        } else {
            console.log('Please fill out all the required fields');
        }
    };

    return (
        <div>
            <h4>Add New Company</h4>
            <form className="form-group" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Company Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="form-control"
                />
                <input
                    type="text"
                    placeholder="Industry"
                    onChange={(e) => setIndustry(e.target.value)}
                    value={industry}
                    className="form-control"
                />
                <input
                    type="text"
                    placeholder="Company's Website"
                    onChange={(e) => setDomain(e.target.value)}
                    value={domain}
                    className="form-control"
                />
                <br />
                <button type="submit" className="btn btn-primary">Add Company</button>
            </form>
        </div>
    );
}

export default NewCompanyForm;
