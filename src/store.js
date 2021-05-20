const {
  createStore,
  combineReducers
} = require("redux");

const {searchReducer} = require("./reducers/search.js");

// function combineReducers(obj) {
//   return (state = {}, action) => {
//     const nextState = {};
    
//     for (const key in obj) {
//       nextState[key] = obj[key](state[key], action);
//     }

//     return nextState;
//   }
// }

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = createStore(rootReducer);

module.exports.store = store;