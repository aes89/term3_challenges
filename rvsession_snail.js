
const leftToRight =(mat) => {
    let restOfMat = mat.slice(1)
    let whatWeWant = mat[0];
    return [whatWeWant, restOfMat];
  }
  const rightToLeft =(mat) => {
    let restOfMat = mat.slice(0,mat.length-1)
    let whatWeWant = mat[mat.length-1].reverse();
    return [whatWeWant, restOfMat]
  }
  const topToBottom =(mat) => {
    let restOfMat = mat.map((row) => row.slice(0,row.length-1))
    let whatWeWant = mat.map((row) => row[row.length-1])
    return [whatWeWant, restOfMat];
  }
  const bottomToTop =(mat) => {
    let restOfMat = mat.map((row) => row.slice(1))
    let whatWeWant = mat.map((row) => row[0]).reverse();
    return [whatWeWant, restOfMat]
  }
  const hasValues = (currentMat) => {
  //   if(currentMat == [] || currentMat == [[]]) {
      if(currentMat.length == 0 || currentMat[0].length == 0) {
      console.log("false",currentMat)
      return false;
    } else {
      console.log("true",currentMat)
      return true;
    }
  }
  
  snail = function(array) {
  //   let length = array.length
    let answer = [];
    let currentMat = [...array]
    let transformations = [leftToRight,topToBottom,rightToLeft,bottomToTop];
    let counter = 0;
  //   console.log("before loop",currentMat)
    while(hasValues(currentMat)) {
      let func = transformations[counter%4];
      let res = func(currentMat);
      answer = answer.concat(res[0])
      currentMat = res[1]
  //     console.log(currentMat,counter);
      counter++
    }
    return answer;
  }