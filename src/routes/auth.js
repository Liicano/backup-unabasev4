<<<<<<< HEAD
// import store from "../store/store";

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
=======
import store from "../store/store";
// const auth = {
//   auth: (to, from, next) => {
//     console.log("store.getters.user");
//     console.log(store.getters);
//     console.log(store.getters["users/getUser"]._id);
//     if (store.getters["users/getUser"]._id) {
//       next();
//     } else {
//       next("/login");
//     }
//   },
//   guest: (to, from, next) => {
//     if (!store.getters["users/getUser"]._id) {
//       next();
//     } else {
//       next("/");
//     }
//   }
// };
export default uType => (to, from, next) => {
  console.log("store.getters.user");
  console.log(store.getters);
  console.log(store.getters["users/getUser"]._id);
  if (
    uType === "auth"
      ? store.getters["users/getUser"]._id
      : !store.getters["users/getUser"]._id
  ) {
    next();
  } else {
    next("/login");
  }
>>>>>>> a1f4b2d4f413f1c4a1a3c71f939f04fb6ca3d42e
};
