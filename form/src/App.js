import { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {

  render(){
    return (
      <Fragment>
        <h1>Formulario Cadastro</h1>
        <FormularioCadastro/>
      </Fragment>
  );
 }
}

export default App;
