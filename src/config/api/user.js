export default api => {
  return {
    /**
     *  GET/  get doc list params: [name(STRING), isActive(boolean), ]
     *  GET/:id    get doc info
     */
    get: `${api}users/`,
    /**
     * user or email: string
     * password: string
     */
    login: `${api}users/login`,
    register: `${api}users/register`,
    update: `${api}users/update`,
    logout: `${api}users/logout`
  };
};
