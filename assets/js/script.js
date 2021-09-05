/**
 * To add new location:
 *  index: index number in the array
 *  funtion: written in camelCase assuming 'open' or 'close' is before it
 *  name: written as html with a dash (-) between words, all lowercase
 *  house: all lowercase
 *  information:
 *  distanceToUser:
 *  currentlyLocated: boolean, initially false
 *  discovered: boolean, initially false
 */
let locations = [
    {
        index: 0,
        function: 'KingsLanding',
        name: 'kings-landing',
        house: 'stark',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 123,
        currentlyLocated: false,
        discovered: false,

    },
    {
        index: 1,
        function: 'Winterfell',
        name: 'winterfell',
        house: 'stark',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        currentlyLocated: false,
        discovered: false,
    }, 
    {
        index: 2,
        function: 'Eyrie',
        name: 'eyrie',
        house: 'find it out',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        currentlyLocated: false,
        discovered: false,
    }, 
    {
        index: 3,
        function: 'CastleBlack',
        name: 'castle-black',
        house: 'Night\'s Watch',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        currentlyLocated: false,
        discovered: false,        
    }, 
    {
        index: 4,
        function: 'IronIslands',
        name: 'iron-islands',
        house: 'Greyjoy',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        currentlyLocated: false,
        discovered: false, 
    }, 
    {
        index: 5,
        function: 'Twins',
        name: 'the-twins',
        house: 'find it out',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        currentlyLocated: false,
        discovered: false,         
    }, 
    {
        index: 6,
        function: 'CasterlyRock',
        name: 'casterly-rock',
        house: 'Lannister',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 7,
        function: 'Pentos',
        name: 'pentos',
        house: 'Targaryon',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        currentlyLocated: false,
        discovered: false,         
    }

]

let distanceTravelled = 0;
let placesDiscovered = {};
let previouslyLocated = 0;

function openInfo(i) {
    let info = document.getElementById(locations[i].name);
    info.innerHTML = `
        <button id="${locations[i].name}-close" class="btn close hover" onclick="close${locations[i].function}()">X</button>
        <h2>${locations[i].name}</h2>
        <ul>
            <li>House: ${locations[i].house}</li>
            <li>Distance to travel: ${calcDistance(i)} miles</li>
            <li>Discovered: ${locations[i].discovered}</li>
        </ul>
        <p>${locations[i].information}</p>
        <button id="travel${[i]}-btn" class="btn travel hover" onclick="travelTo(${i})">Travel to?</button>
    </div>
    `

    info.style.visibility = 'visible';
    return true;
}

function calcDistance(i) {
    let locator1 = document.getElementById(`${locations[i].name}-locator`);

    let locator2 = document.getElementById(`${locations[previouslyLocated].name}-locator`);

    let style1 = document.defaultView.getComputedStyle(locator1, null);

    let style2 = document.defaultView.getComputedStyle(locator2, null);

    let left1 = style1.left;
    let left2 = style2.left;
    let xDifference = Math.abs(parseInt(left1) - parseInt(left2));

    let top1 = style1.top;
    let top2 = style2.top;
    let yDifference = Math.abs(parseInt(top1) - parseInt(top2));

    let actualDistance = parseInt(((Math.sqrt(Math.pow(xDifference, 2) + Math.pow(yDifference, 2))) * 2.794).toFixed(0));

    return actualDistance;
}

function travelTo(i) {
    locations[i].currentlyLocated = true;
    checksCurrentlyLocated(i);
    addToDistance(i);
    setCurrentLocation(i);
    placesDiscovered[`${locations[i].name}`] = `true`;
    locations[i].discovered = true;
    previouslyLocated = locations[i].index;
}

function checksCurrentlyLocated(i) {
    if (locations[i].currentlyLocated === true){
        document.getElementById(locations[i].name).style.boxShadow = '0 0 20px #D4AF37, inset 0 0 10px #000000';
    } else {
        document.getElementById(locations[i].name).style.boxShadow = null;
    }
}

function closeInfo(i) {
    let close = document.getElementById(`${locations[i].name}-close`);
    let closeSecond = document.getElementById(`${locations[i].name}`);
    close.parentNode.innerHTML = null;
    closeSecond.style.visibility = 'hidden'; 

    locations[i].currentlyLocated = false;
    checksCurrentlyLocated(i);   
    checksDiscoveredPlaces();
}

function addToDistance(i) {
    distanceTravelled += calcDistance(i);
    document.getElementById('distance-travelled').innerText = `Distance travelled: ${distanceTravelled} miles`;
}

function setCurrentLocation(_i) {
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].currentlyLocated === true) {
            document.getElementById('current-location').innerText = `Current location: ${locations[i].name}`;
        }
    }
}

function checksDiscoveredPlaces() {
    if (Object.keys(placesDiscovered).length == locations.length) {
        let complete = document.getElementById('complete');
        complete.style.visibility = 'visible';
    }
}

function scrollRight() {
    document.getElementsByTagName('html')[0].style.overflowX = 'unset';
    window.scrollBy(400, 0);
    document.getElementsByTagName('body')[0].style.overflowX = 'scroll';
}

function scrollLeft() {
    document.getElementsByTagName('html')[0].style.overflowX = 'unset';
    window.scrollBy(-400, 0);
    document.getElementsByTagName('body')[0].style.overflowX = 'scroll';
}

function openKingsLandingInfo() {
    openInfo(0);
}

function closeKingsLanding() {
    closeInfo(0);
}

function openWinterfellInfo() {
    openInfo(1);
}

function closeWinterfell() {
    closeInfo(1);
}

function openEyrieInfo() {
    openInfo(2);
}

function closeEyrie() {
    closeInfo(2);
}

function openCastleBlackInfo() {
    openInfo(3);
}

function closeCastleBlack() {
    closeInfo(3);
}

function openIronIslandsInfo() {
    openInfo(4);
}

function closeIronIslands() {
    closeInfo(4);
}

function openTwinsInfo() {
    openInfo(5);
}

function closeTwins() {
    closeInfo(5);
}

function openCasterlyRockInfo() {
    openInfo(6);
}

function closeCasterlyRock() {
    closeInfo(6);
}

function openPentosInfo() {
    openInfo(7);
}

function closePentos() {
    closeInfo(7);
}

document.getElementById('kings-landing-locator').addEventListener('click', openKingsLandingInfo);

document.getElementById('winterfell-locator').addEventListener('click', openWinterfellInfo);

document.getElementById('eyrie-locator').addEventListener('click', openEyrieInfo);

document.getElementById('castle-black-locator').addEventListener('click', openCastleBlackInfo);

document.getElementById('iron-islands-locator').addEventListener('click', openIronIslandsInfo);

document.getElementById('the-twins-locator').addEventListener('click', openTwinsInfo);

document.getElementById('casterly-rock-locator').addEventListener('click', openCasterlyRockInfo);

document.getElementById('pentos-locator').addEventListener('click', openPentosInfo);




document.getElementById('right-scroll').addEventListener('click', scrollRight);

document.getElementById('left-scroll').addEventListener('click', scrollLeft);
