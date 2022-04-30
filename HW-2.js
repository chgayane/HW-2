// the output should be true
const roadRegister1 = [
    [false, true, false, false],
    [false, false, true, false],
    [true, false, false, true],
    [false, false, true, false],
  ];
  
  // the output should be true
  const roadRegister2 = [
    [false, true, false, false, false, false, false],
    [true, false, false, false, false, false, false],
    [false, false, false, true, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, false, false, false, false, true],
    [false, false, false, false, true, false, false],
    [false, false, false, false, false, true, false],
  ];
  
  // the output should be false
  const roadRegister = [
    [false, true, false],
    [false, false, false],
    [true, false, false],
  ];

  function newRoadSystem(roadRegister) {
    const inComingRoads = new Array(roadRegister.length).fill(0);
    const outGoingRoads = new Array(roadRegister.length).fill(0);
    
    roadRegister.forEach((current, currentIndex) => {
        current.forEach((hasRoadToTarget, targetIndex) => {
            if(hasRoadToTarget) {

              inComingRoads[targetIndex] = inComingRoads[targetIndex] + 1;
              outGoingRoads[currentIndex] = outGoingRoads[currentIndex] + 1;
            }
     });
    });
        
    
    return inComingRoads.every((inComingRoadsCount, cityIndex) => {
        return outGoingRoads[cityIndex] === inComingRoadsCount;
    });
}
console.log(newRoadSystem(roadRegister)); // false
console.log(newRoadSystem(roadRegister1)); // true
console.log(newRoadSystem(roadRegister2)); // true
