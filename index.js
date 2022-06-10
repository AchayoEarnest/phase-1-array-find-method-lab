// code your solution here
superbowlWin = (array) => {
  let result = array.find( array => array.result === "W" );

  if (result) {
    return result.year;
  }else {
    return undefined
  }

}