const heroes = {
    // --- CARRY ---
    "Juggernaut": {
        role: "Carry",
        skills: ["Blade Fury", "Healing Ward", "Omnislash"],
        items: ["Battle Fury", "Manta Style", "Butterfly"],
        img: "juggernaut"
    },
    "Phantom Assassin": {
        role: "Carry",
        skills: ["Dagger", "Blink Strike", "Crit"],
        items: ["Battle Fury", "Desolator", "Abyssal Blade"],
        img: "phantom_assassin"
    },
    "Anti-Mage": {
        role: "Carry",
        skills: ["Mana Break", "Blink", "Mana Void"],
        items: ["Battle Fury", "Manta", "Skadi"],
        img: "antimage"
    },
    "Faceless Void": {
        role: "Carry",
        skills: ["Time Walk", "Time Lock", "Chronosphere"],
        items: ["Maelstrom", "Manta", "Butterfly"],
        img: "faceless_void"
    },
    "Ursa": {
        role: "Carry",
        skills: ["Earthshock", "Fury Swipes", "Enrage"],
        items: ["Blink", "Abyssal Blade", "Satanic"],
        img: "ursa"
    },
    "Spectre": {
        role: "Carry",
        skills: ["Dagger", "Dispersion", "Haunt"],
        items: ["Radiance", "Manta", "Skadi"],
        img: "spectre"
    },

    // --- MID ---
    "Invoker": {
        role: "Mid",
        skills: ["Quas", "Exort", "Sun Strike"],
        items: ["Witch Blade", "BKB", "Hex"],
        img: "invoker"
    },
    "Shadow Fiend": {
        role: "Mid",
        skills: ["Raze", "Necromastery", "Requiem"],
        items: ["BKB", "Daedalus", "Shadow Blade"],
        img: "nevermore"
    },
    "Storm Spirit": {
        role: "Mid",
        skills: ["Remnant", "Vortex", "Ball Lightning"],
        items: ["Orchid", "BKB", "Shiva"],
        img: "storm_spirit"
    },
    "Templar Assassin": {
        role: "Mid",
        skills: ["Refraction", "Meld", "Traps"],
        items: ["Desolator", "Blink", "BKB"],
        img: "templar_assassin"
    },
    "Puck": {
        role: "Mid",
        skills: ["Orb", "Silence", "Dream Coil"],
        items: ["Witch Blade", "Blink", "Shiva"],
        img: "puck"
    },
    "Lina": {
        role: "Mid",
        skills: ["Dragon Slave", "Light Strike", "Laguna"],
        items: ["BKB", "Daedalus", "Travel Boots"],
        img: "lina"
    },

    // --- OFFLANE ---
    "Axe": {
        role: "Offlane",
        skills: ["Call", "Spin", "Culling Blade"],
        items: ["Blink", "Blade Mail", "Shiva"],
        img: "axe"
    },
    "Mars": {
        role: "Offlane",
        skills: ["Spear", "Arena", "Bulwark"],
        items: ["Blink", "BKB", "Refresher"],
        img: "mars"
    },
    "Tidehunter": {
        role: "Offlane",
        skills: ["Anchor Smash", "Gush", "Ravage"],
        items: ["Blink", "Pipe", "Refresher"],
        img: "tidehunter"
    },
    "Slardar": {
        role: "Offlane",
        skills: ["Stun", "Bash", "Corrosive"],
        items: ["Blink", "BKB", "AC"],
        img: "slardar"
    },
    "Centaur": {
        role: "Offlane",
        skills: ["Stomp", "Double Edge", "Stampede"],
        items: ["Blink", "Heart", "Pipe"],
        img: "centaur"
    },
    "Underlord": {
        role: "Offlane",
        skills: ["Firestorm", "Pit", "Dark Rift"],
        items: ["Greaves", "Pipe", "Shiva"],
        img: "abyssal_underlord"
    },

    // --- SUPPORT ---
    "Crystal Maiden": {
        role: "Support",
        skills: ["Nova", "Frostbite", "Ult"],
        items: ["Glimmer", "Force Staff", "Aether"],
        img: "crystal_maiden"
    },
    "Lion": {
        role: "Support",
        skills: ["Hex", "Mana Drain", "Finger"],
        items: ["Blink", "Force Staff", "Aether"],
        img: "lion"
    },
    "Witch Doctor": {
        role: "Support",
        skills: ["Cask", "Maledict", "Death Ward"],
        items: ["Glimmer", "Aghanim", "Force Staff"],
        img: "witch_doctor"
    },
    "Shadow Shaman": {
        role: "Support",
        skills: ["Hex", "Shackles", "Wards"],
        items: ["Blink", "Aether", "Refresher"],
        img: "shadow_shaman"
    },
    "Dazzle": {
        role: "Support",
        skills: ["Heal", "Poison", "Grave"],
        items: ["Greaves", "Glimmer", "Lotus"],
        img: "dazzle"
    },

    // --- ROAM ---
    "Pudge": {
        role: "Roam",
        skills: ["Hook", "Rot", "Dismember"],
        items: ["Blink", "Aether", "Lotus"],
        img: "pudge"
    },
    "Spirit Breaker": {
        role: "Roam",
        skills: ["Charge", "Bash", "Ult"],
        items: ["Shadow Blade", "BKB", "Heart"],
        img: "spirit_breaker"
    },
    "Earth Spirit": {
        role: "Roam",
        skills: ["Roll", "Silence", "Stun"],
        items: ["Vessel", "BKB", "Shiva"],
        img: "earth_spirit"
    },
    "Mirana": {
        role: "Roam",
        skills: ["Arrow", "Leap", "Starfall"],
        items: ["Vessel", "Eul", "Gleipnir"],
        img: "mirana"
    },
    "Bounty Hunter": {
        role: "Roam",
        skills: ["Track", "Jinada", "Invis"],
        items: ["Solar Crest", "Lotus", "BKB"],
        img: "bounty_hunter"
    },

    // 😂 MEME HEROES
    "Papich": {
        role: "AFK Carry",
        skills: ["Farm 60 min", "EZ game", "Tilt team"],
        items: ["Battle Fury", "Manta", "Shadow Blade"],
        img: "https://i.ibb.co/Vv0FmNn/papich.jpg" // Фотка Папича
    },
    "Old God": {
        role: "Mid Genius",
        skills: ["Smurf IQ", "One shot", "Mind control"],
        items: ["Blink", "Daedalus", "Refresher"],
        img: "https://i.ibb.co/9h7K4r1/oldgod.jpg" // Фотка Старого Бога
    },
    "AFK Jungle Spirit": {
        role: "Hidden Carry",
        skills: ["Farm jungle", "No fights", "Scale late"],
        items: ["Battle Fury", "Skadi", "Satanic"],
        img: "https://i.ibb.co/68032Sm/leshnichel.jpg" // Фотка Лешничка
    },
    "Global Pause Master": {
        role: "Support Troll",
        skills: ["Pause abuse", "Tilt enemy", "GG early"],
        items: ["Blink", "Force Staff", "Wind Waker"],
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=60"
    },
    "322 Analyst": {
        role: "Support Thrower",
        skills: ["Strange build", "Throw game", "Report team"],
        items: ["Midas", "Aghanim", "Greaves"],
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=150&auto=format&fit=crop&q=60"
    },

    // 🧠 NURLAN
    "Нурланов Сасур": {
        role: "Kazakh Boss",
        skills: ["Казахский разнос", "AirWave", "VIP Aura", "Воздухан", "MAX Удар"],
        items: ["VIP Казаха", "Воздухан", "Boots of Respect", "BKB", "Aghanim AirLines"],
        img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=150&auto=format&fit=crop&q=60"
    },

    // 😂 MEME PRESIDENTS
    "Captain Freedom (USA)": {
        role: "Global Carry",
        skills: ["Freedom Strike", "Press Ult", "Eagle Boost"],
        items: ["Star Shield", "Eagle Boots", "Mic of Truth"],
        img: "https://i.ibb.co/QkWKCcM/trump.jpg" // Фотка Дональда Трампа
    },
    "Eastern Strategist (RU)": {
        role: "Tank Offlane",
        skills: ["Cold Aura", "Long Plan", "Wall Strategy"],
        items: ["Iron Plate", "Winter Boots", "Strategic Heart"],
        img: "https://i.ibb.co/hK9pYt0/putin.jpg" // Фотка Владимира Путина
    },
    "Blue Unity Hero (UA)": {
        role: "Support Mid",
        skills: ["Hope Wave", "Unity Pulse", "Defense Ult"],
        items: ["Blue Shield", "Peace Staff", "Boots of Hope"],
        img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=150&auto=format&fit=crop&q=60"
    },
    "Frozen Commander (Korea)": {
        role: "Jungle Boss",
        skills: ["Silent Rule", "Missile Threat", "Fear Aura"],
        items: ["Red Button (fake)", "Dark Boots", "Frozen Core"],
        img: "https://i.ibb.co/gSTCg3P/kim.jpg" // Фотка Ким Чен Ына
    }
};

function createHero(name){
    const el = document.createElement("div");
    el.className = "hero";

    const h = heroes[name];
    let imgSrc = "";

    if (h.img.startsWith("http")) {
        imgSrc = h.img;
    } else {
        imgSrc = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${h.img}.png`;
    }

    el.innerHTML = `
        <img src="${imgSrc}" alt="${name}" onerror="this.src='https://via.placeholder.com/120x68/444/fff?text=No+Img'">
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
    const role = heroes[name].role;

    // Распределяем по контейнерам с учетом новых кастомных ролей
    if (role.includes("Carry")) {
        carry.appendChild(hero);
    } else if (role.includes("Mid")) {
        mid.appendChild(hero);
    } else if (role.includes("Offlane")) {
        offlane.appendChild(hero);
    } else if (role.includes("Support") || role.includes("Roam")) {
        support.appendChild(hero);
    } else {
        meme.appendChild(hero);
    }
});