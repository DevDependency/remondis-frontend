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
import {
  AuthorizationWrapper,
  AuthorizationForm,
  InputLabel,
  AuthorizationInput,
  AuthorizationLinkBottom,
  AuthorizationInputContainer,
  AuthorizationContainer,
  AuthorizationInputTitleContainer,
  AuthorizationLinksContainer,
} from "../styles/style";
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
    navigate("/forgotpassword");
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
      <AuthorizationWrapper>
        <AuthorizationForm onSubmit={formik.handleSubmit} noValidate>
          <AuthorizationContainer>
            <LogoStyled src={logo} isSignUp={true} />
            <AuthorizationInputTitleContainer>
              <TitleLogin isSignUp={true}>Login</TitleLogin>
              <AuthorizationInputContainer>
                <InputLabel htmlFor="email" isSignUp={true}>
                  Name
                </InputLabel>
                <AuthorizationInput
                  // emailError={formik.errors.email && formik.touched.email}
                  // areCredentialsWrong={areCredentialsWrong}
                  {...formik.getFieldProps("email")}
                />
                {formik.errors.email && formik.touched.email && (
                  <div>{formik.errors.email}</div>
                )}
              </AuthorizationInputContainer>
              <AuthorizationInputContainer>
                <InputLabel htmlFor="Password" isSignUp={true}>
                  Password
                </InputLabel>
                <AuthorizationInput
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
                <AuthorizationLinkBottom
                  isForgotPassword={true}
                  onClick={() => {
                    navigate("/forgotpassword");
                  }}
                >
                  Forgot Password
                </AuthorizationLinkBottom>
              </AuthorizationInputContainer>
            </AuthorizationInputTitleContainer>
            <AuthorizationLinksContainer>
              <button type="submit">
                <ButtonStyled isSignUp={true} color={"red"}>
                  Login
                </ButtonStyled>
              </button>
              <AuthorizationLinkBottom
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </AuthorizationLinkBottom>
            </AuthorizationLinksContainer>
          </AuthorizationContainer>
        </AuthorizationForm>
      </AuthorizationWrapper>
    </>
  );
};
