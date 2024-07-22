import React, { useState } from 'react'

function StateIntro() {

    const [textColor, setcolor] = useState("red")

    const changeColor = () => {
        setcolor("black") //Bu fonksiyona ne değer VERİRSE ARTIK SENİN DEĞİŞKENİN ODUR
    }


  return <>
    <h1 style={{color : textColor}}>İstanbul</h1>
    <button onClick={changeColor}>Change Color</button>
  </>
}

export default StateIntro