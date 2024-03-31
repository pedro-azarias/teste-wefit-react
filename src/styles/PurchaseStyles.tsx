import styled from 'styled-components'

export const PurchaseMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 970px;
  height: 574px;
  left: 275px;
  bottom: 150px;
  border-radius: 4px;
  background-color: #ffffff;
  top: 114px;
  position: absolute;
  top: 52.7%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1000px) {
    width: 342px;
    height: 607.8px;
    bottom: 203px;
    margin-top: 75px;
    position: absolute;
    top: 40.5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const PurchaseH1 = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  margin-top: 64px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const PurchaseButton = styled.button`
  width: 180px;
  height: 40px;
  top: 428.8px;
  left: 390px;
  border-radius: 4px;
  background-color: #009edd;
  font-weight: 700;
  line-height: 19.07px;
  font-size: 14px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
  margin-top: 25px;
  @media screen and (max-width: 1000px) {
  }
`
