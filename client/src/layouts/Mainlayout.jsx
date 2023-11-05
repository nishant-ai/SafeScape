import { Outlet } from "react-router-dom";
// import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}

export default MainLayout;