import{c as _t}from"./react-dom.b5bd3df8.js";import{W as kt,s as d,F as Et}from"./styled-components.0c95c8fc.js";import{u as Rt,a as Bt,P as Pt}from"./react-redux.43e8b6a9.js";import{c as $t,a as Ie,b as _,d as Tt}from"./@reduxjs.65e0ba5b.js";import{p as Nt,a as Ut,d as Dt,P as Ft}from"./redux-persist.37c3cd09.js";import{c as Ot}from"./redux.abb3473b.js";import{t as Lt}from"./redux-thunk.1b3bbe7b.js";import{a as ve}from"./axios.754b77ca.js";import{j as t,a as n,F as C,u as re}from"./react-cookie.01964ee2.js";import{r as m}from"./react.77f75928.js";import"./hoist-non-react-statics.7be3bd10.js";import"./react-is.3cc2e130.js";import{u as N,O as Ve,a as ce,N as ze,b as X,R as Ht}from"./react-router.101cda78.js";import{u as le,F as de,a as pe}from"./formik.1779e49c.js";import{c as Ae,a as se}from"./yup.9ad41316.js";import"./property-expr.48609aa3.js";import{q as Mt}from"./query-string.704129cb.js";import{b as Gt}from"./buffer.a45bf2d3.js";import{d as Vt}from"./react-date-range.542aa65b.js";import{m as ee}from"./maplibre-gl.22511e43.js";import{c as zt}from"./react-router-dom.b9d960f5.js";import"./scheduler.abb0f143.js";import"./@emotion.c037f3dd.js";import"./use-sync-external-store.7d004288.js";import"./immer.90232ec3.js";import"./@babel.e8e122b8.js";import"./form-data.2b153385.js";import"./universal-cookie.9008d64e.js";import"./cookie.ccf51230.js";import"./base64-js.261a5312.js";import"./@remix-run.73424bb3.js";import"./react-fast-compare.28c49cfe.js";import"./deepmerge.39b49f80.js";import"./lodash-es.789b6cb5.js";import"./tiny-warning.49191a0e.js";import"./nanoclone.7d3cb5fe.js";import"./lodash.b3130c0b.js";import"./toposort.399ef8f5.js";import"./strict-uri-encode.725b5ed5.js";import"./decode-uri-component.3c7e91f1.js";import"./split-on-first.3754ef4a.js";import"./filter-obj.975cb5ff.js";import"./ieee754.58f3fab0.js";import"./prop-types.4b9b706c.js";import"./classnames.50ea5993.js";import"./date-fns.3e93d96e.js";import"./react-list.38f21931.js";import"./shallow-equal.cdf3e171.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const jt=kt`
  *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;  
    }

    body {
      font-family: 'Roboto', sans-serif;
    }

    button {
      background-color: transparent;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      border: none;
      weight: 170px;
      position: parent;
      border-radius: 0;
      text-decoration: none;
      cursor: pointer;
      &: hover {
        border: none;
      }
    }
