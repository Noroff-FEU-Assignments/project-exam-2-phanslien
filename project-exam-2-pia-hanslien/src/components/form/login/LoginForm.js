import * as yup from "yup";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import styles from "./LoginForm.module.css";
import { LOGINURL, TOKEN_PATH } from "../../../constants/API";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";

const url = LOGINURL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(
    localStorage.access ? true : false
  );
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);
    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      onSubmit(navigate("/dashboard"));

      localStorage.setItem("response.data", JSON.stringify(response.data));
    } catch (error) {
      setLoginError("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <p>{loginError}</p>}
        <fieldset className={styles.login_form} disabled={submitting}>
          <div>
            <p className={styles.login_text}>Username:</p>
            <input
              className={styles.login_input}
              name="username"
              placeholder="Username"
              {...register("username")}
            />
          </div>
          <div>
            <p className={styles.login_text}>Password:</p>
            <input
              className={styles.login_input}
              name="password"
              placeholder="Password"
              {...register("password")}
              type="password"
            />
          </div>
          <button className={styles.login_button} type="submit">
            {submitting ? "Loggin in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </>
  );
}
