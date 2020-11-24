import React, { FunctionComponent, useContext, useState} from 'react';
import style from './RadioButtonList.module.scss';

import {LibInputRadioButton} from './RadioButton';

type InputRadioButtonList = {
    title: string,
    name: string,
    callBack: any,
    validTittle: string,
    valid: boolean,
}

export const LibInputRadioButtonList: FunctionComponent<InputRadioButtonList> = ({ validTittle, valid, name, title, callBack}) =>
{
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <div className={style.inputRadioButtonListContainer}>
                <span className={style.inputTittleRadioButtonListContainer}>
                    <span className={`${style.inputTittleRadioButtonList}`}>
                        {title}
                    </span>
                </span>

                <div className={style.inputRadioButtonList}>
                    <div className={style.inputRadioButtonContainer}>
                        <LibInputRadioButton title={"Yes"} value={"value"} checked={inputValue=="true"?true:false} onClick={()=>{
                            setInputValue(
                            "true"); callBack("true")}}/>
                    </div>
                    <div className={style.inputRadioButtonContainer}>
                        <LibInputRadioButton title={"No"} value={"value"} checked={inputValue=="false"?true:false} onClick={()=>{
                            setInputValue(
                                "false"); callBack("false")}}/>
                    </div>
                    <input hidden={true} value={inputValue} name={name}/>
                    <span className={style.inputValidContainer}>
                        <span className={`${style.inputValidTittle} ${valid===false?style.unValid:""}`}>
                            {validTittle}
                         </span>
                    </span>
                </div>

            </div>

        </>
    );
}