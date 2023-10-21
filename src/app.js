const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// <divclass="player"><imgsrc="./images/super-1.pngalt=""><divclass="name">Hero</div><divclass="strength">90</div></div>
// <divclass="player"><imgsrc="./images/super-1.png"alt=""><divclass="name">Hero</div><divclass="strength">58</div></div>
// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  // Create players using for loop
  // Type your code here
  for (i = 0; i < players.length; i++) {
    let randomstrength = i % 2 == 0 ? "hero" : "villain";

    let X = {
      name: players[i],
      image: `./images/super-${i + 1}.png`,
      strength: getRandomStrength(),
      type: randomstrength,
    };
    detailedPlayers.push(X);
  }

  return detailedPlayers;
};

var type = ["hero", "villain"];

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  return Math.floor(Math.random() * 100);
  // Note: You can use Math.random() and Math.ceil()
};

const buildPlayers = (players, parameter) => {
  let fragment = "";

  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here

  for (var i = 0; i < players.length; i++) {
    if (players[i].type == parameter) {
      fragment += `<div class="player">
   <img src="${players[i].image}" alt="">
   <div class="name">${players[i].name}</div>
   <div class="strength">${players[i].strength}</div>
</div>`;
    }
  }

  return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
