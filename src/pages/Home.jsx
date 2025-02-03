import { useAuth } from '../auth/AuthProvider';
import { Link } from 'react-router';
import { Login, Logout } from '../auth/LoginOut';
import "./home.css";

export default function Home() {
    const { user } = useAuth();
    return (
        <>
                {user ? (
                <>
                <p></p>
                Bienvenue {user.username}
                <p></p>
                <Link to="/Heros">
                    <button>Accéder à la galerie des Héros</button>
                </Link>
                <p></p>
                <Logout/>
                </>
            ):(
                <Login/>
            )}
            <p>Bienvenue sur la galerie des Héros, le lieux ou vous pourrez retrouvez toute un tas d&apos;informations sur vos héros préférez,
                pour ce faire il vous suffit de vous connecter et d&apos;accéder à la page Heros.
            </p>
        </>
    )
}