`,Wt={colors:{tx_grey_main:"#3A3A42",tx_grey_secondary:"#9E9E9E",red:"#E3001B",red_hover:"#B50A1A",grey:"#AEB0B7",grey_hover:"#868996",white:"#ffffff",blue_light:"#025392",blue_dark:"#012D59",border:"#D1D1D1"},fonts:{default:"Roboto"},borderline:{border:"0.5px solid #D1D1D1",errorBorder:"2px solid #E3001B"},effects:{shadow:"0px 0px 10px rgba(0, 0, 0, 0.15)"}},je=$t();je.startListening({type:"case/createCase",effect:async(e,r)=>{await r.delay(5e3)}});const Qt="/assets/-case-iconAction.ed94558c.svg",We="/assets/-case-iconBin.be7cb93b.svg",_e="/assets/-case-iconEdit.d53d1007.svg",Kt="/assets/-case-iconSettings.a128ec85.svg",Xt="/assets/-navbar-iconAccount.60547fae.svg",qt="/assets/-navbar-iconBack.e7a4eb97.svg",Jt="/assets/-navbar-iconStatusBusy.f1dbd011.svg",Yt="/assets/-navbar-iconStatusFree.c6227144.svg",Zt="/assets/-tabbar-iconCalenderDefault.8a86afb0.svg",er="/assets/-tabbar-iconCalenderSelected.db8e02e2.svg",tr="/assets/-tabbar-iconListDefault.889d3f17.svg",rr="/assets/-tabbar-iconListSelected.9d771f75.svg",sr="/assets/-tabbar-iconMapDefault.70cd835f.svg",nr="/assets/-tabbar-iconMapSelected.71397f17.svg",or="/assets/iconCancel.a2ea8d2d.svg",ar="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABkCAYAAABnwAWdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKKSURBVHgB7dwxb4FBAMbxa8NgYDAwkDAYGAwWX8CX9gUsBovBYmBgMBgYDCRtnmuueV81der/+vwSEcqg/969dyfp2/F4/AiG8x4MyeGgHA7K4aAcDsrhoBwOyuGgHA7K4aAcDsrhoBwOyuGgHA7K4aAcDsrhoBwOyuGgHA7K4aAcDsrhoBwOyuGgHA7K4aAcDsrhoBwOyuGgHA7K4aAcDsrhoBwOyuGgHA7K4aDQ4Q6HQ5jP5/H+v/GIg6oEoDTCzudz6V46nU643W6l55J2ux0qFeRH/gH5KdbrdemxQqaYKdzza2S/34fpdJpFvDfiP2ErjrTtdhv6/X5otVrxuWazGe73e7her6X3pLiNRqMUbjQahXq9HmiQf3qKIxpZol98ek6q1WrpcfE9zwuZ5XIZZrNZoEHPGRo5tVothnrl8XjE0afXyHg8jrdE0V5dCwnQ4bTY0O1ZusalKArc7XbDcDgMuUBvBxRIU1+aMtNzi8UiRtP0qMWKRuRut4sjLBfoEac4Glma/hRINptNnCK16Oj1et+vXa1W4XQ6fQely24DrjgKU4wmWnlKLqcsWZ6caMQ9y2XjnWQXTqNN17nidU80EtPPc5BdOE2R2gJoIaJpUcF0HdRGXduCV6tQorzmj/C1RRgMBjFU8dhLJyaTycRnlX+ZwmmVeblc4vVOIy2XKTLJIpwOj3+zWlRYKnQ4HSxrJP322ErTpvZ7RMhvB8zfgGM5HJTDQTkclMNBORyUw0E5HJTDQTkclMNBORyUw0E5HJTDQTkclMNBORyUw0E5HJTDQTkclMNBORyUw0E5HJTDQTkclMNBORyUw0E5HJTDQTkclMNBORyUw0E5HJTDQTkc1Cdon85mofLdnAAAAABJRU5ErkJggg==",he="/assets/logo.93c8302e.png",z="/assets/-input-iconYes.e722f5d6.svg",ir="/assets/background.7d2d6db1.png",cr="/assets/-case-iconLocation.b4ef0642.svg",lr="/assets/-case-iconData.c926fbc0.svg",dr="/assets/-case-iconMessage.a99e566c.svg",pr="/assets/-case-iconStatusBlue.d3673ce0.svg",Qe=[{name:"ToDo",id:"todo",path:"/"},{name:"Active Cases",id:"cases",path:"/cases"}],Ke=[{name:"ToDo",id:"todo",path:"/",default:tr,selected:rr},{name:"Calendar",id:"calendar",path:"/calendar",default:Zt,selected:er},{name:"Map",id:"map",path:"/map",default:sr,selected:nr}],Xe=[{name:"General",id:"general",path:""},{name:"Details",id:"details",path:"details"},{name:"Photos",id:"photos",path:"photos"}],hr=[{id:1,name:"Appartment"},{id:2,name:"House"},{id:3,name:"Basement"},{id:4,name:"Room"},{id:5,name:"Attic"},{id:6,name:"Backyard"}],ur=[{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5},{name:"6",value:6}],mr=[{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5},{name:"6",value:6}],gr={address:"",client_first_name:"",client_last_name:"",client_email:"",client_phone:""},fr=[13.396318,52.494622],yr={insideCase:!1,isEditMode:!1,activeManagerTabBar:Qe[0].id,activeInspectorTabBar:Ke[0].id,activeCaseTabBar:Xe[0].id},qe=Ie({name:"general",initialState:yr,reducers:{setInsideCase(e,r){e.insideCase=r.payload},setIsEditMode(e,r){e.isEditMode=r.payload},setActiveManagerTabBar(e,r){e.activeManagerTabBar=r.payload},setActiveInspectorTabBar(e,r){e.activeInspectorTabBar=r.payload},setActiveCaseTabBar(e,r){e.activeCaseTabBar=r.payload}}}),{setInsideCase:ne,setIsEditMode:q,setActiveManagerTabBar:Je,setActiveInspectorTabBar:ue,setActiveCaseTabBar:ke}=qe.actions,Cr=qe.reducer,Ye=ve.create({baseURL:"http://localhost:4000"}),br=async e=>{try{return(await Ye.get(`/appointments?inspector_id=${e}`)).data}catch(r){console.error(r)}},xr=async(e,r)=>{try{return(await Ye.post(`/appointments/${e}`,r)).data}catch(s){console.error(s)}},J=ve.create({baseURL:"http://localhost:4000"}),Sr=async()=>{try{return(await J.get("/users?role=inspector")).data}catch(e){console.log(e)}},wr=async e=>{try{return(await J.get(`/users/${e}`)).data}catch(r){console.log(r)}},Ir=async e=>{try{return(await J.post("/users/getuserid",{email_address:e})).data}catch(r){console.log(r)}},Ze=async e=>{try{return(await J.post("/users/register",{email_address:e})).data}catch(r){console.log(r)}},vr=async e=>{const{token:r,email:s}=e,a={headers:{Authorization:`Bearer ${r}`}};try{return(await J.put("/users/confirm",{email_address:s},a)).data}catch(o){console.log(o)}},Ar=async(e,r)=>{try{return(await J.put(`/users/${e}`,{...r})).data}catch(s){console.log(s)}},_r=async(e,r)=>{try{return(await J.post("/users/login",{username:e,password:r})).data}catch(s){console.log(s)}},kr=async e=>{try{return(await J.patch("/users/forgotPassword",{email_address:e})).data}catch(r){console.log(r)}},U=ve.create({baseURL:"http://localhost:4000",validateStatus:e=>e>=200&&e<300||e==404}),Er=async()=>{try{return(await U.get("/cases")).data}catch(e){console.log(e)}},Rr=async e=>{try{return(await U.get(`/cases/${e}`)).data}catch(r){console.log(r)}},Br=async e=>{try{return(await U.post("/cases",e)).data}catch(r){console.log(r)}},Pr=async(e,r)=>{const{Appointment:s,Inspector:a,State:o,TypeOfProperty:i,...c}=r;try{return(await U.patch(`cases/${e}`,c)).data}catch(l){console.log(l)}},$r=async(e,r,s)=>{try{return(await U.patch(`cases/${e}/assign`,{user_id:r,inspector_id:s})).data}catch(a){console.log(a)}},et=async(e,r)=>{try{return(await U.patch(`cases/${e}/decline`,{user_id:r})).data}catch(s){console.log(s)}},tt=async(e,r)=>{try{return(await U.patch(`cases/${e}/accept`,{user_id:r})).data}catch(s){console.log(s)}},rt=async(e,r)=>{try{return(await U.patch(`cases/${e}/ready`,{user_id:r})).data}catch(s){console.log(s)}},Tr=async(e,r)=>{try{return(await U.patch(`cases/${e}/close`,{user_id:r})).data}catch(s){console.log(s)}},Nr=async e=>{try{return(await U.get(`/cases/ToDo/${e}`)).data}catch(r){console.log(r)}},Ur=async e=>{try{return(await U.get(`cases/coordinates/${e}`)).data}catch(r){console.log(r)}},Dr=async e=>{try{return(await U.get(`cases/${e}/items`)).data}catch(r){console.log(r)}},Fr=async(e,r)=>{try{return(await U.get(`cases/${e}/items/${r}`)).data}catch(s){console.log(s)}},Or=async(e,r,s)=>{try{return(await U.post(`cases/${e}/items/${r}`,s)).data}catch(a){console.log(a)}},Lr=async(e,r,s)=>{try{return(await U.put(`cases/${e}/items/${r}`,s)).data}catch(a){console.log(a)}},Hr=async(e,r)=>{try{return(await U.delete(`cases/${e}/items/${r}`)).data}catch(s){console.log(s)}},Mr=async(e,r,s)=>{try{return(await U.put(`cases/${e}/items/${r}/photos`,{CasePhotos:s})).data}catch(a){console.log(a)}},Gr={createdCaseId:0,deletedCaseId:0,casesToDo:[],cases:[],appointments:[],currentCase:void 0,coordinates:[],caseRooms:[],currentRoom:void 0,caseChanged:!1},st=_("case/getCases",async()=>{try{return(await Er()).cases}catch(e){console.error(e)}}),Z=_("case/getCaseById",async e=>{try{return(await Rr(e)).case}catch(r){console.error(r)}}),nt=_("case/getCasesToDo",async e=>{try{return(await Nr(e)).cases}catch(r){console.error(r)}}),ot=_("case/createCase",async e=>{try{return(await Br(e)).case.id}catch(r){console.error(r)}}),Ee=_("cases/editTheCase",async e=>await Pr(e.id,e.changedValue)),at=_("cases/closeCase",async e=>await Tr(e.caseId,e.userId)),it=_("case/getCoordinates",async e=>{try{return(await Ur(e)).coordinates}catch(r){console.error(r)}}),ct=_("case/getCaseItems",async e=>{try{return(await Dr(e)).caseItems}catch(r){console.error(r)}}),Re=_("case/getCaseItem",async e=>{try{return(await Fr(e.caseId,e.room)).caseItem}catch(r){console.error(r)}});_("case/addCaseItem",async e=>{try{return(await Or(e.caseId,e.room,e.item)).caseItem}catch(r){console.error(r)}});const lt=_("case/updateCaseItem",async e=>{try{return(await Lr(e.caseId,e.room,e.item)).caseItem}catch(r){console.error(r)}}),dt=_("case/deleteCaseItem",async e=>{try{return(await Hr(e.caseId,e.room)).caseItem}catch(r){console.error(r)}}),Vr=_("case/addAppointment",async e=>{try{return(await xr(e.caseId,e.appointment)).appointment}catch(r){console.error(r)}}),pt=_("case/updateCasePhoto",async e=>{try{return(await Mr(e.caseId,e.room,e.photos)).caseItem}catch(r){console.error(r)}}),ht=_("case/getAppointmentsByInspector",async e=>{try{return(await br(e)).appointments}catch(r){console.error(r)}}),ut=_("case/patchCasesByIdAssign",async e=>{try{return(await $r(e.caseId,e.userId,e.inspectorId)).appointments}catch(r){console.error(r)}}),E=Ie({name:"case",initialState:Gr,reducers:{setCases(e,r){e.cases=r.payload},setCasesToDo(e,r){e.casesToDo=r.payload},setCurrentCase(e,r){e.currentCase=r.payload},setCreatedCaseId(e,r){e.createdCaseId=r.payload},setDeletedCaseId(e,r){e.deletedCaseId=r.payload},setCoordinates(e,r){r.payload?e.coordinates=r.payload:e.coordinates=[]},setCaseItems(e,r){e.caseRooms=r.payload},setCurrentRoom(e,r){e.currentRoom=r.payload},setCaseChangedTrue(e){e.caseChanged=!0},setCaseChangedFalse(e){e.caseChanged=!1},setAppointments(e,r){e.appointments=r.payload}},extraReducers(e){e.addCase(st.fulfilled,(r,s)=>{E.caseReducers.setCases(r,s)}).addCase(nt.fulfilled,(r,s)=>{E.caseReducers.setCasesToDo(r,s)}).addCase(Z.fulfilled,(r,s)=>{E.caseReducers.setCurrentCase(r,s),E.caseReducers.setCaseChangedFalse(r)}).addCase(ot.fulfilled,(r,s)=>{E.caseReducers.setCreatedCaseId(r,s),E.caseReducers.setCaseChangedTrue(r)}).addCase(Ee.fulfilled,(r,s)=>{E.caseReducers.setCaseChangedTrue(r)}).addCase(at.fulfilled,(r,s)=>{E.caseReducers.setCaseChangedTrue(r)}).addCase(it.fulfilled,(r,s)=>{E.caseReducers.setCoordinates(r,s)}).addCase(ct.fulfilled,(r,s)=>{E.caseReducers.setCaseItems(r,s),E.caseReducers.setCaseChangedFalse(r)}).addCase(Re.fulfilled,(r,s)=>{E.caseReducers.setCurrentRoom(r,s),E.caseReducers.setCaseChangedFalse(r)}).addCase(lt.fulfilled,r=>{E.caseReducers.setCaseChangedTrue(r)}).addCase(dt.fulfilled,r=>{E.caseReducers.setCaseChangedTrue(r)}).addCase(pt.fulfilled,r=>{E.caseReducers.setCaseChangedTrue(r)}).addCase(ht.fulfilled,(r,s)=>{E.caseReducers.setAppointments(r,s)}).addCase(ut.fulfilled,r=>{E.caseReducers.setCaseChangedTrue(r)})}}),{setCreatedCaseId:zr,setDeletedCaseId:jr,setCurrentCase:Be,setCurrentRoom:Wr,setCaseItems:Qr}=E.actions,Kr=E.reducer,Xr={userRole:"manager",userId:0,isForgotPassword:!1,isResetLinkSend:!1,isHoveringEmail:!1,areCredentialsWrong:!1,isLoggedIn:!1,confirmUserHandler:!1,userEmail:"",isInspectorActive:!0,inspectorList:[],currentUser:{email:"",password:"",username:"",phone:"",role:"",email_address:""}},qr=_("isLoggedIn/registerUser",async e=>{await Ze(e)}),be=_("user/checkUserLogin",async e=>{try{return e.name&&e.password?await _r(e.name,e.password):void 0}catch(r){console.error(r)}}),xe=_("user/updateUser",async e=>{try{return await Ar(e.userId,e.changedValue)}catch(r){console.error(r)}}),mt=_("isLoggedIn/confirmUser",async e=>await vr({email:e.email,token:e.token})),gt=_("user/userId",async e=>(await Ir(e)).user),ft=_("user/getUsersByRole",async()=>{try{return(await Sr()).users}catch(e){console.error(e)}}),Y=Ie({name:"user",initialState:Xr,reducers:{setUser(e,r){r.payload&&r.payload.success?(e.userRole=r.payload.user.role,e.userId=r.payload.user.id,console.log(r.payload.user),e.isLoggedIn=!0,e.currentUser=r.payload.user):(e.isLoggedIn=!1,e.areCredentialsWrong=!0)},setIsForgotPassword:e=>{e.isForgotPassword=!e.isForgotPassword},setIsResetLinkSend:e=>{e.isResetLinkSend=!e.isResetLinkSend},signInIsEmailHovered(e){e.isHoveringEmail=!e.isHoveringEmail},setAreCredentialsWrong:e=>{e.areCredentialsWrong=!1},setConfirmUserHandler:(e,r)=>{e.confirmUserHandler=r.payload.success},setEmail:(e,r)=>{e.userEmail=r.payload},setUserId:(e,r)=>{e.userId=r.payload.id},setIsInspectorActive(e){e.isInspectorActive=!e.isInspectorActive},setInspectorList(e,r){e.inspectorList=r.payload}},extraReducers(e){e.addCase(be.fulfilled,(r,s)=>{Y.caseReducers.setUser(r,s)}).addCase(mt.fulfilled,(r,s)=>{Y.caseReducers.setConfirmUserHandler(r,s)}).addCase(gt.fulfilled,(r,s)=>{Y.caseReducers.setUserId(r,s)}).addCase(ft.fulfilled,(r,s)=>{Y.caseReducers.setInspectorList(r,s)})}}),{setUser:Me,setIsForgotPassword:Ge,setIsResetLinkSend:ye,signInIsEmailHovered:zn,setAreCredentialsWrong:Jr,setConfirmUserHandler:jn,setEmail:Yr,setUserId:Wn,setIsInspectorActive:Zr,setInspectorList:Qn}=Y.actions,es=Y.reducer,ts=Ot({generalSlice:Cr,caseSlice:Kr,userSlice:es}),rs={key:"root",storage:Dt},ss=Nt(rs,ts),yt=Tt({reducer:ss,middleware:e=>e({immutableCheck:{warnAfter:348},serializableCheck:!1}).prepend(je.middleware).prepend(Lt)}),ns=Ut(yt);var v=(e=>(e.ROOT="/",e.TODO="/",e.CASES="/cases",e.CALENDAR="/calendar",e.MAP="/map",e.CASE="/cases/:caseId",e.CASE_GENERAL="/cases/:caseId/",e.CASE_DETAILS="/cases/:caseId/details",e.CASE_PHOTOS="/cases/:caseId/photos",e.CASE_GENERAL_EDIT="/cases/:caseId/edit",e.CASE_DETAILS_EDIT="/cases/:caseId/details/edit",e.CASE_PHOTOS_EDIT="/cases/:caseId/photos/:room/edit",e.CASE_INSPECTOR_ASSIGN="/cases/:caseId/inspector-assign",e.SIGNUP="/signup",e.SIGNUPDETAILS="/signupdetails",e.LOGIN="/login",e.PROFILE="/profile",e.CONFIRM="/confirm",e.FORGOT_PASSWORD="/forgotpassword",e.PAGE_NOT_FOUND="*",e))(v||{}),G=(e=>(e.MANAGER="manager",e.INSPECTOR="inspector",e))(G||{});const os=d.div`
  width: 100vw;
  position: relative;
