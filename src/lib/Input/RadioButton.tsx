import React, { FunctionComponent, useContext, useState} from 'react';
import style from './RadioButtton.module.scss';

type InputRadioButton = {
    title: string,
    value: string,
    onClick?: any,
    checked: boolean,
}

export const LibInputRadioButton: FunctionComponent<InputRadioButton> = ({title, value, checked, onClick}) =>
{
    return (
        <>
            <div className={`${style.inputRadioButton} ${checked?(style.active):""}`} onClick={onClick}>
                <label>
                    <div className={style.inputRadioButtonTittle}>{title}</div>
                    <div className={`${style.inputRadioButtonChecked} ${checked ? (style.active) : ""}`}/>
                </label>
            </div>
        </>
    );
}