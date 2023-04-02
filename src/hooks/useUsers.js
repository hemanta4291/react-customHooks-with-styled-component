import { useState, useEffect } from 'react';
import axios from '../utils/axios';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get('/users');
                    setUsers(response.data.users);
                    setFetchError(null);
                    setIsLoading(false)
            } catch (err) {
                    setFetchError(err.message);
                    setUsers([]);
                    setIsLoading(false)
            } 
        }

        fetchData();
    }, []);

    return { users, fetchError, isLoading };
}

export default useUsers;