`,Ct=d.div`
  margin-top: 75px;
  margin-bottom: ${e=>e.role===G.MANAGER?"95px":"15px"};
`,Pe=d.div`
  margin-bottom: 100px;
`,as=d.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  text-align: center;
`,$e=d.h1`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.isSignUp?"black":e.theme.colors.tx_grey_main};
  padding-bottom: ${e=>e.isSignUp?"20px":"0px"};
  font-weight: 400;
  font-size: 32px;
  text-align: center;
`,T=d.p`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.tx_grey_main};
  font-weight: 400;
  font-size: 16px;
`,is=d.p`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.grey_hover};
  font-weight: 400;
  font-size: 14px;
`,O=d.label`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.blue_dark};
  font-weight: 400;
  font-size: 16px;
  align-self: ${({isSignUp:e})=>e?"start":"inherit"};
  margin-left: ${({isSignUp:e})=>e?"25px":"inherit"};
  margin-bottom: ${({isSignUp:e})=>e?"5px":"inherit"};
`,R=d.p`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.blue_dark};
  font-weight: 400;
  font-size: 14px;
`;d.p`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.tx_grey_main};
  font-weight: 400;
  font-size: 14px;
`;d.p`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.red};
  font-weight: 400;
  font-size: 14px;
`;const cs=d.div`
  position: fixed;
  display: flex;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  justify-content: space-between;
  background-color: ${e=>e.theme.colors.grey};
  height: 68px;
  padding: 16px 15px;
`,ls=d.div`
  display: flex;
  width: 5rem;
  cursor: pointer;
  align-items: center;
  justify-content: flex-end;
  gap: 35px;
`,me=d.img`
  top: 0;
  // padding-bottom: 60px;
  margin: ${({isSignUp:e})=>e?"10px":"inherit"};
`;d.img`
  top: 0;
`;const I=d.img`
  min-width: 3vh;
  width: 3vh;
  cursor: pointer;
`,Te=d.div`
  position: sticky;
  top: ${({scrollDirection:e})=>e==="down"?"-120px":"80px"};
  visibility: ${({scrollDirection:e})=>e==="down"?"hidden":"visible"};
  z-index: 20;
  width: 92%;
  margin: 15px auto 20px auto;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${e=>e.theme.colors.white};
  box-shadow: ${e=>e.theme.effects.shadow};
`,bt=d.div`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.color==="red"?e.theme.colors.red:e.theme.colors.grey};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;d.div`
  color: ${e=>e.color==="red"?e.theme.colors.red:e.theme.colors.grey};
  width: 3vh;
  cursor: pointer;
`;const ds=d.div`
  // padding-top: 65px;
`,ps=d.div`
  display: flex;
  margin: 0px auto 10px auto;
  width: 92%;
`,hs=d.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: ${e=>e.theme.effects.shadow};
  padding: 15px 18px;
  width: 100%;
  margin: 0px auto 10px auto;
  float: ${({isSize:e})=>e?"left":"none"};
  margin: ${({isSize:e})=>e?"0px auto 0px -6rem":"0px"};
  transition: 0.4s ease;
`,us=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ms=d.div`
  display: flex;
  gap: 20px;

  // & :nth-of-type(3) {
  //   margin-top: 10px;
  // }
`,gs=d.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    color: ${e=>e.theme.colors.red};
    font-weight: 800;
    cursor: pointer;
  }
