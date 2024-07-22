import React, { useState } from 'react'

function ImageStateSample() {

    const [imageSource, setImageSource] = useState("https://www.shutterstock.com/image-photo/koala-bear-perched-on-tree-260nw-2364588229.jpg")

    let imageSources = [
        "https://www.shutterstock.com/image-photo/koala-bear-perched-on-tree-260nw-2364588229.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpA4K3Rf--_yXVjMUYtI6zniJjugOb4hOSg&s",
        "https://img-s1.onedio.com/id-57ab39e97027962828cb48fe/rev-0/w-600/h-375/f-jpg/s-a41261646e558fd2abf45da6bce68f30e327853d.jpg",
        "https://image.milimaj.com/i/milliyet/75/0x0/5f2604df5542841108c15025.jpg",
        "https://i.pinimg.com/236x/03/f5/84/03f584b688af038d9c53a977b540d660.jpg"
    ]

    //her butona tıkladığı resim rastgele değişsin
    const change = () =>{
        
    }

  return <>
  q<button onClick={change}>Change</button>
  <img width={200} height={150} src={imageSource} alt='placeholder'/>
  </>
}

export default ImageStateSample