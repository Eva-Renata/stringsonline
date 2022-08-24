import styles from "./Login.module.scss";
import { useLoginStore } from "./useLoginStore";
import { useForm } from "react-hook-form";
import appService from "../../Appservices/app.service";

export const Login = () => {
  const { setLoggedIn } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
  }));

  //her registrerer vi formen, som vi har lige submittet
  const { register, handleSubmit } = useForm();
  const onSubmit = (submitdata) => {
    async function fetchResults() {
      try {
        const response = await appService.login(
          submitdata.username,
          submitdata.password
        );

        //data, som kommer tilbage fra response
        if (response.data) {
          sessionStorage.setItem("token", JSON.stringify(response.data));
          setLoggedIn();
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchResults();
  };

  return (
    <section className={styles.loginwrapper}>
      <h2>Login</h2>
      <p>Indtast brugernavn og adgangskode for at logge på</p>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.Login_form}
      >
        {/* BRUGERNAVN LOGIN */}
        <label htmlFor="navn"></label>
        Brugernavn:
        <input
          name="navn"
          className={styles.inputstyle}
          //autocomplete off virker ikke på chrome
          autoComplete="off"
          type="text"
          {...register("username", { required: "Brugernavn er påkrævet" })}
          // autoComplete="username"
          placeholder="Din brugernavn"
        />
        {/* PASSWORD LOGIN */}
        <label htmlFor="password"></label>
        Adgangskode:
        <input
          name="password"
          className={styles.inputstyle}
          autoComplete="off"
          type="password"
          {...register("password", {
            required: "Password er et påkrævet felt",
          })}
          // autoComplete="userpasswordname"
          placeholder="Dit password"
        />
        <button>Login</button>
      </form>
    </section>
  );
};
