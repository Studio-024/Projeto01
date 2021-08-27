import '../css/Login.css'

const Login = () => {

  return(
    <div className="login">
      <div id="login_background"/>
      <header className="login_header">MEMORIZE</header>
      <main className="login_main">
       <form className="login_main_form">
          <input type="email" placeholder="Email" className="login_main_form_input"/>
          <input type="password" placeholder="Senha" className="login_main_form_input"/>
          <button className="login_main_form_submit">Entrar</button>
        </form>
       <span id="login_main_createAccont">Criar Conta</span>
      </main>
    </div>

)
}

export default Login;