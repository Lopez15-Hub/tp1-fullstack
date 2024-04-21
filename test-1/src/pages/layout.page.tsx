import Header from "../components/header.component";
import Aside from "../components/aside.component";
import Body from "../components/body.component";
import Footer from "../components/footer.component";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Aside />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
