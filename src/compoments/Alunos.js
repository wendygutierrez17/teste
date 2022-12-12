import React from "react"
import {Table} from "react-bootstrap";

class Alunos extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            alunos : []
        }
    }

    componentDidMount(){
fetch("https://localhost:5001/api/alunos")
.then(resposta=> resposta.json())
.then(dados=>{
    this.setState({alunos : dados})
})
    }

    componentWillUnmount(){
        
    }
    render(){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.alunos.map((aluno) =>
                        <tr>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>
                        <td>Atualizar Excluir</td>
                    </tr>
                        )
                    }                
                </tbody>
            </Table>
        )
        }
}

export default Alunos;