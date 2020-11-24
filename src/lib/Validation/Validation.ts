export default class Validation {

    static valid(regex: any, value: string) {
        if (regex.test(value)) {
            return true
        }
        return false
    }

    static validName(value: string) {
        return this.valid(/[a-zA-Z]{3}/, value)
    }

    static validNumber(value: string) {
        return /^[0-9]*$/.test(value);
    }

    static validNumber4(value: string) {
        return /^[0-9]*$/.test(value) && value.length<5;
    }

    static validNumber2(value: string) {
        return /^[0-9]*$/.test(value) && value.length<3;
    }
    static validText(value: string) {
        return /^[a-zA-Z]*$/.test(value);
    }

    static validYear(value: string) {
        return value.length==4?(parseInt(value)>=1920 && parseInt(value)<=2020):true;
    }

    static validDay(value: string) {
        return value.length==2?(parseInt(value)<=31):true;
    }

    static validPhone(value: string) {
        return value.length==9
    }

    static validBirth18(valueDay: number, valueMonth: number, valueYear: number) {
        let today = new Date();
        let birthday = new Date(valueYear, valueMonth, valueDay);

        return (today.getTime() - birthday.getTime())>567993600000;
    }
}