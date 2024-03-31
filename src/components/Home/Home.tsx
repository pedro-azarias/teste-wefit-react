import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  MainDiv,
  TopMoviesDiv,
  BottomMoviesDiv,
  MovieDiv,
  MovieImg,
  MovieTitle,
  MoviePrice,
  AddToCartButton,
  CartIconAndValueDiv,
  LoadingIcon
} from '../../styles/HomeStyles'
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
import CartImg from '../../assets/Group 2.svg'
import AddToCartIcon from '../../assets/AddToCartIcon.svg'
import SpinnerIcon from '../../assets/load-spinner.svg'

interface Movie {
  id: number
  title: string
  image: string
  price: number
}

const Home: React.FC = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [buttonColors, setButtonColors] = useState<string[]>(Array(6).fill('#099EDD'))
  const [itemsAdded, setItemsAdded] = useState<number[]>(Array(6).fill(0))
  const [totalItems, setTotalItems] = useState<number>(0)

  const history = useHistory()

  useEffect(() => {
    const fetchMovies = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://wefit-movies.vercel.app/api/movies'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }
        const data = await response.json()

        const sortedProducts = [
          data.products.find((product: any) => product.id === 1),
          data.products.find((product: any) => product.id === 3),
          data.products.find((product: any) => product.id === 2),
          data.products.find((product: any) => product.id === 5),
          data.products.find((product: any) => product.id === 6),
          data.products.find((product: any) => product.id === 4)
        ]

        const moviesWithIds = sortedProducts.map((product: any, index: number) => ({
          ...product,
          id: index + 1
        }))
        setMovies(moviesWithIds)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching movies:', error)
        setLoading(false)
      }
    }

    fetchMovies().catch(error => {
      console.error('Error in fetchMovies:', error)
    })
  }, [])

  const changeColorAndIncrement = (index: number): void => {
    setButtonColors(prevColors => {
      const newColors = [...prevColors]
      newColors[index] = prevColors[index] === '#099EDD' ? '#039B00' : '#099EDD'
      return newColors
    })

    setItemsAdded(prevItems => {
      const newItems = [...prevItems]
      const updatedItems = newItems.map((item, i) => (i === index ? (item === 0 ? 1 : 0) : item))
      const newTotalItems = updatedItems.reduce((acc, curr) => acc + curr, 0)
      setTotalItems(newTotalItems)
      return updatedItems
    })
  }

  const handleCartButtonClick = (): void => {
    const selectedItems = movies.filter((movie, index) => itemsAdded[index] > 0)
    if (selectedItems.length > 0) {
      history.push({
        pathname: '/cart',
        state: { selectedItems }
      })
    } else {
      history.push('/emptycart')
    }
  }

  return (
    <Container>
      <NavBar>
        <H1>WeMovies</H1>
        <CartDiv onClick={handleCartButtonClick}>
          <CartLinkAndIconsDiv>
            <CartLink onClick={handleCartButtonClick}>Meu Carrinho</CartLink>
            <CartIconsLink>
              {totalItems === 1 ? `${totalItems} item` : `${totalItems} itens`}
            </CartIconsLink>{' '}
          </CartLinkAndIconsDiv>
          <CartButton onClick={handleCartButtonClick}>
            <img src={CartImg} alt="Carrinho" />
          </CartButton>
        </CartDiv>
      </NavBar>

      {loading
        ? (
        <LoadingIcon src={SpinnerIcon} alt="Loading..." />
          )
        : (
        <MainDiv>
          <TopMoviesDiv>
            {movies.slice(0, 3).map((movie, index) => (
              <MovieDiv key={index}>
                <MovieImg src={movie.image} alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
                <MoviePrice>
                R$ {' '}
                  {movie.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2
                  })}
                </MoviePrice>
                <AddToCartButton
                  style={{ backgroundColor: buttonColors[index] }}
                  onClick={() => {
                    changeColorAndIncrement(index)
                  }}
                >
                  <CartIconAndValueDiv>
                    <img src={AddToCartIcon} alt="Ícone de carrinho" />
                    <span style={{ marginRight: '5px' }}>{itemsAdded[index]}</span>
                  </CartIconAndValueDiv>
                  ADICIONAR AO CARRINHO
                </AddToCartButton>
              </MovieDiv>
            ))}
          </TopMoviesDiv>

          <BottomMoviesDiv>
            {movies.slice(3, 6).map((movie, index) => (
              <MovieDiv key={index}>
                <MovieImg src={movie.image} alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
                <MoviePrice>
                  R$  {' '}
                  {movie.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2
                  })}
                </MoviePrice>
                <AddToCartButton
                  style={{ backgroundColor: buttonColors[index + 3] }}
                  onClick={() => {
                    changeColorAndIncrement(index + 3)
                  }}
                >
                  <CartIconAndValueDiv>
                    <img src={AddToCartIcon} alt="Ícone de carrinho" />
                    <span style={{ marginRight: '5px' }}>{itemsAdded[index + 3]}</span>
                  </CartIconAndValueDiv>
                  ADICIONAR AO CARRINHO
                </AddToCartButton>
              </MovieDiv>
            ))}
          </BottomMoviesDiv>
        </MainDiv>
          )}
    </Container>
  )
}

export default Home
