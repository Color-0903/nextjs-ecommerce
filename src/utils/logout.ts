export const logOut = () => {
  localStorage.removeItem('token');
  redirectToSignIn();
};

export const redirectToSignIn = () => { 
    window.location.href = '/auth/login';
};
