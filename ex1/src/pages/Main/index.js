import './style.css';
import { useState } from 'react';
import eye from '../../assets/close-eye.svg';
import eyeOpen from '../../assets/open-eye.svg';

function Main() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      setError(console.log('Informe os dados corretamente!'))
      return
    }

      setSuccess(console.log(`Bem-vindo(a) ${email}`))
    
    setEmail('');
    setPassword('');
    setError('');

  }

 
  
  return (
   
      <div className='container'>
        <form
         className='form'
         onSubmit={(event) => handleSubmit(event)}>
            <h2>Login</h2>
            <input
              className='email'
              type='e-mail'
              placeholder='E-mail'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
        
        <input
          className='senha'
          type={showPassword ? 'text' : 'password'}
          placeholder='Senha'
          value={password}
          onChange={(event) => setPassword(event.target.value)}>
          
        </input>
        <img
          className='closeEye'
          src={showPassword ? eyeOpen : eye}
          alt='mostrar senha'
          name='show-password'
          onClick={() => setShowPassword(!showPassword)}
         
        />
                     
        <button
          type='submit'>
          Login
          
        </button>
        
        </form>
      </div>  
  );
}


export default Main;
