import styles from "./App.module.scss";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className={styles.Appwrapper}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
