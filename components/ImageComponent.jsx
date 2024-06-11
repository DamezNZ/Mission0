// ===== Imports ===== //

import styles from './ImageComponent.module.css'

const ImageComponent = () => {
  return (
    <div className={styles.container}>
       <img className={styles.imageComponent} src="/src/assets/Images/theForceAwakens.jpg"></img>
       <img className={styles.imageComponent} src="/src/assets/Images/theLastJedi.jpg"></img>
       <img className={styles.imageComponent} src="/src/assets/Images/thePhantomMenace.jpg"></img>
    </div>
  )
}

export default ImageComponent
