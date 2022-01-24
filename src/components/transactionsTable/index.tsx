import { useEffect } from 'react';
import { api } from '../../Services/api';
import {Container} from './styles';

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de sites Web</td>
                        <td className="deposit">R$3000</td>
                        <td>Venda</td>
                        <td>23/11/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1500</td>
                        <td>Venda</td>
                        <td>23/11/2021</td>
                    </tr>
                </tbody>
            </table>
    
        </Container>   
    );
}