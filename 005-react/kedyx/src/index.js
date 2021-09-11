import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  const [type, setType] = useState("primary");

  useEffect(() =>{
    const value = props.type;
   

    const btn = document.getElementsByClassName("kedyx")[0];
    
    btn.classList.add(value);
    setType(value);
  }, [type])


  return <button {...props}>{props.text}</button>
}
