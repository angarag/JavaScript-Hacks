const S = "((7))";
S.indexOf("7"); //The indexOf() method returns the position of the first occurrence of a specified value in a string.
//This method returns -1 if the value to search for never occurs
S.split("(")
  .join("")
  .split(")")
  .join("");

const ascii = S.charCodeAt(2);
if (ascii > 64 && ascii < 91) {
  return String.fromCharCode(ascii + 32); //return String
}

S = S.substr(start, length);
