import { Dimensions } from 'react-native'

export const Theme = {
    colors:{
        primary: '#007DFE',
        secondary: '#F8FBFF',
        dark: '#343a40',
        warning: '#ffc107',
        danger: '#dc3545',
        success: '#28a745',
        light: '#F8FBFF',
        white: 'white',
        black:'black',
        transparent:'transparent',
        accent:'#8b96ff'
    },
    fonts:{

    },
    dimensions:{
        screenWidth: Dimensions.get('screen').width,
        screenHeight: Dimensions.get('screen').height
    },
    textSize:{
        h1: 30,
        h2: 22,
        h3: 18,
        h4: 14,
        h5: 10
    },
    padding:{
        lg: 30,
        md: 20,
        sm: 10,
        xs: 5
    },
    margin:{
        lg: 30,
        md: 20,
        sm: 10,
        xs: 5
    }
}
