
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Healing Power of Lion's Mane Mushroom",
    excerpt: "Discover how Lion's Mane mushroom can boost cognitive function and support nerve health.",
    content: `
      # The Healing Power of Lion's Mane Mushroom

      Lion's Mane mushroom (Hericium erinaceus) is an extraordinary medicinal fungi that resembles a lion's mane as it grows. It has been used in traditional Chinese medicine for centuries and is now gaining popularity in the West for its remarkable health benefits.

      ## Cognitive Enhancement

      One of the most well-researched benefits of Lion's Mane is its ability to support brain health. Studies have shown that it contains compounds called hericenones and erinacines that can stimulate the growth of brain cells and protect them from damage.

      Regular consumption of Lion's Mane has been linked to:

      - Improved memory and focus
      - Enhanced mental clarity
      - Support for overall cognitive function
      
      ## Nerve Regeneration

      Lion's Mane also shows promising results in supporting nerve health and regeneration. Research suggests it may help with:

      - Peripheral nerve regeneration after injury
      - Supporting the myelin sheath that protects nerve cells
      - Potential applications in neurodegenerative conditions

      ## How to Use Lion's Mane

      Lion's Mane can be consumed in various forms:

      1. **Supplements**: Available as capsules, tablets, or powder
      2. **Tinctures**: Liquid extracts that can be added to beverages
      3. **Culinary uses**: When cooked, it has a flavor resembling seafood
      4. **Tea**: Dried Lion's Mane can be steeped as a tea

      ## Conclusion

      As research continues to validate the traditional uses of Lion's Mane, this remarkable mushroom is becoming an important part of many people's wellness routines. Always consult with a healthcare professional before starting any new supplement regimen.
    `,
    coverImage: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    date: "2023-09-15",
    author: "Dr. Myra Chen",
    category: "Cognitive Health",
    readTime: "6 min read",
    slug: "healing-power-lions-mane-mushroom",
    featured: true
  },
  {
    id: "2",
    title: "Reishi: The Mushroom of Immortality",
    excerpt: "Explore the ancient uses and modern benefits of Reishi, known as the mushroom of immortality.",
    content: `
      # Reishi: The Mushroom of Immortality

      Reishi mushroom (Ganoderma lucidum) holds a prestigious place in Eastern herbal medicine, where it's been revered for over 2,000 years. Often called the "mushroom of immortality" or "divine mushroom," it was traditionally reserved for emperors and royalty.

      ## Immune System Support

      Modern research has validated many traditional claims about Reishi's immune-modulating properties. It contains complex compounds including beta-glucans, triterpenes, and polysaccharides that help regulate the immune system.

      ## Stress Reduction and Sleep

      Reishi is classified as an adaptogen, meaning it helps the body resist various stressors. Its benefits include:

      - Promoting better sleep quality
      - Reducing fatigue
      - Supporting the adrenal glands
      - Calming an overactive mind

      ## Longevity and Anti-Aging

      While the name "mushroom of immortality" is certainly poetic, there is evidence that Reishi may support longevity through:

      - Antioxidant protection
      - Anti-inflammatory effects
      - Cellular defense mechanisms
      - Cardiovascular support

      ## How to Use Reishi

      Reishi has a bitter taste and woody texture, so it's rarely eaten as a culinary mushroom. Instead, consider:

      1. **Powdered extracts**: Added to coffee, tea, or smoothies
      2. **Tinctures**: Alcohol or glycerin extracts taken as drops
      3. **Capsules**: Standardized supplements
      4. **Tea**: Traditional method using dried slices

      ## A Note of Caution

      While generally well-tolerated, Reishi may interact with certain medications, particularly those affecting blood clotting. Always consult with a healthcare provider if you're on medication or have existing health conditions.
    `,
    coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    date: "2023-08-22",
    author: "Li Wei, Ph.D.",
    category: "Immunity",
    readTime: "7 min read",
    slug: "reishi-mushroom-of-immortality"
  },
  {
    id: "3",
    title: "Mushroom Coffee: The Perfect Morning Ritual",
    excerpt: "Why mushroom coffee is becoming the preferred morning beverage for health-conscious individuals.",
    content: `
      # Mushroom Coffee: The Perfect Morning Ritual

      In recent years, mushroom coffee has emerged as a popular alternative to traditional coffee, offering a balanced energy boost without the jitters and crashes. This innovative beverage combines ground coffee with medicinal mushroom extracts to create a drink that not only wakes you up but supports your overall wellness.

      ## What Makes Mushroom Coffee Special?

      Mushroom coffee typically contains about half the caffeine of regular coffee, complemented by adaptogenic mushrooms that provide their own unique benefits. The most common mushrooms used include:

      - **Lion's Mane**: For cognitive support and focus
      - **Chaga**: Rich in antioxidants
      - **Cordyceps**: For energy and endurance
      - **Reishi**: For stress reduction and immune support

      ## Benefits Beyond Regular Coffee

      People who switch to mushroom coffee often report:

      - Smoother energy without crashes
      - Improved focus and concentration
      - Less acidity and stomach discomfort
      - Reduced anxiety and jitters
      - Additional health benefits from the mushrooms

      ## How to Prepare the Perfect Cup

      Mushroom coffee is prepared similarly to regular coffee:

      1. Use one to two teaspoons per cup of water
      2. Brew using your preferred method (drip, French press, etc.)
      3. Consider adding a touch of cinnamon or cardamom for flavor
      4. Some people enjoy it with a splash of plant-based milk

      ## Is Mushroom Coffee Right for You?

      Mushroom coffee is ideal for:
      - Those sensitive to caffeine
      - People looking for functional benefits from their morning ritual
      - Anyone wanting to reduce their caffeine intake while still enjoying coffee
      - Health enthusiasts seeking additional wellness support

      Start with smaller amounts to see how your body responds, and enjoy the balanced energy and focus that comes from this innovative beverage.
    `,
    coverImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    date: "2023-07-30",
    author: "Sarah Johnson",
    category: "Wellness",
    readTime: "5 min read",
    slug: "mushroom-coffee-perfect-morning-ritual",
    featured: true
  },
  {
    id: "4",
    title: "Foraging for Medicinal Mushrooms: A Beginner's Guide",
    excerpt: "Learn the basics of safely identifying and foraging for medicinal mushrooms in the wild.",
    content: `
      # Foraging for Medicinal Mushrooms: A Beginner's Guide

      The practice of foraging for wild mushrooms connects us to ancient traditions and the natural world. While it can be incredibly rewarding, it requires knowledge, caution, and respect for the environment. This guide will help you get started safely.

      ## Essential Safety Rules

      Before we begin, remember these non-negotiable rules:

      1. **Never consume a mushroom you cannot identify with 100% certainty**
      2. **Use multiple identification methods** (field guides, apps, expert confirmation)
      3. **Start with easily identifiable species** that have few or no dangerous look-alikes
      4. **Learn from experienced foragers** whenever possible

      ## Equipment for Foraging

      A proper foraging kit includes:

      - A good field guide specific to your region
      - A knife with a brush on the end
      - A basket or mesh bag (allows spores to spread)
      - Paper bags for separating specimens
      - A camera for documentation
      - Gloves for handling certain species

      ## Beginner-Friendly Medicinal Mushrooms

      Some medicinal mushrooms are easier to identify and safer for beginners:

      ### Chaga (Inonotus obliquus)
      - Grows on birch trees
      - Appears as a black, charcoal-like growth with a rust-colored interior
      - No dangerous look-alikes

      ### Turkey Tail (Trametes versicolor)
      - Thin, fan-shaped mushrooms growing on logs and stumps
      - Distinctive concentric zones of various colors
      - Velvety texture on top surface

      ### Oyster Mushrooms (Pleurotus species)
      - Grow on dead or dying trees
      - Have gills that run down the stem
      - White to grayish caps with no ring on stem

      ## Ethical Foraging Practices

      Sustainable foraging ensures these medicines remain available for generations:

      - Never harvest more than 1/3 of any patch
      - Leave small and immature specimens
      - Cut rather than pull mushrooms when appropriate
      - Avoid disturbing the surrounding environment
      - Obtain proper permits when required

      ## From Forest to Medicine Cabinet

      Once safely identified and harvested:

      1. Clean your mushrooms carefully
      2. Dry thoroughly using a dehydrator or other method
      3. Store in airtight containers away from light
      4. Consider making tinctures, teas, or powders

      ## Final Thoughts

      Foraging connects us to ancient wisdom and the healing potential of the forest. Start slowly, prioritize safety, and gradually build your knowledge. Consider joining a local mycological society to learn from experienced foragers in your area.

      Remember: When in doubt, leave it out!
    `,
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    date: "2023-06-18",
    author: "Robert Blackwood",
    category: "Foraging",
    readTime: "8 min read",
    slug: "foraging-medicinal-mushrooms-beginners-guide"
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};
