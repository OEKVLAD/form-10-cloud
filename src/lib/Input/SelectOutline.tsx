import React, {FunctionComponent, ReactDOM, useContext, useEffect, useState} from 'react';
import style from './SelectOutline.module.scss';

type InputSelectOutlineProps = {
    title: string,
    validTittle: string,
    valid?: boolean,
    value: string,
    noTittle: boolean,
    name: string,
    options: any,
    callBack: any,
    showIndexWhenMobile?: boolean
}

export const LibInputSelectOutline: FunctionComponent<InputSelectOutlineProps> = ({showIndexWhenMobile, callBack, options, name, title, value, noTittle, validTittle, valid }) =>
{
    const [hoverState, setHoverState] = useState(false);
    const [selectContent, setSelectContent] = useState("");
    const [selectContentId, setSelectContentId] = useState(value);
    let wrapperElementRef: React.Component<any, {}, any> | Element | null | undefined;

    function handleClickOutside(e: any) {
        if (!e.path.includes(wrapperElementRef)) {
            setHoverState(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        }
    }, [])

    return (
        <>
            <div className={style.inputText}  ref={(element)=> {if(element!=null){wrapperElementRef = element}}}>
                <label>
                    <span className={style.inputTittleContainer}>
                        <span className={`${style.inputTittle} ${hoverState||selectContent.length>0?style.active:""} ${valid===false?style.unValid:""} ${noTittle?style.noTittle:""}`}>
                            {title}
                         </span>
                    </span>
                    <input className={`${style.inputField}  ${hoverState?style.active:""} ${valid===false?style.unValid:""}`} value={selectContent}
                           onSelect={() => setHoverState(true)} readOnly={true} name={name}/>
                    <div className={`${style.inputArrow} ${hoverState?style.active:""}`}/>
                    <span className={style.inputValidContainer}>
                        <span className={`${style.inputValidTittle} ${valid===false?style.unValid:""}`}>
                            {validTittle}
                         </span>
                    </span>
                </label>
                <input value={selectContentId} hidden={true} readOnly={true}/>
                <span className={`${style.inputVariantContainer} ${hoverState?style.active:""}`}>
                    <span className={`${style.inputVariant}`} onClick={()=>{setHoverState(false); setSelectContent(""); setSelectContentId("0"); callBack("0")}}><br/></span>
                    {options.map((option: {
                        id: string,
                        tittle: string
                    }) =>
                        <span className={`${style.inputVariant}`} onClick={()=>{setHoverState(false); if(showIndexWhenMobile && window.innerWidth<760){ setSelectContent(option.id);}else{ setSelectContent(option.tittle);} setSelectContentId(option.id); callBack(option.id)}}>
                            {!showIndexWhenMobile?(
                                <>{option.tittle}</>
                            ):(
                                <>
                                    <span className={style.desktop}>{option.tittle}</span>
                                    <span className={style.mobile}>{option.id}</span>
                                </>
                            )}


                        </span>
                    )}
                </span>
            </div>

        </>
    );
}