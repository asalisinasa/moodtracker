import { createGlobalStyle } from "styled-components"
import { reset } from "./reset"
import { color } from "./color"

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${color.dark};
  }
`

export default GlobalStyle
