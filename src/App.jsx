import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { NavLeft } from "./Components/NavbarLeft/NavbarLeft";
import { Menupath } from "./Components/Menupath/Menupath";
import { Forside } from "./Pages/Forside/Forside";
import { Betingelser } from "./Pages/Salgs- og handelbetingelser/Salgs-og-handelbetingelser";
import { Login } from "./Pages/Login/Login";
import { LogOut } from "./Pages/Login/Logout";
import { useLoginStore } from "./Pages/Login/useLoginStore";
import NotFound from "./Pages/NotFound/NotFound";

// navlinks array
const navItems = [
  { name: "Guitarer", path: "/guitarer" },
  { name: "Basser", path: "/basser" },
  { name: "Handmade", path: "/handmade" },
  { name: "Keyboards", path: "/keyboards" },
  { name: "Trommer", path: "/trommer" },
  { name: "Percussion", path: "/percussion" },
  { name: "Stryg & Blæs", path: "/strygblæs" },
  { name: "Brands", path: "/brands" },
];

function App() {
  const { loggedIn } = useLoginStore((store) => ({
    loggedIn: store.loggedIn,
  }));

  return (
    <div className={styles.Appwrapper}>
      <Router>
        <Header />
        <Menupath />
        <Routes>
          <Route path="/" index element={<Forside />} />
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/betingelser" index element={<Betingelser />} />
          <Route
            path="/login"
            index
            element={!loggedIn ? <Login /> : <LogOut />}
          />
        </Routes>
        <NavLeft navItems={navItems} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
