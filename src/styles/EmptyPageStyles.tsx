import styled from 'styled-components'

export const EmptyMainDiv = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 970px;
  height: 476px;
  left: 275px;
  bottom: 150px;
  border-radius: 4px;
  background-color: #ffffff;
  position: absolute;
  top: 46.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1000px) {
    width: 342px;
    height: 558px;
    bottom: 203px;
    margin-top: 65px;
    position: absolute;
    top: 39%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const EmptyH1 = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  margin-top: 64px;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const EmptyReturnButton = styled.button`
  width: 180px;
  height: 40px;
  top: 428.8px;
  left: 390px;
  border-radius: 4px;
  background-color: #009edd;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`
