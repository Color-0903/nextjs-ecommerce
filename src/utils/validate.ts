export const Regex = {
    isEmail: (value: string) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    isPassword: (value: string) => /^[A-Za-z\d#$@!%&*?.]{8,16}$/.test(value),
    isPhone: (value: string) => /^0[1-9][0-9]{8}$/.test(value),
};

export const Validates = {
    isEmail: {
        validate: (value: string) => {
            if (!value?.trim()) return false;
            return Regex.isEmail(value);
        },
        message: "Trường này phải là email!",
    },

    isPassword: {
        validate: (value: string) => {
            if (!value?.trim()) return false;
            return Regex.isPassword(value);
        },
        message: "Mật khẩu bao gồm ít nhất 8 kí tự và tối thiểu 1 kí tự đặc biệt!",
    },

    isRequired: {
        validate: (values: string) => {
            if (!values?.trim()) return false;
            return true;
        },
        message: "Trường này không được bỏ trống!",
    },

    isPhone: {
        validate: (values: string) => {
            if (!values?.trim()) return;
            return Regex.isPhone(values?.trim());
        },
        message: "Số điện thoại không hợp lệ!",
    },
};
