const inputScreen = document.getElementById("inputValue");

function btnDisplay(inputValue) {
    inputScreen.value += inputValue;
  };
  function equalTo() {
    inputScreen.value = eval(inputScreen.value);
  };
  function del() {
    inputScreen.value = inputScreen.value.slice(0, -1);
  };
  function clearAll() {
    inputScreen.value = " ";
  };