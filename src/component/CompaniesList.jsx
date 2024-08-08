import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { companyApi } from "../CompaniesApi";
import NewCompanyForm from "./NewCompanyForm";
import Table from './Table';

const CompaniesList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getCompanies();
    }, []);

    const getCompanies = async () => {
        const companies = await companyApi.get();
        setCompanies(companies);
    };

    const updateCompany = async (updatedCompany) => {
        await companyApi.put(updatedCompany);
        getCompanies();
    };

    const addNewCompany = async (company) => {
        try {
            await companyApi.post(company);
            getCompanies();
        } catch (error) {
            console.error('Failed to add company:', error);
        }
    };

    const deleteCompany = async (id) => {
        try {
            await companyApi.delete(id);
            getCompanies();
        } catch (error) {
            console.error('Failed to delete company:', error);
        }
    };
    return (
        <div className="companies-list">
            <NewCompanyForm addNewCompany={addNewCompany} />
            <Table 
                companies={companies} 
                updateCompany={updateCompany} 
                deleteCompany={deleteCompany} 
            />
        </div>
    );
};

export default CompaniesList;
