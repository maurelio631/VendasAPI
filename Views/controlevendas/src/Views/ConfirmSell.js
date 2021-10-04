import React from "react";
import styles from  "./ConfirmSell.module.css"

const ConfirmSell = ()=>{
    return(
        <div className={styles.Canvas}>
            <div className={styles.Container}>
                <h2>Seu pedido foi realizado com sucesso!</h2>
                <button>Voltar ao menu principal</button>
            </div>
        </div>
    );
}
export default ConfirmSell;