import { Typography, Stepper, Step, StepLabel  } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validacoes}) {
const [etapaAtual, setEtapaAtual ] = useState(0);
const [dadosColetados, setDados] = useState({});

useEffect(() =>{
  if(etapaAtual === formularios.length){
    aoEnviar(dadosColetados)
  }
})

const formularios = [
  <DadosUsuario aoEnviar = {coletarDados} validacoes={validacoes} />,
  <DadosPessoais  aoEnviar = {coletarDados} validacoes={validacoes}/>,
  <DadosEntrega aoEnviar = {coletarDados} validacoes={validacoes}/>,
  <Typography variant="h5" align="center" color="primary">Obrigado por se cadastrar!</Typography>
];

function coletarDados(dados){
  setDados({...dadosColetados, ...dados});
  proximo();
}
function proximo(){
  setEtapaAtual(etapaAtual+1)
}

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  { formularios[etapaAtual]} </>;
}

export default FormularioCadastro;



 