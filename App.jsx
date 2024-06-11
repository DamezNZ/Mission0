// ====== Imports ===== //

import HeroArea from './components/HeroArea'
import Navbar from './components/Navbar'
import ImageComponent from './components/ImageComponent'
import styles from './App.module.css'
import "/src/fonts/Starjedi.ttf"
import Image from "/src/assets/Images/starwarsBG.jpg"



function App() {
// ===== State Varriables ===== //
  


// ===== Render Area ===== //
  return (
    <>

      <html>
          <head>
            <title>Star Wars</title>
          </head>

            <body>
                
                  <div className={styles.container}>
                     

                            {/* ===== Navbar Area ===== */}
                            <nav className={styles.navbar}>
                                <Navbar />
                            </nav>

                            {/* ===== Hero Area ===== */}
                            <section className={styles.heroArea}>
                                <HeroArea />
                            </section>
                            
                              {/* ===== Image Area ===== */}
                            <section className={styles.imageArea}>
                          
                              <ImageComponent />
                                
                            </section>

                     
                  </div>
                  
          </body>
      </html>
    
    </>
  )
}

export default App
