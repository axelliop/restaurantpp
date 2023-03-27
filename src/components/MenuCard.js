import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import styles from './MenuCard.module.css'

const MenuCard = ({item}) => {


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJp-pLH2rueNZ2KN1W5dXsjCqX-52Dfr4",
  authDomain: "restaurantpp2-f247e.firebaseapp.com",
  projectId: "restaurantpp2-f247e",
  storageBucket: "restaurantpp2-f247e.appspot.com",
  messagingSenderId: "1030418475225",
  appId: "1:1030418475225:web:de12f2b94a238ba16736c8",
  measurementId: "G-TZ4Q16C241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const [product, setProduct] = useState({})



useEffect(() => { 
    



  
getProduct()

}, [])

const getProduct = () => {
    const db = getFirestore()
    const productsCollection = collection(db, 'menus')
    const docRef = doc(productsCollection)
    getDoc( docRef ).then(res => {
        console.log(res.data() )
        setProduct(res.data())

    })
}






  
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