import { Link } from 'react-router';
import { useAuth } from '../auth/AuthProvider';
import { Login, Logout } from '../auth/LoginOut';

export default function Home() {
    const { user } = useAuth();
    return (
        <>
            <h1>Home</h1>
            {user ? <Logout /> : <Login />}
            <Link to="/profile">Profile</Link>
        </>
    )

}