import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

//inicio do display
const initialState = {
  displayValue: '0',// valor padrão inicial do display
  clearDisplay: false,
  operation: null, // setar a operação seja, divisão, etc
  values: [0, 0], //o arrya que vai substituir os núemros que forem digitados
  current : 0, // valor que sera alterado no array
};

export default class App extends Component {

  //inicial o displlay com a constatnte initialState, com tudo padrão
  state = { ...initialState }

  //adição do número no display pelo oq foi digitado
  addDigit = n => {
    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay
      
    //validação de apenas um '.' na calculadora
    if (n === '.' && !clearDisplay 
      && this.state.displayValue.includes('.')) {
      return
    }
    
    // Troca o valor inicial para oq foi digitado, se não fica 0 alguma coisa

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay:false})

    if (n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values [ this.state.current ] = newValue //seta o novo valor no array dos values
      this.setState({ values })
    }
      
  }

  //limpa o display voltando para o inicial
  clear = () => {
    this.setState ({ displayValue: '0' })
  }

  //Operacações feitas 
  setOperation = operation => {
    if (this.state.current === 0){
      this.setState({ operation, current: 1, clearDisplay: true })
    }else{
      const equals = operation === '='
      const values = [...this.state.values]
      try{
        values[0] =
          eval(`${values[0]} ${this.state.operation} ${values[1]}`) //pega o indice 0,seta a operation e dps pega o indice 1 do array
      } catch (e) {
        values[0] = this.state.values[0]
      }
      values[1] = 0
      //setando um novo estado "incial" do display
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })
    }

  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        
        {/*Add o display na tela principal*/}
        <Display value = {this.state.displayValue} /> 

        <SafeAreaView style={styles.buttons}>

          <Button label = 'AC'triple onClick={this.clear} />
          <Button label = '/' operation onClick={this.setOperation} />
          <Button label = '7' onClick={this.addDigit} />
          <Button label = '8' onClick={this.addDigit}/>
          <Button label = '9' onClick={this.addDigit}/>
          <Button label = '*' operation onClick={()=>this.setOperation} />
          <Button label = '4' onClick={this.addDigit}/>
          <Button label = '5' onClick={this.addDigit}/>
          <Button label = '6' onClick={this.addDigit}/>
          <Button label = '-' operation onClick={()=>this.setOperation} />
          <Button label = '1' onClick={this.addDigit}/>
          <Button label = '2' onClick={this.addDigit}/>
          <Button label = '3' onClick={this.addDigit}/>
          <Button label = '+' operation onClick={this.setOperation} />
          <Button label = '0' double onClick={this.addDigit} />
          <Button label = '.' onClick={this.addDigit}/>
          <Button label = '=' operation onClick={this.setOperation} />
          
        </SafeAreaView>

        <StatusBar default="auto" />
      </SafeAreaView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap:"wrap"
  }
});
