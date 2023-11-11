import { IBlog } from "../interfaces";

export const countsData = [
  { label: "Ideas Supported", value: 26, unit: "" },
  { label: "Impact Scholarships Awarded", value: 5, unit: "" },
  { label: "Of plants here double as lab assistants", value: 65, unit: "%" },
  { label: "Chance of running into a punny scientist", value: 80, unit: "%" },
  {
    label: "Of science equipment diverted from landfill",
    value: 2000,
    unit: "kgs",
    smallerFont: true,
  },
];

export const sliderData = [
  {
    label: "A Field Guide to Transdisciplinary Innovation.",
    highlighted: "Transdisciplinary Innovation.",
  },
  {
    label:
      "Triskelion. A monthly newsletter covering biotech news and articles from within the Co-",
    highlighted: "Triskelion.",
  },
  {
    label:
      "Why We're Supporting the Development of a Cultivated Meat Industry in Australia",
    highlighted: "Cultivated Meat",
  },
  {
    label: "Why We Need to Rethink Our Worldview.",
    highlighted: "Worldview.",
  },
  {
    label: "Biomimicry: Learning from Nature's Genius",
    highlighted: "Biomimicry:",
  },
  {
    label: "Ecoliteracy: Our Key to a Sustainable Future",
    highlighted: "Ecoliteracy:",
  },
];

export const servicesData = [
  {
    title: "Build a Lab",
    image:
      "https://colabs.yourcreative.com.au/wp-content/uploads/2023/05/2JF5R14-scaled.jpg",
    background: "bg-[#66662a]",
  },
  {
    title: "Innovation Facilitation",
    image:
      "https://colabs.yourcreative.com.au/wp-content/uploads/2023/05/M49EM8-scaled.jpg",
    background: "bg-[#b1653a]",
  },
  {
    title: "Office Space",
    image:
      "https://colabs.yourcreative.com.au/wp-content/uploads/2023/06/office-space-icon.jpg",
    background: "bg-[#5757a5]",
  },
  {
    title: "Lab Space",
    image:
      "https://colabs.yourcreative.com.au/wp-content/uploads/2023/05/WX8JWA-scaled.jpg",
    background: "bg-[#0046c7]",
  },
];

export const blogsData: IBlog[] = [
  {
    id: 1,
    title:
      "Rising to the biggest challenge of our time: Australia's duty of care to collectively re-imagine and re-design our nation",
    description:
      "A transdisciplinary, existentially hopeful response to Australia's draft National Science and Research Priorities",
    tag: {
      label: "Thoughts",
      bg: "bg-green-yellow",
    },
    image:
      "https://colabs.yourcreative.com.au/wp-content/uploads/2023/10/5.png",
  },
  {
    id: 2,
    title: "What are the 3 Horizons of Transformative Innovation?",
    description:
      "'Three Horizons thinking' is a useful method for making sense of and facilitating transformative innovation.",
    tag: {
      label: "Beyond the bench",
      bg: "bg-bright-green",
    },
    image:
      "https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/3-horizons-tile.png",
  },
  {
    id: 3,
    title:
      "Why We're Supporting the Development of a Cultivated Meat Industry In Australia",
    description: "",
    tag: {
      label: "Thoughts",
      bg: "bg-green-yellow",
    },
    image:
      "https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/Cultivated-Meat-tile.png",
  },
  {
    id: 4,
    title:
      "Cortical Labs Raises $15M to Scale Up BiOS, an Organic- Digital Intelligence System",
    description:
      "What if Biology + Technology is the only way to make true AI?",
    tag: {
      label: "News",
      bg: "bg-transparent",
    },
    image:
      "https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/CL-Brain-shrunk.png",
  },
];
