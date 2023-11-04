import { Outlet } from "react-router-dom";
// import Footer from "../components/shared/Footer";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}

export default MainLayout;