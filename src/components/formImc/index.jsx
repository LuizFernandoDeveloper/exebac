import { useState,useEffect } from "react";
function Imc(){
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let [imc, setImc] = useState(0);

    useEffect(()=>{
        let result = Math.round((peso /(altura * altura)))
        setImc((isNaN(result)? 0 : result))
    }, [altura, peso]);

    return(
        <main className="container">
            <form  className="form">
                <div className="col">
                    <div className="row d-flex text-center">
                        <div className="col">
                            <label>Altura</label>
                            <input  placeholder="altura" type="number" className="form-control" onChange={event => setAltura(event.target.value)}/>
                        </div>
                        <div className="col">
                            <label>Peso</label>
                            <input  placeholder="Peso" type="number" className="form-control" onChange={event => setPeso(event.target.value)} />
                        </div>
                        <div className="col">
                            <label>IMC</label>
                            <input  type="text" disabled className="form-control" value={imc}/>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Imc