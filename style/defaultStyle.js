const primaryColor = [
        '#9c27b0',
        '#ab47bc',
        '#8e24aa',
        '#af2cc5',
        '#e1bee7',
        '#ba68c8'
      ]
      const secondaryColor = ['#fafafa']
      const warningColor = [
        '#ff9800',
        '#ffa726',
        '#fb8c00',
        '#ffa21a',
        '#fcf8e3',
        '#faf2cc',
        '#ffe0b2',
        '#ffb74d'
      ]
      const dangerColor = [
        '#f44336',
        '#ef5350',
        '#e53935',
        '#f55a4e',
        '#f2dede',
        '#ebcccc',
        'ef9a9a',
        '#ef5350'
      ]
      const successColor = [
        '#4caf50',
        '#66bb6a',
        '#43a047',
        '#5cb860',
        '#dff0d8',
        '#d0e9c6',
        '#a5d6a7',
        '#66bb6a'
      ]
      const infoColor = [
        '#00acc1',
        '#26c6da',
        '#00acc1',
        '#00d3ee',
        '#d9edf7',
        '#c4e3f3',
        '#b2ebf2',
        '#4dd0e1'
      ]
      const roseColor = ['#e91e63', '#ec407a', '#d81b60', '#f8bbd0', '#f06292']
      const grayColor = [
        '#999',
        '#3C4858',
        '#eee',
        '#343434',
        '#585858',
        '#232323',
        '#ddd',
        '#6c757d',
        '#333',
        '#212121',
        '#777',
        '#D2D2D2',
        '#AAA',
        '#495057',
        '#e5e5e5',
        '#555',
        '#f9f9f9',
        '#ccc',
        '#444',
        '#f2f2f2',
        '#89229b',
        '#c0c1c2',
        '#9a9a9a',
        '#f5f5f5',
        '#505050',
        '#1f1f1f'
      ]
const whiteColor = '#FFF'
const blackColor = '#000'
const twitterColor = '#55acee'
const facebookColor = '#3b5998'
const googleColor = '#dd4b39'
const linkedinColor = '#0976b4'
const pinterestColor = '#cc2127'
const youtubeColor = '#e52d27'
const tumblrColor = '#35465c'
const behanceColor = '#1769ff'
const dribbbleColor = '#ea4c89'
const redditColor = '#ff4500'
const instagramColor = '#125688'
const hexToRgb = input => {
        input = input + ''
        input = input.replace('#', '')
        const hexRegex = /[0-9A-Fa-f]/g
        if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
          throw new Error('input is not a valid hex color.')
        }
        if (input.length === 3) {
          const first = input[0]
          const second = input[1]
          const last = input[2]
          input = first + first + second + second + last + last
        }
        input = input.toUpperCase(input)
        const first = input[0] + input[1]
        const second = input[2] + input[3]
        const last = input[4] + input[5]
        return (
          parseInt(first, 16) +
                ', ' +
                parseInt(second, 16) +
                ', ' +
                parseInt(last, 16)
        )
      }

const defaultFont = {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em'
      }
      
      const boxShadow = {
        boxShadow:
                '0 10px 30px -12px rgba(' +
                hexToRgb(blackColor) +
                ', 0.42), 0 4px 25px 0px rgba(' +
                hexToRgb(blackColor) +
                ', 0.12), 0 8px 10px -5px rgba(' +
                hexToRgb(blackColor) +
                ', 0.2)'
      }
      const primaryBoxShadow = {
        boxShadow:
                '0 12px 20px -10px rgba(' +
                hexToRgb(primaryColor[0]) +
                ', 0.28), 0 4px 20px 0px rgba(' +
                hexToRgb(blackColor) +
                ', 0.12), 0 7px 8px -5px rgba(' +
                hexToRgb(primaryColor[0]) +
                ', 0.2)'
      }
      const infoBoxShadow = {
        boxShadow:
                '0 12px 20px -10px rgba(' +
                hexToRgb(infoColor[0]) +
                ', 0.28), 0 4px 20px 0px rgba(' +
                hexToRgb(blackColor) +
                ', 0.12), 0 7px 8px -5px rgba(' +
                hexToRgb(infoColor[0]) +
                ', 0.2)'
      }
      const successBoxShadow = {
        boxShadow:
                '0 12px 20px -10px rgba(' +
                hexToRgb(successColor[0]) +
                ', 0.28), 0 4px 20px 0px rgba(' +
                hexToRgb(blackColor) +
                ', 0.12), 0 7px 8px -5px rgba(' +
                hexToRgb(successColor[0]) +
                ', 0.2)'
      }
      const warningBoxShadow = {
        boxShadow:
                '0 12px 20px -10px rgba(' +
                hexToRgb(warningColor[0]) +
                ', 0.28), 0 4px 20px 0px rgba(' +
                hexToRgb(blackColor) +
                ', 0.12), 0 7px 8px -5px rgba(' +
                hexToRgb(warningColor[0]) +
                ', 0.2)'
      }
      const dangerBoxShadow = {
        boxShadow:
                '0 12px 20px -10px rgba(' +
                hexToRgb(dangerColor[0]) +
                ', 0.28), 0 4px 20px 0px rgba(' +
                hexToRgb(blackColor) +
                ', 0.12), 0 7px 8px -5px rgba(' +
                hexToRgb(dangerColor[0]) +
                ', 0.2)'
      }
      const roseBoxShadow = {
        boxShadow:
                '0 4px 20px 0px rgba(' +
                hexToRgb(blackColor) +
                ', 0.14), 0 7px 10px -5px rgba(' +
                hexToRgb(roseColor[0]) +
                ', 0.4)'
      }

      export default {
              roseBoxShadow,
              dangerBoxShadow,
              warningBoxShadow,
              successBoxShadow,
              infoBoxShadow,
              primaryBoxShadow,
              boxShadow,
              defaultFont,
              hexToRgb
      }