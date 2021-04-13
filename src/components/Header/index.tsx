import logoImg from "../../../src/assets/logo.svg"
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}


export function Header ({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo"></img>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
        </Content>
    </Container>
  )
}