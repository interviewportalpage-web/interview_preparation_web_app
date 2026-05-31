import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/interview-logo.png";

export default function Dashboard() {
    return (
        <>
            <Header />

            <div className="dashboard">
                <img
                    src={logo}
                    alt="Interview Preparation Logo"
                    className="dashboard-logo"
                />
            </div>

            <Footer />
        </>
    );
}