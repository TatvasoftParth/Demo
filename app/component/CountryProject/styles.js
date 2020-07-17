import { StyleSheet } from 'react-native'
import { screenWidth } from '../../Utils/Size'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btnStyes: {
        backgroundColor: '#1288ff',
        borderRadius: 5,
        marginVertical: 10,
    },
    btnTextStyles: {
        color: "#FFF",
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: 'center'
    },
    textInputStyle: {
        height: screenWidth * 0.1,
        width: screenWidth * 0.5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "gray",
        paddingHorizontal: 10
    },
    itemTextStyles: {
        paddingVertical: 10,
        fontSize: 18,
    },
    weatherBtnStyles: {
        backgroundColor: '#1288ff',
        borderRadius: 5,
        alignItems: 'center'
    }
})