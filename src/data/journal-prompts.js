const journalPrompts = [
  {
    text: "If you could have dinner with any fictional character, who would it be and why?",
    type: "general",
  },
  {
    text: "Describe your ideal day of pampering and self-care.",
    type: "general",
  },
  {
    text: "Create a bucket list of activities you'd like to try.",
    type: "general",
  },
  {
    text: "Write a letter to your future self, predicting where you'll be and what you'll be doing in five years.",
    type: "general",
  },
  {
    text: "If you were a superhero, what would your powers be, and what would your costume look like?",
    type: "general",
  },
  {
    text: "Recount a funny childhood memory that still makes you laugh.",
    type: "general",
  },
  {
    text: "Imagine you have a magic carpet that can take you anywhere in the world. where would you go first?",
    type: "general",
  },
  {
    text: "Design your dream treehouse, detailing its features and location.",
    type: "general",
  },
  {
    text: "Write a list of things that make you smile uncontrollably.",
    type: "general",
  },
  {
    text: "If you could time travel to any era, past or future, where would you go and why?",
    type: "general",
  },
  {
    text: "Create a fictional character based on yourself, placing them in a different time period or universe.",
    type: "general",
  },
  {
    text: "Write a list of your favorite quotes and explain why each one resonates with you.",
    type: "general",
  },
  {
    text: "Describe the perfect dessert that represents your personality.",
    type: "general",
  },
  {
    text: "Invent a new holiday and outline how you would celebrate it.",
    type: "general",
  },
  {
    text: "If you could swap lives with any historical figure for a day, who would it be and what would you do?",
    type: "general",
  },
  {
    text: "Write a letter to your favorite childhood toy, telling it about your life now.",
    type: "general",
  },
  {
    text: "Imagine you're a character in a fairy tale. what's your quest, and who are your companions?",
    type: "general",
  },
  {
    text: "Create a playlist of songs that perfectly capture your current mood and emotions.",
    type: "general",
  },
  {
    text: "If you could have a conversation with any animal, which one would it be and what would you talk about?",
    type: "general",
  },
  {
    text: "Write a short story about a day in the life of a mischievous but lovable imaginary creature living in your house.",
    type: "general",
  },
  {
    text: "Describe a recent challenge or obstacle and how I overcame it.",
    type: "reflection",
  },
  {
    text: "What are my top three values, and how do they guide my decisions?",
    type: "reflection",
  },
  {
    text: "Reflect on a recent success and the skills or qualities that contributed to it.",
    type: "reflection",
  },
  {
    text: "What is a limiting belief I hold about myself, and how can I challenge or change it?",
    type: "reflection",
  },
  {
    text: "Write about a mistake or failure and the lessons learned from it.",
    type: "reflection",
  },
  {
    text: "How do I prioritize self-care, and what activities rejuvenate me? why?",
    type: "reflection",
  },
  {
    text: "Reflect on a recent interaction with someone and explore how it made me feel.",
    type: "reflection",
  },
  {
    text: "Describe a moment when I felt truly confident and empowered. what contributed to that feeling?",
    type: "reflection",
  },
  {
    text: "Identify a fear or insecurity that is holding me back and explore ways to overcome it.",
    type: "reflection",
  },
  {
    text: "How do I handle stress, and are there healthier coping mechanisms I can adopt?",
    type: "reflection",
  },
  {
    text: "Write about a person who inspires me and the qualities I admire in them.",
    type: "reflection",
  },
  {
    text: "Write a letter to my future self, outlining aspirations, dreams, and intentions.",
    type: "reflection",
  },
  {
    text: "Describe a moment when I stepped out of my comfort zone and the impact it had on me.",
    type: "reflection",
  },
  {
    text: "How do I manage my time, and are there areas where I can improve my efficiency?",
    type: "reflection",
  },
  {
    text: "Reflect on a book, movie, or piece of art that had a profound impact on my perspective.",
    type: "reflection",
  },
  {
    text: "What are the qualities I appreciate about myself, and how can I celebrate them more often?",
    type: "reflection",
  },
  {
    text: "Think about a positive change or improvement in your life. what steps or factors contributed to this positive shift?",
    type: "reflection",
  },
  {
    text: "Reflect on a challenge you faced in the past and how it shaped you positively. ",
    type: "reflection",
  },
  {
    text: "Write about a skill or talent you possess and how it has positively influenced your life or the lives of others",
    type: "reflection",
  },
  {
    text: "Reflect on a favorite place or environment that brings you peace.",
    type: "reflection",
  },
  {
    text: "What are three things I am grateful for today, and why?",
    type: "gratitude",
  },
  {
    text: "List five people you're grateful to have in your life and write a few sentences about each.",
    type: "gratitude",
  },
  {
    text: "Write about three specific things in nature that you appreciate and why.",
    type: "gratitude",
  },
  {
    text: "Consider the small, everyday things you often take for granted (e.g., clean water, a warm bed). express gratitude for them.",
    type: "gratitude",
  },
  {
    text: "Describe a recent accomplishment or achievement and the people or circumstances that supported you along the way.",
    type: "gratitude",
  },
  {
    text: "List three aspects of your health that you are thankful for and why.",
    type: "gratitude",
  },
  {
    text: "Write about a specific memory that brings you joy and express gratitude for the emotions associated with it.",
    type: "gratitude",
  },
  {
    text: "Consider the technology and tools that enhance your daily life. write about how they contribute to your well-being.",
    type: "gratitude",
  },
  {
    text: "Express gratitude for your body and its abilities. focus on specific body parts or functions that you appreciate.",
    type: "gratitude",
  },
  {
    text: "Consider the people who have mentored or inspired you. write about the impact they've had on your journey.",
    type: "gratitude",
  },
  {
    text: "Express gratitude for the different seasons and the unique experiences they bring.",
    type: "gratitude",
  },
  {
    text: "Write about a book, podcast, or article that has had a positive impact on your mindset or perspective.",
    type: "gratitude",
  },
  {
    text: "List three things about your home that you are thankful for and why they bring you joy.",
    type: "gratitude",
  },
  {
    text: "Express gratitude for the diversity of experiences and perspectives that have enriched your life.",
    type: "gratitude",
  },
  {
    text: "Consider a current challenge you're facing. write about the strengths or resources you have that you're grateful for in navigating it.",
    type: "gratitude",
  },
  {
    text: "Reflect on your personal growth journey. what lessons have you learned, and what aspects are you grateful for?",
    type: "gratitude",
  },
  {
    text: "Reflect on three small, everyday pleasures that often go unnoticed. it could be the warmth of sunlight, the sound of rain, or the taste of your favorite snack. write about why these simple pleasures bring you joy.",
    type: "gratitude",
  },
  {
    text: "List three people in your life who have been a source of support during difficult times. write about specific instances or qualities that make you grateful for their presence in your life.",
    type: "gratitude",
  },
  {
    text: "Anticipate the future with gratitude. write about three opportunities or experiences you look forward to, expressing appreciation for the potential they hold in enriching your life.",
    type: "gratitude",
  },
  {
    text: "Reflect on the personal growth and positive changes you've noticed in yourself over the past year. write about the specific habits, mindset shifts, or accomplishments that make you grateful for the person you are becoming.",
    type: "gratitude",
  },
  {
    text: "What goals do I want to achieve in the next three months, and what steps can I take to work towards them?",
    type: "goals",
  },
  {
    text: "What are my short-term and long-term personal and professional goals?",
    type: "goals",
  },
  {
    text: "What are three major goals you want to achieve in the next year, and why are they important to you?",
    type: "goals",
  },
  {
    text: "Describe your ideal life five years from now. what goals do you need to set to move closer to that vision?",
    type: "goals",
  },
  {
    text: "Reflect on a past goal you successfully achieved. what strategies did you use, and how can you apply them to current goals?",
    type: "goals",
  },
  {
    text: "What skills or knowledge do you need to acquire to reach your current goals? how will you go about acquiring them?",
    type: "goals",
  },
  {
    text: "Consider your personal values. how do your goals align with these values, and how can they contribute to your overall sense of fulfillment?",
    type: "goals",
  },
  {
    text: "What obstacles or challenges do you anticipate in pursuing your goals? how can you proactively address or overcome them?",
    type: "goals",
  },
  {
    text: "Reflect on your strengths. how can you leverage them to achieve your goals, and how can you build on areas that need improvement?",
    type: "goals",
  },
  {
    text: "Break down a larger goal into smaller, more manageable tasks. what steps can you take each week to make progress?",
    type: "goals",
  },
  {
    text: "Visualize the successful attainment of one of your goals. how does it feel, and what impact does it have on your life?",
    type: "goals",
  },
  {
    text: "Write about a goal that scares you. what steps can you take to overcome fear and move forward with confidence?",
    type: "goals",
  },
  {
    text: "Reflect on any goals that may be influenced by external expectations. are they truly aligned with your desires, or do they need adjustment?",
    type: "goals",
  },
  {
    text: "Consider the concept of balance. how can you set goals that contribute to a well-rounded and fulfilling life?",
    type: "goals",
  },
  {
    text: "Explore the idea of incremental progress. what small actions can you take daily to make steady advancements toward your goals?",
    type: "goals",
  },
  {
    text: "Reflect on past setbacks or failures. what did you learn from them, and how can you apply those lessons to your current goals?",
    type: "goals",
  },
  {
    text: "Imagine yourself a year from now, having achieved all your goals. what advice would that future self give you today?",
    type: "goals",
  },
  {
    text: "Consider the impact of your goals on others. how can your achievements positively influence your relationships and community?",
    type: "goals",
  },
  {
    text: "Reflect on a goal that you've been putting off. what's holding you back, and how can you break down the barriers to take the first step?",
    type: "goals",
  },
  {
    text: "Consider the potential sacrifices or trade-offs required to achieve your goals. are you willing to make these sacrifices, and how can you navigate challenges while maintaining your commitment?",
    type: "goals",
  },
];

module.exports = journalPrompts;
