import React from 'react'
import  Styles  from '../Pages_css/Movs.module.css'
import 'material-icons/iconfont/material-icons.css';

const Detailed_description = () => {
  return (
    <>
        <div className={Styles.Detailed_desc}>
                    <div className={Styles.Title}>Spirited Away</div>
                    <div className={Styles.Genre}>2001|13+|Language : Japanese</div>
                    <div className={Styles.Desc}>
                        <img src='https://res.cloudinary.com/dfkhg7gkp/image/upload/v1742546894/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc_._V1_FMjpg_UX1000__t68iiw.jpg'className={Styles.image_2}/>
                        <div className={Styles.Dir_cast_desc_button}>
                           
                            <div className={Styles.Dir_name}>Dir. Hayao Miazayaki</div>
                            <div className={Styles.Cast_name}>Cast : Rumi Hiragi ,Miyu Irino ,Mari Natsuki</div>
                            <div className={Styles.Movie_desc}>During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.</div>
                            <div className={Styles.buttons}>
                                <div className={Styles.Play_now}><i className="material-icons right_arrow">play_arrow</i>Play now</div>
                                <div className={Styles.Watch_later}>Watch Trailer</div>
                            </div>
                        </div>
                        <div className={Styles.Imdb_rating}>8.6</div>
                    </div>
                </div>
    </>
  )
}

export default Detailed_description