import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function TemplateDefault({ children }) {
  return <div id="PAGE">
    <Header />
    <main id="Site_Main">
      <div className="site-container">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
}