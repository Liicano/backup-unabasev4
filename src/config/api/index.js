// const mainApi = "http://35.231.73.122:3000/";
const mainApi = 'http://localhost:3000/';
// const mainApi = "http://192.168.0.196:3000/";
// const mainApi = "https://unabase.net/";
// const mainApi = "https://unabase.es/";

import tax from './tax';
import item from './item';
import user from './user';
import auth from './auth';
import business from './business';
import outcome from './outcome';
import income from './income';
// import task from './task';

export default {
  tax: tax(mainApi),
  item: item(mainApi),
  user: user(mainApi),
  auth: auth(mainApi),
  business: business(mainApi),
  outcome: outcome(mainApi),
  income: income(mainApi)
  // task: task(mainApi)
};
