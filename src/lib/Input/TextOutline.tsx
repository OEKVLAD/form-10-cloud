import React, { FunctionComponent, useContext, useState} from 'react';
import style from './TextOutline.module.scss';

type InputTextOutlineProps = {
    title: string,
    validTittle: string,
    valid?: boolean,
    value: string,
    onChange: any,
    noTittle: boolean,
    name: string,
}

export const LibInputTextOutline: FunctionComponent<InputTextOutlineProps> = ({name, title, value, onChange, validTittle, valid, noTittle}) =>
{
    const [hoverState, setHoverState] = useState(false);

    return (
        <>
            <div className={style.inputText}>
                <label>
                    <span className={style.inputTittleContainer}>
                        <span className={`${style.inputTittle} ${hoverState||value.length>0?style.active:""} ${valid===false?style.unValid:""} ${noTittle?(style.noTittle):("")}`}>
                            {title}
                         </span>
                    </span>
                    <input className={`${style.inputField} ${hoverState?style.active:""} ${valid===false?style.unValid:""}`} value={value} onChange={onChange}
                           onSelect={() => setHoverState(true)}
                           onBlur={() => setHoverState(false)} name={name}/>
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