import React from "react";
import Gallery from 'react-photo-gallery'
const photos = [
    {
      src: 'https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364735/wit/50477400_10156517511881281_4236157524291616768_o.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ];
  
const Gallery1 = () => (

<Gallery photos={photos} />
)
 

export default Gallery1