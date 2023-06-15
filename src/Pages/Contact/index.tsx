/**
 * @file
 * @date 2023-06-15
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2023-06-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React from "react";
import style from "./style.scss";
import { ContactType } from "~/Default/contacts";
import avatar from "~/Assets/images/avatar.jpg";
import { ContactItem } from "~/Utils";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */

interface ContactProps {
    item: ContactItem;
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Contact: React.FC<ContactProps> = ({ item }): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** USEEFFECT START **** ------------------------------------ */
    /************* This section will include this component useEffect *************/
    /* <------------------------------------ **** USEEFFECT END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.contact_container}>
            <img src={avatar} alt="" />
            <p>{item.name}</p>
        </div>
    );
};
export default Contact;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
