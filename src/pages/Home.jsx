import { useAuth } from '../auth/AuthProvider';
import { Link } from 'react-router';
import { Login, Logout } from '../auth/LoginOut';

export default function Home() {
    const { user } = useAuth();
    return (
        <>
                <Link to="/Heros">Heros</Link>
                {user ? (
                <>
                <p></p>
                Bienvenue {user.username}
                <p></p>
                <Logout/>
                </>
            ):(
                <Login/>
            )}
        </>
    )
}