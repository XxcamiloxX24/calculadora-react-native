import * as React from 'react'
import Button from './Button'
import {View, Text} from 'react-native'
import { Styles } from '../style/GlobalStules'
import { mycolors } from '../style/colores'


const MyKeyboard = () => {
    const [primerNumero, setPrimerNumero] = React.useState("");
    const [segundoNumero, setSegundoNumero] = React.useState("");
    const [operacion, setOperacion] = React.useState("");
    const [resultado, setResultado] = React.useState<Number | null>(null);


    const handleNumberPress = (buttonValue: string) => {
        if (primerNumero.length < 10) {
            setPrimerNumero(primerNumero + buttonValue)
        }
    };

    const handleOperacionPress = (buttonValue: string)=>{
        setOperacion(buttonValue);
        setSegundoNumero(primerNumero);
        setPrimerNumero("");
    }

    const limpiar = () => {
        setPrimerNumero("");
        setSegundoNumero("");
        setOperacion("");
        setResultado(null);
    };

     const obtenerResultado = () => {
        switch (operacion) {
            case "+":
                limpiar();
                setResultado(parseInt(segundoNumero) + parseInt(primerNumero));
                break;
            case "-":
                limpiar();
                setResultado(parseInt(segundoNumero) - parseInt(primerNumero));
                break;
            case "*":
                limpiar();
                setResultado(parseInt(segundoNumero) * parseInt(primerNumero));
                break;
            case "/":
                limpiar();
                setResultado(parseInt(segundoNumero) / parseInt(primerNumero));
                break;
            default:
                limpiar();
                setResultado(0)
                break;
        }
     }
    return (
    <>
        <View style={Styles.row}>
            <Button title='C' isGray onPress={limpiar}/>
            <Button title='+/-' isGray onPress={() => handleOperacionPress("+/-")}/>
            <Button title='%' isGray onPress={() => handleOperacionPress("%")}/>
            <Button title='+' isBlue onPress={() => handleOperacionPress("/")}/>
        </View>
        <View style={Styles.row}>
            <Button title='7' onPress={() => handleNumberPress("7")}/>
            <Button title='8' onPress={() => handleNumberPress("8")}/>
            <Button title='9' onPress={() => handleNumberPress("9")}/>
            <Button title='x' isBlue onPress={() => handleOperacionPress("*")}/>
        </View>
        <View style={Styles.row}>
            <Button title='4' onPress={() => handleNumberPress("4")}/>
            <Button title='5' onPress={() => handleNumberPress("5")}/>
            <Button title='6' onPress={() => handleNumberPress("6")}/>
            <Button title='-' isBlue onPress={() => handleOperacionPress("-")}/>
        </View>
        <View style={Styles.row}>
            <Button title='1' onPress={() => handleNumberPress("1")}/>
            <Button title='2' onPress={() => handleNumberPress("2")}/>
            <Button title='3' onPress={() => handleNumberPress("3")}/>
            <Button title='+' isBlue onPress={() => handleOperacionPress("+")}/>
        </View>
        <View style={Styles.row}>
            <Button title='.' onPress={() => handleNumberPress(".")}/>
            <Button title='0' onPress={() => handleNumberPress("0")}/>
            <Button title='del' onPress={() => setPrimerNumero(primerNumero.slice(0, -1))}/>
            <Button title='=' isBlue onPress={() => obtenerResultado()}/>
        </View>
    </> 
  )
}

export default MyKeyboard