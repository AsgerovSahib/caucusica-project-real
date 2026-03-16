
// ═══════════ AI TRIP PLANNER ═══════════
const promptPresets = {
  history: "I am fascinated by ancient civilisations and want to understand Azerbaijan's pre-Islamic and Silk Road history deeply. I prefer small guesthouse stays with hosts who can tell stories. I have 8 days.",
  craft: "I am an artist and craftsperson. I want to meet carpet weavers, coppersmiths, and silk workers in their workshops and learn from them hands-on. I have 7 days, travelling solo.",
  food: "Food is my primary reason for travelling. I want to eat home-cooked Azerbaijani meals with local families, visit markets, and understand the culinary traditions of different regions. I have 6 days with my partner.",
  nature: "I love hiking, mountains, and wild landscapes. I want to trek in the Greater Caucasus, stay in mountain villages, and experience the contrast between alpine north and subtropical south. I have 10 days.",
  family: "We are a family of 4 with two children aged 8 and 11. We want a mix of history, nature, and fun experiences that will engage the kids. We have 9 days and need comfortable accommodation.",
  photo: "I am a travel photographer looking for dramatic landscapes, authentic portraits, and ancient architecture. I want to capture Azerbaijan's visual extremes — fire temples, mountain villages, and urban modernity. 7 days solo.",
  silk: "I want to trace the full Silk Road route through Azerbaijan — from the eastern Caspian coast through the mountains and caravanserais of the northwest. I have 14 days and want an immersive, deep journey."
};

function setPrompt(key) {
  document.getElementById('plannerInput').value = promptPresets[key];
  document.getElementById('plannerInput').focus();
}

const loadingMessages = [
  "Reading your travel soul…",
  "Consulting the fire temples…",
  "Matching you to your hosts…",
  "Tracing the ancient routes…",
  "Weaving your itinerary…"
];
