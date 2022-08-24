import { useLoginStore } from "./useLoginStore";
import styles from "./Logout.module.scss";

export const LogOut = () => {
  const { setLogOut } = useLoginStore((store) => ({
    setLogOut: store.setLogOut,
  }));

  const handleLogOut = () => {
    setLogOut();
  };
  return (
    <section className={styles.logoutwrapper}>
      <button onClick={() => handleLogOut()}> Log ud </button>
    </section>
  );
};
