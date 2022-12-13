import { useFormik } from "formik";
import * as Yup from "yup";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../interfaces/store";
import { UsersValidation } from "../interfaces/users";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import {
  checkUserLogin,
  setIsForgotPassword,
  setAreCredentialsWrong,
} from "../store/slices/user";
import { Main } from "./Main";
import { Locations } from "../interfaces/route";
import {
  ButtonStyled,
  CaseItemContainerViewStyled,
  CaseItemEditStyled,
  LogoStyled,
  TitleLogin,
  LoginFormConrainerStyled,
  BackgroundStyled,
  LinkStyled,
} from "../styles/style";
import { logo } from "../assets";

const validationSchema = Yup.object({
  email: Yup.string().required(),
  password: Yup.string()
    .min(4, "Password must have 4 characters and more")
    .required(),
});

export const Login: React.FC = () => {
  const navigate = useNavigate();

  // Redux
  const { areCredentialsWrong, isLoggedIn } = useAppSelector(
    (state: RootState) => state.userSlice
  );

  const dispatch = useAppDispatch();
  const forgotPasswordHandler = () => {
    dispatch(setIsForgotPassword());
  };

  // Cookies
  const [cookiesName, setCookiesName] = useCookies<string>(["Name"]);
  const [cookiesPassword, setCookiesPassword] = useCookies<string>([
    "Password",
  ]);
  const checkUser = (values: UsersValidation) => {
    dispatch(checkUserLogin({ name: values.email, password: values.password }));
    setCookiesName("Name", values.email, { path: "/" });
    setCookiesPassword("Password", values.password, { path: "/" });
  };
  useEffect(() => {
    if (cookiesName.Name !== undefined && cookiesName.Password !== undefined) {
      dispatch(
        checkUserLogin({
          name: cookiesName.Name,
          password: cookiesPassword.Password,
        })
      );
    }
    dispatch(setAreCredentialsWrong());
  }, []);

  useEffect(() => {
    if (isLoggedIn) navigate(Locations.ROOT);
  }, [isLoggedIn]);

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
      <BackgroundStyled>
        <CaseItemContainerViewStyled>
          <LogoStyled src={logo} isSignUp={true} />
          <LoginFormConrainerStyled>
            <TitleLogin>Login</TitleLogin>
            <form onSubmit={formik.handleSubmit} noValidate>
              <CaseItemEditStyled>
                <label htmlFor="email">Name</label>
                <input
                  // emailError={formik.errors.email && formik.touched.email}
                  // areCredentialsWrong={areCredentialsWrong}
                  {...formik.getFieldProps("email")}
                />
                {formik.errors.email && formik.touched.email && (
                  <div>{formik.errors.email}</div>
                )}
              </CaseItemEditStyled>
              <CaseItemEditStyled>
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
                <Link
                  className="link"
                  to="/forgotpassword"
                  onClick={forgotPasswordHandler}
                >
                  Forgot Password
                </Link>
              </CaseItemEditStyled>
              <ButtonStyled>
                <button type="submit">Login</button>
              </ButtonStyled>
              <Link className="link" to="/signup">
                Sign up
              </Link>
            </form>
          </LoginFormConrainerStyled>
        </CaseItemContainerViewStyled>
      </BackgroundStyled>
    </>
  );
};
