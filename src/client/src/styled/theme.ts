import { color } from "./color"
import { typography } from "./typography"

interface IThemeProperties {
  color: typeof color
  typography: typeof typography
}

const theme: IThemeProperties = {
  color,
  typography,
}

export default theme
