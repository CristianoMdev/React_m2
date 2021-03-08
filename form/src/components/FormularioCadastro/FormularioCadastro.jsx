import React from 'react';
import {TextField, Button, Switch, FormControlLabel} from "@material-ui/core";


function FormularioCadastro() {
  return (
    <form>
       <TextField
        id="Nome" 
        label="Nome" 
        variant="outlined"  
        margin="normal"
        fullWidth 
         />

       <TextField 
       id="Sobrenome" 
       label="Sobrenome" 
       variant="outlined"  
       margin="normal"
       fullWidth 
        />

       <TextField 
       id="CPF" 
       label="CPF" 
       variant="outlined"  
       margin="normal"
       fullWidth 
        />

       <FormControlLabel 
       label="Promoções" 
       control={<Switch 
                    name="Promoções" 
                    defaultChecked 
                    color="primary"/>}/>

       <FormControlLabel 
       label="Novidades" 
       control={<Switch 
                    name="Novidades" 
                    defaultChecked 
                    color="primary"/>}/>
       
              
      <Button 
      type="submit"
      variant="contained" 
      color="primary"
      fullWidth>
        Cadastrar
      </Button>
     
    </form>
  );
}

export default FormularioCadastro;
