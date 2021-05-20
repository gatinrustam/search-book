const initialSearchState = [
  {
    id: '6f8671e724c6c',
    name: 'Qwsdf',
    age: 14,
  },
]

function searchReducer(state = initialSearchState, action) {
  // console.log({state, action});
  if (action.type === "ADD_PERSON") {
    const { name, age } = action;
    return [...state, { name, age, id: Math.random().toString(16).slice(2) }]
  }

  return state;
}

module.exports.searchReducer = searchReducer;