import { TextStyle } from 'react-native';

export interface AppTypography {
    labelSmall: TextStyle;
    labelMedium: TextStyle;
    labelLarge: TextStyle;
    bodySmall: TextStyle;
    bodyMedium: TextStyle;
    bodyLarge: TextStyle;
    titleSmall: TextStyle;
    titleMedium: TextStyle;
    titleLarge: TextStyle;
    displayLarge: TextStyle;
}

export const AppTypography: AppTypography = {
    labelSmall: {
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'valorant',
        color: '#fff'
    },
    labelMedium: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'valorant',
        color: '#fff'
    },
    labelLarge: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'valorant',
        color: '#fff'
    },
    bodySmall: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'valorant',
        color: '#fff'
    },
    bodyMedium: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'valorant',
        color: '#fff'
    },
    bodyLarge: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'valorant',
        color: '#fff'
    },
    titleSmall: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'valorant',
        color: '#fff'
    },
    titleMedium: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'valorant',
        color: '#fff'
    },
    titleLarge: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'valorant',
        color: '#fff'
    },
    displayLarge: {
        fontSize: 32,
        fontWeight: '800',
        fontFamily: 'valorant',
        color: '#fff'
    },
};
