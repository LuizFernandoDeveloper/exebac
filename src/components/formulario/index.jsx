import { useState,useEffect } from "react";

const Formulario = (props) =>{
    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, setNome] = useState('')

    useEffect(()=>{
        console.log('inicio do componente ');
        

        return () =>{
            console.log('finalizou');
        }

    }, [props]);

    useEffect(()=>{
        console.log(' mudous o estado')
    }, [nome, materiaA, materiaB]);

    function resultado(){
        let soma  = materiaA + materiaB + materiaC;
        let media = soma / 3;

        if(media >= 7){
            return(
                <p>O aluno {nome} foi aprovado</p>
            )
        }
        else{
            return(
                <p>Aluno {nome} não foi aprovado</p>
            )
        }
    }

    return(
        <form>
            {[1,2,3,4,5,6,7,8].map(item => (
            <>
                <li key={item} >{item}</li>
            </>
            ))}
            <input type="text"    placeholder="Digite seu nome: "  onChange={event => setNome(event.target.value)}/> <br />
            <input type="number"  placeholder="nota matéria A" onChange={event => setMateriaA(parseInt(event.target.value))}/><br/>
            <input type="number"  placeholder="nota matéria B" onChange={event => setMateriaB(parseInt(event.target.value))}/><br/>
            <input type="number"  placeholder="nota matéria C" onChange={event => setMateriaC(parseInt(event.target.value))}/><br/>
            {resultado()}
            {materiaA}<br/>
            {materiaB}<br/>
            {materiaC}<br/>
        </form>
    );
}

export default Formulario