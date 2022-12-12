import { getUsersByRole } from "../store/slices/user";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonContainerStyled, ButtonSmallStyled, CaseItemContainerStyled, CaseItemStyled, InputPlaceholderShown, TextMain } from "../styles/style";
import { useNavigate } from "react-router-dom";
import { setIsEditMode } from "../store/slices/general";
import { UserSettings } from "../interfaces/users";


export const InspectorList: React.FC = () => {
    const inspectorList = useAppSelector((state) => state.userSlice.inspectorList);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsersByRole());
        dispatch(setIsEditMode(true))
        console.log(inspectorList);
        return () => {
            dispatch(setIsEditMode(false))
        }
    }, [])
    const cancelHandler = () => {
        navigate(-1);
    };
    return (
        <CaseItemContainerStyled>
            {inspectorList && inspectorList.map((el:UserSettings, index: number) =>
                <CaseItemStyled key={index}>
                    <InputPlaceholderShown>{el.username}</InputPlaceholderShown>
                    <TextMain>{el.state}</TextMain>
                </CaseItemStyled>)}
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
        </CaseItemContainerStyled>
    )
}