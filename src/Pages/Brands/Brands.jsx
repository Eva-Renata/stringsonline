import axios from "axios";
import appService from "../../Appservices/app.service";
import { useEffect, useState } from "react";
import styles from "./Brands.module.scss";

export const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://api.mediehuset.net/stringsonline/brands";
      const data = await axios.get(url);
      console.log(data.data.items);
      setBrands(data.data.items);
    };
    getData();
  }, [setBrands]);

  return (
    <section className={styles.brandswrapper}>
      <h2>Brands</h2>

      <div className={styles.Prwrapper}>
        {brands &&
          brands.map((brand) => {
            return (
              <figure key={brand.id}>
                <img src={brand.image_fullpath} alt="brandimage"></img>
                <figcaption>
                  <h2>{brand.title}</h2>
                  <p>{brand.description}</p>
                </figcaption>
              </figure>
            );
          })}
      </div>
    </section>
  );
};
