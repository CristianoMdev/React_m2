import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';

import {Container, Typography} from "@material-ui/core"
class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="xs">
        <Typography variant="h4" component="h1" align="center" color="primary">Formulário Cadastro</Typography>
        <FormularioCadastro />
      </Container>
  );
 }
}

export default App;
