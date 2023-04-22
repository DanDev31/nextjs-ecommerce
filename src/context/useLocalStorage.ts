import {useEffect, useState} from 'react'

const useLocalStorage = <T>(initialState:T):T => {
    
    const [storagedState, setStoragedState] = useState<T>(initialState);

    useEffect(() => {
        const storaged = JSON.parse(localStorage.getItem("cart") || "{}")
      console.log("storaged",storaged)
        setStoragedState(storaged);

    },[])

  return storagedState;
}

export default useLocalStorage