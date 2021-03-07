import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function FormularioCadastro() {
  return (
    <form>
       <TextField id="Nome" label="Nome" variant="outlined" fullWidth />
       <TextField id="Sobrenome" label="Sobrenome" variant="outlined" fullWidth />
       <TextField id="Cpf" label="Cpf" variant="outlined" fullWidth />

        <label>Promoções</label>       
        <input type="checkbox"/>
        <label>Novidades</label>   
        <input type="checkbox"/>
              
      <Button variant="contained" color="primary" type="submit" fullWidth>Entrar</Button>
     
    </form>
  );
}

export default FormularioCadastro;
