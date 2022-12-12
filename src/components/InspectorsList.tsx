import { getUsersByRole } from "../store/slices/user";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonContainerStyled, ButtonSmallStyled } from "../styles/style";
import { useNavigate } from "react-router-dom";
import { setIsEditMode } from "../store/slices/general";

export const InspectorList = () => {
    const inspectorList = useAppSelector((state) => state.userSlice.inspectorList);    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        getUsersByRole();
        dispatch(setIsEditMode(true))
        return () => {
            dispatch(setIsEditMode(false))
        }
    }, [])
    const cancelHandler = () => {
        navigate(-1);
      };
    return (
        <>
            <h1>Hello i'm from List</h1>
            {inspectorList && inspectorList.map((el, index) =>
                <div key={index}>{el.username}{el.state}</div>)}
            <ButtonContainerStyled>
                <button type="button">
                    <ButtonSmallStyled onClick={cancelHandler}>
                        Cancel
                    </ButtonSmallStyled>
                </button>
                <button id="submit" type="submit">
                    <ButtonSmallStyled color={"red"}>Save</ButtonSmallStyled>
                </button>
            </ButtonContainerStyled>
        </>
    )
}