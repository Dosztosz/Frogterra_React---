
import Header from './templates/header'
import Sidebar from './templates/sidebar'
import Tips from './templates/tips'
import Profile from './templates/profile'
import Fight from './templates/fight'
import { useState } from 'react'



import './style.scss'



function App() {
  // Wgranie Menu
  const [selectedItem, setSelectedItem] = useState('Profil');
  const menuItems = ['Profil', 'Walka', 'Services', 'Contact'];

  return (
    <>
      <Header items={menuItems} onSelect={setSelectedItem} />
      <div className="container">
          <div className="main">
              <Sidebar />
              <div className="menu background-pixel">
                  {selectedItem === 'Profil' && <Profile />}
                  {selectedItem === 'Walka' && <Fight />}
                  <Tips />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
