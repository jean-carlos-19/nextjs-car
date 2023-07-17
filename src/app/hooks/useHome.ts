import { useCallback, useEffect, useState } from 'react'
import { SearchService } from '@/services'

const useHome =()=>{
    const service: SearchService = SearchService.getService();
    const [isDataEmpty, setDataEmpty] = useState(false);
    const [data,setData]=useState([])
  
    useEffect(() => {
      searchCar();
    }, [])
  
    const searchCar = useCallback(async () => {
      try {
        const rs = await service.search(new URLSearchParams([["model", "corola"]]));
        const { data } = rs;
        const empty: boolean = Array.isArray(data) || data.length < 1 || !data;
        setDataEmpty(empty);
        setData(data)
  
      } catch (error) {
        console.error(error)
      }
    }, [])

    return {isDataEmpty,data}
}
export {useHome}