import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const FightingScene = ({ onReturnToMissions }) => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerHealth > 0 && enemyHealth > 0) {
        // Player attacks enemy
        const playerAttack = Math.floor(Math.random() * 5) + 1;
        setEnemyHealth(prev => Math.max(prev - playerAttack, 0));

        // Enemy attacks player
        const enemyAttack = Math.floor(Math.random() * 5) + 1;
        setPlayerHealth(prev => Math.max(prev - enemyAttack, 0));
      }
    }, 1000);

    if (playerHealth <= 0 && message !== 'You Lose!') {
      setMessage('You Lose!');
      clearInterval(interval);
    } else if (enemyHealth <= 0 && message !== 'Victory!') {
      setMessage('Victory!');
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [playerHealth, enemyHealth, message]);

  return (
    <div className="fighting-scene">
      <h1>Fighting Scene</h1>
      <div className="character">
        <h2>Player</h2>
        <div className="health-bar">
          <div className="health" style={{ width: `${playerHealth}%` }}></div>
        </div>
        <p>HP: {playerHealth}</p>
      </div>

      <div className="character">
        <h2>Enemy</h2>
        <div className="health-bar">
          <div className="health" style={{ width: `${enemyHealth}%` }}></div>
        </div>
        <p>HP: {enemyHealth}</p>
      </div>

      {message && (
        <>
          <h2>{message}</h2>
          <button onClick={onReturnToMissions} className="mission-button">
            Return to Missions {selectedItem === 'Misje' && <Missions />}
          </button>
        </>
      )}
    </div>
  );
};



export default FightingScene













// import Attack from './actions/attack'


// function Fight(){
//     return(
        
// <>
//         <div class="battle-arena">
//             <div class="battle-arena-row">
//                 <div class="character-info">
//                     <div class="character-bar">
//                         Your HP:
//                         <progress id="m_char_bar" value="100" max="100"></progress>
//                         <p>Damage dealt: <span id="m_char_damage"></span></p>
//                     </div>
//                     <div class="character-window" id="m_char"></div>
//                 </div>
//                 <div class="character-info">
//                     <div class="character-bar">
//                         Enemy HP:
//                         <progress id="e_char_bar" value="100" max="100"></progress>
//                         <p>Damage dealt: <span id="e_char_damage"></span></p>
//                     </div>
//                     <div class="character-window" id="e_char"></div>
//                 </div>
//             </div>
//         </div>
//             <Attack attack={15} />
// </>
//     )
// }


// export default Fight