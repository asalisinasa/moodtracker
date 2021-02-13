import styled from "styled-components"

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.light};
`
