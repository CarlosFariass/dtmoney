import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/botao-fechar.svg'
import incomeImg from '../../assets/entrada.svg'
import outCome from '../../assets/botao-saida.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionsContext);

 const [title, setTitle] = useState('');
 const [amount, setAmount] = useState(0);
 const [category, setCategory] = useState('');
  const [type, setType] = useState ('deposit');

  function handleCreateNewTransactionForm(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      category,
      type,
    })
  }

  return (
      <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="overlay-modal-overlay"
          className="react-modal-content"
      >
        <button
          type="button" 
          onClick={onRequestClose} 
          className="modal-close"
          >
            <img src={closeImg} alt="Fechar modal"></img>
        </button>
        <Container onSubmit={handleCreateNewTransactionForm}>
        <h2>Cadastrar transação</h2>

          <input placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
          >
          </input>
          <input placeholder="Valor" 
              type="number"
              value={amount}
              onChange={event => setAmount(Number(event.target.value))}
          >
          </input>

          <TransactionTypeContainer>  
            <RadioBox type="button" 
                onClick={() => { setType('deposit'); } }
                isActive={type === 'deposit'}
                activeColor='green'
            >
                <img src={incomeImg} alt="Entrada"></img>
                <span>Entrada</span>
            </RadioBox>

            <RadioBox type="button"
              onClick={() => { setType('withdraw'); }}
              isActive={type === 'withdraw'}
              activeColor='red'
            >
              <img src={outCome} alt="Saída"></img>
              <span>Saída</span>
            </RadioBox>


          </TransactionTypeContainer>

          <input placeholder="Categoria" 
              value={category}
              onChange={event => setCategory(event.target.value)}
          >
          </input>


          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  )
}