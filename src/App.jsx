import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { NavLeft } from "./Components/NavbarLeft/NavbarLeft";
import { Main } from "./Components/Main/Main";
import { Menupath } from "./Components/Menupath/Menupath";
//import { Forside } from "./Pages/Forside/Forside";
//import { Guitarer } from "./Pages/Guitarer/Guitarer";

function App() {
  return (
    <div className={styles.Appwrapper}>
      <Router>
        <Header />
        <Menupath />
        {/* <Routes>
          <Route path="/" index element={<Forside />} />
          <Route path="/guitarer" index element={<Guitarer />} />
        </Routes> */}
        <NavLeft />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
