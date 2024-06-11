// ====== Imports ===== //
import styles from './HeroArea.module.css'
import videoBg from '/src/assets/Videos/StarWarsFight.mp4'


const HeroArea = () => {

// ===== Render Area ===== //
  return (
    <>
    <div className={styles.container}> 

      {/* ===== Hero Area ===== */}

      <video className={styles.bgvideo} src={videoBg} autoPlay loop muted>
      </video>

      {/* ===== Search Bar Area ===== */}
    
      <div className={styles.searchBarContainer}>

          <input type="text" className={styles.searchBar} />
          <button className={styles.searchButton}> Search </button>

      </div>
      
    </div>
    </>
  )
}

export default HeroArea
