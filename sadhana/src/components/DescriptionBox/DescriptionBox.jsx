import React, { useState } from "react";
import "./DescriptionBox.css";
import Button from "../button/button";
import images from "../Assets/timetable";
import all_product from "../Assets/all_product";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import BmiCalculator from "../Assets/bmiclaculator";
import Product from "../../pages/Product";
import age from "../Assets/age.jpg";
import addiction from "../Assets/addiction.jpg";
import cog from "../Assets/COGNITIVE.jpg";
import med from "../Assets/meditatation.jpg";
import mental from "../Assets/mental wellness.jpg";
import sleep from "../Assets/improvesleep.jpg";
import anxiety from "../Assets/anxiety.jpg";
import stress from "../Assets/stress.jpg";
import innerhappiness from "../Assets/innerhappiness.jpg";
import energy from "../Assets/energybooster.jpg";
// const Product = () => {
//     const { all_product } = useContext(ShopContext);
//     const { productId } = useParams();
//     const product = all_product.find((e) => e.id === Number(productId));

//     return (
//       <div>
//         <Breadcrumb product={product} />
//         <ProductDisplay product={product} />
//         <DescriptionBox product={product} /> // Pass product prop to DescriptionBox
//         <RelatedProducts />
//       </div>
//     );
//   };

