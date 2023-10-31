import { useState } from "react"

export default function Login(){

    const [usuario, setUsuario] = useState[{
        email: "",
        password: ""
    }]

    const handleChange = async(e)=>{
        const{name, value} = e.target;
        await setUsuario({...usuario, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        let user;
        try {
            const response = await fetch("http://localhost:5000/usuarios");
            if(response.ok){
                console.log(response.json)
            }
        }catch(error){
            console.log(error)
        }

    }

    return(
        <div>
            <h1>LOGIN - Informações do usuario</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados de acesso:</legend>
                        <div>
                            <label htmlFor="idEmail">Email</label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite o seu Email" value={usuario.email} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha</label>
                            <input type="password" nome="senha" id="idSenha" placeholder="Digite sua senha" value={usuario.senha} onChange={handleChange}/>
                        </div>
                        <div>
                            <button>Entrar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}