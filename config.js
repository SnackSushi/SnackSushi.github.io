window.CONFIG = {
  serverName: "Placeholder",
  tagline: "A New MapleStory Experience",
  serverDescription: "Explore a custom MapleStory private server with unique features, balanced rates, and an active community.",
  version: "v83",
  rates: {
    exp: "4x",
    meso: "2x",
    drop: "2x"
  },
  maxLevel: 200,
  downloadUrl: "#", // Set to Google Drive, Mega, etc.
  discordLink: "#", // Set to your Discord invite link
  apiBaseUrl: "http://localhost:8080", // Change to production API URL

  navLinks: [
    { label: "Home", href: "index.html" },
    { label: "Features", href: "features.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Register", href: "register.html" }
  ],

  features: [
    {
      title: "Custom Bosses",
      description: "Face challenging custom boss encounters with unique mechanics and exclusive drops.",
      icon: "skull",
      image: ""
    },
    {
      title: "Enhanced Skills",
      description: "Rebalanced and enhanced job skills with new visual effects and smoother gameplay.",
      icon: "sparkles",
      image: ""
    },
    {
      title: "Expanded World",
      description: "Discover new maps, quests, and hidden areas beyond the original content.",
      icon: "map",
      image: ""
    },
    {
      title: "Anti-Cheat",
      description: "Server-side validation and active moderation keep the game fair for everyone.",
      icon: "shield",
      image: ""
    },
    {
      title: "Rankings",
      description: "Compete on leaderboards for levels, boss clears, and seasonal events.",
      icon: "trophy",
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
