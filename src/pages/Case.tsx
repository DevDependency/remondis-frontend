import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { editTheCase } from "../store/slices/case";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";

export const Case : React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const particularCase = useAppSelector((state) => state.caseSlice.cases).filter((e) => e.id === parseInt(id));
  const caseNewId = useAppSelector((state) => state.caseSlice.newCaseId);
  const createdCase = useAppSelector((state) => state.caseSlice.cases).filter(
    (e) => e.id === caseNewId
  ); 
    
  return (
    <>Case</>
  )
}