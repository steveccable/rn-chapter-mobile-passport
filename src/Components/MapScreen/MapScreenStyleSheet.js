import { StyleSheet } from 'react-native';
import styleConstants from '../../StyleConstants';

const MapScreenStyleSheet = StyleSheet.create({
    Mapcontainer: {
        flex: 1,
        flexDirection: 'column',
    },
    imageStyle: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: styleConstants.backgroundColor,
        alignItems: 'center',
        marginVertical: 1,
        marginHorizontal: 0,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    buttonStyle: {
        fontSize: 20,
        color: 'green'
    }
});

export default MapScreenStyleSheet;
