import { useState, useEffect } from "react";

const Formulario = () =>{
    const [notaMateriaA, setNotaMateriaA] = useState(0);
    const [notaMateriaB, setNotaMateriaB] = useState(0);
    const [notaMateriaC, setNotaMateriaC] = useState(0);
    const [nome, setNome] = useState('voce');


    //esses useEffect's nada mais sao que analises do ciclo de vida do componente passado nas dependencias, caso as dependeicias
    //estejam vazias, o use effect vai examinar o componente inteiro, sempre que ele eh montado o comportamento padrao sera
    //ativado, e o return somente eh ativado ao ocorrer o unmount. O comportamento do update eh o msm do comportamento do mount
    useEffect(() => {
        //comportamento padrao
        // console.log('o componente iniciou')
        

        //somente ocorre no unmount
        return () => {
            // console.log('o componente finalizou')
        }
    },[])

    useEffect(() => {
        // console.log('o estado do nome mudou')
    },[nome])

    useEffect(() => {
        // console.log('alguma nota foi modificada')
    }, [notaMateriaA, notaMateriaB, notaMateriaC])

    const alteraNome = evento => {
        //console.log(evento.target.value);
        //setNome(evento.target.value);
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        let soma = notaMateriaA + notaMateriaB + notaMateriaC;
        let media = soma/3;

        if(media >=7){
            return(
                <p>Ola, {nome} foi aprovado!</p>
            )
        } else{
            return(
                <p> Ola, {nome} foi repovado :(</p>
            )
        }
    }

    return(
        <form>
            {[1, 2, 3, 4, 5].map(item => (
                <li key={item}>{item}</li>
            ))}
            <input type="text" placeholder="seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Materia A" onChange={({target}) => setNotaMateriaA(parseFloat(target.value))}/>
            <input type="number" placeholder="Nota Materia B" onChange={evento => setNotaMateriaB(parseFloat(evento.target.value))}/>
            <input type="number" placeholder="Nota Materia C" onChange={evento => setNotaMateriaC(parseFloat(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;