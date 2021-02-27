import styled from "styled-components"

export const Header = styled.header``

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  *:only-child {
    margin-left: auto;
  }
`

export const Title = styled.h1`
  ${({ theme }) => theme.typography.title};
  text-align: center;
  padding: 0 16px 16px 16px;
`
