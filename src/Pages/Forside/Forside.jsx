import hero from "../../images/hero-banner.png";
import styles from "./Forside.module.scss";

export const Forside = (props) => {
  const products = props.products;
  const filteredProducts = props.filteredProducts;
  //console.log(filteredProducts); - these are all the prducts, put with the highest rating first
  return (
    <section className={styles.forsidewrapper}>
      {/* filtering the products, after stars, putting the best ones first, and showing only the first 4*/}
      {/* if we don´t have filteredproducts(search), than is showing the favorites */}
      {/* FAVORITES */}
      {products && !filteredProducts.length ? (
        <>
          <img src={hero} alt="hero" className={styles.hero} />
          <h2 className={styles.favorith2}>Kundernes favoritter</h2>
          {products.slice(0, 4).map((product) => {
            return (
              <figure key={product.id}>
                <img src={product.image_fullpath} alt="productimage"></img>
                <figcaption>
                  <h2 key={product.id} style={{ color: "white" }}>
                    {product.name}
                  </h2>
                  {/* commened out, because it is not on the design, but i think it woule be nice to have these info as well */}
                  {/* <h2>{product.brand}</h2> */}
                  {/* <h2>{product.rating}*</h2> */}
                  <p>{product.description_short}</p>
                  <p className={styles.læsmere}>Læs mere</p>
                  <span> Pris : DKK {product.price}</span>
                  <button>Læg i kurv</button>
                </figcaption>
              </figure>
            );
          })}
        </>
      ) : (
        //is going to show one or another
        // SEARCH RESULT
        <div style={{ color: "white" }}>
          Search results:
          {filteredProducts.map((product) => {
            return (
              //make a product component and than pass the info like props
              // <Product product={product}></Product>

              <figure key={product.id}>
                <img src={product.image_fullpath} alt="productimage"></img>
                <figcaption>
                  <h2 key={product.id} style={{ color: "white" }}>
                    {product.name}
                  </h2>
                  {/* <h2>{product.brand}</h2> */}
                  {/* <h2>{product.rating}*</h2> */}
                  <p>{product.description_short}</p>
                  <p className={styles.læsmere}>Læs mere</p>
                  <span> Pris : DKK {product.price}</span>
                  <button>Læg i kurv</button>
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}
    </section>
  );
};
