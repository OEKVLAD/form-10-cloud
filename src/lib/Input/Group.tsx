import React, { FunctionComponent } from 'react';
import style from "./Group.module.scss";

type InputGroupProps = {
        title: string,
        validTittle?: string,
        valid: boolean,
}


export const LibInputGroup: FunctionComponent<InputGroupProps> = ({ children, title, validTittle, valid }) =><>

        <div className={style.inputGroupContainer}>
                <span className={style.inputTittle}>
                        {title}
                </span>
                <div className={style.inputContainer}>
                        { children }
                </div>
                <span className={style.inputValidContainer}>
                        <span className={`${style.inputValidTittle} ${valid===false?style.unValid:""}`}>
                            {validTittle}
                         </span>
                </span>
        </div>


</>