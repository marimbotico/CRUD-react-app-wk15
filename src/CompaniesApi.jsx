const API_URL = 'https://66b412549f9169621ea1b740.mockapi.io/users/companies';// database url

export const companyApi = {
    get: async () => {// async method that fetches all the companies
        try {
            const response = await fetch(API_URL);// sends get request to API and awaits response
            if (!response.ok) {
                throw new Error('Failed to fetch companies');// if the response is not ok display error message
            }
            return await response.json();
        } catch (e) {//catch any errors
            console.log('Error fetching companies:', e);
        }
    },
    post: async (company) => {
        console.log("post in CompaniesApi.jsx - Running" , company)
        try {
            const response = await fetch(API_URL, {
                method: 'POST',// specifies the request to create new data
                headers: {
                    'Content-Type': 'application/json',// json data
                },
                body: JSON.stringify(company),// converts object to string
            });
            if (!response.ok) {
                throw new Error('Failed to add company');
            }
            return await response.json();
        } catch (e) {
            console.log('Error adding company:', e);
        }
    },
    put: async (company) => {
        try {
            console.log("put in CompaniesApi.jsx- Running", company)
            const response = await fetch(`${API_URL}/${company.id}`, {//specifies which company to update
                method: 'PUT',// use PUT to update
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(company),
            });
            if (!response.ok) {
                throw new Error('Failed to update company');
            }
            return await response.json();
        } catch (e) {
            console.log('Error updating company:', e);
        }
    },
    delete: async (id) => {// deletes a company by id. Having trouble here (id) or (company._id)?
        try {
            console.log("delete in CompaniesApi.jsx - Running ", id);
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete company');
            }
            return await response.json();
        } catch (e) {
            console.log('Error deleting company:', e);
        }
    }
};
