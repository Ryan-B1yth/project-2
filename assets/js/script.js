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
        distanceToUser: 456,
        currentlyLocated: false,
        discovered: false,
    }, 
    {
        index: 2,
        function: 'Eyrie',
        name: 'eyrie',
        house: 'find it out',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 264,
        currentlyLocated: false,
        discovered: false,
    }, 
    {
        index: 3,
        function: 'CastleBlack',
        name: 'castle-black',
        house: 'Night\'s Watch',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 1024,
        currentlyLocated: false,
        discovered: false,        
    }, 
    {
        index: 4,
        function: 'IronIslands',
        name: 'iron-islands',
        house: 'Greyjoy',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 1024,
        currentlyLocated: false,
        discovered: false, 
    }, 
    {
        index: 5,
        function: 'Twins',
        name: 'the-twins',
        house: 'find it out',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 1024,
        currentlyLocated: false,
        discovered: false,         
    }, 
    {
        index: 6,
        function: 'CasterlyRock',
        name: 'casterly-rock',
        house: 'Lannister',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 1024,
        currentlyLocated: false,
        discovered: false,         
    }

]

let distanceTravelled = 0;
let placesDiscovered = {};

function openInfo(i) {
    let info = document.getElementById(locations[i].name);
    info.innerHTML = `
        <button id="${locations[i].name}-close" class="btn close hover" onclick="close${locations[i].function}()">X</button>
        <h2>${locations[i].name}</h2>
        <ul>
            <li>House: ${locations[i].house}</li>
            <li>Distance to travel: ${locations[i].distanceToUser} miles</li>
            <li>Discovered: ${locations[i].discovered}</li>
        </ul>
        <p>${locations[i].information}</p>
        <button id="travel${[i]}-btn" class="btn travel hover" onclick="travelTo(${i})">Travel to?</button>
    </div>
    `

    info.style.visibility = 'visible';
    return true;
}

function travelTo(i) {
    locations[i].currentlyLocated = true;
    checksCurrentlyLocated(i);
    addToDistance(i);
    setCurrentLocation(i);
    placesDiscovered[`${locations[i].name}`] = `true`;
    locations[i].discovered = true;
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
    distanceTravelled += locations[i].distanceToUser;
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

document.getElementById('kings-landing-locator').addEventListener('click', openKingsLandingInfo);

document.getElementById('winterfell-locator').addEventListener('click', openWinterfellInfo);

document.getElementById('eyrie-locator').addEventListener('click', openEyrieInfo);

document.getElementById('castle-black-locator').addEventListener('click', openCastleBlackInfo);

document.getElementById('iron-islands-locator').addEventListener('click', openIronIslandsInfo);

document.getElementById('the-twins-locator').addEventListener('click', openTwinsInfo);

document.getElementById('casterly-rock-locator').addEventListener('click', openCasterlyRockInfo);

document.getElementById('right-scroll').addEventListener('click', scrollRight);

document.getElementById('left-scroll').addEventListener('click', scrollLeft);
