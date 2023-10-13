import { useSelector } from 'react-redux'
import AccordionElement from './AccordionElement'
import styles from '../styles/Accordion.module.css'

export default function Accordion() {
  
  const websitesInfo = useSelector((state) => state.websitesInfo)
  
  console.log(Object.keys(websitesInfo))
  return (
    <div className={styles['accordion-container']}>
      <h1>Nodes</h1>
      <div className={styles.accordion}>
        {Object.keys(websitesInfo).length === 0 ? 
          <p>Loading...</p> :
          Object.keys(websitesInfo).map((title, idx) => {
            return <AccordionElement key={idx} title ={title} {...websitesInfo[title]}/>
          })
        }
      </div>
    </div>
   
  )
  
}