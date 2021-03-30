import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';
import {Container, Typography} from "@material-ui/core";
import {validarCPF, validarSenha} from "./models/cadastro";


class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="xs">
        <Typography variant="h4" component="h1" align="center" color="primary">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha}} />
      </Container>
  );
 }
}
function aoEnviarForm(dados){
  console.log(dados)
}



export default App;
