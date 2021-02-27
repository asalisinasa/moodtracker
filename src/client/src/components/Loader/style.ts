import styled, { keyframes } from "styled-components"

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  animation: ${spin} 1s infinite linear;
`
