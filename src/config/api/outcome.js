export default api => {
  return {
    /**
     *  GET/  get doc list params: [name(STRING), isActive(boolean)]
     *  GET/:id    get doc info
     *  POST/  create income
     */
    get: `${mainApi}outcomes/`,
    /**
     * PATCH/
     * name: string
     */
    update: `${mainApi}outcomes/update`
  };
};
