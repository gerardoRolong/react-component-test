import { loremIpsum } from "../constants/constants"
import styles from "../styles/AccordionElement.module.css"
import { useState } from "react"

export default function AccordionElement({title, domain, status}) {
  
  let [active, setActive] = useState(false)
    
  return (
    
    <div className={styles['accordion-elem']}>
      <div className={styles['accordion-elem-title']} onClick={() => setActive(!active)}>
      
        <div className={styles['elem-website-title']}>
          <h2>{title}</h2>
          <p>{domain}</p>
        </div>
        
        <div className={styles['elem-website-status']}>
          <svg width="20" height="40">
            <circle cx="10" cy="25" r="5" style={status === 200 ? {fill: 'green'} : {fill: 'red'}} />
          </svg>
          <p>{status === 200 ? 'ONLINE' : 'OFFLINE'}</p>
          <p className={styles['symbol']}>&#8964;</p>
        </div>
        
      </div>
      { active &&
        <div className={styles['accordion-elem-content']}>
          {status === 200 ? 
            <p>{loremIpsum}</p> :
            <p>No data to disply!!</p>
          }
        </div> 
      }
    </div>    
    
  )
  
}