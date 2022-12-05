import { useFormik } from "formik";
import * as Yup from "yup";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../interfaces/store";
import { UsersValidation } from "../interfaces/users";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { checkUserLogin, setIsForgotPassword } from "../store/slices/user";
import { Main } from "./Main";

const validationSchema = Yup.object({
  email: Yup.string().required(),
  password: Yup.string()
    .min(4, "Password must have 4 characters and more")
    .required(),
});

export const Login: React.FC = () => {
  // Redux
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.userSlice.isLoggedIn
  );
  const { areCredentialsWrong } = useAppSelector(
    (state: RootState) => state.userSlice
  );

  const dispatch = useAppDispatch();
  const forgotPasswordHandler = () => {
    dispatch(setIsForgotPassword());
  };

  // Cookies
  const [cookiesName, setCookiesName, removeCookiesName] = useCookies<string>([
    "Name",
  ]);
  const [cookiesPassword, setCookiesPassword, removeCookiesPassword] =
    useCookies<string>(["Password"]);
  const checkUser = (values: UsersValidation) => {
    dispatch(checkUserLogin({ name: values.email, password: values.password }));
    setCookiesName("Name", values.email, { path: "/" });
    setCookiesPassword("Password", values.password, { path: "/" });
  };
  useEffect(() => {
    dispatch(
      checkUserLogin({
        name: cookiesName.Name,
        password: cookiesPassword.Password,
      })
    );
  }, []);

  // Formik
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values: UsersValidation) => {
      checkUser(values);
    },
  });

  return (
    <>
      {isLoggedIn ? (
        <Main />
      ) : (
        <div>
          <div>
            {/* <Logo src={NEW_CONSTANT.logo} /> */}
            {/* A logo must be here */}
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit} noValidate>
              <label htmlFor="email">Name</label>
              <input
                // emailError={formik.errors.email && formik.touched.email}
                // areCredentialsWrong={areCredentialsWrong}
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email && (
                <div>{formik.errors.email}</div>
              )}
              <br />
              <div>
                <label htmlFor="Password">Password</label>
                <input
                  // areCredentialsWrong={areCredentialsWrong}
                  // passwordError={
                  //   formik.errors.password && formik.touched.password
                  // }
                  {...formik.getFieldProps("password")}
                  type="password"
                />
                {formik.errors.password && formik.touched.password && (
                  <div>{formik.errors.password}</div>
                )}
                {areCredentialsWrong && (
                  <div>email or password is incorrect</div>
                )}
                <Link to="/signup" onClick={forgotPasswordHandler}>
                  Forgot Password
                </Link>
              </div>

              <button type="submit">Login</button>
              <div>
                <Link to="/signup">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
