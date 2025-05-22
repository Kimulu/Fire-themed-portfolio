// import MainNavigation from "./Navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ ...props }) {
  return (
    <div>
      {/* <MainNavigation /> */}
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
