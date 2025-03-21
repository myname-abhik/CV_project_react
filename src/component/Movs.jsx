import React from 'react'
import { useEffect ,useState} from 'react'
import Detailed_description from './Detailed_description'
import Dropdown_shadow from './Dropdown_shadow'
import  Styles  from '../Pages_css/Movs.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Movs = () => {
    const [data, SetData] = useState(null);
    const [loading, SetLoading] = useState(true);
    const id =  useParams();
    useEffect(() => {
      const fetchData = async() =>{
        try{
         
          const response = await axios.get(`https://cv-backend-theta.vercel.app/use/insert/${id.id}`)
          SetData(response.data)
          // console.log(response.data);
          // console.log(response.data);
          
          
        }catch(e){
          console.log(e);
          
        }
        finally{
          SetLoading(false)
        }
      }
      if(id){
      fetchData()
      }
      
    },[])
  return (
    <>
        <div className={Styles.Main_containerr}>
            <div className={Styles.Parent_content}>
                {/* <img src={data[0].Poster} alt="image" className={Styles.image}/> */}
                {data?.[0]?.Poster ? (
  <img src={data[0].Poster} alt="image" className={Styles.image} />
) : (
  <p>Loading image...</p>
)}
                
{data?.[0]? (
  <Detailed_description val={data}/>
) : (
  <p>Loading image...</p>
)}
                
                <Dropdown_shadow/>

            </div>
        </div>
    </>
  )
}

export default Movs
