/**
 * @file
 * @date 2023-06-15
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2023-06-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const RootRouter: React.FC = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const MobileContacts = React.lazy(() => import("~/Pages/MobileContacts"));
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** USEEFFECT START **** ------------------------------------ */
    /************* This section will include this component useEffect *************/
    /* <------------------------------------ **** USEEFFECT END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Suspense>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MobileContacts />}></Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
export default RootRouter;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
