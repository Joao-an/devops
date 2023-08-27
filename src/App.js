import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      mensagem: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSenhaChange = (event) => {
    this.setState({ senha: event.target.value });
  };

  handleAcessar = () => {
    const { email, senha } = this.state;
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      this.setState({ mensagem: "Acessado com sucesso!" });
    } else {
      this.setState({ mensagem: "Usuário ou senha incorretos!" });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={this.state.senha}
            onChange={this.handleSenhaChange}
          />
        </div>
        <button onClick={this.handleAcessar}>Acessar</button>
        <p>{this.state.mensagem}</p>
      </div>
    );
  }
}

export default App;
