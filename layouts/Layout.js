import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <section id="page_content">{children}</section>
      <Footer />
    </>
  );
}

export default Layout;
