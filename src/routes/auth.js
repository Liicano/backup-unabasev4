import store from "../store/store";

export default (to, from, next) => {
  // console.log("store.getters.user");
  // console.log(store.getters);
  // console.log(store.getters["users/getUser"]._id);
  // if (store.getters["users/getUser"]._id) {
  //   next();
  // } else {
  //   next("/login");
  // }
  next();
};
