import { useState } from 'react';
import styles from "./buttonOfMiniNav.module.scss";

const ButtonOfMiniNav = () => {

      // const [open, setOpen] = useState(false);
      // const [isShownMiniMenu, setIsShownMiniMenu] = useState(false);

      return (
            <div id={styles.container} >
                  <div className={styles.line} id={styles.lineTop} />
                  <div className={styles.line} id={styles.lineBottom} />
            </div >
      )

}
export default ButtonOfMiniNav;