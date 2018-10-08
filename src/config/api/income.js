export default api => {
  return {
    /**
     * GET/  get doc list query: [name(STRING), isActive(boolean)]
     *
     * GET/:id    get doc info  params: [id(ObjectId)]
     *
     * POST/  create income
     *    params {
     *      name: string,
     *      description: string,
     *      state: string,
     *      item: [
     *        {
     *          name: string,
     *          price: number,
     *          tax: number,
     *          itemId: ObjectId
     *        }
     *      ]
     *    }
     *
     */
    get: `${api}incomes/`,
    /**
     * PUT/
     * name: string
     */
    update: `${api}incomes/update`
  };
};
