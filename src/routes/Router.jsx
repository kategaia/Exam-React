import {Routes, Route} from "react-router";
import Home from "../pages/HOme";
import FetchHeros from "../components/FetchHeors/fetchHeros";
import { AuthProvider } from "../auth/AuthProvider";
import PrivateRoute from "../auth/PrivateRoute";
import NotFound from "../components/404/404";
import Contact from "../components/Contact/contact";

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
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
    )
}