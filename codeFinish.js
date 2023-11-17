const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

// Throttle
const updateThrottleText = throttle((text) => {
  // throttleText.textContent = text;
  incrementCount(throttleText);
}, 100)

const updateDebounceText = debounce((text) => {
  // debounceText.textContent = text;
  incrementCount(debounceText);
})

// input.addEventListener("input", e => {
//   defaultText.textContent = e.target.value;

//   updateDebounceText(e.target.value);
//   updateThrottleText(e.target.value);
// });


function debounce(callBack, delay = 1000) {
  let timeout;

  return (arg) => {
    clearInterval(timeout);
    
    timeout = setTimeout(() => {
        callBack(arg);
      }, delay);

  }
}

function throttle(callBack, delay = 1000) {
  let isPaused = false;


  return (...arg) => {
    if (isPaused) return;

    callBack(...arg);
    isPaused = true;

    setTimeout(() => {
      isPaused = false;
    }, delay);
  }
}


function incrementCount (element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}


document.addEventListener('mousemove', (event) => {
  incrementCount(defaultText);
  updateDebounceText()
  updateThrottleText()
})

 


