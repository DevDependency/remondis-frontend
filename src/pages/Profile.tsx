import { useFormik, FormikProps } from "formik";
import { useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { setUserId, updateUser, setUser } from "../store/slices/user";
import { UsersValidation } from "../interfaces/users";
import { Role } from "../interfaces/users";
import { NavBar } from "../components/containers";
import {
  ButtonContainerStyled,
  ButtonStyled,
  CaseBackgroundContainerStyled,
  CaseItemContainerViewStyled,
  CaseItemEditStyled,
  CaseItemStyled,
  InputLabel,
  InputPlaceholderShown,
  InsideMainStyled,
  TextMain,
} from "../styles/style";

export const Profile: React.FC = () => {
  const { state } = useLocation();
  const afterSignUp = state?.afterSignUp ? state?.afterSignUp : false;
  console.log(afterSignUp);
  const [resultSuccess] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { userId, userEmail, userRole } = useAppSelector(
    (state) => state.userSlice
  );
  const userUpdate = async (values: UsersValidation) => {
    const result = await dispatch(
      updateUser({
        userId: userId,
        changedValue: { ...values },
      })
    );
  };
  const navigate = useNavigate();
  const formik: FormikProps<UsersValidation> = useFormik<UsersValidation>({
    initialValues: {
      username: "",
      email_address: userEmail,
      password: "",
      phone: "",
      role: userRole,
    },

    onSubmit: (values: UsersValidation) => {
      userUpdate(values);

      setUser({ success: true, user: values });
      navigate("/");
    },
  });

  return (
    <div className="CaseDiv">
      {resultSuccess ? (
        <Navigate to="/" />
      ) : (
        <div>
          <NavBar />
          <form className="Form" onSubmit={formik.handleSubmit}>
            <InsideMainStyled>
              <CaseItemContainerViewStyled>
                <CaseItemEditStyled>
                  <InputLabel>Username</InputLabel>
                  <input
                    className="InputCaseStyled"
                    name="username"
                    onChange={formik.handleChange}
                    id="username"
                    type="text"
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.username && formik.touched.username && (
                    <div className="CaseErrors">{formik.errors.username}</div>
                  )}
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <InputLabel>Password</InputLabel>
                  <input
                    className="InputCaseStyled"
                    name="password"
                    onChange={formik.handleChange}
                    id="password"
                    type="password"
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <div className="CaseErrors">{formik.errors.password}</div>
                  )}
                </CaseItemEditStyled>
                <CaseItemEditStyled>
                  <InputLabel>Phone number</InputLabel>
                  <input
                    className="InputCaseStyled"
                    name="phone"
                    onChange={formik.handleChange}
                    id="phone"
                    type="text"
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <div className="CaseErrors">{formik.errors.phone}</div>
                  )}
                </CaseItemEditStyled>
                {afterSignUp && (
                  <>
                    <label className="InputLabel" htmlFor="role">
                      Role
                    </label>
                    <select
                      className="SelectStyled"
                      id="role"
                      name="role"
                      onChange={formik.handleChange}
                    >
                      {Object.values(Role).map(
                        (oneRole: any, index: number) => {
                          return (
                            <option
                              className="OptionsStyled"
                              value={oneRole}
                              key={index}
                            >
                              {oneRole}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </>
                )}
              </CaseItemContainerViewStyled>
            </InsideMainStyled>
            <ButtonContainerStyled>
              <ButtonStyled>
                <button
                  className="LongButtonStyled"
                  type="submit"
                  color={"red"}
                >
                  Save
                </button>
              </ButtonStyled>
            </ButtonContainerStyled>
          </form>
        </div>
      )}
    </div>
  );
};
