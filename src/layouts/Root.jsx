import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <>
      {/* Header Layout */}
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      {/* Main Section Layout */}

      <main className="min-h-[calc(100vh-249px)] w-11/12 mx-auto">
        <>
          <Outlet></Outlet>
        </>
      </main>

      {/* Footer Layout */}
      {/* Its in the component folder */}
      <>
        <Footer></Footer>
      </>
    </>
  );
};

export default Root;
