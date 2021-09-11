let locations = [
    {
        index: 0,
        function: 'KingsLanding',
        name: 'kings-landing',
        house: 'Baratheon',
        information: "King's Landing is the capital, and largest city, of the Six Kingdoms. Located on the east coast of Westeros in the Crownlands, just north of where the Blackwater Rush flows into Blackwater Bay and overlooking Blackwater Bay, King's Landing is the site of the Iron Throne and the Red Keep, the seat of the King of the Andals and the First Men.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/King%27s_Landing',
        distanceToUser: 123,
        currentlyLocated: false,
        discovered: false,

    },
    {
        index: 1,
        function: 'Winterfell',
        name: 'winterfell',
        house: 'stark',
        information: "Winterfell is the capital of the Kingdom of the North and the seat and the ancestral home of the royal House Stark. It is a very large castle located at the center of the North, from where the head of House Stark rules over his or her people. A small godswood is enclosed within the walls.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Winterfell',
        currentlyLocated: false,
        discovered: false,
    }, 
    {
        index: 2,
        function: 'Eyrie',
        name: 'eyrie',
        house: 'arryn',
        information: "The Eyrie is the principal stronghold of House Arryn. It is located in the Vale of Arryn near the east coast of Westeros. The Eyrie straddles the top of a peak in the Mountains of the Moon several thousand feet above the valley floor below. It is approached by a narrow causeway and road.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Eyrie',
        currentlyLocated: false,
        discovered: false,
    }, 
    {
        index: 3,
        function: 'CastleBlack',
        name: 'castle-black',
        house: 'night\'s Watch',
        information: "Castle Black is the primary headquarters and redoubt of the Night's Watch. It is located roughly halfway along the length of the Wall on its southern side, at the northern end of the Kingsroad. It is a dark and chilling home to its garrison.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Castle_Black',
        currentlyLocated: false,
        discovered: false,        
    }, 
    {
        index: 4,
        function: 'IronIslands',
        name: 'iron-islands',
        house: 'greyjoy',
        information: "The Iron Islands is one of the nine constituent regions of Westeros. They are a cluster of seven small, rocky islands off the western coast of the continent, in Ironman's Bay. The Iron Islands are ruled from the castle of Pyke by House Greyjoy.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Iron_Islands',
        currentlyLocated: false,
        discovered: false, 
    }, 
    {
        index: 5,
        function: 'Twins',
        name: 'the-twins',
        house: 'frey',
        information: "The Twins, sometimes known as the Crossing, is a castle and the seat of House Frey, the former Great House of the Riverlands. It consists of two near-identical towers and a fortified bridge over the Green Fork of the Trident.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Twins',
        currentlyLocated: false,
        discovered: false,         
    }, 
    {
        index: 6,
        function: 'CasterlyRock',
        name: 'casterly-rock',
        house: 'Lannister',
        information: "Casterly Rock is the ancestral stronghold of House Lannister. It is located on the Western coast of Westeros on a rocky promontory overlooking the Sunset Sea. It overlooks the major city of Lannisport. A major goldmine is located under Casterly Rock. It is one of the most productive in the realm and provides House Lannister with their wealth.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Casterly_Rock',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 7,
        function: 'Pentos',
        name: 'pentos',
        house: 'Magisters',
        information: "Pentos is one of the Free Cities, located on the western coastline of Essos, across the Narrow Sea from Westeros. It is a large, rich city-state of merchant lords. People and things from Pentos are known as Pentoshi.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Pentos',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 8,
        function: 'Braavos',
        name: 'braavos',
        house: 'Sea Lords of Braavos',
        information: "Braavos is one of the Free Cities located to the east of Westeros. It is the northern-most, the richest, and arguably the most powerful of the Free Cities. Described as a city of seafarers and master swordsmen, Braavos consists of hundreds of tiny islands connected by stone bridges. Its main landmarks include the Titan of Braavos, the House of Black and White and the city's famed Iron Bank.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Braavos',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 9,
        function: 'Volantis',
        name: 'volantis',
        house: 'The Triarchs',
        information: "Volantis is one of the Free Cities located to the east of Westeros. The southernmost and oldest of the Free Cities, it lies on the southern coast of Essos, where the mighty Rhoyne River meets the Summer Sea. It was founded as a colony of Valyria many centuries ago and is a great port. People from Volantis are known as Volantene.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Volantis',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 10,
        function: 'Valyria',
        name: 'valyria',
        house: 'Dragonlords',
        information: "The term Valyrian Freehold refers to the area of land controlled by the Valyrians on the continent of Essos. Centered around the city of Valyria in the eponymous peninsula, the Freehold was the greatest civilization of its time, and at the height of its power covered over half the known world.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Valyrian_Freehold',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 11,
        function: 'Qarth',
        name: 'qarth',
        house: 'The Thirteen (formally)',
        information: "Qarth is a great trading city located on the southern coast of Essos, on the straits linking the Summer Sea to the Jade Sea. Ships from Westeros, the Free Cities, the Summer Islands, and Slaver's Bay all pass through the Straits of Qarth on their way to the great nations and trading centers of the Further East, such as Yi Ti and Asshai.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Qarth',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 12,
        function: 'Dorne',
        name: 'dorne',
        house: 'Martell',
        information: "Dorne is one of the nine constituent regions of the Seven Kingdoms. It is the southernmost part of the continent of Westeros, located thousands of miles from Winterfell and the North, and has a harsh desert climate. The Dornishmen are ethnically distinct from the rest of the Seven Kingdoms, being largely descended from Rhoynar refugees who intermarried with the local population of Andals and First Men roughly a thousand years ago. As a result, they have very different customs and traditions compared to the other regions of Westeros.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Dorne',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 13,
        function: 'Meereen',
        name: 'meereen',
        house: 'Daario Naharis',
        information: "Meereen is the northernmost and greatest of the three great city-states of Slaver's Bay, north of Yunkai and Astapor. It is located at the mouth of the Skahazadhan River, which flows from its origins in Lhazar through the mountains separating Meereen and the rest of Slaver's Bay from the Red Waste. The Dothraki Sea lies to the north, beyond the river. The wealthiest residents live in pyramids.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Meereen',
        currentlyLocated: false,
        discovered: false,         
    },
    {
        index: 14,
        function: 'VaesDothrak',
        name: 'vaes-dothrak',
        house: 'Dosh Khaleen',
        information: "Vaes Dothrak is the only city in the Dothraki Sea, located near the far northeastern edge of the region. It lies in the shadow of a single, vast peak known by the Dothraki as the Mother of Mountains. The entrance to Vaes Dothrak is marked by two large statues depicting a pair of stallions.",
        learnMore: 'https://gameofthrones.fandom.com/wiki/Vaes_Dothrak',
        currentlyLocated: false,
        discovered: false,         
    },

];

