import React from 'react'

export default function Adres({adres}) {
  return (
    <>
    <h3>Adres </h3>
    <p>{adres.cadde}</p>
    <p>{adres.sokak}</p>
    <p>No:   {adres.kapino}</p>
    </>
  )
}
