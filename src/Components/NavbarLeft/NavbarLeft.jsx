import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import appService from "../../Appservices/app.service";
import styles from "./NavbarLeft.module.scss";

export const NavLeft = () => {
  //groups
  const [productGroups, setProductGroups] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.get("productgroups");
        if (result.data) {
          setProductGroups(result.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  // setting it open, so is showing the submenu
  const [isOpen, setIsOpen] = useState("");

  return (
    <nav className={styles.navigationwrapper}>
      <ul>
        {productGroups &&
          productGroups.map((productGroup) => {
            return (
              <li key={productGroup.id}>
                {/* onclick is checking if the clicked id is open */}
                <span
                  onClick={() =>
                    setIsOpen(isOpen === productGroup.id ? "" : productGroup.id)
                  }
                >
                  {productGroup.title}{" "}
                </span>

                <ul
                  // style for show the subgroups only if group is open (clicked), otherwise is "none"
                  style={{
                    display: isOpen === productGroup.id ? "block" : "none",
                  }}
                >
                  {/* subgroups are links to a new page */}
                  {productGroup &&
                    productGroup.subgroups.map((subGroup) => {
                      return (
                        <li key={subGroup.id} className={styles.subli}>
                          <Link to={subGroup.title}>{subGroup.title}</Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
      </ul>
      <NavLink to={"/brands"} className={styles.leftlink}>
        Brands
      </NavLink>
    </nav>
  );
};
