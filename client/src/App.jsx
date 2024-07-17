
import Header from './templates/header'
import Sidebar from './templates/sidebar'
import Main from './templates/sidebar'
import Tips from './templates/tips'
import { useState } from 'react'

import './style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div class="container">
          <div class="main">
              <Sidebar />
              <div class="menu background-pixel">
                  <Main />
                  <Tips />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
