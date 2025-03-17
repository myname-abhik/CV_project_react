import React from 'react'

const Movies = ({image,title,features}) => {
  return <>
  
  <div className='second_swiper-slide'>
    <div class="Movies">
  <div class="Movie_image"><img src={image}/></div>
  <div class="Movie_info">
    <div class="Movie_name">{title}</div>
    <div class="Features">{features}</div>
  </div>
</div>
</div>
  </>
}

export default Movies