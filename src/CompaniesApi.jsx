const API_URL = 'https://dummy-json.mock.beeceptor.com/companies';// datab

export const companyApi = {
    get: async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch companies');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching companies:', error);
            return [];
        }
    },
    post: async (company) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(company),
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
            const response = await fetch(`${API_URL}/${company._id}`, {
                method: 'PUT',
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
    delete: async (id) => {
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
