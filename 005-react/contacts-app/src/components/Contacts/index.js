import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';
import  "./style.css";
function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname:'Hatice',
            phone_number: "2423242"
        },
        {
            fullname:'Ayşe',
            phone_number: "897897"
        },
        {
            fullname:'Defne',
            phone_number: "43663453"
        },
    ]);
      
    useEffect(()=>{
      console.log(contacts);
    },[contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
           <List contacts={contacts}/> 
           <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
