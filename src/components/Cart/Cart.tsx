import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CartMain,
  CartH1,
  ProductH2,
  QtyH2,
  SubtotalH2,
  HeaderDiv,
  ProductImage,
  TitleAndPriceDiv,
  TitleProductSpiderMan,
  TitleProduct,
  PriceProduct,
  ProductDataDiv,
  QuantityControlButton,
  QuantityContainer,
  QuantityInput,
  QuantityDiv,
  Subtotal,
  StyledTrashButton,
  FooterDiv,
  FinishOrderButton,
  TotalParagraph,
  TotalValueParagraph,
  MobileSubtotalH2
} from '../../styles/CartStyles'
import {
  Container,
  NavBar,
  CartDiv,
  CartLink,
  CartIconsLink,
  CartButton,
  CartLinkAndIconsDiv
} from '../../styles/NavStyles'
import CartImg from '../../assets/Group 2.svg'
import { ReactComponent as PlusIcon } from '../../assets/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/minus.svg'
import { ReactComponent as TrashSVG } from '../../assets/trash.svg'

interface LocationState {
  selectedItems: Array<{ title: string, price: number, image: string }>
}

const Cart: React.FC = () => {
  const cartRef = useRef<HTMLDivElement>(null)
  const history = useHistory()
  const location = useLocation<LocationState>()
  const [selectedItems, setSelectedItems] = useState<
  Array<{ title: string, price: number, image: string }>
  >(location.state?.selectedItems ?? [])

  useEffect(() => {
    const checkAndScrollToTop = (): void => {
      if (selectedItems.length <= 3 && cartRef.current !== null) {
        cartRef.current.scrollTo(0, 0)
      }
    }
    checkAndScrollToTop()
  }, [selectedItems])

  const [quantities, setQuantities] = useState<Record<string, number>>(
    selectedItems.reduce((acc: Record<string, number>, item) => {
      acc[item.title] = 1
      return acc
    }, {})
  )

  const handleQuantityChange = (title: string, newQuantity: number): void => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [title]: newQuantity
    }))
  }

  const handleRemoveItem = (title: string): void => {
    const updatedItems = selectedItems.filter((item) => item.title !== title)
    setSelectedItems(updatedItems)
    if (updatedItems.length === 0) {
      history.push('/EmptyCart')
    }
  }

  const calculateTotal = (): number => {
    let total = 0
    selectedItems.forEach((item) => {
      total += quantities[item.title] * item.price
    })
    return total
  }
  const calculateMainHeight = (): string => {
    const isMobile = window.innerWidth <= 1000
    const itemCount = selectedItems.length

    if (isMobile) {
      if (itemCount === 1) {
        return `${itemCount * 230}px`
      } else if (itemCount === 2) {
        return `${itemCount * 190}px`
      } else {
        return `${3 * 185}px`
      }
    } else {
      return 'auto'
    }
  }

  const calculateMainOverflow = (): 'auto' | 'hidden' => {
    const itemCount = selectedItems.length
    return itemCount > 3 ? 'auto' : 'hidden'
  }

  const handleReturnClick = (): void => {
    history.push('/purchase')
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <NavBar>
        <CartH1
          className={location.pathname === '/cart' ? 'cursor-standard' : ''}
        >
          WeMovies
        </CartH1>
        <CartDiv>
          <CartLinkAndIconsDiv>
            <CartLink>Meu Carrinho</CartLink>
            <CartIconsLink>
              {selectedItems.length === 1
                ? `${selectedItems.length} item`
                : `${selectedItems.length} itens`}
            </CartIconsLink>
          </CartLinkAndIconsDiv>
          <CartButton>
            <img src={CartImg} alt="Carrinho" />
          </CartButton>
        </CartDiv>
      </NavBar>

      <CartMain
        itemCount={selectedItems.length}
        style={{ height: calculateMainHeight(), overflowY: calculateMainOverflow() }}
      >
        <HeaderDiv>
          <ProductH2>PRODUTO</ProductH2>
          <QtyH2>QTD</QtyH2>
          {windowWidth > 1000 && <SubtotalH2>SUBTOTAL</SubtotalH2>}
        </HeaderDiv>
        <div ref={cartRef} style={{ overflowY: calculateMainOverflow(), overflowX: calculateMainOverflow() }}>
          {selectedItems.map((item, index) => (
            <ProductDataDiv key={index}>
              <ProductImage src={item.image} alt={item.title} />
              <QuantityContainer>
                <TitleAndPriceDiv>{item.title === 'Homem Aranha'
                  ? (
                    <TitleProductSpiderMan>{item.title}</TitleProductSpiderMan>
                    )
                  : (
                    <TitleProduct>{item.title}</TitleProduct>
                    )}
                  <PriceProduct>
                    R$ {''}
                    {item.price.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                  </PriceProduct>
                </TitleAndPriceDiv>
                <QuantityDiv>
                  <QuantityControlButton
                    onClick={() => {
                      handleQuantityChange(
                        item.title,
                        Math.max(quantities[item.title] - 1, 1)
                      )
                    }}
                  >
                    <MinusIcon />
                  </QuantityControlButton>
                  <QuantityInput
                    type="text"
                    value={quantities[item.title]}
                    min={1}
                    max={10}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value)
                      if (
                        !isNaN(newQuantity) &&
                        newQuantity >= 1 &&
                        newQuantity <= 10
                      ) {
                        handleQuantityChange(item.title, newQuantity)
                      }
                    }}
                  />
                  <QuantityControlButton
                    onClick={() => {
                      handleQuantityChange(
                        item.title,
                        Math.min(quantities[item.title] + 1, 5)
                      )
                    }}
                  >
                    <PlusIcon />
                  </QuantityControlButton>
                </QuantityDiv>
              </QuantityContainer>
              {windowWidth <= 1000 && (
                <MobileSubtotalH2>SUBTOTAL</MobileSubtotalH2>
              )}
              <Subtotal>
                R$ {''}
                {(
                  Math.max(quantities[item.title], 1) * item.price
                ).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </Subtotal>
              <StyledTrashButton
                onClick={() => {
                  handleRemoveItem(item.title)
                }}
              >
                <TrashSVG />
              </StyledTrashButton>
            </ProductDataDiv>
          ))}
        </div>
        <FooterDiv>
          <FinishOrderButton onClick={handleReturnClick}>
            FINALIZAR PEDIDO
          </FinishOrderButton>
          <TotalParagraph>TOTAL</TotalParagraph>
          <TotalValueParagraph>
            R$ {''}
            {calculateTotal().toLocaleString('pt-BR', {
              minimumFractionDigits: 2
            })}
          </TotalValueParagraph>
        </FooterDiv>
      </CartMain>
    </Container>
  )
}

export default Cart
