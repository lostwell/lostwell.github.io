import { colors } from "../../constants/styles"

const getThemeValue = (theme, property, object = colors) => object[theme][property]

const getThemeAccessor = (property, object = colors) => (props) => getThemeValue(props.theme, property, object)

export { getThemeAccessor, getThemeValue }