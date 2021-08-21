let locations = [
    {
    name: 'kings-landing',
    house: 'stark',
    information: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptates nisi dolorem dicta voluptas maxime hic porro, aperiam laborum minima eaque laudantium error praesentium illum. Nam perferendis autem delectus ea!',
    distanceToUser: 123,
    currentlyLocated: false,
    discovered: true,

    }
]

function openInfo(i) {
    let info = document.getElementById(locations[i].name);
    info.innerHTML = `
        <button id="${locations[i].name}-close" class="close" onclick="closeKingsLanding()">Close</button>
        <h2>${locations[i].name}</h2>
        <ul>
            <li>House: ${locations[i].house}</li>
            <li>Distance to travel: ${locations[i].distanceToUser} miles</li>
            <li>Discovered: ${locations[i].discovered}</li>
        </ul>
        <p>${locations[i].information}</p>
    </div>
    `
    info.style.visibility = 'visible';
    return true;
}

function openKingsLandingInfo() {
    openInfo(0);
}

function closeKingsLanding() {
    let close = document.getElementById('kings-landing-close');
    let closeSecond = document.getElementById('kings-landing');
    close.parentNode.innerHTML = null;
    closeSecond.style.visibility = 'hidden';   
}

document.getElementById('kings-landing-locator').addEventListener('click', openKingsLandingInfo);