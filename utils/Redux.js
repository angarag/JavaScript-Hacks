function addColor(value) {
  return {
    type: "add",
    color: value
  };
}
function removeColor(value) {
  return {
    type: "remove",
    color: value
  };
}
function favoriteColors(state, action) {
  if (state == undefined) state = [];
  if (action.type == "add") return state.concat(action.color);
  else if (action.type == "remove") {
    return state.filter(item => item != action.color);
  } else return state;
}
var store = Redux.createStore(favoriteColors);
store.dispath(addColor("blue"));
store.dispath(removeColor("blue"));
console.log(store.getState());
