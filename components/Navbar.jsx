// ===== Imports ===== //
import styles from './Navbar.module.css'
import React from 'react'


const Navbar = () => {



    
// ===== Render Area ===== //

  return (
    <div className={styles.container}>

        {/* ===== Home Button Image ====== */}

        <button className={styles.homeButton}> 
        <img className={styles.homeButton} src={"/src/assets/Images/StarWarsLogo.png"} />
      </button>
        
        {/* ===== Nav Buttons ===== */}
          <div>
              <nav>
                <ul>

                  <li> <a href="/"> Products </a> </li>
                  <li> <a href="/"> About </a> </li>
                  <li> <a href="/"> Contact </a> </li>
                  <li> <button className={styles.loginButton}> Login </button> </li>
                
                </ul> 
              </nav>
          </div> 
    </div>
  )
}

export default Navbar