`,xt=d.div`
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  width: 10rem;
  visibility: ${({isSize:e})=>e?"visible":"hidden"};
  width: ${({isSize:e})=>e?"6rem":"0rem"};
  transition: width 0.4s ease;
`,te=d.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  margin: 0 auto;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: ${e=>e.theme.effects.shadow};
`,S=d.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  height: 46px;
  margin: 10px 0 10px;
  align-items: center;
  box-sizing: border-box;
  // text-align: right;
  gap: 15px;
  border-bottom: ${e=>e.theme.colors.border} 1px solid;
  border-color: ${e=>e.color==="red"?e.theme.colors.red:e.theme.colors.grey};
`,Ce=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,fs=d.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    color: ${e=>e.theme.colors.blue_light};
  }
`,ge=d.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px 0;
`;d.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px;
  box-shadow: ${e=>e.theme.effects.shadow};
`;const L=d.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  gap: 5px;

  input {
    border: ${e=>e.theme.borderline.border};
    color: ${e=>e.theme.colors.tx_grey_main};
    height: 38px;
    font-weight: 400;
    font-size: 16px;
    padding: 5px 7px;
    width: 100%;
  }

  select {
    border: ${e=>e.theme.borderline.border};
    color: ${e=>e.theme.colors.tx_grey_main};
    height: 38px;
    font-weight: 400;
    font-size: 16px;
    padding: 5px 7px;
    width: 100%;
  }
`,ys=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 100%;
  height: 85px;
  // margin: 0 auto;
`,H=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 85px;
  margin: 0 auto;
  padding: 15px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${e=>e.theme.colors.white};
  box-shadow: ${e=>e.theme.effects.shadow};
`,Q=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${e=>e.isSignUp?e.theme.fonts.default:"360px"};
  height: 45px;
  border: none;
  background-color: ${e=>e.color==="red"?e.theme.colors.red:e.theme.colors.grey};
  margin-right: ${({isSignUp:e})=>e?"25px":"none"};
  margin-left: ${({isSignUp:e})=>e?"25px":"none"};
  margin-bottom: ${({isSignUp:e})=>e?"10px":"none"};
  border: none;
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.white};
  font-weight: 500;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.color==="red"?e.theme.colors.red_hover:e.theme.colors.grey_hover};
  }
`,Cs=d(Q)`
  position: absolute;
  margin-bottom: 45%;
`,k=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 45px;
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.white};
  background-color: ${e=>e.color==="red"?e.theme.colors.red:e.theme.colors.grey};
  padding: 1rem;
  border: none;

  &:not(last-item) {
    margin: 10px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${e=>e.color==="red"?e.theme.colors.red_hover:e.theme.colors.grey_hover};
  }
`,j=d.div`
  position: relative;
`,M=d.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${e=>e.theme.colors.grey};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: ${e=>e.theme.effects.shadow};
    transition: 0.2s;
  }
`,W=d.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${M} {
    background: ${e=>e.theme.colors.red};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`,St=d.div`
  z-index: 50;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,wt=d.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  max-width: 100%;
  max-height: 100%;
  padding: 4em 2em;
  text-align: center;
`,It=d.div`
  display: flex;
  flex-wrap: wrap;
`,Se=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 8px;
`,bs=d.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  margin: 0 auto 15px;
  padding: 15px;
  box-shadow: ${e=>e.theme.effects.shadow};
  gap: 10px;

  p {
    margin-bottom: 15px;
  }
`,Ne=d.div`
  box-sizing: border-box;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-image: url(${ir});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;

  // @media (min-width: 400px) {
  //   width: 20rem;
  //   margin: 10rem auto;
  // }
`,Ue=d.form`
  filter: none;
`;d.p`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.tx_grey_main};
  font-weight: 400;
  font-size: 16px;
`;const oe=d.input`
  font-family: ${e=>e.theme.fonts.default};
  color: ${e=>e.theme.colors.tx_grey_main};
  width: 340px;
  height: 33px;
  padding-left: 10px;
`;d.button`
  background-color: ${e=>e.theme.colors.red};
`;const we=d.p`
  color: ${e=>e.theme.colors.tx_grey_main};
  text-align: center;
  cursor: pointer;
  align-self: ${({isForgotPassword:e})=>e?"end":"inherit"};
  margin-right: ${({isForgotPassword:e})=>e?"7%":"inherit"};
`,ae=d.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  width: 100%;
  height: 100%;

  // @media (max-width: 480px) {
  //   max-width: 480px;
  // }
`,De=d.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`,ie=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`,Fe=d.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // gap: 30px;
`;d.div`
  background-image: url("../../assets/bg.jpg");
`;d.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;d.p`
  text-decoration: none;
  cursor: pointer;
  color: red;
`;const xs=d.p`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 15px;
  width: 92%;
  margin-bottom: 15px;
  box-shadow: ${e=>e.theme.effects.shadow};
  border: ${e=>e.active?"1px red solid":""}
  /* &:active {
    border: 1px red solid;
  } */
`,Ss=d.p`
  text-align: center;
  margin: 25% 20% auto 20%;
