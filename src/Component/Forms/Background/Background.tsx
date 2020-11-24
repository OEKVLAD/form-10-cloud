import React, { FunctionComponent } from 'react';
import styles from './Background.module.scss';
import Layer from './assets/Layer.png';
import LINES from './assets/LINES.png';

type InputGroupProps = {
    pageTittle: string,
}

export const ComponentFormsBackground: FunctionComponent<InputGroupProps> = ({ children, pageTittle }) =>
        <div className={styles.backgroundForm}>
            <div className={styles.backgroundSecondaryForm}/>
            <div className={styles.backgroundMainContainer}>

                <div className={styles.backgroundLeftImage}>
                    <img className={styles.imageLayer} src={Layer}/>
                    <img className={styles.imageLines} src={LINES}/>
                </div>
                <div className={styles.backgroundContainer}>
                    <div className={styles.backgroundProgressIndicator}>
                        <div className={styles.indicator}></div>
                        <div className={`${styles.indicator} ${styles.active}`}></div>
                        <div className={styles.indicator}></div>
                    </div>

                    <div className={styles.backgroundTittleContainer}>
                        <div className={styles.backgroundTittle}>
                            { pageTittle }
                        </div>
                    </div>

                    { children }
                </div>

                <div className={styles.backgroundProgressIndicatorWithInfo}>
                    <div className={styles.indicatorText}>
                        <div className={styles.indicatorLine}/>
                        <div className={styles.indicatorTittle}>
                            01
                        </div>
                    </div>
                    <div className={`${styles.indicatorText} ${styles.active}`}>
                        <div className={styles.indicatorLine}/>
                        <div className={styles.indicatorTittle}>
                            02
                            <br/>
                            Personal
                        </div>
                    </div>
                    <div className={styles.indicatorText}>
                        <div className={styles.indicatorLine}/>
                        <div className={styles.indicatorTittle}>
                            03
                        </div>
                    </div>

                </div>
            </div>



        </div>

