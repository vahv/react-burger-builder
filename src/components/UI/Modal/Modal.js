import React from 'react';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return ( 
        <Aux>
            <Backdrop show={props.show} click={props.modalClose}/>
            <div 
                className={styles.Modal} 
                style={{
                    transform: props.show ? 'translateY(0)': 'translateY(-100vh)'
                }}>
                {props.children}
            </div> 
        </Aux>
    );
}
 
export default modal;