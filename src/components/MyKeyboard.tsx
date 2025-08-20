import * as React from 'react'
import Button from './Button'
import {View, Text} from 'react-native'
import { Styles } from '../style/GlobalStules'
import { mycolors } from '../style/colores'


const MyKeyboard = () => {
    const [primerNumero, setPrimerNumero] = React.useState("");
    const [segundoNumero, setSegundoNumero] = React.useState("");
    const [operacion, setOperacion] = React.useState("");
    const [resultado, setResultado] = React.useState<number | null>(null);


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
     };

     const firstNumberDisplay = () => {
       if (resultado !== null) {
            return <Text style={resultado < 99999 ? [Styles.screenFirstNumber, {color: mycolors.result}] : [Styles.screenFirstNumber, {fontSize: 50, lineHeight:60, color: mycolors.result}]} >{resultado?.toString()}</Text>;
        } 

        if (primerNumero && primerNumero.length < 6) {
            return <Text style={Styles.screenFirstNumber}>{primerNumero}</Text>;
        }

        if (primerNumero === "") {
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        }

        if (primerNumero.length > 5 && primerNumero.length < 8) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70, lineHeight:90}]}>
                    {primerNumero}
                </Text>
            );
        }

        if (primerNumero.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, {fontSize: 50, lineHeight:60}]}>
                    {primerNumero}
                </Text>
            );
        }
     }
    return (
        <View style={Styles.viewBotton}>
            
            <View style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
                >
                <Text style={Styles.screenFirstNumber}>
                    {segundoNumero}
                    <Text style={{color: "purple", fontSize:50, fontWeight:'500'}}>{operacion}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <Button title='C' isGray onPress={limpiar}/>
                <Button title='+/-' isGray onPress={() => handleOperacionPress("+/-")}/>
                <Button title='%' isGray onPress={() => handleOperacionPress("%")}/>
                <Button title='+' isBlue onPress={() => handleOperacionPress("/")}/>
            </View>
            <View style={Styles.row}>
                <Button title='7' isGray onPress={() => handleNumberPress("7")}/>
                <Button title='8' isGray onPress={() => handleNumberPress("8")}/>
                <Button title='9' isGray onPress={() => handleNumberPress("9")}/>
                <Button title='x' isBlue onPress={() => handleOperacionPress("*")}/>
            </View>
            <View style={Styles.row}>
                <Button title='4' isGray onPress={() => handleNumberPress("4")}/>
                <Button title='5' isGray onPress={() => handleNumberPress("5")}/>
                <Button title='6' isGray onPress={() => handleNumberPress("6")}/>
                <Button title='-' isBlue onPress={() => handleOperacionPress("-")}/>
            </View>
            <View style={Styles.row}>
                <Button title='1' isGray onPress={() => handleNumberPress("1")}/>
                <Button title='2' isGray onPress={() => handleNumberPress("2")}/>
                <Button title='3' isGray onPress={() => handleNumberPress("3")}/>
                <Button title='+' isBlue onPress={() => handleOperacionPress("+")}/>
            </View>
            <View style={Styles.row}>
                <Button title='.' isGray onPress={() => handleNumberPress(".")}/>
                <Button title='0' isGray onPress={() => handleNumberPress("0")}/>
                <Button title='del' isGray onPress={() => setPrimerNumero(primerNumero.slice(0, -1))}/>
                <Button title='=' isBlue onPress={() => obtenerResultado()}/>
            </View>
        </View> 
    )
}

export default MyKeyboard