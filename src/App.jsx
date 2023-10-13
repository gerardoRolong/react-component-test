import './App.css'
import Accordion from './components/Accordion'
import { useWebsiteInfo } from './hooks/useWebsiteInfo'
import { websitesList } from './constants/constants'
function App() {
  useWebsiteInfo(websitesList)

  return (
    <>
      <Accordion/>
    </>
  )
}

export default App
