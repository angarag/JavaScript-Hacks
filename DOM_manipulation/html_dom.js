const c1 = (document.getElementById("root").textContent =
  "This is a text content");
const c2 = (document.createElement("div").textContent =
  "This is a div content");
//Access
document.getElementById(id);
document.getElementsByTagName(name);
ie:
document.getElementsByTagName("p")[0].innerHTML
document.getElementsByClassName(name);
//Changing element
element.innerHTML =  new html content;
element.setAttribute(attribute, value)
//Add & Delete
document.createElement(element)
node.removeChild(element)
node.appendChild(element)
node.replaceChild(new, old)
document.write(text)
//Adding Event Handlers
document.getElementById("demo").addEventListener("click", myFunction);
document.getElementById(id).onclick = function(){code}
