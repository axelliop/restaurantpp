import React, { useEffect, useState } from 'react'

import menu from './menu.json'
import {useParams} from 'react-router-dom';

const DetailApp = () => {

      //--- USEPARAMS! 
  const {menuId} = {useParams}

    const [detail, setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {


  const detailing = JSON.stringify(menu)
    setDetail("/detail/" + menuId);
    

  
}, [menuId])

    



    

  return (
    <div>
        <p>{detail}</p>

    </div>
        
  )
}

export default DetailApp