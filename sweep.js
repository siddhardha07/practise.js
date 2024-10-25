// Do not rename minefield, use it as input for your program.
const minefield = "-*---\n---*-\n*----\n-*---\n*----";

// Clear the mines one by one, always choosing the mine closest to the top left
// hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function toFindRouteLength(minefield) {
  let index = 0;
  const NEWLINE = "\n";
  while (minefield[index] !== NEWLINE) {
    index++;
  }
  return index;
}

function submitRoute(route, bombLocation) {
  let newRoute = "";

  for (let index = 0; index < route.length; index++) {
    const DEFUSE = "+";

    if (route[index] === bombLocation) {
      newRoute = newRoute + DEFUSE;
    } else { 
      newRoute = newRoute + route[index];
    }
  }
  console.log(newRoute);
  return newRoute;
}

function check(index, route) {
  let field = route;
  let term = index;
  const BOMB = "*";
  if (field[term] === BOMB) {
    let newRoute = "";
    return newRoute = submitRoute(field, term);
  }
}

function findIndex(count, route, routeLength) {
  let term = count;
  let newRoute = route;
  for (let index = 0;index < count + 1; index++) {
    let NewRoute = "";
    NewRoute = check(term, newRoute);
    newRoute = NewRoute;
    term = term + routeLength;
  }
  return newRoute;
}

function lastIndex(count, route, routeLength, ending) {
  let term = count;
  let newRoute = route;
  for (let index = 0;index < ending - 1; index++) {
    let NewRoute = "";
    NewRoute = check(term, newRoute);
    newRoute = NewRoute;
    term = term + routeLength;
  }
  return newRoute;
}

function missionSweep(minefield) {
  let route = minefield;
  let count = 0;
  const routeLength = toFindRouteLength(minefield);
  while (count < routeLength) {
    let newRoute = "";
    newRoute = findIndex(count, route, routeLength);
    route = newRoute;
    count++;
  }
  let end = routeLength;
  const last = count + routeLength;
  count = routeLength * 2;
  while (count < last) {
    newRoute = "";
    newRoute = lastIndex(count, route, routeLength, end);
    route = newRoute;
    count++;
    end--;
  }
}

missionSweep(minefield);
