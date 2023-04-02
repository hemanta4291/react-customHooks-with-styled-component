import { useState, useEffect } from 'react';
import axios from '../utils/axios';

const useUser = (userId) => {
    const [user, setUser] = useState({});
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`/users/${userId}/posts`);
                    setUser(response.data);
                    setFetchError(null);
                    setIsLoading(false)
            } catch (err) {
                    setFetchError(err.message);
                    setIsLoading(false)
                    setUser({});
            } 
        }

        fetchData();


    }, [userId]);

    return { user, fetchError, isLoading };
}

export default useUser;