import { useFormik, FormikProps } from "formik";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { setUserId, updateUser, setUser } from "../store/slices/user";
import { UsersValidation } from "../interfaces/users";
import { apiGetUsersListById } from "../utils/api";
import { Role, UserSettings, InputEvents } from "../interfaces/users";
import { useCookies } from "react-cookie";
import { NavBar } from "../components/containers";
import { setInsideCase } from "../store/slices/general";
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
  ExtraButtonStyled,
  SelectInputStyle,
} from "../styles/style";

export const Profile: React.FC = () => {
  const { state } = useLocation();
  const afterSignUp = state?.afterSignUp ? state?.afterSignUp : false;
  console.log(afterSignUp);
  const [resultSuccess] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { userId, userEmail, userRole, currentUser } = useAppSelector(
    (state) => state.userSlice
  );
  const { insideCase } = useAppSelector((state) => state.generalSlice);
  const [cookiesName, setCookiesName, removeCookiesName] = useCookies<string>([
    "Name",
  ]);
  const [cookiesPassword, setCookiesPassword, removeCookiesPassword] =
    useCookies<string>(["Password"]);
  const userUpdate = async (values: UsersValidation) => {
    const result = await dispatch(
      updateUser({
        userId: userId,
        changedValue: { ...values },
      })
    );
  };
  const [thisUser, setThisUser] = useState<UserSettings>({});

  const userData = async () => {
    const userSpecification = await apiGetUsersListById(userId);
    console.log(userSpecification);
    await setThisUser(userSpecification.user);
  };
  // useEffect(() => {
  //   userData();
  // }, []);
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

  const logOutHandler = () => {
    dispatch(setUser(undefined));
    removeCookiesName("Name", { path: "/" });
    removeCookiesPassword("Password", { path: "/" });
  };

  const onSaveHandler = () => {
    dispatch(
      updateUser({
        userId,
        changedValue: {
          username: formik.values.username,
          phone: formik.values.phone,
        },
      })
    );
  };

  const onInputClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.target.value = "";
  };

  const onInputBlur = (e) => {};

  useEffect(() => {
    userData();
    dispatch(setInsideCase(true));
    return () => {
      dispatch(setInsideCase(false));
    };
  }, []);

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
                    // onBlur={formik.handleBlur}
                    onBlur={(e) => {
                      e.target.value !== "" ||
                        (e.target.value !== thisUser.username &&
                          (e.target.value = thisUser.username));
                    }}
                    defaultValue={thisUser ? thisUser.username : ""}
                    onClick={onInputClick}
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
                    onBlur={(e) => {
                      e.target.value !== "";
                      e.target.value !== thisUser.password &&
                        (e.target.value = thisUser.password);
                    }}
                    onClick={onInputClick}
                    defaultValue={thisUser ? thisUser.password : ""}
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
                    onBlur={(e) => {
                      e.target.value !== "" ||
                        (e.target.value !== thisUser.phone &&
                          (e.target.value = thisUser.phone));
                    }}
                    onClick={onInputClick}
                    defaultValue={thisUser ? thisUser.phone : ""}
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
                    <SelectInputStyle
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
                    </SelectInputStyle>
                  </>
                )}
                {/* <ButtonStyled>
                  <button>Logout</button>
                </ButtonStyled> */}
              </CaseItemContainerViewStyled>
            </InsideMainStyled>
            <ButtonContainerStyled>
              <ExtraButtonStyled
                onClick={() => {
                  logOutHandler();
                  navigate("/login");
                  window.location.reload();
                }}
              >
                <button>Log out</button>
              </ExtraButtonStyled>

              <ButtonStyled
                className="LongButtonStyled"
                color={"red"}
                onClick={onSaveHandler}
              >
                Save
              </ButtonStyled>
            </ButtonContainerStyled>
          </form>
        </div>
      )}
    </div>
  );
};
