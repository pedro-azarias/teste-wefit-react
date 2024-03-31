import styled from 'styled-components'

export const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 970px;
  height: 526px;
  left: 275px;
  bottom: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1000px) {
    display: block;
    height: 100vh;
    margin-top: 65px;
    width: 90%;
    max-width: 365px;
    left: 50%;
    transform: translate(
      -50%,
      -50%
    );
  }
  @media screen and (max-width: 410px) {
    MainDiv {
      left: 49%;
    }
  }
  @media screen and (max-width: 402px) {
    left: 48%;
  }
  @media screen and (max-width: 392px) {
    left: 47%;
  }
  @media screen and (max-width: 382px) {
    left: 45%;
  }
`

export const MovieDiv = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 343px;
    height: 305px;
    border-radius: 4px;
    display: block;
    margin-bottom: 0px;
  }
`

export const TopMoviesDiv = styled.div`
  width: 960px;
  height: 305px;
  display: grid;
  grid-template-columns: 309.33px 309.33px 309.33px;
  gap: 16px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 275px;
    margin-left: 17px;
    margin-top: 0px;
    margin-bottom: 10px;
    &:first-of-type{
      margin-top: 40px;
    }
  }
`

export const BottomMoviesDiv = styled.div`
  width: 960px;
  height: 305px;
  display: grid;
  grid-template-columns: 309.33px 309.33px 309.33px;
  gap: 16px;
  
  @media screen and (max-width: 1000px) {
    
    display: flex;
    flex-direction: column;
    width: 275px;
    margin-left: 17px;
    margin-top: 658px;
    height: 1100px;
  }
`

export const MovieImg = styled.img`
  width: 129px;
  height: 152.3px;
  margin-top: 10px;
  @media screen and (max-width: 1000px) {
    left: 28%;
    position: relative;
    width: 147px;
    height: 188px;
    margin-bottom: -9px;
  }
`

export const MovieTitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
  height: 2px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`

export const MoviePrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 2px;
`

export const AddToCartButton = styled.button`
  background: #009edd;
  border-radius: 4px;
  width: 287.33px;
  height: 40px;
  gap: 12px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  box-sizing: border-box;
  line-height: 16.34px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 28px;
    position: relative;
    margin-top: -10px;
  }
`

export const CartIcon = styled.img`
  width: 11.42px;
  height: 11.9px;
`

export const AddedItemText = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`

export const CartIconAndValueDiv = styled.div`
  width: 24.93px;
  height: 17px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`

export const LoadingIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%); 
`
