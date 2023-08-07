import React, { Component } from 'react';
import './estilo.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frase = [
      'A persistência é o caminho do êxito.',
      'O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.',
      'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
      'Só existe um êxito: a capacidade de levar a vida que se quer.',
      'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.',
      'A coragem não é ausência do medo; é a persistência apesar do medo.',
      'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
      'O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.'];

  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length);
    state.textoFrase = '"' + this.frase[numeroAleatorio] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='img' />
        <Botão nome='Abri biscoito' acaoBtn={this.quebraBiscoito} />
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botão extends Component {
  render() {
    return (
      <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
    );
  }
}

export default App;