import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppImage } from '../components/app_image';
import { AppAssets } from '../../config/assets';
import { AppTypography } from '../typography/typography';

type Props = {
    title: string;
};

export const AppBar: React.FC<Props> = ({ title }) => {
    const navigation = useNavigation();
    const canGoBack = navigation.canGoBack?.() ?? false;

    return (
        <View style={styles.container}>
            {canGoBack && (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
            )}
            <Text style={AppTypography.titleLarge} numberOfLines={1}>{title}</Text>
            <View style={{ width: 25 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#FF4655',
        alignItems: 'center',
        paddingHorizontal: 16,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButton: {
        marginRight: 8,
        padding: 4,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 8,
    },

});
