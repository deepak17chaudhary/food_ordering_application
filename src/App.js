// import Body from "./components/BodyComponent";
import Footer from "./components/Footer";
import Header from "./components/HeaderComponent";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App-container">
      <header className="App-header">
        <Header />
        <Outlet />
        <Footer />
      </header>
    </div>
  );
};

export default App;
