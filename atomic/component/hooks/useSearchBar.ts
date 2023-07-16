import { useState } from "react"

const useSearchBar =()=>{
    const [manuFacturer,setManuFacturer] = useState('');
    const handleSearch =()=>{

    }
    return {manuFacturer,setManuFacturer,handleSearch}
}
export {useSearchBar}