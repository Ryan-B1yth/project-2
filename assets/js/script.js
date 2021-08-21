let locations = [
    {
    name: 'Kings Landing',
    information: 'lorem ipsum',
    distanceToUser: 123,
    currentlyLocated: false,
    discovered: true,

    }
]

function openKingsLandingInfo() {
    let info = document.getElementById('kings-landing');
    info.innerHTML = `
        <button id="kings-landing-close" class="close" onclick="closeKingsLanding()">Close</button>
        <h2>Kings Landing</h2>
        <ul>
            <li>House:</li>
            <li>Distance to travel:</li>
            <li>Discovered:</li>
        </ul>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil quas ratione molestiae cum sunt optio enim at aut similique reprehenderit, architecto quia ea sed laboriosam placeat atque asperiores aliquid!</p>
    </div>
    `
    info.style.visibility = 'visible';
    return true;
}

function closeKingsLanding() {
    let close = document.getElementById('kings-landing-close');
    let closeSecond = document.getElementById('kings-landing');
    close.parentNode.innerHTML = null ;
    closeSecond.style.visibility = 'hidden';   
}

document.getElementById('kings-landing-locator').addEventListener('click', openKingsLandingInfo);