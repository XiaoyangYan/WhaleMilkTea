import { makeStyles } from '@material-ui/styles'
import defaultStyle from './defaultStyle'

export const flexStyles = function (justifyContent = "space-between", alignItems = "center", otherStyle={}) {
    return makeStyles({
        flex: {
            display: "flex",
            justifyContent,
            alignItems,
            ...otherStyle
        }
    })()
}
export const backgroundImages = function (img, width, height, size) {
    return makeStyles({
        backgroundImages: {
            display: "inline-block",
            minWidth: width,
            height,
            background: 'url(' + img + ')' + ' ' + 'no-repeat' + ' ' + 'center',
            backgroundSize: size
        }
    })()
}

export const widthAndHeight = function (width, height, lineHeight) {
    return makeStyles({
        widthAndHeight: {
            '@media': {

            },
            width,
            height,
            lineHeight
        }
    })()
}
export const positionImage = function (position = "absolute", positionImage = "", width, height, top, right) {
    return makeStyles({
        positionImage: {
            background: 'url(' + positionImage + ')' + ' ' + 'no-repeat' + ' ' + 'center',
            backgroundSize: 'contain',
            backgroundPosition: top + ' ' + right,
            width,
            height,
            position
        }
    })()
}
export const position = function (position = "absolute", positionList) {
    return makeStyles({
        positions: {
            position,
            ...positionList
        }
    })()
}
export const padding = function (paddingTop, paddingRight, paddingBottom, paddingLeft) {
    return makeStyles({
        padding: {
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom
        }
    })()
}
export const margin = function (marginTop, marginRight, marginBottom, marginLeft) {
    const marginString = (marginTop != null ? marginTop : '') + ' '
        + (marginRight != null ? marginRight : '') + ' '
        + (marginBottom != null ? marginBottom : '') + ' '
        + (marginLeft != null ? marginLeft : '') + ' '
    return makeStyles({
        margin: {
            margin: marginString
        }
    })()
}
export const border = function (borderWidth, borderColor, borderStyle) {
    const borderString = (borderWidth != null ? borderWidth : '')
        + ' ' + (borderColor != null ? borderColor : '')
        + ' ' + (borderStyle != null ? borderStyle : '')
    return makeStyles({
        border: {
            border: borderString
        }
    })()
}
export const transform = function (transform) {
    return makeStyles({
        transform: {
            transform
        }
    })()
}
export const linearGradient = function (degree, successColor, boxShadow = defaultStyle.boxShadow) {
    const colorString = successColor.map(item => {
        return item.length === 7 ? 'rgba('+defaultStyle.hexToRgb(item)+')' : item
    }).join(',')
    return makeStyles({
        linearGradient:{
            background: 'linear-gradient(' + degree + ',' + colorString + ')',
        ...boxShadow
        }
    })()
}