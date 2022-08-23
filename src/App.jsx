import styles from "./App.module.scss";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className={styles.Appwrapper}>
      <Header />
    </div>
  );
}

export default App;
