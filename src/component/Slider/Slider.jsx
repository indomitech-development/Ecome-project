import React from 'react'

export const Slider = () => {
    const data=[
    "https://images.pexels.com/photos/3806753/pexels-photo-3806753.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8078361/pexels-photo-8078361.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=600",
    ]
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={data[0]} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={data[1]} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={data[2]} alt="Third slide"/>
    </div>
  </div>
</div>
    </div>
  )
}
