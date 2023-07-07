import React from 'react'

export default function Contact(props) {
    console.log(props)
  return (
     <>
     <h3>Web Master :</h3>
     <p> {props.isim}- {props.soyad}</p>
     </>
  )
}
