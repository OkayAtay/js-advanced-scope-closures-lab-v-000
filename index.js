function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let totalDistance = Math.abs(end - start);
    let distanceOver = totalDistance - blockRange;

    if (distanceOver > 0){
      return  `${Math.abs(distanceOver)} blocks out of range`
    } else {
      return `within range by ${Math.abs(distanceOver)}`
    }
  }
}

function produceTipCalculator(x){
  return function(rideCost){
    return rideCost*x;
  }
}

function createDriver(){
  let DriverId = 0

  return class{
    constructor(name){
      this.name = name
      this.id = ++DriverId;
    }
  }
}
