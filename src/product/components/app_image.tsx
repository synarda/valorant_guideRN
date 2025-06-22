import React from 'react';
import { Image, ImageStyle, ImageSourcePropType, StyleProp } from 'react-native';

type AppImageProps = {
    source?: ImageSourcePropType;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
    style?: StyleProp<ImageStyle>;
};

export const AppImage: React.FC<AppImageProps> = ({
    source,
    resizeMode = 'cover',
    style,
}) => {
    const defaultImage = require('../../assets/images/no_image.png');

    return (
        <Image
            source={source ?? defaultImage}
            resizeMode={resizeMode}
            style={style}
        />
    );
};