`,Oe=e=>t(St,{children:n(wt,{children:[t(T,{children:e.text}),t(ys,{children:e.buttons.map((r,s)=>t(k,{color:r!=null&&r.default?"red":"",children:t("button",{onClick:r.onClick,children:r.title})},s))})]})}),B=Rt,f=Bt,vt=()=>{const e=N(),r=B(),{insideCase:s}=f(b=>b.generalSlice),{userRole:a,userId:o,isInspectorActive:i}=f(b=>b.userSlice),[c,l]=m.exports.useState(!1),h=()=>{l(!0)},u=()=>{l(!1)},p=()=>{r(xe({userId:o,changedValue:{state:i?"active":"inactive"}})),l(!1),r(Zr())};return n(C,{children:[n(cs,{children:[s?t(I,{src:qt,onClick:()=>e("/"),alt:""}):t(me,{src:he,alt:"",onClick:()=>{e("/")}}),n(ls,{children:[a===G.INSPECTOR&&t(I,{src:i?Jt:Yt,onClick:h}),t(I,{src:Xt,onClick:()=>{e(v.PROFILE)}})]})]}),c&&t(Oe,{text:"Are you sure you want to change your status?",buttons:[{title:"Cancel",onClick:()=>{u()}},{title:"Confirm",default:!0,onClick:()=>{p()}}]})]})},ws=()=>{const e=N(),{isLoggedIn:r,userRole:s}=f(i=>i.userSlice);m.exports.useEffect(()=>{r||e(v.LOGIN)},[r]);const a=()=>{e("/cases/0/edit",{state:{isNewCase:!0}})},o=f(i=>i.generalSlice.insideCase);return n(os,{children:[t(vt,{}),s===G.MANAGER&&!o&&t(H,{children:t("button",{onClick:a,children:t(Q,{color:"red",children:"New Case"})})}),t(Ct,{role:s,children:t(Ve,{})})]})},Is=()=>t(C,{children:"404 Page Not Found"}),vs=Ae({email:se().email().required()}),As=()=>{const[e,r]=m.exports.useState(!1),[s,a]=m.exports.useState(!1),o=N(),{isHoveringEmail:i}=f(u=>u.userSlice),c=B(),l=u=>{u.email&&(c(qr(u.email)),a(!0),r(!e),Ze(u.email))},h=le({initialValues:{email:""},validationSchema:vs,onSubmit:u=>{l(u)}});return t(Ne,{children:t(Ue,{onSubmit:h.handleSubmit,noValidate:!0,children:n(ae,{children:[t(me,{src:he,isSignUp:!0}),n(Fe,{children:[t($e,{isSignUp:!0,children:"Sign Up"}),n(ie,{children:[t(O,{htmlFor:"email",isSignUp:!0,children:"Email"}),t(oe,{...h.getFieldProps("email")}),h.errors.email&&h.touched.email&&t(C,{children:i&&t("div",{children:h.errors.email})})]})]}),n(De,{children:[t("button",{type:"submit",children:t(Q,{isSignUp:!0,color:"red",children:"Sign Up"})}),t(we,{onClick:()=>{o("/login")},children:"Login"})]})]})})})},_s=Ae({email:se().required(),password:se().min(4,"Password must have 4 characters and more").required()}),ks=()=>{const e=N(),{areCredentialsWrong:r,isLoggedIn:s}=f(p=>p.userSlice),a=B(),[o,i]=re(["Name"]),[c,l]=re(["Password"]),h=p=>{a(be({name:p.email,password:p.password})),i("Name",p.email,{path:"/"}),l("Password",p.password,{path:"/"})};m.exports.useEffect(()=>{o.Name!==void 0&&o.Password!==void 0&&a(be({name:o.Name,password:c.Password})),a(Jr())},[]),m.exports.useEffect(()=>{s&&e(v.ROOT)},[s]);const u=le({initialValues:{email:"",password:""},validationSchema:_s,onSubmit:async p=>{h(p)}});return t(C,{children:t(Ne,{children:t(Ue,{onSubmit:u.handleSubmit,noValidate:!0,children:n(ae,{children:[t(me,{src:he,isSignUp:!0}),n(Fe,{children:[t($e,{isSignUp:!0,children:"Login"}),n(ie,{children:[t(O,{htmlFor:"email",isSignUp:!0,children:"Name"}),t(oe,{...u.getFieldProps("email")}),u.errors.email&&u.touched.email&&t("div",{children:u.errors.email})]}),n(ie,{children:[t(O,{htmlFor:"Password",isSignUp:!0,children:"Password"}),t(oe,{...u.getFieldProps("password"),type:"password"}),u.errors.password&&u.touched.password&&t("div",{children:u.errors.password}),r&&t("div",{children:"email or password is incorrect"}),t(we,{isForgotPassword:!0,onClick:()=>{e("/forgotpassword")},children:"Forgot Password"})]})]}),n(De,{children:[t("button",{type:"submit",children:t(Q,{isSignUp:!0,color:"red",children:"Login"})}),t(we,{onClick:()=>{e("/signup")},children:"Sign up"})]})]})})})})},Es=Ae({email:se().email().required()}),Rs=()=>{const[e,r]=m.exports.useState(!1),s=B(),a=N(),o=()=>{s(ye()),a("/login")},i=()=>{s(ye()),s(Ge())},c=()=>{s(Ge()),a("/login")},{isHoveringEmail:l,isResetLinkSend:h}=f(p=>p.userSlice),u=le({initialValues:{email:""},validationSchema:Es,onSubmit:p=>{p.email&&(r(!0),kr(p.email),s(ye()))}});return t(C,{children:t(Ne,{children:t(Ue,{onSubmit:u.handleSubmit,noValidate:!0,children:n(ae,{children:[t(me,{src:he,isSignUp:!0}),e?t("div",{children:t("h1",{children:" Email is sent "})}):t(C,{children:h?n(C,{children:[t(Ss,{children:"We sent a link for resetting password on your email"}),t("button",{onClick:o,children:t(Q,{isSignUp:!0,color:"red",children:"Back to login page"})})]}):n(ae,{children:[n(Fe,{children:[t($e,{isSignUp:!0,children:"Reset password"}),n(ie,{children:[t(O,{htmlFor:"email",isSignUp:!0,children:"Email"}),t(oe,{...u.getFieldProps("email")}),u.errors.email&&u.touched.email&&t(C,{children:l&&t("div",{children:u.errors.email})})]})]}),n(De,{children:[t("button",{type:"submit",children:t(Q,{isSignUp:!0,color:"red",onClick:i,children:"Request reset link"})}),t("button",{children:t(Q,{onClick:c,isSignUp:!0,children:"Cancel"})})]})]})})]})})})})},Bs=()=>{const e=ce(),r=Mt.parse(e.search),s=B(),{confirmUserHandler:a,userId:o}=f(i=>i.userSlice);return m.exports.useEffect(()=>{s(mt({token:r.token,email:r.email})),s(Yr(r.email)),s(gt(r.email))},[]),t(C,{children:a&&o?t(ze,{to:"/profile",state:{afterSignUp:!0}}):null})},At=()=>{const e=N(),{activeManagerTabBar:r}=f(s=>s.generalSlice);return t(C,{children:t(Te,{children:Qe.map(s=>t(bt,{onClick:()=>{e(s.path)},color:r===s.id?"red":"grey",children:t("div",{id:s.id,children:s.name})},s.id))})})},Le=()=>{const e=N(),{activeInspectorTabBar:r}=f(s=>s.generalSlice);return t(C,{children:t(Te,{children:Ke.map(s=>t(I,{onClick:()=>{e(s.path)},src:r===s.id?s.selected:s.default},s.id))})})},Ps=()=>{const e=N(),{activeCaseTabBar:r}=f(s=>s.generalSlice);return t(C,{children:t(Te,{children:Xe.map(s=>t(bt,{onClick:()=>{e(s.path)},color:r===s.id?"red":"grey",children:t("div",{id:s.id,children:s.name})},s.id))})})},$s=()=>{const{state:e}=ce(),r=e!=null&&e.afterSignUp?e==null?void 0:e.afterSignUp:!1;console.log(r);const[s]=m.exports.useState(!1),a=B(),{userId:o,userEmail:i,userRole:c,currentUser:l}=f(w=>w.userSlice);f(w=>w.generalSlice);const[h,u,p]=re(["Name"]),[b,P,D]=re(["Password"]),y=async w=>{await a(xe({userId:o,changedValue:{...w}}))},[g,F]=m.exports.useState({}),$=async()=>{const w=await wr(o);console.log(w),await F(w.user)};m.exports.useEffect(()=>{$()},[]);const V=N(),x=le({initialValues:{username:"",email_address:i,password:"",phone:"",role:c},onSubmit:w=>{y(w),Me({success:!0,user:w}),V("/")}}),A=()=>{a(Me(void 0)),p("Name",{path:"/"}),D("Password",{path:"/"})},K=()=>{a(xe({userId:o,changedValue:{username:x.values.username,phone:x.values.phone}}))};return m.exports.useEffect(()=>(a(ne(!0)),()=>{a(ne(!1))}),[]),t("div",{className:"CaseDiv",children:s?t(ze,{to:"/"}):n("div",{children:[t(vt,{}),n("form",{className:"Form",onSubmit:x.handleSubmit,children:[t(Ct,{children:n(ge,{children:[n(L,{children:[t(O,{children:"Username"}),t("input",{className:"InputCaseStyled",name:"username",onChange:x.handleChange,id:"username",type:"text",onBlur:x.handleBlur,defaultValue:g?g.username:""}),x.errors.username&&x.touched.username&&t("div",{className:"CaseErrors",children:x.errors.username})]}),n(L,{children:[t(O,{children:"Password"}),t("input",{className:"InputCaseStyled",name:"password",onChange:x.handleChange,id:"password",type:"password",onBlur:x.handleBlur,defaultValue:g?g.password:""}),x.errors.password&&x.touched.password&&t("div",{className:"CaseErrors",children:x.errors.password})]}),n(L,{children:[t(O,{children:"Phone number"}),t("input",{className:"InputCaseStyled",name:"phone",onChange:x.handleChange,id:"phone",type:"text",onBlur:x.handleBlur,defaultValue:g?g.phone:""}),x.errors.phone&&x.touched.phone&&t("div",{className:"CaseErrors",children:x.errors.phone})]}),r&&n(C,{children:[t("label",{className:"InputLabel",htmlFor:"role",children:"Role"}),t("select",{className:"SelectStyled",id:"role",name:"role",onChange:x.handleChange,children:Object.values(G).map((w,fe)=>t("option",{className:"OptionsStyled",value:w,children:w},fe))})]})]})}),n(H,{children:[t(Cs,{onClick:()=>{A(),V("/login"),window.location.reload()},children:t("button",{children:"Log out"})}),t(Q,{children:t("button",{className:"LongButtonStyled",type:"submit",color:"red",onClick:K,children:"Save"})})]})]})]})})},Ts=()=>{const e=B(),r=f(s=>s.generalSlice.isEditMode);return m.exports.useEffect(()=>(e(ne(!0)),()=>{e(ne(!1)),e(Be(void 0))}),[]),n(C,{children:[!r&&t(Ps,{}),t(Ve,{})]})},He=({time:e,address:r,state:s,caseId:a,isTodo:o,message:i,action:c})=>{const l=N(),h=B(),[u,p]=m.exports.useState(!1),{userId:b,userRole:P}=f(w=>w.userSlice),{deletedCaseId:D}=f(w=>w.caseSlice),[y,g]=m.exports.useState(!1),F=()=>{g(w=>!w)},$=()=>{l(`/cases/${a}`)},V=()=>{h(jr(a)),p(!0)},x=()=>{p(!1)},A=()=>{h(at({caseId:D,userId:b})),p(!1),g(w=>!w)},K=()=>{l(`/cases/${a}/edit`,{state:{isNewCase:!1}})};return n(C,{children:[n(ps,{children:[n(hs,{isSize:y,children:[n(us,{onClick:$,children:[n(ms,{children:[n(Ce,{children:[t(I,{src:lr}),t(T,{children:e})]}),n(fs,{children:[t(I,{src:pr}),t(T,{children:s})]})]}),n(Ce,{children:[t(I,{src:cr}),t(T,{children:r})]}),o&&n(C,{children:[n(Ce,{children:[t(I,{src:dr}),t(is,{children:i})]}),n(gs,{children:[t(I,{src:Qt}),t(T,{children:c})]})]})]}),P===G.MANAGER&&t(I,{src:Kt,onClick:F})]}),n(xt,{isSize:y,children:[t(I,{src:We,onClick:V}),t(I,{src:_e,onClick:K})]})]}),u&&t(Oe,{text:"Are you sure you want to close the case?",buttons:[{title:"Cancel",onClick:()=>{x()}},{title:"Confirm",default:!0,onClick:()=>{A()}}]})]})},Ns=()=>{var y;const e=B(),{userRole:r,userId:s}=f(g=>g.userSlice),{caseId:a}=X(),{currentCase:o,caseChanged:i}=f(g=>g.caseSlice),c=N();m.exports.useEffect(()=>(e(ke("general")),()=>{e(Be(void 0))}),[]),m.exports.useEffect(()=>{a&&e(Z(parseInt(a)))},[i]);const l=()=>{c("edit",{relative:"path",state:{isNewCase:!1}})},h=()=>{c("/",{relative:"route"})},u=()=>{c(`/cases/${a}/inspector-assign`)},p=g=>{console.log(new Date(g.target.value)),e(Vr({caseId:a,appointment:{date:new Date(g.target.value),time_from:new Date(0),time_to:new Date(0)}}))},b=()=>{a&&et(parseInt(a),s),c("/",{relative:"route"})},P=()=>{a&&tt(parseInt(a),s),c("/",{relative:"route"})},D=()=>{a&&rt(parseInt(a),s),c("/",{relative:"route"})};return console.log(o),console.log(a),t(C,{children:o&&n(C,{children:[n("div",{children:[n(te,{children:[n(S,{children:[t(R,{children:"Name"}),n(T,{children:[o==null?void 0:o.client_first_name," ",o==null?void 0:o.client_last_name]})]}),n(S,{children:[t(R,{children:"Phone Number"}),t(T,{children:o==null?void 0:o.client_phone})]}),n(S,{children:[t(R,{children:"Email"}),t(T,{children:o==null?void 0:o.client_email})]}),n(S,{children:[t(R,{children:"Address"}),t(T,{children:o==null?void 0:o.address})]}),n(S,{children:[t(R,{children:"Date Of Creating"}),t(T,{children:new Date(o==null?void 0:o.created_at).toLocaleDateString("en-GB")})]})]}),t(te,{children:t(de,{initialValues:{...o},onSubmit:async g=>{},children:({values:g,handleChange:F})=>{var $;return t(pe,{children:n(S,{children:[t(R,{children:"Date of appointment"}),t("input",{type:"date",id:"date",name:"Apointment",defaultValue:($=g.Appointment)!=null&&$.date?new Date(g==null?void 0:g.Appointment.date).toISOString().split("T")[0]:"",onChange:p})]})})}})}),t(te,{children:r===G.MANAGER?n(S,{children:[t(R,{children:"Inspector"}),t(T,{children:(y=o==null?void 0:o.Inspector)==null?void 0:y.username}),t(xt,{isSize:!0,children:t(I,{src:_e,onClick:u})})]}):null})]}),r===G.MANAGER?n(H,{children:[t("button",{children:t(k,{onClick:l,children:"Edit"})}),t("button",{children:t(k,{color:"red",onClick:h,children:"Submit"})})]}):o.state_id===2?n(H,{children:[t("button",{children:t(k,{onClick:b,children:"Decline"})}),t("button",{children:t(k,{color:"red",onClick:P,children:"Accept"})})]}):t(H,{children:t("button",{children:t(Q,{color:"red",onClick:D,children:"Submit"})})})]})})},Us=()=>{const{state:e}=ce(),{isNewCase:r}=e,{userId:s}=f(p=>p.userSlice),a=B(),{caseId:o}=X(),i=f(p=>p.caseSlice.currentCase),c=N();m.exports.useEffect(()=>(o&&o!=="0"&&a(Z(parseInt(o))),r&&a(Be(gr)),a(q(!0)),()=>{a(q(!1)),a(zr(0))}),[]);const l=()=>{c(-1)},h=()=>{c(`/cases/${o}`,{replace:!0})},u=f(p=>p.caseSlice.createdCaseId);return m.exports.useEffect(()=>{u!==0&&c(`/cases/${u}`)},[u]),t(C,{children:i&&t(de,{initialValues:{...i},onSubmit:async p=>{r?a(ot({...p,manager_id:s})):(a(Ee({id:o,changedValue:p})),h())},children:({values:p,isSubmitting:b,handleChange:P,handleBlur:D,handleSubmit:y})=>n(pe,{children:[n(ge,{children:[n(L,{children:[t(O,{children:"Name"}),t("input",{type:"text",id:"client_first_name",name:"client_first_name",defaultValue:p.client_first_name,onChange:P})]}),n(L,{children:[t(O,{children:"Surname"}),t("input",{type:"text",id:"client_last_name",name:"client_last_name",defaultValue:p.client_last_name,onChange:P})]}),n(L,{children:[t(O,{children:"Phone number"}),t("input",{type:"phone",id:"client_phone",name:"client_phone",defaultValue:p.client_phone,onChange:P})]}),n(L,{children:[t(O,{children:"Email"}),t("input",{type:"email",id:"client_email",name:"client_email",defaultValue:p.client_email,onChange:P})]}),n(L,{children:[t(O,{children:"Street / House number"}),t("input",{type:"text",id:"address",name:"address",defaultValue:p.address,onChange:P})]})]}),n(H,{children:[t("button",{type:"button",children:t(k,{onClick:l,children:"Cancel"})}),t("button",{id:"submit",type:"submit",children:t(k,{color:"red",children:"Save"})})]})]})})})},Ds=()=>{var P;const e=B(),{caseId:r}=X(),{userRole:s,userId:a}=f(D=>D.userSlice),{currentCase:o,caseChanged:i}=f(D=>D.caseSlice),c=N();m.exports.useEffect(()=>{e(ke("details"))},[]),m.exports.useEffect(()=>{r&&e(Z(parseInt(r)))},[i]);const l=()=>{c("edit",{relative:"path"})},h=()=>{c("/cases",{relative:"route"})},u=()=>{r&&et(parseInt(r),a),c("/",{relative:"route"})},p=()=>{r&&tt(parseInt(r),a),c("/",{relative:"route"})},b=()=>{r&&rt(parseInt(r),a),c("/",{relative:"route"})};return t(C,{children:o&&n(C,{children:[t(Pe,{children:n(te,{children:[n(S,{children:[t(R,{children:"Type of apartment"}),t(T,{children:(P=o.TypeOfProperty)==null?void 0:P.title})]}),n(S,{children:[t(R,{children:"Number of rooms"}),t(T,{children:o.number_of_rooms})]}),n(S,{children:[t(R,{children:"Floor"}),t(T,{children:o.floor})]}),n(S,{children:[t(R,{children:"Clear the property"}),t(I,{src:o.clear_area?z:void 0})]}),n(S,{children:[t(R,{children:"Backyard"}),t(I,{src:o.back_house?z:void 0})]}),n(S,{children:[t(R,{children:"Accessibility / parking facilities"}),t(I,{src:o.parking?z:void 0})]}),n(S,{children:[t(R,{children:"Elevator"}),t(I,{src:o.elevator?z:void 0})]}),n(S,{children:[t(R,{children:"Lift for furniture"}),t(I,{src:o.furniture_lift?z:void 0})]}),n(S,{children:[t(R,{children:"Clearance with closet contents (GSA)"}),t(I,{src:o.closet_contents?z:void 0})]}),n(S,{children:[t(R,{children:"Removing carpets (not glued)"}),t(I,{src:o.removing_carpets?z:void 0})]}),n(S,{children:[t(R,{children:"Removing lamps"}),t(I,{src:o.removing_lamps?z:void 0})]}),n(S,{children:[t(R,{children:"Removing curtain rods"}),t(I,{src:o.removing_curtain?z:void 0})]})]})}),s===G.MANAGER?n(H,{children:[t("button",{children:t(k,{onClick:l,children:"Edit"})}),t("button",{children:t(k,{color:"red",onClick:h,children:"Submit"})})]}):o.state_id===2?n(H,{children:[t("button",{children:t(k,{onClick:u,children:"Decline"})}),t("button",{children:t(k,{color:"red",onClick:p,children:"Accept"})})]}):n(H,{children:[t("button",{children:t(k,{onClick:l,children:"Edit"})}),t("button",{children:t(k,{color:"red",onClick:b,children:"Submit"})})]})]})})},Fs=()=>{const e=B(),{caseId:r}=X(),s=f(c=>c.caseSlice.currentCase),a=N();m.exports.useEffect(()=>(r&&r!=="0"&&e(Z(parseInt(r))),e(q(!0)),()=>{e(q(!1))}),[]);const o=()=>{a(-1)},i=()=>{a(`/cases/${r}/details`,{replace:!0})};return t(C,{children:t(Pe,{children:s&&t(de,{initialValues:{...s},onSubmit:async c=>{e(Ee({id:r,changedValue:c})),i()},children:({values:c,isSubmitting:l,handleChange:h,handleBlur:u,handleSubmit:p})=>n(pe,{children:[n(ge,{children:[n(L,{children:[t("label",{htmlFor:"apartments",children:"Type of appartment"}),t("select",{id:"apartments",name:"type_of_property_id",onChange:h,defaultValue:c.type_of_property_id,children:hr.map(b=>t("option",{value:b.id,children:b.name},b.id))})]}),n(L,{children:[t("label",{htmlFor:"number_of_rooms",children:"Number of rooms"}),t("select",{id:"number_of_rooms",name:"number_of_rooms",onChange:h,defaultValue:c.number_of_rooms,children:mr.map(b=>t("option",{value:b.value,children:b.name},b.value))})]}),n(L,{children:[t("label",{htmlFor:"floor",children:"Floor"}),t("select",{id:"floor",name:"floor",onChange:h,defaultValue:c.floor,children:ur.map(b=>t("option",{value:b.value,children:b.name},b.value))})]}),n(S,{children:[t("label",{htmlFor:"clear_area",children:"Clear the property"}),n(j,{children:[t(W,{id:"clear_area",type:"checkbox",name:"clear_area",onChange:h,checked:c.clear_area}),t(M,{htmlFor:"clear_area"})]})]}),n(S,{children:[t("label",{htmlFor:"back_house",children:"Back house"}),n(j,{children:[t(W,{id:"back_house",type:"checkbox",name:"back_house",onChange:h,checked:c.back_house}),t(M,{htmlFor:"back_house"})]})]}),n(S,{children:[t("label",{htmlFor:"parking",children:"Accessibility/parking facilities (trucks and vans)"}),n(j,{children:[t(W,{id:"parking",type:"checkbox",name:"parking",onChange:h,checked:c.parking}),t(M,{htmlFor:"parking"})]})]}),n(S,{children:[t("label",{htmlFor:"elevator",children:"Elevator"}),n(j,{children:[t(W,{id:"elevator",type:"checkbox",name:"elevator",onChange:h,checked:c.elevator}),t(M,{htmlFor:"elevator"})]})]}),n(S,{children:[t("label",{htmlFor:"furniture_lift",children:"Furniture lift"}),n(j,{children:[t(W,{id:"furniture_lift",type:"checkbox",name:"furniture_lift",onChange:h,checked:c.furniture_lift}),t(M,{htmlFor:"furniture_lift"})]})]}),n(S,{children:[t("label",{htmlFor:"closet_contents",children:"Clearance with closet contents(GSA)"}),n(j,{children:[t(W,{id:"closet_contents",type:"checkbox",name:"closet_contents",onChange:h,checked:c.closet_contents}),t(M,{htmlFor:"closet_contents"})]})]}),n(S,{children:[t("label",{htmlFor:"removing_carpets",children:"Removing carpets (not glued)"}),n(j,{children:[t(W,{id:"removing_carpets",type:"checkbox",name:"removing_carpets",onChange:h,checked:c.removing_carpets}),t(M,{htmlFor:"removing_carpets"})]})]}),n(S,{children:[t("label",{htmlFor:"removing_lamps",children:"Removing lamps"}),n(j,{children:[t(W,{id:"removing_lamps",type:"checkbox",name:"removing_lamps",onChange:h,checked:c.removing_lamps}),t(M,{htmlFor:"removing_lamps"})]})]}),n(S,{children:[t("label",{htmlFor:"removing_curtain",children:"Removing curtain rods"}),n(j,{children:[t(W,{id:"removing_curtain",type:"checkbox",name:"removing_curtain",onChange:h,checked:c.removing_curtain}),t(M,{htmlFor:"removing_curtain"})]})]})]}),n(H,{children:[t("button",{type:"button",children:t(k,{onClick:o,children:"Cancel"})}),t("button",{id:"submit",type:"submit",children:t(k,{color:"red",children:"Save"})})]})]})})})})},Os=e=>t(St,{children:t(wt,{style:{background:`url(${e.src}) center /contain no-repeat`,width:"100vw",height:"100vh"},onClick:e.onClick})}),Ls=()=>{const{caseRooms:e,caseChanged:r}=f(A=>A.caseSlice),s=B(),{caseId:a}=X(),o=N(),[i,c]=m.exports.useState(!1),[l,h]=m.exports.useState(void 0),[u,p]=m.exports.useState(!1),[b,P]=m.exports.useState(0);m.exports.useEffect(()=>{s(ke("photos"))},[]),m.exports.useEffect(()=>(a&&s(ct(parseInt(a))),()=>{s(Qr([]))}),[r]);const D=A=>{if(A.target.id==="0"){let K=0;e.length&&(K=Math.max.apply(null,Array.from(e,w=>w.room))),o(`${K+1}/edit`,{state:{isNewRoom:!0}})}else a&&s(Re({caseId:parseInt(a),room:parseInt(A.target.id)})),o(`${A.target.id}/edit`,{state:{isNewRoom:!1}})},y=A=>{P(parseInt(A.target.id)),p(!0)},g=()=>{p(!1)},F=()=>{a&&s(dt({caseId:parseInt(a),room:b})),P(0),p(!1)},$=A=>{h(A.target.src),c(!0)},V=A=>{h(void 0),c(!1)},x=()=>{};return n(C,{children:[t(Pe,{children:e.map((A,K)=>t("div",{children:n(bs,{children:[n(T,{style:{position:"relative"},children:[A.room_title,t("img",{onClick:y,src:We,id:A.room.toString(),style:{position:"absolute",top:"0",right:"50px",zIndex:"0"}}),t("img",{onClick:D,src:_e,id:A.room.toString(),style:{position:"absolute",top:"0",right:"0",zIndex:"0"}})]}),t(T,{children:A.description}),t(It,{children:A.CasePhoto.map((w,fe)=>t(Se,{children:t("img",{onClick:$,src:"data:image/jpeg;base64,"+Buffer.from(w.photo.data).toString("base64"),alt:"",style:{width:"100px",height:"90px"}})},fe))})]})},K))}),n(H,{children:[t("button",{children:t(k,{id:"0",onClick:D,children:"Add room"})}),t("button",{id:"submit",type:"submit",children:t(k,{color:"red",onClick:x,children:"Submit"})})]}),u&&t(Oe,{text:"Are you sure you want to delete the room?",buttons:[{title:"Cancel",onClick:()=>{g()}},{title:"Confirm",default:!0,onClick:()=>{F()}}]}),i&&t(Os,{src:l,onClick:V})]})};window.Buffer=Gt.Buffer;const Hs=()=>{const{state:e}=ce(),{isNewRoom:r}=e,s=N(),a=B(),o=f(y=>y.caseSlice.currentRoom),[i,c]=m.exports.useState([]),{caseId:l}=X(),{room:h}=X();m.exports.useEffect(()=>(!r&&l&&h&&l!=="0"&&h!=="0"&&a(Re({caseId:parseInt(l),room:parseInt(h)})),a(q(!0)),()=>{a(Wr(void 0)),a(q(!1))}),[]),m.exports.useEffect(()=>{o&&c(u())},[o]);const u=()=>{const y=[];if(o)for(const g of o.CasePhoto){const F="data:image/jpeg;base64,"+Buffer.from(g.photo.data).toString("base64");y.push({photo:F,id:Math.max.apply(null,[0,...Array.from(y,$=>$.id)])+1,file_name:g.file_name})}return y},p=y=>new Promise((g,F)=>{const $=new FileReader;$.readAsDataURL(y),$.onload=()=>{g($.result)},$.onerror=V=>{F(V)}}),b=async y=>{const g=y.target.files.item(0),F=await p(g);c([...i,{photo:F,id:Math.max.apply(null,[0,...Array.from(i,$=>$.id)])+1,file_name:g.name}]),y.target.value=""},P=y=>{c(i.filter(g=>g.id!=y.target.id))},D=()=>{s(-1)};return t(C,{children:(r||o)&&t(de,{initialValues:{room_title:o==null?void 0:o.room_title,description:o==null?void 0:o.description},onSubmit:async y=>{l&&h&&l!=="0"&&h!=="0"&&(a(lt({caseId:parseInt(l),room:parseInt(h),item:y})),a(pt({caseId:parseInt(l),room:parseInt(h),photos:i}))),s(-1)},children:({values:y,isSubmitting:g,handleChange:F,handleBlur:$,handleSubmit:V})=>n(pe,{children:[n(ge,{children:[n(L,{children:[t(O,{htmlFor:"title",children:"Name"}),t("input",{id:"room_title",name:"room_title",type:"text",defaultValue:y==null?void 0:y.room_title,onChange:F})]}),n(L,{children:[t(O,{htmlFor:"description",children:"Description"}),t("input",{id:"description",name:"description",type:"text",defaultValue:y==null?void 0:y.description,onChange:F})]}),n(It,{children:[i.map((x,A)=>n(Se,{style:{position:"relative"},children:[t(I,{onClick:P,src:or,id:x.id.toString(),style:{position:"absolute",top:"0",right:"0",zIndex:"10"}}),t(I,{src:x.photo,alt:"",style:{position:"relative",width:"100px",height:"100px"}})]},A)),n(Se,{style:{width:"100px",height:"100px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t("input",{id:`file-loader-button-${1}`,type:"file",accept:"image/*",capture:"environment",onChange:x=>b(x),style:{display:"none"}}),t(O,{htmlFor:`file-loader-button-${1}`,style:{width:"100px",height:"100px",backgroundImage:`url(${ar})`}})]})]})]}),n(H,{children:[t("button",{type:"button",children:t(k,{onClick:D,children:"Cancel"})}),t("button",{id:"submit",type:"submit",children:t(k,{color:"red",children:"Save"})})]})]})})})},Ms=()=>{const e=B(),{casesToDo:r,caseChanged:s}=f(i=>i.caseSlice),{userRole:a,userId:o}=f(i=>i.userSlice);return m.exports.useEffect(()=>{e(Je("todo")),e(ue("todo"))},[]),m.exports.useEffect(()=>{o!==0&&e(nt(o))},[s]),n(C,{children:[a===G.MANAGER?t(At,{}):t(Le,{}),t(ds,{children:r&&r.map((i,c)=>{var l;return t(He,{time:new Date(i.created_at).toLocaleDateString("en-GB"),address:i.address,caseId:i.id,state:(l=i.State)==null?void 0:l.title,message:i.message,action:i.action,isTodo:!0},c)})})]})},Gs=()=>{const{cases:e,caseChanged:r}=f(a=>a.caseSlice),s=B();return m.exports.useEffect(()=>{s(Je("cases")),s(ue("cases"))},[]),m.exports.useEffect(()=>{s(st())},[r]),n(C,{children:[t(At,{}),e&&e.filter(a=>a.state_id!=7&&a).map((a,o)=>{var i;return t(He,{time:new Date(a.created_at).toLocaleDateString("en-GB"),address:a.address,caseId:a.id,state:(i=a.State)==null?void 0:i.title,isTodo:!1},o)})]})},Vs=()=>{const e=B();let r=new Date;r.setHours(0,0,0,0);const[s,a]=m.exports.useState(r),{appointments:o}=f(l=>l.caseSlice),{userId:i}=f(l=>l.userSlice);m.exports.useEffect(()=>{e(ue("calendar")),e(ht(i))},[]);const c=l=>{a(l)};return n(C,{children:[t(Le,{}),t(as,{children:t(Vt.Calendar,{date:s,onChange:c})}),o&&o.filter(l=>{if(l.date){const h=new Date(l.date);return h.setHours(0,0,0,0),!(h.valueOf()-s.valueOf())}else return!1}).map((l,h)=>{var u;return t(He,{time:(u=l.Case)!=null&&u.created_at?new Date(l.Case.created_at).toLocaleDateString("en-GB"):"",address:l.Case?l.Case.address:"",caseId:l.Case?l.Case.id:0,isTodo:!1},h)})]})},zs=()=>{const e=B(),r=f(l=>l.userSlice.userId),s=f(l=>l.caseSlice.coordinates),a=m.exports.useRef(null),o=m.exports.useRef(null),[i]=m.exports.useState(9),c=()=>{a.current!==null&&(o.current=new ee.exports.Map({container:a.current,style:"https://api.maptiler.com/maps/streets/style.json?key=ciIcRLdEWxdk5UYhs2Uk",center:s.length?[s[0].lng,s[0].lat]:fr,zoom:i})),o.current.addControl(new ee.exports.NavigationControl({}),"top-right"),s.map((l,h)=>new ee.exports.Marker({color:"#FF0000"}).setLngLat([l.lng,l.lat]).setPopup(new ee.exports.Popup().setHTML(`<h2>${l.address}<h2>`)).addTo(o.current))};return m.exports.useEffect(()=>{r&&e(it(r)),e(ue("map"))},[]),m.exports.useEffect(()=>{o.current||c()},[s]),n(C,{children:[t(Le,{}),s.lat!==0&&s.lng!==0&&t("div",{className:"MapWindow",ref:a,style:{width:"100vw"}}),s.lat!==0&&s.lng!==0&&t("div",{className:"MapWindow",ref:a,style:{width:"100vw",height:"100vh"}})]})},js=()=>{const{inspectorList:e,userId:r}=f(p=>p.userSlice),[s,a]=m.exports.useState(0),o=N(),i=B(),{caseId:c}=X();m.exports.useEffect(()=>(i(ft()),i(q(!0)),()=>{i(q(!1))}),[]);const l=()=>{o(-1)},h=p=>{a(parseInt(p.target.id))},u=()=>{c&&i(ut({caseId:parseInt(c),userId:r,inspectorId:s})),o(`/cases/${c}`,{replace:!0})};return n(C,{children:[e&&e.map((p,b)=>n(xs,{id:p.id.toString(),onClick:h,active:p.id===s,children:[t(R,{children:p.username}),t(T,{children:p.state})]},b)),n(H,{children:[t("button",{children:t(k,{onClick:l,children:"Cancel"})}),t("button",{children:t(k,{color:"red",onClick:u,children:"Save"})})]})]})},Ws=[{path:v.ROOT,element:t(ws,{}),children:[{path:v.TODO,element:t(Ms,{})},{path:v.CASES,element:t(Gs,{})},{path:v.CALENDAR,element:t(Vs,{})},{path:v.MAP,element:t(zs,{})},{path:v.CASE,element:t(Ts,{}),children:[{path:v.CASE_GENERAL,element:t(Ns,{})},{path:v.CASE_GENERAL_EDIT,element:t(Us,{})},{path:v.CASE_DETAILS,element:t(Ds,{})},{path:v.CASE_DETAILS_EDIT,element:t(Fs,{})},{path:v.CASE_PHOTOS,element:t(Ls,{})},{path:v.CASE_PHOTOS_EDIT,element:t(Hs,{})},{path:v.CASE_INSPECTOR_ASSIGN,element:t(js,{})}]}]},{path:v.SIGNUP,element:t(As,{}),children:[]},{path:v.PROFILE,element:t($s,{}),children:[]},{path:v.LOGIN,element:t(ks,{}),children:[]},{path:v.FORGOT_PASSWORD,element:t(Rs,{}),children:[]},{path:v.CONFIRM,element:t(Bs,{}),children:[]},{path:v.PAGE_NOT_FOUND,element:t(Is,{}),children:[]}],Qs=zt(Ws);function Ks(){return n(C,{children:[t(jt,{}),t(Pt,{store:yt,children:t(Ft,{loading:null,persistor:ns,children:t(Et,{theme:Wt,children:t(Ht,{router:Qs})})})})]})}_t.createRoot(document.getElementById("root")).render(t(Ks,{}));
