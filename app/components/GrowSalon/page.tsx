import React from 'react';
import Image from 'next/image';
import styles from './GrowSalon.module.css';
import GrowSalonImage from '../../../public/images/pngs/frame-image.png';
import CorriereDellaSera from '../../../public/images/pngs/corriere-della-sera.png';
import Cosmoprof from '../../../public/images/svgs/cosmoprof';
import LogoIstituzionaleCosmeticaItaliaNoSfondo from '../../../public/images/pngs/logo-istituzionale_cosmetica-italia-no-sfondo.png';
import Colorami from '../../../public/images/pngs/LOGO_EXT_BLACK_2X-1 1.png';

const GrowSalon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.displayMain}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            Fai crescere il tuo salone in automatico
          </h1>
          <p className={styles.paragraph}>
            Sappiamo quanto sia complicato per te oggi occuparti di tutti i vari
            aspetti del salone! Per questo ci siamo noi ad aiutarti! .
          </p>
          <p className={styles.paragraph}>
            Insieme a te, imposteremo un sistema di azioni marketing
            automatizzate per attrarre clienti nuove, aumentare la frequenza
            delle clienti attuali e recuperare le clienti fuori-frequenza.
          </p>
          <br />
          <button className={styles.button}>richiedi demo GRATUITA</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={GrowSalonImage} alt="Image" width={550} height={60} />
      </div>
      <br />
      <br />
      <div className={styles.bottomArea}>
        <h2 className={styles.bottomHeading}>Parlano di noi</h2>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <Image src={CorriereDellaSera} alt="Image" width={230} height={60} />
        </div>
        <div className={styles.gridItem}>
          <Cosmoprof />
        </div>
        <div className={styles.gridItem}>
          <Image
            src={LogoIstituzionaleCosmeticaItaliaNoSfondo}
            alt="Image"
            width={230}
            height={60}
          />
        </div>
        <div className={styles.gridItem}>
          <Image src={Colorami} alt="Image" width={230} height={60} />
        </div>
      </div>
    </div>
  );
};

export default GrowSalon;
