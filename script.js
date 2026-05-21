const heroesData = {

"Anti-Mage": {
role:"Carry",
meta:"A-tier",
skills:["Mana Break","Blink","Mana Break","Counterspell","Mana Break","Mana Void","Mana Break"],
items:["Battle Fury","Manta Style","Butterfly","Skadi","Abyssal Blade"]
},

"Axe": {
role:"Offlane",
meta:"S-tier",
skills:["Berserker's Call","Counter Helix","Counter Helix","Battle Hunger","Counter Helix","Culling Blade","Counter Helix"],
items:["Blink Dagger","Blade Mail","Pipe","Shiva's Guard","Heart"]
},

"Bane": {
role:"Support",
meta:"A-tier",
skills:["Brain Sap","Nightmare","Brain Sap","Enfeeble","Brain Sap","Fiend's Grip","Brain Sap"],
items:["Tranquil Boots","Glimmer Cape","Force Staff","Aether Lens","Aeon Disk"]
},

"Bloodseeker": {
role:"Carry",
meta:"A-tier",
skills:["Blood Rite","Bloodrage","Bloodrage","Thirst","Bloodrage","Rupture","Bloodrage"],
items:["Maelstrom","BKB","Mjollnir","Butterfly","Abyssal Blade"]
},

"Crystal Maiden": {
role:"Support",
meta:"A-tier",
skills:["Crystal Nova","Frostbite","Crystal Nova","Arcane Aura","Crystal Nova","Freezing Field","Crystal Nova"],
items:["Tranquil Boots","Glimmer Cape","Force Staff","BKB","Aghanim's Scepter"]
},

"Drow Ranger": {
role:"Carry",
meta:"S-tier",
skills:["Frost Arrows","Multishot","Frost Arrows","Gust","Frost Arrows","Marksmanship","Frost Arrows"],
items:["Dragon Lance","Manta Style","Butterfly","Daedalus","Satanic"]
},

"Earthshaker": {
role:"Support",
meta:"S-tier",
skills:["Fissure","Enchant Totem","Fissure","Aftershock","Fissure","Echo Slam","Fissure"],
items:["Blink Dagger","Force Staff","Aghanim's Shard","BKB","Refresher Orb"]
},

"Juggernaut": {
role:"Carry",
meta:"S-tier",
skills:["Blade Fury","Healing Ward","Blade Fury","Stats","Blade Fury","Omnislash","Blade Fury"],
items:["Phase Boots","Battle Fury","Manta Style","Butterfly","Aghanim's Scepter"]
},

"Mirana": {
role:"Support",
meta:"A-tier",
skills:["Starstorm","Sacred Arrow","Starstorm","Leap","Starstorm","Moonlight Shadow","Starstorm"],
items:["Eul's Scepter","Spirit Vessel","Lotus Orb","Linken's Sphere","Boots of Bearing"]
},

"Morphling": {
role:"Carry",
meta:"S-tier",
skills:["Waveform","Adaptive Strike","Waveform","Attribute Shift","Waveform","Morph","Waveform"],
items:["Manta Style","Skadi","Butterfly","Satanic","Daedalus"]
},

"Pudge": {
role:"Roamer",
meta:"S-tier",
skills:["Meat Hook","Rot","Meat Hook","Flesh Heap","Meat Hook","Dismember","Meat Hook"],
items:["Tranquil Boots","Blink Dagger","Aether Lens","Lotus Orb","Wind Waker"]
},

"Invoker": {
role:"Mid",
meta:"S-tier",
skills:["Quas","Exort","Exort","Wex","Exort","Sun Strike","Exort"],
items:["Bottle","Travel Boots","Witch Blade","BKB","Scythe of Vyse"]
},

"Shadow Fiend": {
role:"Mid",
meta:"S-tier",
skills:["Shadowraze","Necromastery","Shadowraze","Presence","Shadowraze","Requiem","Shadowraze"],
items:["Bottle","Dragon Lance","BKB","Daedalus","Silver Edge"]
},

"Phantom Assassin": {
role:"Carry",
meta:"S-tier",
skills:["Stifling Dagger","Phantom Strike","Stifling Dagger","Blur","Stifling Dagger","Coup De Grace","Stifling Dagger"],
items:["Battle Fury","Desolator","BKB","Basher","Abyssal Blade"]
},

"Faceless Void": {
role:"Carry",
meta:"S-tier",
skills:["Time Walk","Time Lock","Time Lock","Backtrack","Time Lock","Chronosphere","Time Lock"],
items:["Maelstrom","Manta Style","BKB","Butterfly","Satanic"]
},

"Templar Assassin": {
role:"Mid",
meta:"S-tier",
skills:["Refraction","Psi Blades","Refraction","Meld","Refraction","Psionic Trap","Refraction"],
items:["Dragon Lance","Desolator","Blink Dagger","BKB","Daedalus"]
},

"Sniper": {
role:"Carry",
meta:"A-tier",
skills:["Shrapnel","Headshot","Headshot","Take Aim","Headshot","Assassinate","Headshot"],
items:["Maelstrom","Dragon Lance","Hurricane Pike","Daedalus","Satanic"]
},

"Ursa": {
role:"Carry",
meta:"S-tier",
skills:["Earthshock","Overpower","Fury Swipes","Overpower","Overpower","Enrage","Overpower"],
items:["Battle Fury","Blink Dagger","BKB","Abyssal Blade","Satanic"]
},

"Storm Spirit": {
role:"Mid",
meta:"A-tier",
skills:["Static Remnant","Overload","Static Remnant","Electric Vortex","Static Remnant","Ball Lightning","Static Remnant"],
items:["Bottle","Orchid","BKB","Shiva's Guard","Bloodthorn"]
},

"Lion": {
role:"Support",
meta:"A-tier",
skills:["Earth Spike","Hex","Mana Drain","Earth Spike","Earth Spike","Finger of Death","Earth Spike"],
items:["Blink Dagger","Force Staff","Aether Lens","Aeon Disk","Aghanim's Shard"]
},

"Нурланов Сасур": {
role:"Universal Kazakh Boss",
meta:"GOD TIER ☠️",
skills:["Казахский разнос","AirWave","VIP Aura","Воздушный удар","MAX Воздухан"],
items:["VIP Казаха","Воздухан","Aghanim AirLines","Boots of Respect","BKB"]
}

};

