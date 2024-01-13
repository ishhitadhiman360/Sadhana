import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import calm from './calm.mp3';
import calm1 from './calm1.mp3';
import calm2 from './calm2.mp3';
import calm3 from './calm3.mp3';
import calm4 from './calm4.mp3';
import calm5 from './calm5.mp3';

import stress from "./stress.jpg";

let all_product = [
  {
    id: 1,
    name: "Reduce Stress, Welcome Peace",
    category: "Plans",
    image: p1_img,
    new_price: 500,
    old_price: 850,
    audio: calm,
   timetableimg:stress,
   description: "Embark on a 30-day transformative journey with our 'Reduce Stress, Welcome Peace' program, meticulously crafted to bring tranquility into your daily life. Immerse yourself in the healing powers of daily guided meditations, designed to alleviate stress and foster mindfulness. Embrace the soothing flow of daily yoga sessions, carefully curated to enhance relaxation and flexibility. Our plan includes a series of gentle exercises specifically curated to alleviate physical tension. From simple stretches to yoga poses, these activities are designed to release built-up stress and promote overall well-being"

  },
  {
    id: 2,
    name: "Controls anxiety",
    category: "Plans",
    image: p2_img,
    new_price: 850,
    old_price: 1200,
    audio: calm,
    description: "Embark on a transformative 30-day journey with our 'Anxiety Mastery' program, thoughtfully curated to provide relief and guidance for those navigating the challenges of anxiety. This meticulously crafted program integrates mindful breathing techniques, anxiety-relief yoga routines, and guided meditation sessions to empower participants with practical tools for effective stress management. Immerse yourself in enlightening workshops led by seasoned experts, offering hands-on coping strategies and exercises to build resilience. Daily journal prompts facilitate self-reflection, while the soothing backdrop of nature sounds enhances the relaxation experience"
    
  },
  {
    id: 3,
    name: "Inner Happiness",
    category: "Plans",
    image: p3_img,
    new_price: 600,
    old_price: 1000,
    audio: calm1,
    description: "Embark on a 30-day journey to cultivate lasting joy and inner peace with our 'Inner Happiness' program. Designed to elevate mood and reduce stress, this comprehensive plan integrates daily mindful meditation, joyful yoga practices, and positive affirmations. Engage in gratitude journaling and immersive nature meditations to enhance overall well-being. Our interactive workshops explore the mind-body connection, offering holistic insights into happiness. Connect with a supportive online community to share experiences and insights, fostering a sense of belonging on your path to inner happiness"
    
  },
  {
    id: 4,
    name: "Overall Mental Wellness",
    category: "Plans",
    image: p4_img,
    new_price: 1000,
    old_price: 1500,
    audio: calm1,
    description: "Embark on a holistic journey toward overall mental wellness through our all-encompassing 30-day program. Meticulously crafted to synchronize mind, body, and spirit, this transformative plan integrates the power of mindful meditation, therapeutic yoga, cognitive strategies, and enriching emotional intelligence workshops. Immerse yourself in a repertoire of stress-reducing techniques, embrace mindful movement practices, and embrace the uplifting impact of daily affirmations to foster a resilient and positive mindset. Connect with a supportive community to share insights, creating a profound sense of unity on your holistic well-being journey. "
    
  },
  {
    id: 5,
    name: "Emotional Health, Cognitive Focus",
    category: "Plans",
    image: p5_img,
    new_price: 750,
    old_price: 1100,
    audio: calm2,
    description: "This comprehensive plan introduces you to the transformative power of meditation and yoga, two ancient practices that have been proven to enhance emotional well-being and cognitive focus. Over the course of 45 days, this specialized plan integrates the power of meditation, yoga, and cognitive exercises to nurture emotional health and sharpen cognitive focus. Immerse yourself in daily guided meditations designed to promote emotional balance and mental clarity. Engage in therapeutic yoga routines that not only strengthen the body but also calm the mind. Embrace cognitive focus exercises and mindfulness techniques to enhance concentration and mental resilience."
    
    
  },
  {
    id: 6,
    name: "Memory renew",
    category: "Plans",
    image: p6_img,
    new_price: 800,
    old_price: 1200,
    audio: calm2,
    description: "Immerse yourself in the holistic practices of yoga and meditation designed to nourish your mind and sharpen your cognitive faculties. Our program combines memory-boosting exercises, mindfulness techniques, and targeted yoga routines to foster mental clarity and resilience. Join a supportive community for shared insights and encouragement, empowering you on your path to preserving cognitive well-being. Rediscover the joy of a sharp mind and cultivate lasting mental agility through our 'Rejuvenate Your Mind' program."
  },
  {
    id: 7,
    name: "Flexibility and Mobility Challenge",
    category: "Plans",
    image: p7_img,
    new_price: 700,
    old_price: 1000,
    audio: calm3,
    description: "This program combines daily targeted yoga sessions, guided meditation for mind-body connection, and expert guidance to gradually improve flexibility and mobility. With a progressive approach, community support, and holistic benefits, participants can expect reduced stiffness, improved range of motion, and a sense of mindful relaxation. Join our vibrant community, invest in your well-being, and experience the transformative benefits of enhanced flexibility and mobility."
  },
  {
    id: 8,
    name: "May help fight addictions",
    category: "Plans",
    image: p8_img,
    new_price: 1400,
    old_price: 2000,
    audio: calm3,
    description: "Embark on a transformative journey towards addiction recovery with our 'May Help Fight Addictions' program. Rooted in holistic healing practices, this plan integrates gentle and restorative yoga, mindfulness meditation, and therapeutic breathwork to support physical, mental, and emotional well-being. Our experienced professionals guide you through daily sessions, fostering resilience, emotional balance, and a positive mindset. Join a supportive community for shared insights and encouragement, creating a foundation for lasting well-being. This program is a comprehensive approach to healing, addressing the complexities of addiction recovery with care and compassion"
  },
  {
    id: 9,
    name: "Improves sleep",
    category: "Plans",
    image: p9_img,
    new_price: 800,
    old_price: 1400,
    audio: calm4,
    description: "Embark on a journey to serene nights and revitalized mornings with our 'Improves Sleep' program. Crafted to address the challenges of insomnia and sleep-related issues, this plan offers a holistic approach to cultivating a restful sleep experience. Engage in gentle bedtime yoga sequences, guided sleep meditations, and mindful breathwork to create a tranquil pre-sleep routine. Explore essential sleep hygiene tips and progressive relaxation techniques designed to ease stress and promote deeper sleep. By prioritizing quality sleep and establishing healthy bedtime rituals, this program contributes to overall well-being, positively impacting physical, mental, and emotional health."
  },
  {
    id: 10,
    name: "Energy Boost and Overall Wellness",
    category: "Plans",
    image: p10_img,
    new_price: 850,
    old_price: 1200,
    audio: calm4,
    description: "This specialized plan integrates invigorating yoga practices, energizing meditation techniques, and mindful lifestyle adjustments to enhance your energy levels and promote a balanced life. Engage in dynamic yoga sequences that boost circulation, experience the power of mindful meditation for mental clarity, and learn energizing breathwork techniques for vitality. Receive expert nutritional guidance and discover mindful lifestyle adjustments that contribute to a harmonious and balanced existence."
  },
  {
    id: 11,
    name: "Meditation and Relaxation",
    category: "Plans",
    image: p11_img,
    new_price: 850,
    old_price: 1000,
    audio: calm5,
    description: "Embark on a journey to inner tranquility with our 'Meditation and Relaxation' program. Immerse yourself in daily guided meditation sessions, soothing yoga practices, and mindfulness techniques carefully crafted to promote deep relaxation and a harmonious mind-body connection. Our program offers a holistic approach to well-being, incorporating relaxation workshops and the calming influence of nature sounds during meditation. Cultivate a peaceful state of mind, release physical tension, and integrate mindfulness into your daily life for a serene and balanced existence. "
  },
  {
    id: 12,
    name: "General Wellness",
    category: "Plans",
    image: p12_img,
    new_price: 950,
    old_price: 1300,
    audio: calm5,
    description: "Beyond versatile yoga and mindfulness sessions, this program enhances sleep quality, fosters mind-body alignment, and promotes a sense of community connection. Experience mindful stress reduction techniques, seamlessly integrate holistic practices into your lifestyle, and explore the transformative power of mindful breathing. Empower yourself with knowledge on mental health, nutrition, and holistic living for sustained well-being."
  }
];

export default all_product;
