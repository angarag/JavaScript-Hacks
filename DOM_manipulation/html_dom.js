const c1 = (document.getElementById("root").textContent =
  "This is a text content");
const c2 = (document.createElement("div").textContent =
  "This is a div content");
//Access
document.getElementById(id);
document.getElementsByTagName(name);
document.querySelectorAll("something").forEach(...);
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

function saveToken(token) {
  localStorage.clear();
  localStorage.setItem("token", token);
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  const jsObject = JSON.parse(jsonPayload);
  localStorage.setItem("winNbr", jsObject.winNbr);
  localStorage.setItem("token-payload-decoded", jsonPayload);
  return jsObject;
}
function setCookie(name, value, days = 1, expire = null) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  } else if (expire) expires = "; expires=" + expire.toUTCString();
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
