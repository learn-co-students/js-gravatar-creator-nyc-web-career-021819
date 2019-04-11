function updateDOM() {

  const newBoxMap = boxMap()
  const blockColor = `rgb(${newIdenticon.r}, ${newIdenticon.g}, ${newIdenticon.b})`

  // iterate over boxMap
  // for each key, if the value is true, set the element color
  for (var key in newBoxMap) {
    if (newBoxMap[key] == true) {
      document.getElementById(`${key}`).style.backgroundColor = blockColor
    }
  }
}
