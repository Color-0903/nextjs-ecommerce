import { atom, selector } from "recoil";

// for read, write
export const AuthRecoil = atom({
    key: "authState", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value),
});

// for read
export const AuthSelector = selector({
    key: "AuthSelector", // unique ID (with respect to other atoms/selectors)
    get: ({get}: any) => {
        return get(AuthRecoil);
    },
});
