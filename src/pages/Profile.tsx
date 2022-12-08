import { useFormik, FormikProps } from "formik";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { setUserId, updateUser, setUser } from "../store/slices/user";
import { UsersValidation } from "../interfaces/users";
import { Role } from "../interfaces/users";

export const Profile: React.FC = () => {
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
          {/* <NavBar /> */}
          <form className="Form" onSubmit={formik.handleSubmit}>
            <div className="ContainerInputField">
              <label className="InputLabel" htmlFor="username">
                Username
              </label>
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

              <label className="InputLabel" htmlFor="password">
                Password
              </label>
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
              <label className="InputLabel" htmlFor="email_address">
                Email
              </label>
              <input
                className="InputCaseStyled"
                name="email_address"
                onChange={formik.handleChange}
                id="email_address"
                type="email"
                onBlur={formik.handleBlur}
                defaultValue={userEmail}
              />
              {formik.errors.email_address && formik.touched.email_address && (
                <div className="CaseErrors">{formik.errors.email_address}</div>
              )}

              <label className="InputLabel" htmlFor="Phone">
                Phone Number
              </label>
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
              <label className="InputLabel" htmlFor="role">
                Role
              </label>
              <select
                className="SelectStyled"
                id="role"
                name="role"
                onChange={formik.handleChange}
              >
                {Object.values(Role).map((oneRole: any, index: number) => {
                  return (
                    <option
                      className="OptionsStyled"
                      value={oneRole}
                      key={index}
                    >
                      {oneRole}
                    </option>
                  );
                })}
              </select>
            </div>

            <button className="LongButtonStyled" type="submit" color={"red"}>
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
