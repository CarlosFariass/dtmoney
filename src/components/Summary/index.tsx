import React, { useContext} from 'react'
import { Container } from "./styles"
import incomeImg from '../../../src/assets/entrada.svg'
import outComeImg from '../../../src/assets/botao-saida.svg'
import closeImg from '../../../src/assets/botao-fechar.svg'
import { TransactionsContext } from '../../TransactionsContext'


export function Summary () {
  const data = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={incomeImg}  alt="Entrada" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg}  alt="Saídas"></img>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div className="background-total">
        <header>
          <p>Fechar</p>
          <img src={closeImg}  alt="Fechar"></img>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
    </Container>
)
}


