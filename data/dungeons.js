export const dungeons = [
    {
        id: 'forest',
        title: 'Forest Temple',
        map: {
            top: '60%',
            left: '30%'
        },
        image: 'forestTemple.jpg',
        //audio: 'forestTemple.wav',
        action: 'openingChest.mp3',
        description: 'You see a monkey caged in the middle of the room surrounded by vicious looking plants, to your right you see a chest, to your left is a bridge made of vines that crosses a ravine. What do you do?', 
        choices: [{
            id: 'middle',
            description: 'Go middle and try to help the monkey.',
            result: 'You charge forward and the plants attack you causing you to take 20 damage, but you get the monkey out and he gifts you 10 gold for the save',
            hp: -20,
            gold: 10
        }, {
            id: 'right',
            description: 'Go right to the chest and open it.',
            result: 'Inside the chest is a slingshot which you use to destroy the plants, then you release the monkey from his cage and he is so impressed with your actions if gives you 30 gold.',
            hp: 0,
            gold: 30
        }, {
            id: 'left',
            description: 'Go left accross the bridge.',
            result: 'You get halfway across the bridge when an ape notices you, and since you did not save his friend he cuts the bridge and you fall to your death.',
            hp: -150,
            gold: 0
        }]

    },
    {
        id: 'snow',
        title: 'Snowpeak Ruins',
        map: {
            top: '10%',
            left: '20%'
        },
        image: 'snowpeakRuins.jpg',
        //audio: 'snowpeakRuins.wav',
        action: 'openingChest.mp3',
        description: 'You see a big yeti looking thing in a mansion, it notices you. It seems to be motioning for you to come closer. You also notice a chest to your left. What do you do?', 
        choices: [{
            id: 'leave',
            description: 'Leave the mansion.',
            result: 'You leave and the yeti looks disappointed, having no where to stay during the night time out in the cold you take 30 damage',
            hp: -30,
            gold: 0
        }, {
            id: 'chest',
            description: 'Open the chest.',
            result: 'Inside the chest is 20 gold, but it turns out to be the yeti\'s money. Furious that you took its cold hard cash it attacks and you take 50 damage.',
            hp: -50,
            gold: 20
        }, {
            id: 'talk',
            description: 'Talk with the yeti.',
            result: 'You talk with the yeti and she tells you she is sick, she would like some soup her mate made in the other room. You retrieve the soup and she and her mate gift you 70 gold. They also share their soup which has healing properties.',
            hp: 30,
            gold: 70
        }]
    },
    {
        id: 'lake',
        title: 'Lakebed Temple',
        map: {
            top: '49%',
            left: '22%'
        },
        image: 'lakebedTemple.jpg',
        //audio: 'lakebedTemple.wav',
        action: 'openingChest.mp3',
        description: 'You swim down into this giant underwater temple. It seems water has not filled the inside yet, but is starting to flow in fast. There is a lever towards the back of the room. What do you do?', 
        choices: [{
            id: 'swimUp',
            description: 'Swim up to the surface.',
            result: 'You swim up to the surface just barely making it before you pass out. You managed to grab 10 gold from the temple on your swim up but take 20 damage.',
            hp: -20,
            gold: 10
        }, {
            id: 'deeper',
            description: 'Go deeper into the temple.',
            result: 'Down in the depths you find a chest, in that chest is a clawshot which allows you to shoot up to the surface in no time. Since you have some spare time before the temple fills with water you look around and find another chest with 40 gold.',
            hp: 0,
            gold: 40
        }, {
            id: 'lever',
            description: 'Pull the lever.',
            result: 'Pulling the lever has opened the floodgates. The temple quickly fills with little time to react. But at least you found 30 gold in your last few seconds.',
            hp: -100,
            gold: 30
        }]
    },
];