const DescriptionBox = ({ product }) => {
  const [activeSection, setActiveSection] = useState("Description");

  const handleSectionClick = (section) => {
    console.log(`Clicked on ${section} text`);
    setActiveSection(section);
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          <p onClick={() => handleSectionClick("Overview")}>Overview</p>
        </div>
        <div className="descriptionbox-nav-box fade">
          <p onClick={() => handleSectionClick("TimeTable")}>TimeTable</p>
        </div>
        <div className="descriptionbox-nav-box fade">
          <p onClick={() => handleSectionClick("BMI Calculator")}>
            BMI Calculator
          </p>
        </div>
      </div>
      <div className="descriptionbox-description">
        {/* Render content based on activeSection */}
        {activeSection === "Overview" && (
          
            
            <div>
            {product.name === "Reduce Stress, Welcome Peace" && (
              <p>
              <strong>
              
<header>
    <h1>30-Day Stress Reduction Program</h1>
</header>
</strong>
<br/>
<h2>Program Benefits</h2>
<br/>

<div class="overview">
<h3>Stress Reduction:</h3>
<p>Experience a noticeable reduction in stress levels through consistent meditation and yoga practices.</p>

<h3>Improved Mental Well-being:</h3>
<p>Develop a positive mindset and enhance mental well-being with mindfulness techniques.</p>

<h3>Enhanced Relaxation:</h3>
<p>Achieve a state of deep relaxation through daily yoga sessions and calming activities.</p>

<h3>Better Sleep Quality:</h3>
<p>Establish healthy sleep patterns with guided relaxation techniques for improved sleep quality.</p>
</div>

<div class="started-today">
<p>Get Started Today:
Join our "Reduce Stress, Welcome Peace" plan today and embark on a transformative journey towards a calmer, more peaceful you. Take the first step towards a stress-free life!</p>
</div>

          </p>
            )}

            {product.name === "Controls anxiety" && (
              <p>
              <strong>
              
              <header>
                  <h1>A 30-Day Journey to Inner Calm</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Anxiety Reduction:</h3>
              <p>Experience a tangible reduction in anxiety levels through dedicated practices.</p>
              
              <h3>Mind-Body Connection:</h3>
              <p>Develop a stronger connection between the mind and body for improved emotional regulation.</p>
              
              <h3>Enhanced Relaxation:</h3>
              <p>Achieve a state of deep relaxation through daily yoga sessions and calming activities.</p>
              
              <h3>Coping Strategies:</h3>
              <p>Acquire effective coping strategies and tools to manage anxiety in various situations.</p>
              </div>
              
              <div class="started-today">
              <p>Ready to take control of anxiety and embrace a life of greater calm and well-being? Start your 30-day program today and embark on a journey toward inner peace.</p>
              </div>
          </p>

            )}

            {product.name === "Inner Happiness" && (
              <p>
              <strong>
              
              <header>
                  <h1>A 30-Day Inner Happiness Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Enhanced Mood and Positivity:</h3>
              <p>Elevate your mood and foster a positive outlook through daily meditation and joyful yoga practices.</p>
              
              <h3>Stress Reduction:</h3>
              <p>Learn effective techniques to manage stress, creating a more relaxed and harmonious state of mind.</p>
              
              <h3>Cultivation of Inner Peace:</h3>
              <p>Nurture inner peace and mindfulness, fostering a deep sense of tranquility within.</p>
              
              <h3>Improved Well-being:</h3>
              <p>Experience an overall improvement in mental and physical well-being through the holistic approach of the program.</p>
              </div>
              
              <div class="started-today">
              <p>Join our "Inner Happiness" program and embark on a 30-day transformative journey towards cultivating lasting joy, peace, and well-being.</p>
              </div>
          </p>
            )}
            {product.name === "Overall Mental Wellness" && (
              <p>
              <strong>
              
              <header>
                  <h1>30 Days "Total Mind Wellness" Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Positive Mindset:</h3>
              <p>Foster a resilient and positive mindset through daily affirmations and mindfulness practices</p>
              
              <h3>Balanced and Healthy Mind:</h3>
              <p>Cultivate mental well-being through a holistic approach, fostering balance and positivity.</p>
              
              <h3>Stress Mastery:</h3>
              <p>Acquire effective tools and techniques to manage stress, promoting resilience and balance.</p>
              
              <h3>Community Connection:</h3>
              <p>Join a supportive community, sharing insights and experiences on the path to holistic well-being.</p>
              </div>
              
              <div class="started-today">
              <p>Embark on your journey to total mind wellness and experience the transformative power of a balanced and healthy life.

</p>
              </div>
          </p>
            )}
            {product.name === "Emotional Health, Cognitive Focus" && (
             <p>
              <strong>
              
              <header>
                  <h1>A specialized 30 day Emotional Health and Congnitive Focuse Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Improved Self-Awareness:</h3>
              <p>Develop greater self-awareness through mindfulness, fostering a deeper understanding of emotions and thought patterns.</p>
              
              <h3>Positive Mood Boost:</h3>
              <p>Enjoy an uplifted mood through the release of endorphins during therapeutic yoga and mindfulness practices.</p>
              
              <h3>Emotional Resilience:</h3>
              <p>Develop emotional resilience for navigating life's challenges with grace and composure.</p>
              
              <h3>Sharper Cognitive Focus:</h3>
              <p>Improve cognitive focus, concentration, and mental clarity for enhanced daily performance.</p>
              </div>
              
              <div class="started-today">
              <p>Embark on this specialized program to nurture emotional health and sharpen cognitive focus. Join us and take the first step toward a more emotionally resilient, mentally focused, and holistically healthy life.</p>
              </div>
         </p>
            )}
            {product.name === "Memory renew" && (
              <p>
              <strong>
              
              <header>
                  <h1>Rejuvenate Your Mind: Reduce Age-Related Memory Loss Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Preserve Cognitive Vitality:</h3>
              <p>Adopt practices that actively work to preserve and enhance cognitive functions.</p>
              
              <h3>Memory Retention:</h3>
              <p>Benefit from memory-boosting exercises and practices for improved retention.</p>
              
              <h3>Enhanced Mental Clarity:</h3>
              <p>Experience greater mental clarity through mindfulness and yoga practices.</p>
              
              <h3>Reduced Age-Related Memory Loss:</h3>
              <p>Mitigate age-related memory loss through a holistic approach to mental well-being.</p>
              </div>
              
              <div class="started-today">
              <p>Embark on this specialized program to rejuvenate your mind, reduce age-related memory loss, and cultivate enduring cognitive vitality.</p>
              </div>
          </p>
            )}
            {product.name === "Flexibility and Mobility Challenge" && (
             <p>
             <strong>
              
              <header>
                  <h1>Yoga for Flexibility and Mobility Challenge</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Improved Flexibility:</h3>
              <p>Experience increased flexibility in key muscle groups, allowing for a greater range of motion in daily activities.</p>
              
              <h3>Enhanced Mobility:</h3>
              <p>Improve overall mobility, making movements smoother and more effortless.</p>
              
              <h3>Reduced Stiffness:</h3>
              <p>Alleviate stiffness in joints and muscles, promoting a sense of lightness and ease in your body.</p>
              
              <h3>Mindful Relaxation:</h3>
              <p>Enjoy moments of mindful relaxation to reduce tension and promote a calm state of mind.</p>
              </div>
              
              <div class="started-today">
              <p>Join us in the Yoga for Flexibility and Mobility Challenge and unlock the potential for a more flexible, mobile, and balanced you. Elevate your yoga practice and experience the transformative benefits of enhanced flexibility and improved mobility.</p>
              </div>
         </p>
            )}
            {product.name === "May help fight addictions" && (
             <p>
             <strong>
              
              <header>
                  <h1>Holistic Healing: May Help Fight Addictions Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Physical Recovery:</h3>
              <p>Experience physical restoration through yoga practices that promote strength, flexibility, and overall well-being.</p>
              
              <h3>Mental Resilience:</h3>
              <p>Enhance mental clarity and resilience through daily mindfulness meditation sessions.</p>
              
              <h3>Emotional Balance:</h3>
              <p>Cultivate emotional balance with therapeutic breathwork exercises, providing tools for managing stress and emotional triggers.</p>
              
              <h3>Holistic Healing:</h3>
              <p>Embrace a holistic approach to addiction recovery, addressing the physical, mental, and emotional dimensions for lasting well-being.</p>
              </div>
              
              <div class="started-today">
              <p>Embark on a journey of holistic healing, gain valuable tools for addiction recovery, and rediscover a path to well-being with our "May Help Fight Addictions" program.</p>
              </div>
         </p>
            )}
            {product.name === "Improves sleep" && (
              <p>
              <strong>
              
              <header>
                  <h1>Tranquil Nights: Improves Sleep Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Deeper, Restorative Sleep:</h3>
              <p>Immerse yourself in practices that encourage a more profound and restorative sleep, promoting overall well-being.</p>
              
              <h3>Reduced Sleep-related Stress:</h3>
              <p>Alleviate stress and anxiety associated with sleep through calming yoga, meditation, and breathwork sessions.</p>
              
              <h3>Established Bedtime Rituals:</h3>
              <p>Cultivate healthy bedtime rituals that signal the body and mind to unwind, enhancing the quality of your sleep.</p>
              
              <h3>Enhanced Sleep Hygiene:</h3>
              <p>Implement essential sleep hygiene practices for a conducive sleep environment and improved sleep quality.</p>
              </div>
              
              <div class="started-today">
              <p>Embark on the path to rejuvenating sleep and wake up refreshed with our "Improves Sleep" program.</p>
              </div>
          </p>
            )}
            {product.name === "Energy Boost and Overall Wellness" && (
              <p>
              <strong>
              
              <header>
                  <h1>Vitality Recharge: Energy Boost and Overall Wellness Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Increased Energy Levels:</h3>
              <p>Immerse yourself in invigorating practices that boost energy levels and promote a vibrant, active lifestyle.</p>
              
              <h3>Mental Clarity and Focus:</h3>
              <p>Sharpen mental focus and enhance cognitive function through daily mindful meditation sessions.</p>
              
              <h3>Energizing Breathwork:</h3>
              <p>Experience the revitalizing effects of energizing breathwork, promoting increased alertness and overall vitality.</p>
              
              <h3>Nutritional Wellness:</h3>
              <p>Embrace nutritional wellness with expert guidance on mindful eating and nourishing foods for sustained energy.</p>
              </div>
              
              <div class="started-today">
              <p>Embark on the path to vitality and overall wellness with our "Energy Boost and Overall Wellness" program.</p>
              </div>
          </p>
            )}
            {product.name === "Meditation and Relaxation" && (
             <p>
             <strong>
              
              <header>
                  <h1>Serenity Unleashed: Meditation and Relaxation Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Inner Tranquility:</h3>
              <p>Cultivate a peaceful state of mind through daily guided meditation sessions, promoting inner tranquility.</p>
              
              <h3>Physical Relaxation:</h3>
              <p>Experience physical relaxation with calming yoga practices designed to release tension and improve overall flexibility.</p>
              
              <h3>Mind-Body Connection:</h3>
              <p>Enhance the connection between mind and body, fostering a harmonious and balanced state of being.</p>
              
              <h3>Mindfulness in Daily Life:</h3>
              <p>Learn practical mindfulness techniques to navigate stress and cultivate serenity in everyday situations.</p>
              </div>
              
              <div class="started-today">
              <p>Embark on the path to serenity and relaxation with our "Meditation and Relaxation" program.</p>
              </div>
         </p>
            )}
            {product.name === "General Wellness" && (
              <p>
              <strong>
              
              <header>
                  <h1>Holistic Harmony: General Wellness Program</h1>
              </header>
              </strong>
              <br/>
              <h2>Program Benefits</h2>
              <br/>
              
              <div class="overview">
              <h3>Enhanced Sleep Quality:</h3>
              <p>Explore practices and techniques aimed at improving sleep quality. Establish healthy sleep patterns and experience the rejuvenating benefits of a restful night's sleep.</p>
              
              <h3>Mind-Body Alignment:</h3>
              <p>Cultivate mind-body alignment through mindful movement practices. Enhance your awareness of body sensations, promoting a deeper connection and understanding of your physical self.</p>
              
              <h3>Community Connection:</h3>
              <p>Join a supportive community of like-minded individuals on the same wellness journey. Share insights, experiences, and encouragement, fostering a sense of connection and mutual support.</p>
              
              <h3>Mindful Stress Reduction:</h3>
              <p>Deepen your stress reduction journey with specialized mindful stress reduction techniques. Learn to navigate stressors with grace and resilience, promoting mental and emotional well-being.</p>
              </div>
              
              <div class="started-today">
              <p>Embark on the path to holistic harmony with our "General Wellness" program</p>
              </div>
          </p>
            )}











          </div>
        )}
        {activeSection === "Video" && (
          <div>
            <h2>Video Section</h2>
            {/* Render video content */}
          </div>
        )}
        {activeSection === "Trackers" && (
          <div>
            <h2>Trackers Section</h2>
            {/* Render trackers content */}
          </div>
        )}
        {activeSection === "TimeTable" && (
          <div>
            {product.name === "Reduce Stress, Welcome Peace" && (
              <img src={stress} alt={product.name} width="700" height="1000" />
            )}

            {product.name === "Controls anxiety" && (
              <img src={anxiety} alt={product.name} width="700" height="1000"  />
            )}

            {product.name === "Inner Happiness" && (
              <img src={innerhappiness} alt={product.name} width="700" height="1000" />
            )}
            {product.name === "Overall Mental Wellness" && (
              <img src={mental} alt={product.name} width="700" height="1000" />
            )}
            {product.name === "Emotional Health, Cognitive Focus" && (
              <img src={cog} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Memory renew" && (
              <img src={age} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Flexibility and Mobility Challenge" && (
              <img src={age} alt={product.name} width="700" height="1000" />
            )}
            {product.name === "May help fight addictions" && (
              <img src={addiction} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Improves sleep" && (
              <img src={sleep} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Energy Boost and Overall Wellness" && (
              <img src={energy} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Meditation and Relaxation" && (
              <img src={med} alt={product.name}  width="700" height="1000" />
            )}
            {product.name === "General Wellness" && (
              <img src={mental} alt={product.name} width="700" height="1000"  />
            )}




          </div>
        )}

        {activeSection === "BMI Calculator" && (
          <div>
            <BmiCalculator />
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
