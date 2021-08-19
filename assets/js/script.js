let locations = [
    {
    name: 'Kings Landing',
    information: 'lorem ipsum',
    distanceToUser: 123,
    currentlyLocated: false,
    discovered: true,

    }
]

if (locations[0].discovered === true) {
    console.log(`${locations[0].name} discovered`)
}