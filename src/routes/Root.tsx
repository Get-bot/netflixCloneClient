import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Root.css";

export default function Root() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}