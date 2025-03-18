import React from 'react'
import '../Pages_css/Home.css'
const Crousal = ({ image, ele, Description , genre}) => {
    return (
      <>
        <div className="swiper-slide">
          <img src={image}/>
        <div className="crousal-content">
          <div className="Movies">
            <p>{ele}</p>
          </div>
          <div className="Features">
            <div className="Line"></div>
            <div className="Genre">{genre}</div>
              
          
          </div>
          <div className="Description">
            {Description}
          </div>
          <div className="Description">
            <div className="Play">
              <div className="Child_play">
                <i className="material-icons Child_arrow">play_arrow</i> Play Now
              </div>
            </div>
            <div className="Add-to-list">Add to List</div>
          </div>
        </div>
        <div className="Down-shadow"></div>
        </div>
      </>
    );
  };
  
  export default Crousal;
  