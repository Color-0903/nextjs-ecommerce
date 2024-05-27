import { atom, selector } from "recoil";

// for read, write
export const AuthRecoil = atom({
    key: "authState",
    default: "",
});

export const CartRecoli = atom({
    key: "CartRecoli",
    default: [],
});

// for read
export const AuthSelector = selector({
    key: "AuthSelector",
    get: ({get}: any) => {
        return get(AuthRecoil);
    },
});

export const CartSelector = selector({
    key: "CartSelector",
    get: ({get}: any) => {
        return get(CartRecoli).length;
    },
});
