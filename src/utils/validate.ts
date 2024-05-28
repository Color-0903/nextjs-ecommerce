export const Regex = {
    isEmail: (value: string) =>  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    isPassword: (value: string) => /^[A-Za-z\d#$@!%&*?.]{8,16}$/.test(value),
    isPhone: (value: string) => /^0[1-9][0-9]{8}$/.test(value),
};
export const Validates = {
    isEmail: (value: string) => {
        if (!value?.trim()) return false;
        return Regex.isEmail(value);
    },

    isPassword: (value: string) => {
        if (!value?.trim()) return false;
        return Regex.isPassword(value);
    },

    isRequired: (values: string) => {
        if (!values?.trim()) return false;
        return true;
    },

    isPhone: (values: string) => {
        if (!values?.trim()) return;
        return Regex.isPhone(values?.trim());
    },
};
