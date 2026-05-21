const heroes = {

"Juggernaut": {
role:"Carry",
skills:["Blade Fury","Healing Ward","Omnislash"],
items:["Battle Fury","Manta Style","Butterfly"]
},

"Phantom Assassin": {
role:"Carry",
skills:["Dagger","Blink Strike","Crit"],
items:["Battle Fury","Desolator","Abyssal Blade"]
},

"Anti-Mage": {
role:"Carry",
skills:["Mana Break","Blink","Mana Void"],
items:["Battle Fury","Manta","Skadi"]
},

"Faceless Void": {
role:"Carry",
skills:["Time Walk","Time Lock","Chronosphere"],
items:["Maelstrom","Manta","Butterfly"]
},

"Ursa": {
role:"Carry",
skills:["Earthshock","Fury Swipes","Enrage"],
items:["Blink","Abyssal Blade","Satanic"]
},

"Spectre": {
role:"Carry",
skills:["Dagger","Dispersion","Haunt"],
items:["Radiance","Manta","Skadi"]
},

"Invoker": {
role:"Mid",
skills:["Quas","Exort","Sun Strike"],
items:["Witch Blade","BKB","Hex"]
},

"Shadow Fiend": {
role:"Mid",
skills:["Raze","Necromastery","Requiem"],
items:["BKB","Daedalus","Shadow Blade"]
},

"Storm Spirit": {
role:"Mid",
skills:["Remnant","Vortex","Ball Lightning"],
items:["Orchid","BKB","Shiva"]
},

"Templar Assassin": {
role:"Mid",
skills:["Refraction","Meld","Traps"],
items:["Desolator","Blink","BKB"]
},

"Puck": {
role:"Mid",
skills:["Orb","Silence","Dream Coil"],
items:["Witch Blade","Blink","Shiva"]
},

"Lina": {
role:"Mid",
skills:["Dragon Slave","Light Strike","Laguna"],
items:["BKB","Daedalus","Travel Boots"]
},

"Axe": {
role:"Offlane",
skills:["Call","Spin","Culling Blade"],
items:["Blink","Blade Mail","Shiva"]
},

"Mars": {
role:"Offlane",
skills:["Spear","Arena","Bulwark"],
items:["Blink","BKB","Refresher"]
},

"Tidehunter": {
role:"Offlane",
skills:["Anchor Smash","Gush","Ravage"],
items:["Blink","Pipe","Refresher"]
},

"Slardar": {
role:"Offlane",
skills:["Stun","Bash","Corrosive"],
items:["Blink","BKB","AC"]
},

"Centaur": {
role:"Offlane",
skills:["Stomp","Double Edge","Stampede"],
items:["Blink","Heart","Pipe"]
},

"Underlord": {
role:"Offlane",
skills:["Firestorm","Pit","Dark Rift"],
items:["Greaves","Pipe","Shiva"]
},

"Crystal Maiden": {
role:"Support",
skills:["Nova","Frostbite","Ult"],
items:["Glimmer","Force Staff","Aether"]
},

"Lion": {
role:"Support",
skills:["Hex","Mana Drain","Finger"],
items:["Blink","Force Staff","Aether"]
},

"Witch Doctor": {
role:"Support",
skills:["Cask","Maledict","Death Ward"],
items:["Glimmer","Aghanim","Force Staff"]
},

"Shadow Shaman": {
role:"Support",
skills:["Hex","Shackles","Wards"],
items:["Blink","Aether","Refresher"]
},

"Dazzle": {
role:"Support",
skills:["Heal","Poison","Grave"],
items:["Greaves","Glimmer","Lotus"]
},

"Pudge": {
role:"Roam",
skills:["Hook","Rot","Dismember"],
items:["Blink","Aether","Lotus"]
},

"Spirit Breaker": {
role:"Roam",
skills:["Charge","Bash","Ult"],
items:["Shadow Blade","BKB","Heart"]
},

"Earth Spirit": {
role:"Roam",
skills:["Roll","Silence","Stun"],
items:["Vessel","BKB","Shiva"]
},

"Mirana": {
role:"Roam",
skills:["Arrow","Leap","Starfall"],
items:["Vessel","Eul","Gleipnir"]
},

"Bounty Hunter": {
role:"Roam",
skills:["Track","Jinada","Invis"],
items:["Solar Crest","Lotus","BKB"]
},

// 😂 MEME HEROES
"Papich": {
role:"AFK Carry",
skills:["Farm 60 min","EZ game","Tilt team"],
items:["Battle Fury","Manta","Shadow Blade"]
},

"Old God": {
role:"Mid Genius",
skills:["Smurf IQ","One shot","Mind control"],
items:["Blink","Daedalus","Refresher"]
},

"AFK Jungle Spirit": {
role:"Hidden Carry",
skills:["Farm jungle","No fights","Scale late"],
items:["Battle Fury","Skadi","Satanic"]
},

"Global Pause Master": {
role:"Support Troll",
skills:["Pause abuse","Tilt enemy","GG early"],
items:["Blink","Force Staff","Wind Waker"]
},

"322 Analyst": {
role:"Support Thrower",
skills:["Strange build","Throw game","Report team"],
items:["Midas","Aghanim","Greaves"]
},

// 🧠 NURLAN
"Нурланов Сасур": {
role:"Kazakh Boss",
skills:["Казахский разнос","AirWave","VIP Aura","Воздухан","MAX Удар"],
items:["VIP Казаха","Воздухан","Boots of Respect","BKB","Aghanim AirLines"]
},

// 😂 MEME PRESIDENTS (FICTIONAL)
"Captain Freedom (USA)": {
role:"Global Carry",
skills:["Freedom Strike","Press Ult","Eagle Boost"],
items:["Star Shield","Eagle Boots","Mic of Truth"]
},

"Eastern Strategist (RU)": {
role:"Tank Offlane",
skills:["Cold Aura","Long Plan","Wall Strategy"],
items:["Iron Plate","Winter Boots","Strategic Heart"]
},

"Blue Unity Hero (UA)": {
role:"Support Mid",
skills:["Hope Wave","Unity Pulse","Defense Ult"],
items:["Blue Shield","Peace Staff","Boots of Hope"]
},

"Frozen Commander (Korea)": {
role:"Jungle Boss",
skills:["Silent Rule","Missile Threat","Fear Aura"],
items:["Red Button (fake)","Dark Boots","Frozen Core"]
}

};

function createHero(name){

const el = document.createElement("div");
el.className = "hero";

el.innerHTML = `
<img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.toLowerCase().replace(/ /g,'_')}.png">
<b>${name}</b>
`;

el.onclick = () => showHero(name);

return el;

}

function showHero(name){

const h = heroes[name];

document.getElementById("panel").innerHTML = `

<h2>${name}</h2>
<p><b>Role:</b> ${h.role}</p>

<h3>Skills</h3>
<ul>${h.skills.map(s=>`<li>${s}</li>`).join("")}</ul>

<h3>Items</h3>
<ul>${h.items.map(i=>`<li>${i}</li>`).join("")}</ul>

`;

}

// render
Object.keys(heroes).forEach(name => {

const hero = createHero(name);

if(heroes[name].role.includes("Carry")) carry.appendChild(hero);
else if(heroes[name].role.includes("Mid")) mid.appendChild(hero);
else if(heroes[name].role.includes("Offlane")) offlane.appendChild(hero);
else if(heroes[name].role.includes("Support")) support.appendChild(hero);
else meme.appendChild(hero);

});