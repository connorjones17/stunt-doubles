import React, {FunctionComponent} from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {Worker} from '../../store/types';
import RxCard from '../ui/RxCard';
import RxAvatar from '../ui/RxAvatar';

interface WorkerCardProps {
  worker: Worker;
  style?: StyleProp<ViewStyle>;
  onRightDrag: (worker: Worker) => void;
  onLeftDrag: (worker: Worker) => void;
}

const WorkerCard: FunctionComponent<WorkerCardProps> = props => {
  const [dragX, setDragX] = React.useState<number>(0);
  const [dragY, setDragY] = React.useState<number>(0);
  const [translateX, setTranslateX] = React.useState<number>(0);
  const [translateY, setTranslateY] = React.useState<number>(0);

  const getCardStyle = () => ({
    transform: [
      {translateX: translateX},
      {translateY: translateY},
    ],
  });

  const setPosition = (e: GestureResponderEvent) => {
    const dimensions = Dimensions.get('screen');

    setTranslateX(translateX + e.nativeEvent.pageX - dragX);
    setTranslateY(translateY + e.nativeEvent.pageY - dragY);

    setDragX(e.nativeEvent.pageX);
    setDragY(e.nativeEvent.pageY);

    const oneQuartersPage = dimensions.width / 4;
    const threeQuartersPage = dimensions.width - oneQuartersPage;

    if (e.nativeEvent.pageX > threeQuartersPage) {
      props.onRightDrag(props.worker);
      resetPosition();
      return;
    }

    if (e.nativeEvent.pageX < oneQuartersPage) {
      props.onLeftDrag(props.worker);
      resetPosition();
      return;
    }
  };

  const startPosition = (e: GestureResponderEvent): boolean => {
    setDragX(e.nativeEvent.pageX);
    setDragY(e.nativeEvent.pageY);

    return true;
  };

  const resetPosition = () => {
    setTranslateX(0);
    setTranslateY(0);
  };

  return (
    <RxCard
      onResponderMove={setPosition}
      onResponderRelease={resetPosition}
      onStartShouldSetResponder={startPosition}
      onMoveShouldSetResponder={() => true}
      style={[props.style, styles.card, getCardStyle()]}
    >
      <Text style={styles.title}>
        {`${props.worker.firstName} ${props.worker.lastName}`}
      </Text>
      <RxAvatar source={props.worker.image} />
      <Text style={styles.text}>Position: {props.worker.position}</Text>
    </RxCard>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
  },
});

export default WorkerCard;
