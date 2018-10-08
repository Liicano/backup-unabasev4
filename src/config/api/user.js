export default api => {
  return {
    /**
     *  GET/  get doc list params: [name(STRING), isActive(boolean), ]
     *  GET/:id    get doc info
     */
    get: `${mainApi}users/`,
    /**
     * user or email: string
     * password: string
     */
    login: `${mainApi}users/login`,
    register: `${mainApi}users/register`,
    update: `${mainApi}users/update`,
    logout: `${mainApi}users/logout`
  };
};
