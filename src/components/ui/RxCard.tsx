import React, {FunctionComponent} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface RxCardProps extends ViewProps {}

const RxCard: FunctionComponent<RxCardProps> = props => {
  return (
    <View {...props} style={[props.style, styles.container]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default RxCard;
