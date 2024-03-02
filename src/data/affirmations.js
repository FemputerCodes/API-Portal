const affirmations = [
  {
    text: "i am bold, brave, and beautiful inside and out.",
    type: "positivity",
  },
  {
    text: "every day is a new opportunity for growth and positive change.",
    type: "positivity",
  },
  {
    text: "i trust the journey, even when i do not understand it.",
    type: "positivity",
  },
  {
    text: "i am open to new possibilities and embrace change with a positive mindset.",
    type: "positivity",
  },
  {
    text: "i am a source of inspiration and motivation for others.",
    type: "positivity",
  },
  {
    text: "i am unapologetically authentic and confident in who i am.",
    type: "positivity",
  },
  {
    text: "my potential is limitless, and i am constantly growing.",
    type: "positivity",
  },
  {
    text: "i am committed to becoming the best version of myself.",
    type: "positivity",
  },
  {
    text: "i trust the journey of becoming the best version of myself.",
    type: "positivity",
  },
  {
    text: "i am confident, capable, and ready to conquer anything.",
    type: "positivity",
  },
  { text: "i am worthy of success and happiness.", type: "positivity" },
  { text: "i trust myself to make the right decisions.", type: "positivity" },
  {
    text: "i am in control of my thoughts, and i choose positivity.",
    type: "positivity",
  },
  {
    text: "i celebrate my achievements because i deserve it.",
    type: "positivity",
  },
  {
    text: "i love and appreciate the person i am becoming.",
    type: "positivity",
  },
  { text: "i am deserving of love, respect, and success.", type: "positivity" },
  {
    text: "i am resilient, and setbacks only make me stronger.",
    type: "positivity",
  },
  {
    text: "i surround myself with people who uplift and appreciate me.",
    type: "positivity",
  },
  { text: "i am proud of the person i am becoming.", type: "positivity" },
  {
    text: "i appreciate the beauty in small moments and find joy in everyday life.",
    type: "positivity",
  },
  {
    text: "i am resilient and can overcome any challenge that comes my way.",
    type: "positivity",
  },
  {
    text: "i trust the timing of my life and allow things to unfold naturally.",
    type: "positivity",
  },
  {
    text: "i am the author of my own destiny; i create the life i want.",
    type: "positivity",
  },
  {
    text: "i am in control of my thoughts, and i choose positivity.",
    type: "positivity",
  },
  { text: "today, i choose progress over perfection.", type: "positivity" },
  {
    text: "i am fully present in this moment, free from the weight of the past or the uncertainty of the future.",
    type: "mindfulness",
  },
  {
    text: "i release the need to control every outcome and succumb to the beauty of the present.",
    type: "mindfulness",
  },
  {
    text: "my breath grounds me, a reminder of the present's importance.",
    type: "mindfulness",
  },
  {
    text: "each step i take is purposeful, connecting me to the journey of life.",
    type: "mindfulness",
  },
  {
    text: "i release the need to control everything, embracing the beauty of now.",
    type: "mindfulness",
  },
  {
    text: "in stillness, i find peace, and through mindfulness, i discover life's richness.",
    type: "mindfulness",
  },
  {
    text: "challenges are opportunities for growth; i approach them with a calm mind.",
    type: "mindfulness",
  },
  {
    text: "today, i observe my thoughts without judgment, like passing clouds.",
    type: "mindfulness",
  },
  {
    text: "i am a witness to my emotions, acknowledging them without being consumed.",
    type: "mindfulness",
  },
  {
    text: "my senses are alive; i appreciate the sights, sounds, and sensations of now.",
    type: "mindfulness",
  },
  {
    text: "inhaling calm, exhaling tension, with each breath, i am present.",
    type: "mindfulness",
  },
  {
    text: "i am not defined by the past or future; my essence is in the present moment.",
    type: "mindfulness",
  },
  {
    text: "mindfulness empowers me, allowing clear and composed responses to life.",
    type: "mindfulness",
  },
  {
    text: "i infuse mindfulness into daily tasks, finding joy and purpose in each action.",
    type: "mindfulness",
  },
  {
    text: "my mind is a calm lake, reflecting the beauty of the present moment.",
    type: "mindfulness",
  },
  {
    text: "rooted in the now, i am resilient, swaying with the winds of life.",
    type: "mindfulness",
  },
  {
    text: "in the silence of my mind, i discover profound wisdom within.",
    type: "mindfulness",
  },
  {
    text: "i release the pursuit of perfection, embracing the beauty of each moment.",
    type: "mindfulness",
  },
  {
    text: "today, i choose to be fully engaged in the simple delights of the present.",
    type: "mindfulness",
  },
  {
    text: "i release the need for constant productivity and find peace in simply being.",
    type: "mindfulness",
  },
  {
    text: "in this moment, i am free from the burdens of the past and the worries of the future.",
    type: "mindfulness",
  },
  {
    text: "my mind is a calm and open space, allowing the present to unfold naturally.",
    type: "mindfulness",
  },
  {
    text: "each breath is a reminder that i am alive and connected to the livliness of the present.",
    type: "mindfulness",
  },
  {
    text: "in this moment, i am exactly where i need to be, and i trust in the development of my journey.",
    type: "mindfulness",
  },
  {
    text: "today, i release the grip of overthinking, allowing space for a peaceful and focused mind.",
    type: "mindfulness",
  },
  {
    text: "i am comfortable in my own skin and radiate self-love.",
    type: "confidence-boosting",
  },
  {
    text: "i am capable of achieving anything i set my mind to.",
    type: "confidence-boosting",
  },
  {
    text: "every challenge i face is an opportunity to learn and improve.",
    type: "confidence-boosting",
  },
  {
    text: "i trust myself and my ability to handle any situation.",
    type: "confidence-boosting",
  },
  {
    text: "i walk into a room with confidence and own every moment.",
    type: "confidence-boosting",
  },
  {
    text: "i believe in my abilities and trust in my potential.",
    type: "confidence-boosting",
  },
  {
    text: "i am deserving of success, and i confidently claim it.",
    type: "confidence-boosting",
  },
  {
    text: "my confidence grows stronger with each challenge i overcome.",
    type: "confidence-boosting",
  },
  {
    text: "my goals are achievable, and i have the power to reach them.",
    type: "confidence-boosting",
  },
  {
    text: "my past does not define me; i create my own destiny.",
    type: "confidence-boosting",
  },
  {
    text: "i am in control of my thoughts, feelings, and actions.",
    type: "confidence-boosting",
  },
  {
    text: "i am a valuable and unique individual with much to offer.",
    type: "confidence-boosting",
  },
  {
    text: "i believe in my dreams and work tirelessly to make them a reality.",
    type: "confidence-boosting",
  },
  {
    text: "i stand tall and speak with confidence and conviction.",
    type: "confidence-boosting",
  },
  {
    text: "i am motivated by the limitless possibilities that the future holds.",
    type: "confidence-boosting",
  },
  {
    text: "challenges are stepping stones to my success, and i embrace them with braveness.",
    type: "confidence-boosting",
  },
  {
    text: "i am deserving of success, and i allow myself to achieve it with confidence.",
    type: "confidence-boosting",
  },
  {
    text: "i trust in my ability to achieve my goals and create a fulfilling life.",
    type: "confidence-boosting",
  },
  {
    text: "i am committed to my goals, and i have the strength to overcome any obstacles in my path.",
    type: "confidence-boosting",
  },
  {
    text: "my opinions are valuable, and i express them with conviction.",
    type: "confidence-boosting",
  },
  {
    text: "my self-assurance is rooted in my authenticity and belief in my unique strengths.",
    type: "confidence-boosting",
  },
  {
    text: "i trust myself to make the right decisions and learn from any mistakes along the way.",
    type: "confidence-boosting",
  },
  {
    text: "i am deserving of success, and i confidently pursue my dreams and aspirations.",
    type: "confidence-boosting",
  },
  {
    text: "my thoughts and opinions are valuable, and i express them with assurance.",
    type: "confidence-boosting",
  },
  {
    text: "each day, i am growing stronger, wiser, and more confident in my abilities.",
    type: "confidence-boosting",
  },
  { text: "i love and accept myself unconditionally.", type: "self-love" },
  {
    text: "my worth is not determined by the opinions of others.",
    type: "self-love",
  },
  {
    text: "i am deserving of all the love and happiness life has to offer.",
    type: "self-love",
  },
  { text: "i treat myself with kindness and respect.", type: "self-love" },
  { text: "my imperfections make me unique and beautiful.", type: "self-love" },
  {
    text: "i am enough just as i am, and i celebrate my authenticity.",
    type: "self-love",
  },
  {
    text: "i am deserving of self-care and prioritize my well-being.",
    type: "self-love",
  },
  {
    text: "i forgive myself for past mistakes and learn from them.",
    type: "self-love",
  },
  {
    text: "i am worthy of all the good things life has to offer.",
    type: "self-love",
  },
  { text: "i trust that i am enough just as i am.", type: "self-love" },
  {
    text: "i am enough just as i am; i don't need to prove my worth.",
    type: "self-love",
  },
  { text: "i trust in my abilities and believe in myself.", type: "self-love" },
  {
    text: "i am grateful for my body and all that it does for me.",
    type: "self-love",
  },
  {
    text: "my self-love game is strong; i am my own biggest fan.",
    type: "self-love",
  },
  {
    text: "i embrace my imperfections as unique qualities that make me special.",
    type: "self-love",
  },
  {
    text: "i am proud of my journey and the person i am becoming.",
    type: "self-love",
  },
  {
    text: "my self-love is a reflection of my inner strength and resilience.",
    type: "self-love",
  },
  {
    text: "i choose to focus on the positive qualities within myself.",
    type: "self-love",
  },
  {
    text: "every day, i am becoming a better version of myself.",
    type: "self-love",
  },
  {
    text: "i am the priority in my life, and i take care of my well-being with love and intention.",
    type: "self-love",
  },
  {
    text: "my self-worth is not determined by external validation; i am enough just as i am.",
    type: "self-love",
  },
  {
    text: "my self-worth is non-negotiable; i demand respect and command attention.",
    type: "self-love",
  },
  {
    text: "my self-worth is not contingent on my achievements.",
    type: "self-love",
  },
  {
    text: "i am surrounded by love, and i love and accept myself unconditionally.",
    type: "self-love",
  },
  {
    text: "i trust in my unique journey and the power i hold to create positive change.",
    type: "self-love",
  },
];

module.exports = affirmations;