const heroesContainer = document.getElementById("heroesContainer");

Object.keys(heroesData).forEach(hero => {

const card = document.createElement("div");

card.className = "hero-card";

card.innerHTML = `

<img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${formatHero(hero)}.png">

<h3>${hero}</h3>

`;

card.onclick = () => showHero(hero);

heroesContainer.appendChild(card);

});

function formatHero(name){

return name
.toLowerCase()
.replaceAll(" ", "_")
.replaceAll("-", "")
.replaceAll("'", "");

}

function showHero(hero){

const data = heroesData[hero];

document.getElementById("heroInfo").innerHTML = `

<h2>${hero}</h2>

<p><strong>Роль:</strong> ${data.role}</p>

<p>

<strong>META:</strong>

<span style="color:lime;">
${data.meta}
</span>

</p>

<div class="build">

<h3>Skill Build</h3>

<ul>

${data.skills.map(skill =>
`<li>${skill}</li>`
).join('')}

</ul>

</div>

<div class="build">

<h3>Item Build</h3>

<ul>

${data.items.map(item =>
`<li>${item}</li>`
).join('')}

</ul>

</div>

`;

}

document.getElementById("themeToggle")
.onclick = () => {

document.body.classList.toggle("light-theme");

};

document.getElementById("searchInput")
.addEventListener("input", function(){

const value = this.value.toLowerCase();

document.querySelectorAll(".hero-card")
.forEach(card => {

const hero = card.innerText.toLowerCase();

if(hero.includes(value)){

card.style.display = "block";

} else {

card.style.display = "none";

}

});

});