let distanceTravelled = 0;
let placesDiscovered = {};
let previouslyLocated = 0;
let openCards = 0;

/**
 * Pulls information from locations array using a given index number and pushes that to the HTML to be added to the page and styled by existing CSS. Only allows 1 card to be open at a time.
 */
function openInfo(i) {
    if (openCards >= 1) {
        return false;
    } else {
        let info = document.getElementById(locations[i].name);
        info.innerHTML = `
            <button id="${locations[i].name}-close" class="btn close hover" onclick="close${locations[i].function}()">X</button>
            <h2>${locations[i].name}</h2>
            <ul>
                <li>House or Rulers: ${locations[i].house}</li>
                <li>Distance from ${locations[previouslyLocated].name}: ${calcDistance(i)} miles <h3>(as the crow flies)</h3></li>
                <li>Discovered: ${locations[i].discovered}</li>
            </ul>
            <p>${locations[i].information}</p>
            <a href="${locations[i].learnMore}" target='_blank' class="btn hover link">Learn more?</a>
            <button id="travel${[i]}-btn" class="btn travel hover" onclick="travelTo(${i})">Travel to?</button>
        </div>
        `;
        info.style.visibility = 'visible';
        
        if (checksDiscoveredPlaces() === true) {
            for (let n = 0; n <= locations.length; n++) {
                if (locations[i].discovered === true) {
                    document.getElementsByClassName('link')[0].style.visibility = 'visible';
                }
            }
        }

        openCards++;
        return true;
    }
}

/**
 * Uses CSS px coordinates to calculated the real distance between two locators. Returns a number rounded to 0 decimal places.
 */
function calcDistance(i) {
    let locator1 = document.getElementById(`${locations[i].name}-locator`); // Selected locator
    let locator2 = document.getElementById(`${locations[previouslyLocated].name}-locator`); // Last location travelled to

    let style1 = document.defaultView.getComputedStyle(locator1, null);
    let style2 = document.defaultView.getComputedStyle(locator2, null); // Allows the reading of CSS values

    let left1 = style1.left;
    let left2 = style2.left;
    let xDifference = Math.abs(parseInt(left1) - parseInt(left2));

    let top1 = style1.top;
    let top2 = style2.top;
    let yDifference = Math.abs(parseInt(top1) - parseInt(top2));
    // Finds the distance between top and left px distances of each locator and uses them to form a triangle with the hypotenuse being the straight line distance between previous and selected location.

    let actualDistance = parseInt(((Math.sqrt(Math.pow(xDifference, 2) + Math.pow(yDifference, 2))) * 2.827).toFixed(0)); // Pythagorean theorem finds hypotenuse length and multiplies by 'in world' distance of 1px in miles.

    return actualDistance;
}

/**
 * 'Sends' player to that location, fires functions to change style of info card, add distance travelled to total distance.
 */
function travelTo(i) {
    locations[i].currentlyLocated = true;
    checksCurrentlyLocated(i);
    addToDistance(i);
    setCurrentLocation(i);
    placesDiscovered[`${locations[i].name}`] = `true`;
    locations[i].discovered = true;
    previouslyLocated = locations[i].index;
}

