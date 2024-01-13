import React, { useState } from 'react';
import WellnessQuiz from './WellnessQuiz';
import all_product from '../Assets/all_product';
import './WellnessQuiz.css'

const WellnessForm = () => {
    const [buttonVisible, setButtonVisible] = useState(true);
   
    const [showQuiz, setShowQuiz] = useState(false);
  const [quizData, setQuizData] = useState({
    stressLevel: '',
    activityLevel: '',
    sleepQuality: '',
    appetite: '',
    mood: '',
    exercise: '',
    socialLife: '',
    focus: '',
    energy: '',
    overallWellness: '',
    wellnessPlan: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any question is skipped
    if (Object.values(quizData).some((value) => value === '')) {
        alert('Please answer all questions before submitting.');
        return;
      }
      setButtonVisible(false);
    const calculatedWellnessPlan = calculateWellnessPlan(
      quizData.stressLevel,
      quizData.activityLevel,
      quizData.sleepQuality,
      quizData.appetite,
      quizData.mood,
      quizData.exercise,
      quizData.socialLife,
      quizData.focus,
      quizData.energy,
      quizData.overallWellness
    );
    setQuizData({
      ...quizData,
      wellnessPlan: calculatedWellnessPlan,
    });
  };

  const calculateWellnessPlan = (stress, activity, sleep, appetite, mood, exercise, socialLife, focus, energy, overallWellness) => {
    // Updated logic based on new questions
    if (stress === 'high' && activity === 'low' && sleep === 'poor') {
      return all_product.find(plan => plan.name === 'Reduce Stress, Welcome Peace');
    } else if (appetite === 'low' && mood === 'low') {
      return all_product.find(plan => plan.name === 'Inner Happiness');
    } else if (stress === 'high' && mood === 'low') {
      return all_product.find(plan => plan.name === 'Overall Mental Wellness');
    } else if (socialLife === 'low' && focus === 'low') {
      return all_product.find(plan => plan.name === 'Emotional Health and Cognitive Focus');
    } else if (energy === 'low' && overallWellness === 'low') {
      return all_product.find(plan => plan.name === 'Energy Boost and Overall Wellness');
    } else {
      return all_product.find(plan => plan.name === 'General Wellness');
    }
  };

  const handleTakeQuizClick = () => {
    setShowQuiz(true);
  };

  const handleQuizInputChange = (field, value) => {
    setQuizData({
      ...quizData,
      [field]: value,
    });
  };

  return (
    <div>
        <br /><br /><br />
      <h1 style={{ textAlign: 'center' , fontFamily: 'sans-serif'}}>Wellness Assessment</h1>
      <br />
      {showQuiz ? ( buttonVisible&&
        <WellnessQuiz
          quizData={quizData}
          onInputChange={handleQuizInputChange}
          onSubmit={handleSubmit}
        />
      ) : (
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
        <button onClick={handleTakeQuizClick}>Take Quiz</button>
        </div>
      )}
        
        {quizData.wellnessPlan && (
        <div>
          <h3 style={{ textAlign: 'center' }}>Recommended Wellness Plan:</h3>
          <br />
          {/* Display complete plan information */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <a href={`/product/${quizData.wellnessPlan.id}`}>
            <img src={quizData.wellnessPlan.image} alt={quizData.wellnessPlan.name} className="image" style={{ maxWidth: '400px', maxHeight: '400px' }} />
            </a>
            <br /><br />
            <h4>{quizData.wellnessPlan.name}</h4>
            <br />
            <p>Price: Rs {quizData.wellnessPlan.new_price}</p>
            
            
          </div>
        </div>
      )}
      <br /><br /><br />
    </div>
  );
};

export default WellnessForm;
