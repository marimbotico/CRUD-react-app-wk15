import { useState } from "react";


const NewCompanyForm = ({ addNewCompany }) => {//addNewCompany prop
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [domain, setDomain] = useState('');
    // useState to set up the name of the company, industry and domain.
    const onSubmit = (e) => {
        e.preventDefault();// prevent default form submission
        let newCompany = {// define the new company object
            name: name,
            industry: industry,
            domain: domain
        }
        if (name && industry && domain) {// checks that are fields are filled
            addNewCompany(newCompany);//calls the addNewCompany function with and updates the data
            setName('');
            setIndustry('');
            setDomain('');// resets all form fields after submission
        } else {
            console.log('Please fill out all the required fields');
        }
    };

    return (
        <>
            <h4 className="text-center">Add New Company</h4>
            <form>
                <div className="form-group">
                    <label>Company Name</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="form-control"
                    />
                    <label>Industry</label>
                    <input
                        type="text"
                        onChange={(e) => setIndustry(e.target.value)}
                        value={industry}
                        className="form-control"
                    />
                    <label>Company's Website</label>
                    <input
                        type="text"
                        onChange={(e) => setDomain(e.target.value)}
                        value={domain}
                        className="form-control"
                    />
                    <br />
                    <button className="btn btn-success" onClick={(e) => onSubmit(e)}>Add Company</button>
                </div>
            </form>
        </>
    );// onClick={(e) => onSubmit(e)} submits the event
}

export default NewCompanyForm;
