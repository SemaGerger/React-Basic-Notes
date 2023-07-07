import React, {useState,useEffect} from 'react'

export default function Page() {
    const [sayac, setSayac] = useState(0) 
    useEffect(()=> {
        setTimeout(() => {
           setSayac (sayac+1) 
        }, 1000);
        
    }, [])
  return (
    <div>

    <h3>Sayac : {sayac}</h3>

    </div>
  )
}
