import React, { FunctionComponent, useContext, useState} from 'react';
import style from './Text.module.scss';

type InputTextProps = {
    title: string,
    validTittle: string,
    valid?: boolean,
    value: string,
    onChange: any,
    noTittle: boolean,
    type?: string
    name: string,
}

export const LibInputText: FunctionComponent<InputTextProps> = ({type,  title, value, onChange, validTittle, valid, noTittle, name}) =>
{
    const [hoverState, setHoverState] = useState(false);

    return (
        <>
            <div className={style.inputText}>
                <label>
                    <span className={style.inputTittleContainer}>
                        <span className={`${style.inputTittle} ${hoverState||value.length>0?style.active:""} ${valid===false?style.unValid:""} ${noTittle?style.noTittle:""} `}>
                            {title}
                         </span>
                    </span>
                    <input className={`${style.inputField} ${valid===false?style.unValid:""}`} value={value} onChange={onChange}
                           onSelect={() => setHoverState(true)}
                           onBlur={() => setHoverState(false)} name={name} type={type?type:"text"}/>
                    <div className={`${style.inputUnderline} ${hoverState?style.active:""}  ${valid===false?style.unValid:""}`}/>
                    <span className={style.inputValidContainer}>
                        <span className={`${style.inputValidTittle} ${valid===false?style.unValid:""}`}>
                            {validTittle}
                         </span>
                    </span>
                </label>
            </div>

        </>
    );
}