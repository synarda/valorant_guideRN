import { StyleSheet } from 'react-native';

export const agentListItemStyles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#2C2C2C',
        padding: 12,
        borderRadius: 8,
    },
    image: {
        width: 48,
        height: 48,
        marginRight: 12,
        borderRadius: 4,
    },
    textColum: {
        flex: 1,
    },
    cardRow: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"
    },
});
