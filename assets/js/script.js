/**
 * To add new location:
 *  funtion:
 *  name:
 *  house: 
 *  information:  
 *  distanceToUser:
 *  currentlyLocated:
 *  discovered:
 */
let locations = [
    {
        function: 'KingsLanding',
        name: 'kings-landing',
        house: 'stark',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 123,
        currentlyLocated: false,
        discovered: false,

    },

    {
        function: 'Winterfell',
        name: 'winterfell',
        house: 'stark',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 456,
        currentlyLocated: false,
        discovered: false,
    }, 

    {
        function: 'Eyrie',
        name: 'eyrie',
        house: 'find it out',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 264,
        currentlyLocated: false,
        discovered: false,
    }, 
    {
        function: 'CastleBlack',
        name: 'castle-black',
        house: 'Night\'s Watch',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 1024,
        currentlyLocated: false,
        discovered: false,        
    }, 
    {
        function: 'IronIslands',
        name: 'iron-islands',
        house: 'Greyjoy',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 1024,
        currentlyLocated: false,
        discovered: false, 
    }, 
    {
        function: 'Twins',
        name: 'the-twins',
        house: 'find it out',
        information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
        distanceToUser: 1024,
        currentlyLocated: false,
        discovered: false,         
    }, 
    {
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

function openInfo(i) {
    let info = document.getElementById(locations[i].name);
    info.innerHTML = `
        <button id="${locations[i].name}-close" class="close" onclick="close${locations[i].function}()">Close</button>
        <h2>${locations[i].name}</h2>
        <ul>
            <li>House: ${locations[i].house}</li>
            <li>Distance to travel: ${locations[i].distanceToUser} miles</li>
            <li>Discovered: ${locations[i].discovered}</li>
        </ul>
        <p>${locations[i].information}</p>
        <button id="travel${[i]}-btn" onclick="travelTo(${i})">Travel to?</button>
    </div>
    `

    info.style.visibility = 'visible';
    return true;
}

function travelTo(i) {
    locations[i].currentlyLocated = true;
    distanceTravelled += locations[i].distanceToUser;
    console.log(distanceTravelled);
    checksCurrentlyLocated(i);
}

function checksCurrentlyLocated(i) {
    if (locations[i].currentlyLocated === true){
        document.getElementById(locations[i].name).style.boxShadow = '10px 10px 10px gold';
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
