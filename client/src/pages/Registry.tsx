import { useState } from 'react';
import '../css/Registry.css';

const Registry = () => {
  const [name, setName] = useState('')
  const [password, setPassWord] = useState('')
  const [email, setEmail] = useState('')

 const  HandleSubmit = () => {
   // hadle to-do
  const userSbmit = {
    name,
    email,
    password
  }
}
  
  return(
    <>
    <div className="registry">
      <div id='registry_background'/>
      <header className="registry_header">MEMORIZE</header>
      <main className="registry_main">
        <form className='registry_main_form' >
          <input type="name" className="registry_main_input" placeholder="Nome" 
            onChange={event => setName(event.target.value)} 
          />
          <input type="email" className="registry_main_input" placeholder="Email"
            onChange={event => setEmail(event.target.value)}
          />
          <input type="password" className="registry_main_input" placeholder="Senha"
            onChange={event => setPassWord(event.target.value)}
          />
          <button className="registry_main_submit" onClick={HandleSubmit}>
            Criar Conta
          </button>
        </form>
      </main>
    </div>
    </>
  )
}

export default Registry;