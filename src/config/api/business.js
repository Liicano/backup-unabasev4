export default api => {
  return {
    /**
     * GET/  get doc list ... query: [name(STRING), isActive(boolean)]
     * GET/:id    get doc info
     * POST/  create income
     */
    get: `${mainApi}business/`,
    /**
     * PATCH/
     * name: string
     */
    update: `${mainApi}business/update`
  };
};
