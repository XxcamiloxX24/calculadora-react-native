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
        if(resultado !== null){
            
            if (primerNumero.length < 10) {
                setPrimerNumero(resultado.toString() + buttonValue)
                setResultado(null)
            }
            if (segundoNumero == null || segundoNumero === "") {
                setPrimerNumero(resultado.toString() + buttonValue)
                setResultado(null)
            }
        } else {
            if (primerNumero.length < 10) {
                setPrimerNumero(primerNumero + buttonValue)
            }
            if (segundoNumero == null || segundoNumero === "") {
                setPrimerNumero(primerNumero + buttonValue)
            }
        }
    };

    const handleOperacionPress = (buttonValue: string)=>{
            // Si ya hay un resultado, se usa como segundoNumero
        if (resultado !== null) {
            setSegundoNumero(resultado.toString());
            setResultado(null); // limpiamos el resultado mostrado
            setPrimerNumero(""); // limpiamos para que se ingrese un nuevo número
        } else {
            // Si no hay resultado, se toma lo que ya estaba en pantalla
            setSegundoNumero(primerNumero);
            setPrimerNumero("");
        }

        setOperacion(buttonValue);
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
                <Button title='C' onPress={limpiar}/>
                <Button title='+/-' onPress={() => handleOperacionPress("+/-")}/>
                <Button title='%' onPress={() => handleOperacionPress("%")}/>
                <Button title='/' isBlue onPress={() => handleOperacionPress("/")}/>
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
        </View> 
    )
}

export default MyKeyboard