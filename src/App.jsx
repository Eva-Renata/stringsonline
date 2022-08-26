import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { NavLeft } from "./Components/NavbarLeft/NavbarLeft";
import { BasicBreadcrumbs } from "./Components/Breadcrumbs/Breadcrumbs";
import { Forside } from "./Pages/Forside/Forside";
import { Betingelser } from "./Pages/Salgs- og handelbetingelser/Salgs-og-handelbetingelser";
import { Login } from "./Pages/Login/Login";
import { LogOut } from "./Pages/Login/Logout";
import { useLoginStore } from "./Pages/Login/useLoginStore";
import NotFound from "./Pages/NotFound/NotFound";
import { Elguitarer } from "./Pages/Guitarer/Elguitarer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Westernguitarer } from "./Pages/Guitarer/Westernguitarer/Westernguitarer";
import { Brands } from "./Pages/Brands/Brands";

function App() {
  const { loggedIn } = useLoginStore((store) => ({
    loggedIn: store.loggedIn,
  }));

  //making a list of all products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // fetch everything
        const result = await axios.get(
          "https://api.mediehuset.net/stringsonline/"
        );
        //make product list
        const productList = [];
        //loop product groups
        result.data.productgroups.items.forEach((group) => {
          // loop subgroups
          group.subgroups.forEach((subgroup) => {
            // loop products
            subgroup.products &&
              subgroup.products.forEach((product) => {
                //add every product to the list
                productList.push(product);
              });
          });
        });
        // sort them by rating
        //checking always the two of them, and which one has higher stars, it isputting it first
        productList.sort((a, b) => (b.rating > a.rating ? 1 : -1));
        setProducts(productList);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.Appwrapper}>
      <Router>
        {/* sending it to the header because of the search */}
        <Header products={products} setFilteredProducts={setFilteredProducts} />
        <BasicBreadcrumbs />
        <Routes>
          <Route
            path="/"
            index
            element={
              // passing the values in the forside page, so we can use them there when making the favorites
              <Forside
                products={products}
                filteredProducts={filteredProducts}
              />
            }
          />
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/betingelser" index element={<Betingelser />} />
          <Route
            path="/login"
            index
            // login page showing different ui if you are logged in or not
            element={!loggedIn ? <Login /> : <LogOut />}
          />
          <Route path="/elguitarer" index element={<Elguitarer />} />
          <Route path="/westernguitarer" index element={<Westernguitarer />} />
          <Route path="/brands" index element={<Brands />} />
        </Routes>
        <NavLeft />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
