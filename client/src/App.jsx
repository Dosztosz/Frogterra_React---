
import Header from './templates/header'
import Sidebar from './templates/sidebar'
import Tips from './templates/tips'
import Profile from './templates/profile'
import Fight from './templates/fight'
import Missions from './templates/missions'
import { useState } from 'react'



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
                  {selectedItem === 'Walka' && <Fight />}
                  {selectedItem === 'Misje' && <Missions />}
                  <Tips />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
