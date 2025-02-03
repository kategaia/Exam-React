import {Routes, Route} from "react-router";
import Home from "../pages/HOme";
import FetchHeros from "../components/FetchHeors/fetchHeros";
import { AuthProvider } from "../auth/AuthProvider";
import PrivateRoute from "../auth/PrivateRoute";

export default function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route  path="/Heros" element={
                    <PrivateRoute>
                    <FetchHeros />
                    </PrivateRoute>
                } />
            </Routes>
        </AuthProvider>
    )
}