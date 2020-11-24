import Validation from '../lib/Validation/Validation';

export default class CreateAccountService {

    nameValue: string;
    countryCodeValue: string;
    phoneValue: string;
    playChessValue: string;
    birthDayValue: string;
    birthMonthValue: string;
    birthYearValue: string;

    constructor(
        _nameValue: string,
        _countryCodeValue: string,
        _phoneValue: string,
        _playChessValue: string,
        _birthDayValue: string,
        _birthMonthValue: string,
        _birthYearValue: string,
    ) {
        this.nameValue = _nameValue;
        this.countryCodeValue = _countryCodeValue;
        this.phoneValue = _phoneValue;
        this.playChessValue = _playChessValue;
        this.birthDayValue = _birthDayValue;
        this.birthMonthValue = _birthMonthValue;
        this.birthYearValue = _birthYearValue;
    }

    submit(e: React.FormEvent<HTMLFormElement>) {


        console.log(Validation.validName(this.nameValue));
        console.log(Validation.validBirth18(parseInt(this.birthDayValue), parseInt(this.birthMonthValue), parseInt(this.birthYearValue)));
        console.log(parseInt(this.countryCodeValue)>0);
        console.log(this.playChessValue.length>0);
        console.log(Validation.validDay(this.birthDayValue) && this.birthDayValue.length>0);
        console.log(this.birthMonthValue.length>0);
        console.log(Validation.validYear(this.birthYearValue) && this.birthYearValue.length>3);
    }
}