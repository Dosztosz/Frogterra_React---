import { useEffect, useState } from 'react'
import Header from './templates/header'
import Sidebar from './templates/sidebar'
import Tips from './templates/tips'
import Profile from './templates/profile'
import Missions from './templates/missions'
import FightingScene from './templates/fight'


import data from './dummy.json';

const handleReturnToMissions = () => {
  alert("Returning to Missions...");
  // Implement navigation to the missions tab here
};



const dailyMessage = "Świetne wieści w dniu dzisiejszym nasze jeziorka są w idelanym stanie, dzięki temu masz zwiększoną szansę na zdobycie legendarnych przedmiotów"

import './style.scss'




function App() {


    // character={{ user: data.user, level: data.level }} dailyMessage = {dailyMessage}

  // Wgranie Menu
  const [selectedItem, setSelectedItem] = useState('Profil');
  const menuItems = ['Profil', 'Walka', 'Misje'];

  return (
    <>
      <Header items={menuItems} onSelect={setSelectedItem} />
      <div className="container">
          <div className="main">
              <Sidebar username = {data.user} level = {data.level} dailyMessage={dailyMessage}/>
              <div className="menu background-pixel">
                  {selectedItem === 'Profil' && <Profile experience = {data.experience} experienceNeeded = {data.experienceNeeded} />}
                  {selectedItem === 'Walka' && <FightingScene />}
                  {selectedItem === 'Misje' && <Missions />}
                  <Tips />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
