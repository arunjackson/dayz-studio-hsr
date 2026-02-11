// BLOG DATA - YOU ONLY EDIT THIS FILE
// Add new posts, change images, write content HERE

export const blogPosts = [
  {
    id: 1,
    title: "5 Benefits of Yoga You Didn't Know About",
    excerpt: "Beyond flexibility, yoga improves heart health, boosts immunity, and helps with anxiety. Here's why you should start today.",
    content: `
      <h2>1. Improves Heart Health</h2>
      <p>Regular yoga practice can lower blood pressure and cholesterol levels. Studies show that consistent practice reduces the risk of heart disease by up to 30%.</p>
      
      <h2>2. Boosts Immunity</h2>
      <p>The combination of movement, breath work, and meditation strengthens your immune system. Yoga reduces stress hormones that can weaken immunity.</p>
      
      <h2>3. Reduces Anxiety</h2>
      <p>Yoga activates the parasympathetic nervous system, helping you relax. Just 20 minutes of practice can significantly lower cortisol levels.</p>
      
      <h2>4. Improves Sleep Quality</h2>
      <p>Evening yoga sessions help regulate sleep patterns. The relaxation response makes it easier to fall asleep and stay asleep.</p>
      
      <h2>5. Increases Bone Density</h2>
      <p>Weight-bearing poses like downward dog and warrior strengthen bones, reducing the risk of osteoporosis.</p>
      
      <p class="mt-4">Ready to experience these benefits? Join our beginner-friendly yoga classes at DAYZ Studio HSR. First session 40% off!</p>
    `,
    date: "Feb 10, 2026",
    category: "Yoga",
    imageUrl: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?w=1200", // Yoga hero
    author: "DAYZ Studio"
  },
  {
    id: 2,
    title: "Why Dance is the Best Cardio Workout",
    excerpt: "Burn up to 500 calories per hour while having fun. No boring treadmill needed!",
    content: `
      <h2>More Fun, Less Boredom</h2>
      <p>Studies show people stick with dance workouts 3x longer than traditional cardio. When you're having fun, you don't watch the clock.</p>
      
      <h2>Full Body Engagement</h2>
      <p>Dance uses every muscle group. From your core to your calves, you're constantly moving in multiple planes of motion.</p>
      
      <h2>Improves Coordination</h2>
      <p>Learning choreography builds neural connections. Better coordination translates to everyday activities and reduces fall risk.</p>
      
      <h2>Social Connection</h2>
      <p>Group dance classes create community. The accountability and friendship keep you coming back.</p>
      
      <h2>Mental Health Boost</h2>
      <p>Dance releases endorphins, dopamine, and serotonin. It's clinically proven to reduce depression symptoms.</p>
      
      <p class="mt-4">Try our Bollywood, Hip-hop, or Contemporary classes at DAYZ Studio. No partner needed!</p>
    `,
    date: "Feb 5, 2026",
    category: "Dance",
    imageUrl: "https://images.pexels.com/photos/1766628/pexels-photo-1766628.jpeg?w=1200", // Dance hero
    author: "DAYZ Studio"
  },
  {
    id: 3,
    title: "Zumba vs Aerobics: Which is Right for You?",
    excerpt: "Both are great, but your fitness goals determine the winner. Here's how to choose.",
    content: `
      <h2>Zumba: For Music Lovers</h2>
      <p>If you love Latin music and want to feel like you're at a party, choose Zumba. The choreography is repetitive and easy to follow.</p>
      
      <h2>Aerobics: For Structure</h2>
      <p>If you prefer counted movements and measurable progress, aerobics might be better. Clear start and end to each exercise.</p>
      
      <h2>Calorie Burn</h2>
      <p>Both burn 400-600 calories per hour. Zumba feels easier because you're distracted by music. Aerobics feels more like work.</p>
      
      <h2>Learning Curve</h2>
      <p>Zumba has a lower barrier to entry - just follow along. Aerobics requires learning specific step patterns.</p>
      
      <h2>Our Recommendation</h2>
      <p>Try both! We offer free trial classes. Most students end up loving both for different moods.</p>
    `,
    date: "Jan 28, 2026",
    category: "Zumba",
    imageUrl: "https://images.pexels.com/photos/6455810/pexels-photo-6455810.jpeg?w=1200", // Zumba hero
    author: "DAYZ Studio"
  },
  {
    id: 4,
    title: "How Art Classes Reduce Stress",
    excerpt: "Creating something with your hands activates the parasympathetic nervous system. Science behind art therapy.",
    content: `
      <h2>The Relaxation Response</h2>
      <p>Repetitive creative motions - like sketching, painting, or molding clay - trigger the same relaxation response as meditation.</p>
      
      <h2>Flow State</h2>
      <p>When you're focused on creating, you enter "flow" - a mental state where you lose track of time and worries fade away.</p>
      
      <h2>Expression Without Words</h2>
      <p>Sometimes emotions are too complex for language. Art gives you another way to process and release.</p>
      
      <h2>Tangible Results</h2>
      <p>Unlike meditation where benefits are internal, art gives you something physical to show. This builds confidence and pride.</p>
      
      <h2>Community Connection</h2>
      <p>Group art classes provide gentle social interaction. You can talk or work in silence - no pressure either way.</p>
      
      <p class="mt-4">Join our weekend art workshops at DAYZ Studio. All materials included. Beginners welcome!</p>
    `,
    date: "Jan 20, 2026",
    category: "Arts",
    imageUrl: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?w=1200", // Arts hero
    author: "DAYZ Studio"
  }
];

export const getBlogPost = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};
