const S = "((7))";
S.indexOf("7");
S.split("(")
  .join("")
  .split(")")
  .join("");

const ascii = S.charCodeAt(2);
if (ascii > 64 && ascii < 91) {
  return String.fromCharCode(ascii + 32);
}
