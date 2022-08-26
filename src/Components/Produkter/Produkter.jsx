import { useEffect, useState } from "react";
import appService from "../../Appservices/app.service";

export const Produkter = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.getList("");
        if (result.data) {
          console.log(result.data);
          setApiData(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <section>
      <ul>
        {/* {apiData &&
          apiData.map((produkter) => {
            <li key={produkter.id}>
              <p>{produkter.name}</p>
            </li>;
          })} */}
      </ul>
    </section>
  );
};
