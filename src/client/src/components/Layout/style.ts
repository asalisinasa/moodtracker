import styled from "styled-components"
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "../../styled"

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.light};
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  padding: 0 16px;
`

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
`
