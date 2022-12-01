import React, {FunctionComponent} from 'react';
import {Dimensions, Image, ImageProps, StyleSheet} from 'react-native';

interface RxAvatarProps extends ImageProps {}

const RxAvatar: FunctionComponent<RxAvatarProps> = props => {
  return <Image {...props} style={styles.image} />;
};

const imageSize = Dimensions.get('screen').width / 2;

const styles = StyleSheet.create({
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  },
});

export default RxAvatar;
