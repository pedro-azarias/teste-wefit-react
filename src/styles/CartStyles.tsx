import styled from 'styled-components'

interface CartMainProps {
  itemCount: number
}

export const CartMain = styled.main<CartMainProps>`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    gap: 21px;
    position: absolute;
    width: 970px;
    max-height: 550px;
    overflow-y: auto;
    margin-right: -16px;
    left: 250px;
    top: 98px;
    background: #ffffff;
    border-radius: 4px;
    padding-right: 0px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(
      -50%,
      ${(props) =>
        props.itemCount === 1
          ? '-87%'
          : props.itemCount === 2
            ? '-62%'
            : '-48%'}
    );
    ::-webkit-scrollbar {
      width: 10px;
    }
  
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
  
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
  
    ::-webkit-scrollbar-thumb:hover {
      background: #999999;
    }
  
    @media screen and (max-width: 1000px){
      width: 87%;
      align-items: center;
      top: 45%;
      left: 50%;
      flex-direction: column;
      margin-top: -33px;
      max-height: none;
      position: absolute;
      padding: 0;
      overflow-x: hidden;
      overflow-y: auto;
      transform: translate(
      -50%,
      ${(props) =>
        props.itemCount === 1
          ? '-101%'
          : props.itemCount === 2
            ? '-61%'
            : '-42%'}
    );
      ::-webkit-scrollbar {
        display: none;
      }
    }
    @media screen and (max-width: 430px) {
      width: 342px;
      top: 45%;
      left: 50%;
      flex-direction: column;
      margin-top: -33px;
      max-height: none;
      position: absolute;
      padding: 0;
      overflow-x: hidden;
      overflow-y: auto;
      transform: translate(
      -50%,
      ${(props) =>
        props.itemCount === 1
          ? '-101%'
          : props.itemCount === 2
            ? '-61%'
            : '-42%'}
    );
      ::-webkit-scrollbar {
        display: none;
      }
    }
    @media screen and (max-height: 670px){
      top: 50%;
       ::-webkit-scrollbar {
        display: none;
      }
    }
    `

export const ProductH2 = styled.h2`
    font-weight: 700;
    font-size: 14px;
    line-height: 19.07px;
    width: 111px;
    color: #999999;
    margin-left: 24px;
    @media screen and (max-width: 1000px) {
      display: none;
      width: 110px;
      margin-left: -32px;
    }
  `

export const QtyH2 = styled.h2`
    font-weight: 700;
    font-size: 14px;
    line-height: 19.07px;
    margin-left: -41px;
    color: #999999;
    position: static;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  `

export const SubtotalH2 = styled.h2`
    font-weight: 700;
    font-size: 14px;
    line-height: 19.07px;
    color: #999999;
    margin-right: 283px;
  `
export const MobileSubtotalH2 = styled.h2`
    @media screen and (max-width: 1000px) {
      font-weight: 700;
      font-size: 14px;
      line-height: 19.07px;
      color: #999999;
      margin-right: 250px;
      font-size: 12px;
      position: relative;
      left: 246px;
      bottom: 124px;
    }
  `

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
      width: 85px;
      height: 0px;
    }
  `

export const ProductImage = styled.img`
    width: 89px;
    height: 114px;
    margin-left: 24px;
    @media screen and (max-width: 1000px) {
      width: 64px;
      height: 82px;
      position: relative;
      left: -10px;
      top: 0px;
    }
  `
export const TitleAndPriceDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 163px;
    height: 58px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    margin-left: 17px;
    padding-left: 10px;
    margin-top: -11px;
    color: #2f2e41;
    margin-right: 41px;
    p {
      margin-bottom: -15px;
    }
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      gap: 14px;
      height: 100%;
      width: 300px;
      p {
        margin-bottom: 0px;
      }
    }
  `
export const TitleProduct = styled.p`
    @media screen and (max-width: 1000px) {
      font-size: 14px;
      position: relative;
      left: 250px;
      top: -78px;
      width: 110px;
      height: 19px;
      margin-left: -31px;
    }
  `

export const PriceProduct = styled.p`
    @media screen and (max-width: 1000px) {
      font-size: 16px;
      font-weight: 700;
      line-height: 74.79px;
      margin-left: 64px;
      margin-right: 61px;
      width: 100px;
      height: 30px;
      position: relative;
      top: -154px;
      left: 322px;
      margin-left: 29px;
    }
  `

export const ProductDataDiv = styled.div`
    display: flex;
    margin-bottom: 10px;
    overflow-x: hidden;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      width: 342px;
      margin-bottom: -200px;
    }
  `
export const QuantityControlButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
  `

export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  `
export const QuantityInput = styled.input`
    box-sizing: border-box;
    cursor: default;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    width: 62px;
    height: 26px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-top: -5px;
    text-align: center;
  `

export const QuantityDiv = styled.div`
    display: -webkit-box;
    margin-left: -9px;
    gap: 6px;
    @media screen and (max-width: 1000px) {
      position: relative;
      top: -53px;
      right: 120px;
    }
  `
export const CartH1 = styled.h1`
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 27.24px;
    margin-top: 24.5px;
    cursor: default;
    @media screen and (max-width: 1000px) {
      margin-top: 10px;
      margin-left: 8px;
    }
  `

export const Subtotal = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 74.79px;
    margin-left: 148px;
    margin-right: 61px;
    width: 200px;
    @media screen and (max-width: 1000px) {
      width: 80px;
      position: relative;
      bottom: 180px;
      left: 179px;
      margin-left: 64px;
    }
  `

export const StyledTrashButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 34px;
    @media screen and (max-width: 1000px) {
      width: 50px;
      position: relative;
      bottom: 302px;
      left: 292px;
      margin-left: 0px;
    }
  `

export const StyledTrashIcon = styled.img`
    width: 18.31px;
    height: 18px;
    position: absolute;
    margin-left: 928px;
  `
export const FooterDiv = styled.footer`
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
    border-top: solid 1px #999999;
    padding-bottom: 22px;
    width: 930px;
    margin-left: 24px;
    
    @media screen and (max-width: 1000px) {
      &::after{
      content: '';
      display: block;
    width: 316px;
    height: 0.5px;
    margin-left: 13px;
    background-color: #999999; 
    }
    border: none;
      flex-direction: column-reverse;
      width: 342px;
      padding: 0px;
      margin-left: 0;
      position: absolute;
      height: 113px;
      bottom: -1px;
      background-color: #FFFFFF;
      border-bottom: 1px solid #FFFFFF;
    }
  `

export const FinishOrderButton = styled.button`
    width: 211px;
    height: 40px;
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
      position: absolute;
      bottom: 13px;
      width: 307px;
      left: 20px;
    }
  `

export const TotalParagraph = styled.p`
    padding-left: 55%;
    font-weight: 700;
    font-size: 14px;
    color: #999999;
    margin-top: 3.3%;
    @media screen and (max-width: 1000px) {
      position: absolute;
      bottom: 59px;
      right: 275px;
    }
  `

export const TotalValueParagraph = styled.p`
    font-weight: 700;
    font-size: 24px;
    color: #2f2e41;
    line-height: 0px;
    margin-right: 35px;
    margin-top: 4.3%;
    @media screen and (max-width: 1000px) {
      position: relative;
      top: -50%;
      left: 64%;
    }
  `

export const TitleProductSpiderMan = styled.p`
@media screen and (max-width: 1000px) {
      font-size: 14px;
      position: relative;
      left: 250px;
      top: -85px;
      width: 110px;
      height: 19px;
      margin-left: -31px;
    }
`
