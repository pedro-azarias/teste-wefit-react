import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  EmptyMainDiv,
  EmptyH1,
  EmptyReturnButton
} from '../../styles/EmptyPageStyles'
import {
  Container,
  NavBar,
  H1,
  CartDiv,
  CartLink,
  CartIconsLink,
  CartButton,
  CartLinkAndIconsDiv
} from '../../styles/NavStyles'
import EmptyCartIcon from '../../assets/EmptyCartIcon.svg'
import CartImg from '../../assets/Group 2.svg'

const EmptyCart: React.FC = () => {
  const history = useHistory()

  const handleReturnClick = (): void => {
    history.push('/')
  }

  return (
    <Container>
      <NavBar>
        <H1 onClick={handleReturnClick}>WeMovies</H1>
        <CartDiv>
          <CartLinkAndIconsDiv>
            <CartLink>Meu Carrinho</CartLink>
            <CartIconsLink>0 itens</CartIconsLink>
          </CartLinkAndIconsDiv>
          <CartButton>
            <img src={CartImg} />
          </CartButton>
        </CartDiv>
      </NavBar>
      <EmptyMainDiv>
        <EmptyH1>
          <span style={{ fontWeight: '700' }}>Parece que não há</span> nada por
          aqui :(
        </EmptyH1>
        <img src={EmptyCartIcon} />
        <EmptyReturnButton onClick={handleReturnClick}>
          Recarregar página
        </EmptyReturnButton>
      </EmptyMainDiv>
    </Container>
  )
}

export default EmptyCart
