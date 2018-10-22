export default api => {
  return {
    /**
     * GET/  get doc list ... query: [name(STRING), isActive(boolean)]
     * GET/:id    get doc info
     * POST/  create movement
     */
    main: `${api}business/`,
    /**
     * PATCH/
     * name: string
     */
    user: `${api}business/user/`
  };
};
