import { Link, useNavigate } from "react-router-dom";
import api from "../utils/axios";

const Navbar = () =>{
    const navigate = useNavigate();

    const handleLogout = async() => {
        try {
            await api.post('/logout');
            navigate('/login')
        } catch (error) {
            console.error('Logout Failed' ,error)
        }
    }
    
    return(
        <nav>
            <Link to="/">Home</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default Navbar