import RenderHead from "./RenderHead";
import Navbar from "./Navbar";

const Layout = props => (
  <div style={{maxWidth: "900px", margin: "0 auto"}}>
    <RenderHead />
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
