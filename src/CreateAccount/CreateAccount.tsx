import React, {useState} from 'react';

import {ComponentFormsBackground} from '../Component/Forms/Background/Background';
import {LibInputText} from '../lib/Input/Text';
import {LibInputSelect} from '../lib/Input/Select';
import {LibInputSelectOutline} from '../lib/Input/SelectOutline';
import {LibInputRadioButtonList} from '../lib/Input/RadioButtonList';
import {LibInputTextOutline} from '../lib/Input/TextOutline';
import {LibInputGroup} from '../lib/Input/Group';
import {LibButtonMiddle} from '../lib/Button/Middle';
import style from './CreateAccount.module.scss';

import CreateAccountService from "./CreateAccount.service"
import Validation from '../lib/Validation/Validation';


import arrowLeft from './assets/arrowLeft.svg';

function CreateAccount() {

    const [nameValue, setNameValue] = useState("");
    const [countryCodeValue, setCountryCode] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [playChessValue, setPlayChessValue] = useState("");
    const [birthDayValue, setBirthDayValue] = useState("");
    const [birthMonthValue, setBirthMonthValue] = useState("");
    const [birthYearValue, setBirthYearValue] = useState("");

    const [nameValid, setNameValid] = useState(true);
    const [countryCodeValid, setCountryCodeValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [playChessValid, setPlayChessValid] = useState(true);
    const [birthDayValid, setBirthDayValid] = useState(true);
    const [birthMonthValid, setBirthMonthValid] = useState(true);
    const [birthYearValid, setBirthYearValid] = useState(true);
    const [yearOldValid, setYearOldValid] = useState(true);

    const service = new CreateAccountService(nameValue,countryCodeValue,phoneValue,playChessValue,birthDayValue,birthMonthValue,birthYearValue);

    function handleValue(event: any, setValueState: { (value: React.SetStateAction<string>): void; (arg0: any): void; }, valid?: any) {
        if(!valid || valid(event.target.value))
            setValueState(event.target.value);
    }

    function submit(e:any) {
        e.preventDefault();

        setNameValid(Validation.validName(nameValue));
        setCountryCodeValid(countryCodeValue.length>0);
        setPhoneValid(parseInt(countryCodeValue)>0);
        setPlayChessValid(playChessValue.length>0);

        let validBirthDay = Validation.validDay(birthDayValue) && birthDayValue.length>0;
        let validBirthMonth = birthMonthValue.length>0;
        let validBirthYear = Validation.validYear(birthYearValue) && birthYearValue.length>3;

        setBirthDayValid(validBirthDay);
        setBirthMonthValid(validBirthMonth);
        setBirthYearValid(validBirthYear);

        if(validBirthDay && validBirthMonth && validBirthYear)
            setYearOldValid(Validation.validBirth18(parseInt(birthDayValue), parseInt(birthMonthValue), parseInt(birthYearValue)));

        service.submit(e)
    }

    return (
        <div className={style.CreateAccount}>
          <ComponentFormsBackground pageTittle={"Your account"}>
              <form onSubmit={submit}>
                  <div className={style.formContainer}>
                      <div className={style.formRow}>
                          <div className={style.textHelper}>
                              {"Provide personal information so that we can"}
                              <br/>
                              {"create a new account for you."}
                          </div>
                      </div>

                      <div className={style.formRow}>
                          <div className={style.col}>
                              <LibInputText name={"your_name"} noTittle={false} validTittle={"invalid data"} valid={nameValid?(nameValue.length>2?(Validation.validName(nameValue)):true):false}  value={nameValue} title={"You name"} onChange={(e: any)=>{handleValue(e, setNameValue, Validation.validText); setNameValid(true);}}/>
                          </div>
                      </div>

                      <div className={style.formRow}>
                          <LibInputGroup title={"Mobile"} valid={true}>
                              <div className={style.formRow}>
                                  <div className={style.colCountryCode}>
                                      <LibInputSelect name={"country_code"} validTittle={"invalid data"} valid={countryCodeValid} value={countryCodeValue} title={"Cod"} noTittle={true}  options={[
                                          {id: "0048", tittle: "+48 (PL)"},
                                          {id: "00370", tittle: "+370 (LT)"},
                                      ]}  callBack={(e: any)=>{setCountryCode(e); setCountryCodeValid(true);}}/>
                                  </div>
                                  <div className={style.colPhone}>
                                      <LibInputText name={"your_phone"} type={"tel"} noTittle={true} validTittle={"invalid data"} valid={phoneValid?(phoneValue.length>9?false:true):false} value={phoneValue} title={"Phone"} onChange={(e: any)=>{handleValue(e, setPhoneValue, Validation.validNumber); setPhoneValid(true);}}/>
                                  </div>
                              </div>
                          </LibInputGroup>
                      </div>

                      <div className={style.formRow}>
                          <div className={style.col}>
                              <LibInputRadioButtonList name={"your_phone"} callBack={(e: any)=> {
                                  setPlayChessValue(e);
                                  setPlayChessValid(true);
                              }} title={"Can you please chess?"} valid={playChessValid} validTittle={"invalid data"}/>
                          </div>
                      </div>

                      <div className={style.formRow}>
                          <LibInputGroup title={"Date of birth"} valid={yearOldValid} validTittle={"you must be over 18 to register"}>
                              <div className={style.formRow}>
                                  <div className={style.colData}>
                                      <LibInputTextOutline name={"birth_day"} noTittle={true} validTittle={"invalid data"} valid={birthDayValid?(Validation.validDay(birthDayValue)):false} value={birthDayValue} title={"Day"} onChange={(e: any)=>{handleValue(e, setBirthDayValue, Validation.validNumber2); setBirthDayValid(true);}}/>
                                  </div>
                                  <div className={style.colMonth}>
                                      <LibInputSelectOutline showIndexWhenMobile={true} options={[
                                          {id: "1", tittle: "January"},
                                          {id: "2", tittle: "February"},
                                          {id: "3", tittle: "March"},
                                          {id: "4", tittle: "April"},
                                          {id: "5", tittle: "May"},
                                          {id: "6", tittle: "June"},
                                          {id: "7", tittle: "July"},
                                          {id: "8", tittle: "August"},
                                          {id: "9", tittle: "September"},
                                          {id: "10", tittle: "October"},
                                          {id: "11", tittle: "November"},
                                          {id: "12", tittle: "December"},
                                          ]} name={"birth_month"} validTittle={"invalid data"} valid={birthMonthValid} value={birthMonthValue} title={"Month"} noTittle={true} callBack={(e: any)=>{setBirthMonthValue(e); setBirthMonthValid(true);}}/>
                                  </div>
                                  <div className={style.colYear}>
                                      <LibInputTextOutline name={"birth_year"} noTittle={true} validTittle={"invalid data"} valid={birthYearValid?(Validation.validYear(birthYearValue)):false} value={birthYearValue} title={"Year"} onChange={(e: any)=>{handleValue(e, setBirthYearValue, Validation.validNumber4); setBirthYearValid(true);}}/>
                                  </div>
                              </div>
                          </LibInputGroup>
                      </div>

                  </div>
                  <div className={style.buttonPanel}>
                      <div className={style.buttonPanelContainer}>
                          <LibButtonMiddle value={"CONTINUE"} disabled={false} icon={arrowLeft}/>
                      </div>
                  </div>
              </form>
          </ComponentFormsBackground>
        </div>
    );
}

export default CreateAccount;
