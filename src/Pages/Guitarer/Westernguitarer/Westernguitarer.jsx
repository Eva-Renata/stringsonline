import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Westernguitarer.module.scss";

export const Westernguitarer = () => {
  const [guitarer, setGuitarer] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://api.mediehuset.net/stringsonline/productgroups/3";
      const data = await axios.get(url);
      console.log(data);
      setGuitarer(data.data.group.products);
    };
    getData();
  }, [setGuitarer]);

  return (
    <section className={styles.Westernguitarerguitarerwrapper}>
      <h3>Western Guitarer</h3>

      <div className={styles.Prwrapper}>
        {guitarer &&
          guitarer.map((guitarer) => {
            return (
              <figure key={guitarer.id}>
                <img
                  src={guitarer.image_fullpath}
                  alt="westernguitarimage"
                ></img>
                <figcaption>
                  <h2>{guitarer.name}</h2>
                  <p> Brand : {guitarer.brand}</p>
                  <p>{guitarer.description_short}</p>
                  <p>Pris: DKK {guitarer.price}</p>
                </figcaption>
              </figure>
            );
          })}
      </div>
    </section>
  );
};
