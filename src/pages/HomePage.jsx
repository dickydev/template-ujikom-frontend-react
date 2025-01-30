import { useState, useEffect } from "react";
import api from "../utils/axios";
import Navbar from '../components/Navbar'

const Home = () => {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token')

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await api.get('/api/users',{
                    headers: {Authorization: `Bearer ${token}`}
                });
                setUser(response.data)
            } catch (error) {
                console.error('Error While Fetching Data', error)   
            }
        }
        if(token) fetchData();
    }, [token]);

    return(
        <div>
            <Navbar/>
            <h1>Home Page</h1>
            {user ? (
                <ul>
                    <li>{user.username}</li>
                </ul>
            ): (
                <p>PLease Login if you are not log in yet</p>
            )}
        </div>
    )
}

export default Home;