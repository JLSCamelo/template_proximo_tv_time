import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AvisoRegistro from "./AvisoRegistro";

export default function Layout() {
  return (
    <>
      <Header />
      <AvisoRegistro />
      <main className="container conteudo">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
