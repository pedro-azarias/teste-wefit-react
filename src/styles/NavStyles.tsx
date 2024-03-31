import styled from 'styled-components'

export const Container = styled.body`
  background: #2f2e41;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  @media screen and (max-width: 1000px) {
    overflow-y: auto;
  }
`

export const NavBar = styled.nav`
  height: 74px;
  width: 939px;
  margin-left: 275px;
  display: flex;
  justify-content: space-between;
  padding: 18px 10px 18px 10px;
  margin-bottom: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-79%, -342%);
  @media screen and (max-width: 1000px) {
    margin-left: 10px;
    width: 100%;
    height: 35px;
    position: absolute;
    align-items: center;
    top: 31px;
    z-index: 999;
    background-color: #2f2e41;
    margin-top: 26px;
    transform: translate(-50%, -50%);
  }
`

export const H1 = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  margin-top: 24.5px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-top: 10px;
    margin-left: 8px;
  }
`

export const CartDiv = styled.div`
  width: 135.93px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  margin-top: 18px;
  margin-left: 702.13px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    position: relative;
    margin-right: 9px;
  }
`
export const CartLinkAndIconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  width: 95.95px;
  height: 38px;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-right: 0px;
    position: relative;
  }
`

export const CartLink = styled.a`
  width: 95.95px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const CartIconsLink = styled.a`
  width: 41.98px;
  height: 19px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16.34px;
  color: #999999;
  padding-bottom: 19px;
  padding-left: 53.97px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-right: 30px;
  }
`

export const CartButton = styled.button`
  width: 31.98px;
  height: 32px;
  background-color: #2f2e41;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-left: -25px;
    margin-top: -25px;
  }
`
