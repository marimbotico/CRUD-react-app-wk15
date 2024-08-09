import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { companyApi } from "../CompaniesApi";
import NewCompanyForm from "./NewCompanyForm";
import Table from './Table';

const CompaniesList = () => {
    const [companies, setCompanies] = useState([]);// empty array to store list of companies
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCompanies();
    }, []);// only renders once

    const getCompanies = async () => {// fetches the companies from the API.
        try {
            const companies = await companyApi.get();// uses the get method from companyApi. Stores result in `companies`
            setCompanies(companies);// set companies to the data
            setLoading(false);// updates the companies state with the fetched data} 
        } catch (error) {
            console.log(error)
        }
    };

    const updateCompany = async (updatedCompany) => {
        try {
            console.log("update in CompaniesList.jsx -Running", updatedCompany);
            await companyApi.put(updatedCompany);//Calls the put method from companyApi to update
            getCompanies();// refreshes the companies list
        } catch (error) {
            console.log(error)
        }
    };

    const addNewCompany = async (company) => {
        console.log("addNewCompany in CompaniesList.jsx - Running", company)
        try {
            await companyApi.post(company);//Calls the post method from companyApi. Adds a new company and refreshes the array
            getCompanies();// refreshes the companies list
        } catch (error) {
            console.error('Failed to add company:', error);
        }
    };

    const deleteCompany = async (id) => {
        console.log("delete in CompaniesList.jsx - Running ", id);
        try {
            await companyApi.delete(id);//Calls the delete method from companyApi. Deletes company by id and refreshes it
            getCompanies();
        } catch (error) {
            console.error('Failed to delete company:', error);
        }
    };

    return (
        <div className="companies-list">
            <NewCompanyForm addNewCompany={addNewCompany} />
            {loading ? (
                <p>Loading companies...</p>
            ) : (
            <Table
                companies={companies}
                updateCompany={updateCompany}
                deleteCompany={deleteCompany}
            />
            )}
        </div>
    );
};

//Pass the addNewCompany function as a prop to the NewCompanyForm component
//Do the same with the Table component and pass in companies(3 properties) and 2 functions: updateCompany and deleteCompany

export default CompaniesList;
