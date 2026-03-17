window.CONFIG = {
  serverName: "Placeholder",
  tagline: "A New MapleStory Experience",
  serverDescription: "Explore a custom MapleStory private server with unique features, balanced rates, and an active community.",
  version: "v95",
  maxLevel: 200,
  downloadUrl: "#", // Set to Google Drive, Mega, etc.
  discordLink: "#", // Set to your Discord invite link
  apiBaseUrl: "http://localhost:8080", // Change to production API URL

  // Progressive mob EXP rates (level-based)
  expRates: [
    { range: "1–10", multiplier: "2x" },
    { range: "11–30", multiplier: "5x" },
    { range: "31–70", multiplier: "4x" },
    { range: "71–120", multiplier: "3x" },
    { range: "121–199", multiplier: "2x" },
    { range: "200", multiplier: "1x" }
  ],

  // Flat rate multipliers
  rates: {
    questExp: "1x",
    meso: "1x",
    drop: "1x",
    mobSpawn: "1x"
  },

  // NX drops from non-boss mob kills
  nxDrops: {
    chance: "3%",
    min: 1,
    max: 80
  },

  // Drop level scaling
  dropScaling: {
    enabled: true,
    levelRange: "1–200",
    multiplierRange: "50%–200%",
    description: "Drop rates scale based on your level vs mob level. Overleveled = reduced drops, underleveled = boosted drops."
  },

  // Happy Hour (random daily event)
  happyHour: {
    duration: "60 min",
    expBonus: "2x",
    pqPointsBonus: "2x",
    window: "2 PM – 11 PM",
    mobRespawn: "7 sec"
  },

  // PQ Points
  pqPoints: {
    dailyCap: 3,
    description: "3 PQ clears per day grant PQ points."
  },

  navLinks: [
    { label: "Home", href: "index.html" },
    { label: "Features", href: "features.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Register", href: "register.html" }
  ],

  features: [
    {
      title: "Progressive EXP",
      description: "Level-based EXP scaling — higher rates early on, tapering as you approach endgame for a balanced progression curve.",
      icon: "sparkles",
      image: ""
    },
    {
      title: "NX from Mobs",
      description: "Every mob kill has a 3% chance to drop 1–80 NX. Farm your way to cash shop items without spending real money.",
      icon: "trophy",
      image: ""
    },
    {
      title: "Happy Hour",
      description: "A random daily event with 2x EXP and 2x PQ Points for 60 minutes. Starts between 2 PM and 11 PM.",
      icon: "sparkles",
      image: ""
    },
    {
      title: "Drop Level Scaling",
      description: "Drop rates dynamically scale (50%–200%) based on your level vs the mob's level. Fight mobs your level for best drops.",
      icon: "map",
      image: ""
    },
    {
      title: "PQ Points System",
      description: "Earn PQ Points by clearing Party Quests — up to 3 rewarded clears per day. Spend points on exclusive rewards.",
      icon: "users",
      image: ""
    },
    {
      title: "Custom Bosses",
      description: "Face challenging custom boss encounters with unique mechanics and exclusive drops.",
      icon: "skull",
      image: ""
    },
    {
      title: "Anti-Cheat",
      description: "Server-side validation and active moderation keep the game fair for everyone.",
      icon: "shield",
      image: ""
    },
    {
      title: "Active Community",
      description: "Join a friendly community on Discord with regular events and updates.",
      icon: "users",
      image: ""
    }
  ],

  galleryImages: [
    // { src: "images/gallery/screenshot1.png", caption: "Boss fight" },
  ],

  footerText: "This server is not affiliated with or endorsed by Nexon, Wizet, or any official MapleStory entity."
};
