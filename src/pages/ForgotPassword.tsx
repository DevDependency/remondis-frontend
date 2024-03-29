import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { setIsResetLinkSend, setIsForgotPassword } from "../store/slices/user";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { RootState } from "../interfaces/store";
import { UsersValidation } from "../interfaces/users";
import { apiGetUsersForgotPassword } from "../utils/api";
import {
  AuthorizationWrapper,
  AuthorizationForm,
  AuthorizationContainer,
  LogoStyled,
  TitleLogin,
  InputLabel,
  AuthorizationInput,
  AuthorizationInputContainer,
  AuthorizationLinksContainer,
  ButtonStyled,
  AuthorizationInputTitleContainer,
  ForgotPasswordParagraph,
} from "../styles/style";
import { logo } from "../assets";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
});

export const ForgotPassword: React.FC = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const resetLinkHandler = () => {
    dispatch(setIsResetLinkSend());
    navigate("/login");
  };
  const returnToLogin = () => {
    dispatch(setIsResetLinkSend());
    dispatch(setIsForgotPassword());
  };
  const forgotPasswordHandler = () => {
    dispatch(setIsForgotPassword());
    navigate("/login");
  };

  const { isHoveringEmail, isResetLinkSend } = useAppSelector(
    (state: RootState) => state.userSlice
  );

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: (values: UsersValidation) => {
      if (values.email) {
        setIsEmailSent(true);
        apiGetUsersForgotPassword(values.email);
        dispatch(setIsResetLinkSend());
      }
    },
  });

  return (
    <>
      <AuthorizationWrapper>
        <AuthorizationForm onSubmit={formik.handleSubmit} noValidate>
          <AuthorizationContainer >
            <LogoStyled src={logo} isSignUp={true} />
            {!isEmailSent ? (
              <>
                {isResetLinkSend ? (
                  <>
                    <ForgotPasswordParagraph>
                      We sent a link for resetting password on your email
                    </ForgotPasswordParagraph>
                    <button onClick={resetLinkHandler}>
                      <ButtonStyled isSignUp={true} color={"red"}>
                        Back to login page
                      </ButtonStyled>
                    </button>
                  </>
                ) : (
                  <AuthorizationContainer>
                    <AuthorizationInputTitleContainer>
                      <TitleLogin isSignUp={true}>Reset password</TitleLogin>
                      <AuthorizationInputContainer>
                        <InputLabel htmlFor="email" isSignUp={true}>
                          Email
                        </InputLabel>
                        <AuthorizationInput
                          {...formik.getFieldProps("email")}
                          // areCredentialsWrong={areCredentialsWrong}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <>
                            {isHoveringEmail && (
                              <div>{formik.errors.email}</div>
                            )}
                          </>
                        )}
                      </AuthorizationInputContainer>
                    </AuthorizationInputTitleContainer>
                    <AuthorizationLinksContainer>
                      <button type="submit">
                        <ButtonStyled
                          isSignUp={true}
                          color={"red"}
                          onClick={returnToLogin}
                        >
                          Request reset link
                        </ButtonStyled>
                      </button>
                      <button>
                        <ButtonStyled
                          onClick={forgotPasswordHandler}
                          isSignUp={true}
                        >
                          Cancel
                        </ButtonStyled>
                      </button>
                    </AuthorizationLinksContainer>
                  </AuthorizationContainer>
                )}
              </>
            ) : (
              <div>
                <h1> Email is sent </h1>
              </div>
            )}
          </AuthorizationContainer>
        </AuthorizationForm>
      </AuthorizationWrapper>
    </>
  );
};
