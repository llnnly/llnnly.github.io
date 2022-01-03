window.addEventListener("load", function() {
    var elements = document.getElementsByClassName("rainbowText")
    for (let i = 0; i < elements.length; i++) {
      generateRainbowText(elements[i])
    }
  });
  
  function generateRainbowText(element) {
    let text = element.innerText
    let dislocation = 0
    element.innerHTML = ""
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span")
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)"
      charElem.innerHTML = text[i]
      element.appendChild(charElem)
    }

    setInterval(() => {
      let charElems = element.getElementsByTagName('span')
      for (let i = 0; i < text.length; i++) {
          charElem = charElems[i]
          console.log(dislocation)
          charElem.style.color = "hsl(" + (360 * i / text.length + dislocation) + ",80%,50%)"
      }
      dislocation += 360 / text.length
  }, 100)
  }