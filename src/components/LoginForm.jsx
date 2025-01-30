import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:5500/api/login');
            localStorage.setItem('token', response.data.token);
            navigate('/')
        } catch (error) {
            setError(error.response?.data?.message || 'Login Failed');
        }
    }

    return(
        <React.Fragment>
            <h2>Login</h2>

            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Isi Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Isi Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>

                <button type="submit">Login Dong Mass</button>
            </form>
        </React.Fragment>
    )
}

export default LoginForm;