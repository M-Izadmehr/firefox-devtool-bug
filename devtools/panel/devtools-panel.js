// Method used to get the current time
const getClock = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const logger = event => {
  try {
    const eventName = `${event.type}Event`;
    const value =
      (event.target && event.target.value && event.target.value) ||
      event.code ||
      " ";
    const message = `${eventName}(${getClock()}): ${value}`;

    // print event and value to console
    console.log(eventName, value);
    // also show values in panel
    document.getElementById(eventName).innerHTML = message;
  } catch (error) {
    console.log(error);
  }
};

const handleChange = event => {
  event.stopImmediatePropagation();
  event.stopPropagation();
  event.preventDefault();
  logger(event);
};

// The ones not receiving event
document.getElementById("input").addEventListener("change", handleChange, true);
document.getElementById("input").addEventListener("input", handleChange, true);

// The ones receiving event
document.getElementById("input").addEventListener("keydown", logger, true);
document.getElementById("input").addEventListener("keyup", logger, true);
document.getElementById("input").addEventListener("click", logger, true);
document.getElementById("input").addEventListener("cut", logger, true);
document.getElementById("input").addEventListener("paste", logger, true);
