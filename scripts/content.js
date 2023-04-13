// Words with new Reddit as of today (4/13/2023)
// Most likely will stop working as Reddit tweaks their UI


// All ads have this span val
const specificSpans = document.getElementsByClassName("_2oEYZXchPfHwcf9mTMGMg8 V0WjfoF5BV7_qbExmbmeR");

// Loop through all the specific span elements
for (let i = 0; i < specificSpans.length; i++) {
  var specificSpan = specificSpans[i];

  // Check if the span contains the promoted string
  if (specificSpan.textContent.includes("promoted")) {
    // If the span contains the string, find the parent div element and remove it n times to get rid of the card
    var div1 = specificSpan.closest("div");
    var tempDiv = div1.parentNode;
    for(let j = 0; j < 9; j++){
        div1.remove();
        div1 = tempDiv;
        tempDiv = tempDiv.parentNode;
    }
  }
}
