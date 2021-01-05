import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

export default class App extends Component {

  //starta o display com zero
  state = {displayValue: '0'}

  //adição do número no display pelo oq foi digitado
  addDigit = n => {
    this.setState({ displayValue: n })
  }

  //limpa o display voltando para o inicial
  clear = () => {
    this.setState({ displayValue: '0' })
  }

  //Operacações feitas 
  setOperation = operation => {

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
