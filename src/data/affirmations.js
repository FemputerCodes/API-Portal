const affirmations = [
  {
    text: "I am bold, brave, and beautiful inside and out.",
    type: "positivity",
  },
  {
    text: "Every day is a new opportunity for growth and positive change.",
    type: "positivity",
  },
  {
    text: "I trust the journey, even when I do not understand it.",
    type: "positivity",
  },
  {
    text: "I am open to new possibilities and embrace change with a positive mindset.",
    type: "positivity",
  },
  {
    text: "I am a source of inspiration and motivation for others.",
    type: "positivity",
  },
  {
    text: "I am unapologetically authentic and confident in who I am.",
    type: "positivity",
  },
  {
    text: "My potential is limitless, and I am constantly growing.",
    type: "positivity",
  },
  {
    text: "I am committed to becoming the best version of myself.",
    type: "positivity",
  },
  {
    text: "I trust the journey of becoming the best version of myself.",
    type: "positivity",
  },
  {
    text: "I am confident, capable, and ready to conquer anything.",
    type: "positivity",
  },
  { text: "I am worthy of success and happiness.", type: "positivity" },
  { text: "I trust myself to make the right decisions.", type: "positivity" },
  {
    text: "I am in control of my thoughts, and I choose positivity.",
    type: "positivity",
  },
  {
    text: "I celebrate my achievements because I deserve it.",
    type: "positivity",
  },
  {
    text: "I love and appreciate the person I am becoming.",
    type: "positivity",
  },
  { text: "I am deserving of love, respect, and success.", type: "positivity" },
  {
    text: "I am resilient, and setbacks only make me stronger.",
    type: "positivity",
  },
  {
    text: "I surround myself with people who uplift and appreciate me.",
    type: "positivity",
  },
  { text: "I am proud of the person I am becoming.", type: "positivity" },
  {
    text: "I appreciate the beauty in small moments and find joy in everyday life.",
    type: "positivity",
  },
  {
    text: "I am resilient and can overcome any challenge that comes my way.",
    type: "positivity",
  },
  {
    text: "I trust the timing of my life and allow things to unfold naturally.",
    type: "positivity",
  },
  {
    text: "I am the author of my own destiny; I create the life I want.",
    type: "positivity",
  },
  {
    text: "I am in control of my thoughts, and I choose positivity.",
    type: "positivity",
  },
  { text: "Today, I choose progress over perfection.", type: "positivity" },
  {
    text: "I am fully present in this moment, free from the weight of the past or the uncertainty of the future.",
    type: "mindfulness",
  },
  {
    text: "I release the need to control every outcome and succumb to the beauty of the present.",
    type: "mindfulness",
  },
  {
    text: "My breath grounds me, a reminder of the present's importance.",
    type: "mindfulness",
  },
  {
    text: "Each step I take is purposeful, connecting me to the journey of life.",
    type: "mindfulness",
  },
  {
    text: "I release the need to control everything, embracing the beauty of now.",
    type: "mindfulness",
  },
  {
    text: "In stillness, I find peace, and through mindfulness, I discover life's richness.",
    type: "mindfulness",
  },
  {
    text: "Challenges are opportunities for growth; I approach them with a calm mind.",
    type: "mindfulness",
  },
  {
    text: "Today, I observe my thoughts without judgment, like passing clouds.",
    type: "mindfulness",
  },
  {
    text: "I am a witness to my emotions, acknowledging them without being consumed.",
    type: "mindfulness",
  },
  {
    text: "My senses are alive; I appreciate the sights, sounds, and sensations of now.",
    type: "mindfulness",
  },
  {
    text: "Inhaling calm, exhaling tension, with each breath, I am present.",
    type: "mindfulness",
  },
  {
    text: "I am not defined by the past or future; my essence is in the present moment.",
    type: "mindfulness",
  },
  {
    text: "Mindfulness empowers me, allowing clear and composed responses to life.",
    type: "mindfulness",
  },
  {
    text: "I infuse mindfulness into daily tasks, finding joy and purpose in each action.",
    type: "mindfulness",
  },
  {
    text: "My mind is a calm lake, reflecting the beauty of the present moment.",
    type: "mindfulness",
  },
  {
    text: "Rooted in the now, I am resilient, swaying with the winds of life.",
    type: "mindfulness",
  },
  {
    text: "In the silence of my mind, I discover profound wisdom within.",
    type: "mindfulness",
  },
  {
    text: "I release the pursuit of perfection, embracing the beauty of each moment.",
    type: "mindfulness",
  },
  {
    text: "Today, I choose to be fully engaged in the simple delights of the present.",
    type: "mindfulness",
  },
  {
    text: "I release the need for constant productivity and find peace in simply being.",
    type: "mindfulness",
  },
  {
    text: "In this moment, I am free from the burdens of the past and the worries of the future.",
    type: "mindfulness",
  },
  {
    text: "My mind is a calm and open space, allowing the present to unfold naturally.",
    type: "mindfulness",
  },
  {
    text: "Each breath is a reminder that I am alive and connected to the livliness of the present.",
    type: "mindfulness",
  },
  {
    text: "In this moment, I am exactly where I need to be, and I trust in the development of my journey.",
    type: "mindfulness",
  },
  {
    text: "Today, I release the grip of overthinking, allowing space for a peaceful and focused mind.",
    type: "mindfulness",
  },
  {
    text: "I am comfortable in my own skin and radiate self-love.",
    type: "confidence-boosting",
  },
  {
    text: "I am capable of achieving anything I set my mind to.",
    type: "confidence-boosting",
  },
  {
    text: "Every challenge I face is an opportunity to learn and improve.",
    type: "confidence-boosting",
  },
  {
    text: "I trust myself and my ability to handle any situation.",
    type: "confidence-boosting",
  },
  {
    text: "I walk into a room with confidence and own every moment.",
    type: "confidence-boosting",
  },
  {
    text: "I believe in my abilities and trust in my potential.",
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
    text: "My goals are achievable, and I have the power to reach them.",
    type: "confidence-boosting",
  },
  {
    text: "My past does not define me; I create my own destiny.",
    type: "confidence-boosting",
  },
  {
    text: "I am in control of my thoughts, feelings, and actions.",
    type: "confidence-boosting",
  },
  {
    text: "I am a valuable and unique individual with much to offer.",
    type: "confidence-boosting",
  },
  {
    text: "I believe in my dreams and work tirelessly to make them a reality.",
    type: "confidence-boosting",
  },
  {
    text: "I stand tall and speak with confidence and conviction.",
    type: "confidence-boosting",
  },
  {
    text: "I am motivated by the limitless possibilities that the future holds.",
    type: "confidence-boosting",
  },
  {
    text: "Challenges are stepping stones to my success, and I embrace them with braveness.",
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
    text: "I am committed to my goals, and I have the strength to overcome any obstacles in my path.",
    type: "confidence-boosting",
  },
  {
    text: "My opinions are valuable, and I express them with conviction.",
    type: "confidence-boosting",
  },
  {
    text: "My self-assurance is rooted in my authenticity and belief in my unique strengths.",
    type: "confidence-boosting",
  },
  {
    text: "I trust myself to make the right decisions and learn from any mistakes along the way.",
    type: "confidence-boosting",
  },
  {
    text: "I am deserving of success, and I confidently pursue my dreams and aspirations.",
    type: "confidence-boosting",
  },
  {
    text: "My thoughts and opinions are valuable, and I express them with assurance.",
    type: "confidence-boosting",
  },
  {
    text: "Each day, I am growing stronger, wiser, and more confident in my abilities.",
    type: "confidence-boosting",
  },
  { text: "I love and accept myself unconditionally.", type: "self-love" },
  {
    text: "My worth is not determined by the opinions of others.",
    type: "self-love",
  },
  {
    text: "I am deserving of all the love and happiness life has to offer.",
    type: "self-love",
  },
  { text: "I treat myself with kindness and respect.", type: "self-love" },
  { text: "My imperfections make me unique and beautiful.", type: "self-love" },
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
  { text: "I trust that I am enough just as I am.", type: "self-love" },
  {
    text: "I am enough just as I am; I don't need to prove my worth.",
    type: "self-love",
  },
  { text: "I trust in my abilities and believe in myself.", type: "self-love" },
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
  {
    text: "My self-worth is not determined by external validation; I am enough just as I am.",
    type: "self-love",
  },
  {
    text: "My self-worth is non-negotiable; I demand respect and command attention.",
    type: "self-love",
  },
  {
    text: "My self-worth is not contingent on my achievements.",
    type: "self-love",
  },
  {
    text: "I am surrounded by love, and I love and accept myself unconditionally.",
    type: "self-love",
  },
  {
    text: "I trust in my unique journey and the power I hold to create positive change.",
    type: "self-love",
  },
];

module.exports = affirmations;
