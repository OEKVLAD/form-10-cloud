import React, { FunctionComponent, useContext, useState} from 'react';
import style from './Middle.module.scss';

type ButtonMiddleProps = {
    value: string,
    disabled: boolean,
    onClick?: any
    type?: string
    icon?: any
}

export const LibButtonMiddle: FunctionComponent<ButtonMiddleProps> = ({ value, disabled, type, icon}) =>
{
    return (
        <>
            <button className={style.ButtonMiddle} disabled={disabled} type={"submit"}>
                <span className={style.tittle}>{value}</span>
                {icon?(
                    <span className={style.icon}><img src={icon}/></span>
                ):(null)}
            </button>
        </>
    );
}