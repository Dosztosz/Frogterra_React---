
import Header from './templates/header'
import Sidebar from './templates/sidebar'
import Tips from './templates/tips'
import Profile from './templates/profile'
import Missions from './templates/missions'
import FightingScene from './templates/fight'
import { useState } from 'react'


const handleReturnToMissions = () => {
  alert("Returning to Missions...");
  // Implement navigation to the missions tab here
};



import './style.scss'




function App() {


  // Wgranie Menu
  const [selectedItem, setSelectedItem] = useState('Profil');
  const menuItems = ['Profil', 'Walka', 'Misje'];

  return (
    <>
      <Header items={menuItems} onSelect={setSelectedItem} />
      <div className="container">
          <div className="main">
              <Sidebar />
              <div className="menu background-pixel">
                  {selectedItem === 'Profil' && <Profile />}
                  {selectedItem === 'Walka' && <FightingScene onReturnToMissions={handleReturnToMissions} />}
                  {selectedItem === 'Misje' && <Missions />}
                  <Tips />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
