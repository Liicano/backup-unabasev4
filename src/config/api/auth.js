export default api => {
  return {
    google: `${mainApi}auth/google`,
    googleNew: `${mainApi}auth/google/create`,
    login: `${mainApi}auth/login`,
    gauth: `${mainApi}auth/gauth`,
    register: `${mainApi}auth/register`
  };
};
