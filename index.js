"use strict";

document.getElementById("btn").addEventListener("click", function () {
  const rgbNum = document.getElementById("rgb").value;
  const [first, second, third] = rgbNum.split(",");
  const result = `#${Number(first).toString(16)}${Number(second).toString(
    16
  )}${Number(third).toString(16)}`;
  document.getElementById("result").textContent = result;
});
