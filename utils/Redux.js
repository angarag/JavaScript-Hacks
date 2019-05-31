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

function counter(state, action) {
  if (state == undefined) return { count: 0 };
  var count = state.count;
  switch (action.type) {
    case "increase":
      return { count: count + 1 };
    case "decrease":
      return { count: count + 1 };
    default:
      return state;
  }
}
export default counter;
