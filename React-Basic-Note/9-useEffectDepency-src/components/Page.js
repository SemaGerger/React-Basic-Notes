import React, {useState,useEffect} from 'react'

export default function Page() {
  const tekrar = () => {
    setSayac(10)
  }
    const [sayac, setSayac] = useState(10) 
    useEffect(()=> {
        setTimeout(() => {
        {sayac > 0  && setSayac(sayac-1)}
        
          
        }, 1000);
        
    },[sayac])
  return (
    <div>

     <h3>Onaylamak için 10 sn var </h3> 

     {sayac  ===  0 && <h3>Süre Doldu</h3>  }
   
   <button  onClick={tekrar}   type='button'>Tekrar Gönder</button>
    <h3>Sayac : {sayac}</h3>

    </div>
  )
}
