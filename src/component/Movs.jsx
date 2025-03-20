import React from 'react'
import { useEffect } from 'react'
import Detailed_description from './Detailed_description'
import '../Pages_css/Movs.css'
import Dropdown_shadow from './Dropdown_shadow'

const Movs = () => {
    
  return (
    <>
        <div className='Main_containerr'>
            <div className='Parent_content'>
                <img src='https://res.cloudinary.com/dfkhg7gkp/image/upload/v1742415406/dfcm8mifg90iqmehoatq.jpg' className='image'/>
                <Dropdown_shadow/>
                <Detailed_description/>

            </div>
        </div>
    </>
  )
}

export default Movs