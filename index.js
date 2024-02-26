const express = require("express");
const app = express();
const PORT = 8080;

const affirmations = [
  {
    text: "I radiate positivity and attract good things into my life.",
    type: "general",
  },
  {
    text: "Every day is a new opportunity for growth and positive change.",
    type: "general",
  },
  {
    text: "I trust the journey, even when I do not understand it.",
    type: "general",
  },
  {
    text: "I am in control of my thoughts, and I choose positivity.",
    type: "general",
  },
  {
    text: "I am open to new possibilities and embrace change with a positive mindset.",
    type: "general",
  },
  {
    text: "I am a source of inspiration and motivation for others.",
    type: "general",
  },
  {
    text: "I appreciate the beauty in small moments and find joy in everyday life.",
    type: "general",
  },
  {
    text: "I am resilient and can overcome any challenge that comes my way.",
    type: "general",
  },
  {
    text: "I am surrounded by love, and I love and accept myself unconditionally.",
    type: "general",
  },
  {
    text: "I trust the timing of my life and allow things to unfold naturally.",
    type: "general",
  },
  {
    text: "I am a fierce and unstoppable force.",
    type: "general",
  },
  {
    text: "I am the architect of my own destiny; I create the life I want.",
    type: "general",
  },
  {
    text: "I am unapologetically myself, and that's my superpower.",
    type: "general",
  },
  {
    text: "I celebrate my achievements because I deserve it.",
    type: "general",
  },
  {
    text: "My self-worth is non-negotiable; I demand respect and command attention.",
    type: "general",
  },
  {
    text: "My self-worth is not contingent on my achievements.",
    type: "general",
  },
  {
    text: "I love and appreciate the person I am becoming.",
    type: "general",
  },
  {
    text: "I am deserving of love, respect, and success.",
    type: "general",
  },
  {
    text: "I surround myself with people who uplift and appreciate me.",
    type: "general",
  },
  {
    text: "I am proud of the person I am becoming.",
    type: "general",
  },
  {
    text: "I am capable of achieving anything I set my mind to.",
    type: "motivational",
  },
  {
    text: "Every challenge I face is an opportunity to learn and improve.",
    type: "motivational",
  },
  {
    text: "I am motivated, focused, and unstoppable.",
    type: "motivational",
  },
  {
    text: "I walk into a room with confidence and own every moment.",
    type: "motivational",
  },
  {
    text: "I trust in my ability to overcome obstacles.",
    type: "motivational",
  },
  {
    text: "My potential is limitless, and I am constantly growing.",
    type: "motivational",
  },
  {
    text: "I am committed to becoming the best version of myself.",
    type: "motivational",
  },
  {
    text: "Today, I choose progress over perfection.",
    type: "motivational",
  },
  {
    text: "I attract success and opportunities into my life.",
    type: "motivational",
  },
  {
    text: "My goals are achievable, and I have the power to reach them.",
    type: "motivational",
  },
  {
    text: "My past does not define me; I create my own destiny.",
    type: "motivational",
  },
  {
    text: "I am worthy of success and happiness.",
    type: "motivational",
  },
  {
    text: "I believe in my dreams and work tirelessly to make them a reality.",
    type: "motivational",
  },
  {
    text: "I believe in my abilities and trust the process of life.",
    type: "motivational",
  },
  {
    text: "I am in control of my thoughts, and I choose positivity.",
    type: "motivational",
  },
  {
    text: "I am motivated by the limitless possibilities that the future holds.",
    type: "motivational",
  },
  {
    text: "Challenges are stepping stones to my success, and I embrace them with courage.",
    type: "motivational",
  },
  {
    text: "I am committed to my goals, and I have the strength to overcome any obstacles in my path.",
    type: "motivational",
  },
  {
    text: "I am worthy of success and happiness.",
    type: "motivational",
  },
  {
    text: "I am resilient, and setbacks only make me stronger.",
    type: "motivational",
  },
  {
    text: "My self-assuredness is magnetic and inspiring.",
    type: "confidence-boosting",
  },
  {
    text: "I am comfortable in my own skin and radiate self-love.",
    type: "confidence-boosting",
  },
  {
    text: "I am bold, beautiful, and brilliantly confident.",
    type: "confidence-boosting",
  },
  {
    text: "I trust myself and my ability to handle any situation.",
    type: "confidence-boosting",
  },
  {
    text: "I am unapologetically authentic and confident in who I am.",
    type: "confidence-boosting",
  },
  {
    text: "I trust the journey of becoming the best version of myself.",
    type: "confidence-boosting",
  },
  {
    text: "I believe in my abilities and trust in my potential.",
    type: "confidence-boosting",
  },
  {
    text: "My self-worth is not determined by external validation; I am enough just as I am.",
    type: "confidence-boosting",
  },
  {
    text: "I am deserving of success, and I confidently claim it.",
    type: "confidence-boosting",
  },
  {
    text: "My confidence grows stronger with each challenge I overcome.",
    type: "confidence-boosting",
  },
  {
    text: "I am confident, capable, and ready to conquer anything.",
    type: "confidence-boosting",
  },
  {
    text: "I am in control of my thoughts, feelings, and actions.",
    type: "confidence-boosting",
  },
  {
    text: "I trust myself to make the right decisions.",
    type: "confidence-boosting",
  },
  {
    text: "I am a valuable and unique individual with much to offer.",
    type: "confidence-boosting",
  },
  {
    text: "I am bold, brave, and beautiful inside and out.",
    type: "confidence-boosting",
  },
  {
    text: "I stand tall and speak with confidence and conviction.",
    type: "confidence-boosting",
  },
  {
    text: "I am a powerhouse; I am indestructible.",
    type: "confidence-boosting",
  },
  {
    text: "I am deserving of success, and I allow myself to achieve it with confidence.",
    type: "confidence-boosting",
  },
  {
    text: "I trust in my ability to achieve my goals and create a fulfilling life.",
    type: "confidence-boosting",
  },
  {
    text: "My opinions are valuable, and I express them with conviction.",
    type: "confidence-boosting",
  },
  {
    text: "I love and accept myself unconditionally.",
    type: "self-love",
  },
  {
    text: "My worth is not determined by the opinions of others.",
    type: "self-love",
  },
  {
    text: "I am deserving of all the love and happiness life has to offer.",
    type: "self-love",
  },
  {
    text: "I treat myself with kindness and respect.",
    type: "self-love",
  },
  {
    text: "My imperfections make me unique and beautiful.",
    type: "self-love",
  },
  {
    text: "I am enough just as I am, and I celebrate my authenticity.",
    type: "self-love",
  },
  {
    text: "I am deserving of self-care and prioritize my well-being.",
    type: "self-love",
  },
  {
    text: "I forgive myself for past mistakes and learn from them.",
    type: "self-love",
  },
  {
    text: "I am worthy of all the good things life has to offer.",
    type: "self-love",
  },
  {
    text: "I trust that I am enough just as I am.",
    type: "self-love",
  },
  {
    text: "I am enough just as I am; I don't need to prove my worth.",
    type: "self-love",
  },
  {
    text: "I trust in my abilities and believe in myself.",
    type: "self-love",
  },
  {
    text: "I am grateful for my body and all that it does for me.",
    type: "self-love",
  },
  {
    text: "My self-love game is strong; I am my own biggest fan.",
    type: "self-love",
  },
  {
    text: "I embrace my imperfections as unique qualities that make me special.",
    type: "self-love",
  },
  {
    text: "I am proud of my journey and the person I am becoming.",
    type: "self-love",
  },
  {
    text: "My self-love is a reflection of my inner strength and resilience.",
    type: "self-love",
  },
  {
    text: "I choose to focus on the positive qualities within myself.",
    type: "self-love",
  },
  {
    text: "Every day, I am becoming a better version of myself.",
    type: "self-love",
  },
  {
    text: "I am the priority in my life, and I take care of my well-being with love and intention.",
    type: "self-love",
  },
];

const getRandom = (len) => {
  const random = Math.floor(Math.random() * len);
  return random;
};

app.get("/affirmations", (req, res) => {
  const random = getRandom(affirmations.length);
  const affirmation = affirmations[random];
  res.status(200).send({
    affirmation,
  });
});

app.listen(PORT, () =>
  console.log(`It's alive! Server is running on http://localhost:${PORT}`)
);
