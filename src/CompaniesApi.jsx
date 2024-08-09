const API_URL = 'https://dummy-json.mock.beeceptor.com/companies';// datab

export const companyApi = {
    get: async () => {// async method that fetches all the companies
        try {
            const response = await fetch(API_URL);// sends get request to API and awaits response
            if (!response.ok) {
                throw new Error('Failed to fetch companies');// if the response is not ok display error message
            }
            return await response.json();
        } catch (error) {//catch any errors
            console.error('Error fetching companies:', error);
            return [];
        }
    },
    post: async (company) => {
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
        } catch (error) {
            console.error('Error adding company:', error);
            return null;
        }
    },
    put: async (company) => {
        try {
            const response = await fetch(`${API_URL}/${company._id}`, {//specifies which company to update
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
        } catch (error) {
            console.error('Error updating company:', error);
            return null;
        }
    },
    delete: async (id) => {// deletes a company by id. Having trouble here (id) or (company._id)?
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete company');
            }
            return await response.json();
        } catch (error) {
            console.error('Error deleting company:', error);
            return null;
        }
    }
};
