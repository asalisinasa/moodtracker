import { color } from './color'
import { typography } from './typography'

interface IThemeProps {
  color: typeof color
  typography: typeof typography
}

const theme: IThemeProps = {
  color,
  typography
}

export default theme
