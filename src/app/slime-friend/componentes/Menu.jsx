'use client'

import { useState } from "react"
import styles from "./styles.module.css"
import Jogo from "./Jogo"
import { geraMapa } from "./utils"

export default function Menu(){
    const [cena, setCena] = useState('menu')

    return (<> 
        {
            (cena == 'menu') ?
                <div className={styles.menu}>
                    <h1 className={styles.titulo}>Slime Friend 'v'</h1>
                    <button className={styles.botaoMenu} onClick={()=>{setCena('jogo')}}>Jogar</button>
                </div>
            :
                <Jogo mapa={geraMapa(20)}/>
        }
    </>)
}
