import { useState, useEffect } from 'react';
import axios from '../utils/axios';

const useUser = (userId) => {
    const [user, setUser] = useState({});
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        // const source = axios.CancelToken.source();

        const fetchData = async () => {
            // setIsLoading(true);
            try {
                const response = await axios.get(`/users/${userId}/posts`);
                // if (isMounted) {
                    setUser(response.data);
                    setFetchError(null);
                // }
            } catch (err) {
                // if (isMounted) {
                    setFetchError(err.message);
                    setUser({});
                // }
            } finally {
                 setIsLoading(false);
            }
        }

        fetchData();


    }, [userId]);

    console.log(fetchError,"child render")

    return { user, fetchError, isLoading };
}

export default useUser;