import { useState, useEffect } from 'react';
import axios from '../utils/axios';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        // const source = axios.CancelToken.source();

        const fetchData = async () => {
            // setIsLoading(true);
            try {
                const response = await axios.get('/users');
                // if (isMounted) {
                    setUsers(response.data.users);
                    setFetchError(null);
                // }
            } catch (err) {
                // if (isMounted) {
                    setFetchError(err.message);
                    setUsers([]);
                // }
            } finally {
                 setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    return { users, fetchError, isLoading };
}

export default useUsers;