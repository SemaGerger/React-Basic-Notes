import React from 'react'
import Contact from './Contact'
import Contact2 from './Contact2'
import Adres from './Adres'
 
 

export default function Home() {
    const isim = "Şamil"
    const soyad = "Yılmaz"
    const adres = {
        "cadde": "Atatürk cad",
        "sokak": "7. Sokak",
        "kapino": 7
    }
  return (
     <>
     
     <h3>Ana Sayfa </h3>
     <p>{isim}</p>
      <Contact isim = {isim}  soyad = {soyad} />
      <Contact2 isim = {isim}  soyad = {soyad} />
      <Adres adres = {adres} />
    
       
     </>
  )
}
