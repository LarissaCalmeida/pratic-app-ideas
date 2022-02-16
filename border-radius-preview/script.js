const CONTAINER_BOX = document.getElementById("containerBox");
CONTAINER_BOX.addEventListener("change", borderRadiusStyle, true);

const INPUT_TEXT = document.getElementById("borderText");

function borderRadiusStyle() {
  const BORDER_TOP_LEFT = document.getElementById("box-top-left").value;  
  const BORDER_TOP_RIGHT = document.getElementById("box-top-right").value;  
  const BORDER_BOTTOM_LEFT = document.getElementById("box-bottom-left").value;  
  const BORDER_BOTTOM_RIGHT = document.getElementById("box-bottom-right").value;  
  const BOX = document.getElementById("box");
 
 BOX.style.borderRadius = `${BORDER_TOP_LEFT}px ${BORDER_TOP_RIGHT}px ${BORDER_BOTTOM_RIGHT}px ${BORDER_BOTTOM_LEFT}px`
 
 INPUT_TEXT.value = BOX.style.borderRadius
}

function copyCSS(){
  const copyText = `{border-radius: ${INPUT_TEXT.value}; }`
  navigator.clipboard.writeText(copyText);  
  alert("Copied text: " + copyText)
}

