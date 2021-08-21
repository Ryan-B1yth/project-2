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

function openKingsLandingInfo() {
    let info = document.getElementById(locations[0].name);
    info.innerHTML = `
        <button id="${locations[0].name}-close" class="close" onclick="closeKingsLanding()">Close</button>
        <h2>${locations[0].name}</h2>
        <ul>
            <li>House: ${locations[0].house}</li>
            <li>Distance to travel: ${locations[0].distanceToUser} miles</li>
            <li>Discovered: ${locations[0].discovered}</li>
        </ul>
        <p>${locations[0].information}</p>
    </div>
    `
    info.style.visibility = 'visible';
    return true;
}

function closeKingsLanding() {
    let close = document.getElementById('kings-landing-close');
    let closeSecond = document.getElementById('kings-landing');
    close.parentNode.innerHTML = null;
    closeSecond.style.visibility = 'hidden';   
}

document.getElementById('kings-landing-locator').addEventListener('click', openKingsLandingInfo);