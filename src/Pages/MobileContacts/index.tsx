/**
 * @file
 * @date 2023-06-15
 * @author zhuxiaojiao
 * @lastModify zhuxiaojiao 2023-06-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useEffect, useState } from "react";
import style from "./style.scss";
import Contact from "../Contact";
import { ContactsBoxList, handleContactsSort } from "~/Utils";
import { contacts } from "~/Default/contacts";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const MobileContacts: React.FC = (): JSX.Element => {
    /* <------------------------------------ **** STATE START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /** 排序完成后的联系人列表 */
    const [contactList, setContactList] = useState<ContactsBoxList>();
    /* <------------------------------------ **** STATE END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** USEEFFECT START **** ------------------------------------ */
    /************* This section will include this component useEffect *************/
    useEffect(() => {
        const list: ContactsBoxList = handleContactsSort(contacts);
        setContactList(list);
        // const strCode = "一".charCodeAt(0);
        // console.log(
        //     strCode.toString(2),
        //     strCode.toString(8),
        //     strCode.toString(10),
        //     strCode.toString(16),
        // );
    }, []);

    /* <------------------------------------ **** USEEFFECT END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <div className={style.mobileContacts_container}>
            {contactList &&
                Object.keys(contactList).map((str) => {
                    return (
                        contactList[str].length > 0 && (
                            <div key={str} className={style.mobileContacts_box}>
                                <span>{str}</span>
                                {contactList[str].map((item, i) => {
                                    return <Contact key={i} item={item} />;
                                })}
                            </div>
                        )
                    );
                })}
        </div>
    );
};
export default MobileContacts;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
