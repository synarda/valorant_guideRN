import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({

    appBar: {
        height: 60,
        backgroundColor: '#FF4655',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        elevation: 4,
        flexDirection: 'row'
    },
    appBarTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    appLayout: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1E1E1E',
    }
});
