import React, {useState} from 'react';
import {TextField, Button, Switch, FormControlLabel} from "@material-ui/core";


function FormularioCadastro() {
const [nome, setNome] = useState("");
const [sobrenome, setSobrenome] = useState("");
/*const [CPF, setCPF] = useState("");*/

  return (
    <form  
      onSubmit={(event) => {
      event.preventDefault();
      console.log(nome, sobrenome);}}>

       <TextField
       value={nome}
       onChange={(event) => {
          let tmpNome = event.target.value;
          if (tmpNome.length >=3){
            tmpNome = tmpNome.substr(0,3);
          }      
          setNome(tmpNome);
        }}

        id="nome" 
        label="Nome" 
        variant="outlined"  
        margin="normal"
        fullWidth 
         />

       <TextField 
        value={sobrenome}
        onChange={(event) => { 
        setSobrenome(event.target.value);
        } 
       }
       id="sobrenome" 
       label="Sobrenome" 
       variant="outlined"  
       margin="normal"
       fullWidth 
        />

       <TextField 
        value={CPF}
       /* onChange={(event) => { 
        setCPF(event.target.value);
        if(nome.length >=3){
           setCPF(CPF.substr(0,3));
        }
       }}*/
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
