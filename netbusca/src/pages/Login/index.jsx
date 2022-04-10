import React from "react";
import Header from "../../components/Header/";
import Profile from "../../assets/profile.svg";
import './style.css'
const Login = () => {
  return (
    <React.Fragment>
      <Header text="Contato" />

      <div className="container">
        <form className="container-form">
          <div className="profile">
            <img src={Profile} alt="Icone identificando um perfil" />
            <h1>Login</h1>
          </div>

          <div className="inputs">
            <input type="text" required placeholder="Usuario" />
            <input type="password" required placeholder="Senha" />

            <div className="buttons">
              <button>Logar</button>
              <button>Recuperar Senha</button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
