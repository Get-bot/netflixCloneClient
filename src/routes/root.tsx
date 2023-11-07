import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./root.css";

export default function Root() {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )
}