/**
 * Checks through locations array for object with currentlyLocated = true and changes style to give a 'glow'.
 */
function checksCurrentlyLocated(i) {
    if (locations[i].currentlyLocated === true){
        document.getElementById(locations[i].name).style.boxShadow = '0 0 20px #D4AF37, inset 0 0 10px #000000';
    } else {
        document.getElementById(locations[i].name).style.boxShadow = null;
    }
}

/**
 * Closes open info card by removing HTML and changing visibility to hidden. Changes currently located to false.
 */
function closeInfo(i) {
    let close = document.getElementById(`${locations[i].name}-close`);
    let closeSecond = document.getElementById(`${locations[i].name}`);
    close.parentNode.innerHTML = null;
    closeSecond.style.visibility = 'hidden'; 

    locations[i].currentlyLocated = false;
    checksCurrentlyLocated(i);   
    checksDiscoveredPlaces();
    openCards--;
}

/**
 * Adds the calculated distance to the total distance travelled.
 */
function addToDistance(i) {
    distanceTravelled += calcDistance(i);
    document.getElementById('distance-travelled').innerText = `Distance travelled: ${distanceTravelled} miles`;
}

/**
 * Checks through locations array for currentlyLocated = true and sets the current location in the footer to that location name. 
 */
function setCurrentLocation(_i) {
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].currentlyLocated === true) {
            document.getElementById('current-location').innerText = `Current location: ${locations[i].name}`;
        }
    }
}

/**
 * Checks the placesDiscovered object length and compares it against the locations array length. Once the two are the same, the end game congratulations in shown.
 */
function checksDiscoveredPlaces() {
    if (Object.keys(placesDiscovered).length == locations.length) {
        let complete = document.getElementById('complete');
        complete.style.visibility = 'visible';
        return true;
    }
}

/**
 * Allows the right button to scroll the page 400 pixels right.
 */
function scrollRight() {
    document.getElementsByTagName('html')[0].style.overflowX = 'unset';
    window.scrollBy(400, 0);
    document.getElementsByTagName('body')[0].style.overflowX = 'scroll';
}

/**
 * Allows the right button to scroll the page 400 pixels left.
 */
function scrollLeft() {
    document.getElementsByTagName('html')[0].style.overflowX = 'unset';
    window.scrollBy(-400, 0);
    document.getElementsByTagName('body')[0].style.overflowX = 'scroll';
}

// Open information section

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

function openBraavosInfo() {
    openInfo(8);
}

function closeBraavos() {
    closeInfo(8);
}

function openVolantisInfo() {
    openInfo(9);
}

function closeVolantis() {
    closeInfo(9);
}

function openValyriaInfo() {
    openInfo(10);
}

function closeValyria() {
    closeInfo(10);
}

function openQarthInfo() {
    openInfo(11);
}

function closeQarth() {
    closeInfo(11);
}

function openDorneInfo() {
    openInfo(12);
}

function closeDorne() {
    closeInfo(12);
}

function openMeereenInfo() {
    openInfo(13);
}

function closeMeereen() {
    closeInfo(13);
}

function openVaesDothrakInfo() {
    openInfo(14);
}

function closeVaesDothrak() {
    closeInfo(14);
}

// Welcome card

function closeWelcome() {
    this.parentNode.style.visibility = 'hidden';
}

// End Card

function closeEndCard() {
    let complete = document.getElementById('complete');
    complete.style.zIndex = '-1';
}

// Event Listener section

document.getElementById('welcome').addEventListener('click', closeWelcome);

document.getElementById('kings-landing-locator').addEventListener('click', openKingsLandingInfo);

document.getElementById('winterfell-locator').addEventListener('click', openWinterfellInfo);

document.getElementById('eyrie-locator').addEventListener('click', openEyrieInfo);

document.getElementById('castle-black-locator').addEventListener('click', openCastleBlackInfo);

document.getElementById('iron-islands-locator').addEventListener('click', openIronIslandsInfo);

document.getElementById('the-twins-locator').addEventListener('click', openTwinsInfo);

document.getElementById('casterly-rock-locator').addEventListener('click', openCasterlyRockInfo);

document.getElementById('pentos-locator').addEventListener('click', openPentosInfo);

document.getElementById('braavos-locator').addEventListener('click', openBraavosInfo);

document.getElementById('volantis-locator').addEventListener('click', openVolantisInfo);

document.getElementById('valyria-locator').addEventListener('click', openValyriaInfo);

document.getElementById('qarth-locator').addEventListener('click', openQarthInfo);

document.getElementById('dorne-locator').addEventListener('click', openDorneInfo);

document.getElementById('meereen-locator').addEventListener('click', openMeereenInfo);

document.getElementById('vaes-dothrak-locator').addEventListener('click', openVaesDothrakInfo);

document.getElementById('right-scroll').addEventListener('click', scrollRight);

document.getElementById('left-scroll').addEventListener('click', scrollLeft);

document.getElementById('closeEndCard').addEventListener('click', closeEndCard);
