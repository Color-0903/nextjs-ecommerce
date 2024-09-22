import { USER_ROUTER } from "@/constants/router";

export const logOut = () => {
  localStorage.removeItem('token');
  redirectToSignIn();
};

export const redirectToSignIn = () => { 
    window.location.href = USER_ROUTER.SIGNIN;
};
