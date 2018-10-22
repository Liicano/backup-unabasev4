export default api => {
  return {
    /**
     * GET/  get doc list ... query: [name(STRING)]
     * GET/:id    get doc info params [id(ObjectId)]
     * POST/  create item
     */
    main: `${api}taxs/`,
    /**
     * PUT/
     * name: string
     */
    update: `${api}taxs/update`
  };
};
