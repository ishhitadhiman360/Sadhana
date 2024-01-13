import React from 'react';
import './WellnessQuiz.css'

const WellnessQuiz = ({ quizData, onInputChange, onSubmit }) => {
  const { stressLevel, activityLevel, sleepQuality, appetite, mood , exercise, socialLife, focus, energy, overallWellness } = quizData;

  return (
    <div id="form">
      
      <form onSubmit={onSubmit}>
        <div className='questionBox'>
          <h3>Question 1: How would you rate your stress level?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={stressLevel === 'low'}
              onChange={() => onInputChange('stressLevel', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={stressLevel === 'medium'}
              onChange={() => onInputChange('stressLevel', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={stressLevel === 'high'}
              onChange={() => onInputChange('stressLevel', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 2: How would you describe your activity level?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={activityLevel === 'low'}
              onChange={() => onInputChange('activityLevel', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={activityLevel === 'medium'}
              onChange={() => onInputChange('activityLevel', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={activityLevel === 'high'}
              onChange={() => onInputChange('activityLevel', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 3: How would you rate your sleep quality?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={sleepQuality === 'low'}
              onChange={() => onInputChange('sleepQuality', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={sleepQuality === 'medium'}
              onChange={() => onInputChange('sleepQuality', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={sleepQuality === 'high'}
              onChange={() => onInputChange('sleepQuality', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 4: How is your appetite?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={appetite === 'low'}
              onChange={() => onInputChange('appetite', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={appetite === 'medium'}
              onChange={() => onInputChange('appetite', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={appetite === 'high'}
              onChange={() => onInputChange('appetite', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 5: How is your mood?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={mood === 'low'}
              onChange={() => onInputChange('mood', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={mood === 'medium'}
              onChange={() => onInputChange('mood', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={mood === 'high'}
              onChange={() => onInputChange('mood', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 6: How often do you exercise?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="rarely"
              checked={exercise === 'rarely'}
              onChange={() => onInputChange('exercise', 'rarely')}
            />
            Rarely
          </label>
          <label>
            <input
              type="radio"
              value="occasionally"
              checked={exercise === 'occasionally'}
              onChange={() => onInputChange('exercise', 'occasionally')}
            />
            Occasionally
          </label>
          <label>
            <input
              type="radio"
              value="regularly"
              checked={exercise === 'regularly'}
              onChange={() => onInputChange('exercise', 'regularly')}
            />
            Regularly
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 7: How is your social life?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={socialLife === 'low'}
              onChange={() => onInputChange('socialLife', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={socialLife === 'medium'}
              onChange={() => onInputChange('socialLife', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={socialLife === 'high'}
              onChange={() => onInputChange('socialLife', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 8: How is your ability to focus?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={focus === 'low'}
              onChange={() => onInputChange('focus', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={focus === 'medium'}
              onChange={() => onInputChange('focus', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={focus === 'high'}
              onChange={() => onInputChange('focus', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 9: How is your energy level?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={energy === 'low'}
              onChange={() => onInputChange('energy', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={energy === 'medium'}
              onChange={() => onInputChange('energy', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={energy === 'high'}
              onChange={() => onInputChange('energy', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <div className='questionBox'>
          <h3>Question 10: How do you rate your overall wellness?</h3>
          <div className='optionBox'>
          <label>
            <input
              type="radio"
              value="low"
              checked={overallWellness === 'low'}
              onChange={() => onInputChange('overallWellness', 'low')}
            />
            Low
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={overallWellness === 'medium'}
              onChange={() => onInputChange('overallWellness', 'medium')}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="high"
              checked={overallWellness === 'high'}
              onChange={() => onInputChange('overallWellness', 'high')}
            />
            High
          </label>
          </div>
        </div>

        <br />
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default WellnessQuiz;
