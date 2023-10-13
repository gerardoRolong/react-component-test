  import { useEffect } from "react"
  import { useDispatch } from "react-redux"
  import { setWebsiteInfo } from "../redux/websitesInfoSlice"
  import axios from 'axios'
  
  export const useWebsiteInfo = (websitesList) => {
    
    const dispatch = useDispatch()
      
    useEffect(() => {
    
      const checkStatus = async () => {
        let tempWebsitesInfo = {}
        for(const title in websitesList) {
          const domain = websitesList[title]
          tempWebsitesInfo[title] = {
            domain: domain
          }
          try {
            const res = await axios.get(`/proxy?url=https://${domain}`)
            tempWebsitesInfo[title].status = res.status
          } catch(error){
            tempWebsitesInfo[title].status = error.response.status
          }
        }
        console.log(tempWebsitesInfo)
        dispatch(setWebsiteInfo(tempWebsitesInfo))
      }
      
      checkStatus()
      
      const interval = setInterval(() => {
        checkStatus()
      }, 5000);
    
      return () => {
        clearInterval(interval)
      }
      
    }, [])
  }
  