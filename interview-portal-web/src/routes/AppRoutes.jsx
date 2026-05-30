import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import TechnologyPage from "../pages/TechnologyPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/technology/:tech" element={<TechnologyPage />} />
            </Routes>
        </BrowserRouter>
    );
}