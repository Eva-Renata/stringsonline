import axios from "axios";
import appService from "../../Appservices/app.service";
import { useEffect, useState } from "react";
import styles from "./Elguitarer.module.scss";

export const Elguitarer = () => {
  const [guitarer, setGuitarer] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://api.mediehuset.net/stringsonline/productgroups/2";
      const data = await axios.get(url);
      console.log(data.data.group.products);
      setGuitarer(data.data.group.products);
    };
    getData();
  }, [setGuitarer]);

  return (
    <section className={styles.elguitarerwrapper}>
      <h3>El Guitarer</h3>

      <div className={styles.Prwrapper}>
        {guitarer &&
          guitarer.map((guitarer) => {
            return (
              <figure key={guitarer.id}>
                <img src={guitarer.image_fullpath} alt="elguitarimage"></img>
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
