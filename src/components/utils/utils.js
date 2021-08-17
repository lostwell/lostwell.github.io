import { colors } from "../../constants/styles"

const getThemeValue = (theme, property, object = colors) => object[theme][property]

const getThemeAccessor = (property, object = colors) => (props) => getThemeValue(props.theme, property, object)

const vhToPixel = value => `${(window.innerHeight * value) / 100}px`

const vwToPixel = value => `${(window.innerWidth * value) / 100}px`

export { getThemeAccessor, getThemeValue, vhToPixel, vwToPixel }