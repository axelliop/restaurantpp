import React, { useState } from 'react'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'

import { Link } from 'react-router-dom'
import axios from 'axios';
import menu from './menu.json'
import styles from './MenuCard.module.css'

const MenuCard = ({item}) => {









  
  const [items, setItems] = useState('');

  const addToCart = () => {
    setItems(item.nombre);
  };

  return (
    <div className={styles.container}>
    <li>{item.nombre}
    <div>Bebida: {item.bebida}</div> 
    <div>$ {item.valor}</div>
  <div>{item.descripcion}</div> 

  <Link to={'./detail/' + item.id}>
  <button>Ver detalle</button>
  </Link>
  <button onClick={() => addToCart(items)}>Pedir</button></li>

  <div>{items}</div>
  </div>
  
  )
}

export default MenuCard