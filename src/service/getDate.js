function getArray (dataBase) {
  var starArray = []
  var starList = dataBase.split(';')
  for (let i = 0, len = starList.length; i < len; i++) {
    var starAttr = starList[i].split(':')
    starArray.push({
      name: starAttr[0],
      videos: starAttr[1].split(',')
    })
  }
  return starArray
}

export { getArray }
