import * as yup from "yup";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import styles from "./LoginForm.module.css";
import { LOGINURL, TOKEN_PATH } from "../../../constants/API";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import ValidationError from "../../../pages/contact/Error";


const url = LOGINURL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data) {
  }
  

  const [submitting, setSubmitting] = useState(
    localStorage.access ? true : false
  );

  const navigate = useNavigate();



  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      onSubmit(navigate("/dashboard"));

      localStorage.setItem("response.data", JSON.stringify(response.data));
    } catch (error) {
      
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles.login_form} disabled={submitting}>
          <div>
            <p className={styles.login_text}>Username:</p>
            <input
            {...register("username")}
              className={styles.login_input}
              name="username"
              placeholder="Username"
            />
             {errors.username && <ValidationError>{errors.username.message}</ValidationError>}
          </div>
          <div>
            <p className={styles.login_text}>Password:</p>
            <input
             {...register("password")}
              className={styles.login_input}
              name="password"
              placeholder="Password"
              {...register("password")}
              type="password"
            />
                         {errors.password && <ValidationError>{errors.password.message}</ValidationError>}

          </div>
          <button className={styles.login_button} type="submit">
            {submitting ? "Loggin in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </>
  );
}
