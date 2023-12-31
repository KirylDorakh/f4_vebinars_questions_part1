import classnames from "classnames";
import {formatDate} from "../../../utils";
import {MESSAGE_STATUS} from "../../../const";
import React from 'react';
import css from "./ListItem.module.css";

const ListItem = (props) => {
    const {message, messages, setMessagesList} = props
    const isNew = message.status === MESSAGE_STATUS.UNREAD

    const handleClick = () => {
        const newMessages = messages.map(m => {
            if(m.id === message.id){
                const newMessage = {...m, status: MESSAGE_STATUS.READ}
                return newMessage
            }
            return m
        })
        setMessagesList(newMessages)
    }

    return (
        <div className={classnames(css.row, { [css.isNew]: isNew })} onClick={handleClick}>
            <div className={classnames(css.col, css.colNew)}>
                <span className={css.isNew}>New</span>
            </div>
            <div className={classnames(css.col, css.colEmail)}>{message.sender}</div>
            <div className={classnames(css.col, css.colTitle)}>{message.title}</div>
            <div className={classnames(css.col, css.colDate)}>{formatDate(message.received)}</div>
        </div>
    );
};

export default ListItem;