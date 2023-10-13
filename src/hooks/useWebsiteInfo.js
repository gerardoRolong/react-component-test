  import { useEffect } from "react"
  import { useDispatch } from "react-redux"
  import { setWebsiteInfo } from "../redux/websitesInfoSlice"
  import axios from 'axios'
  
  export const useWebsiteInfo = (websitesList) => {
    
    const dispatch = useDispatch()
      
    useEffect(() => {
    
      const checkStatus = async () => {
        let tempWebsitesInfo = {}
        console.log("beforerrrrrrrrrr")
        for(const title in websitesList) {
          const domain = websitesList[title]
          tempWebsitesInfo[title] = {
            domain: domain
          }
          try {
            // console.log("try",title)
            const res = await axios.get(`/proxy?url=https://${domain}`)
            tempWebsitesInfo[title].status = res.status
            console.log("try",res)
          } catch(error){
            // console.log("erro", title, error)
            tempWebsitesInfo[title].status = error.response.status
            console.log("temp", JSON.stringify(tempWebsitesInfo))
          }
        }
        console.log("afterrrrrrrrrr")
        console.log("temp", tempWebsitesInfo)
        dispatch(setWebsiteInfo(tempWebsitesInfo))
      }
      
      checkStatus()
      
      // const interval = setInterval(() => {
      //   checkStatus()
      // }, 500000);
    
      //return () => clearInterval(interval);
      
    }, [])
  }
  