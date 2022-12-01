import React, {useEffect} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, Text, View} from 'react-native';
import {getUnviewedWorkers, userDislikesWorker, userlikesWorker} from '../../api/UserClient';
import {Worker} from '../../store/types';
import WorkerCard from './WorkerCard';

const SwipeWorkers = () => {
  const [workers, setWorkers] = React.useState<Worker[] | null>(null);
  const [showLike, setShowLike] = React.useState<boolean>(false);
  const [showDislike, setShowDislike] = React.useState<boolean>(false);

  const resetWorkers = () => {
    setWorkers(getUnviewedWorkers());
  };

  useEffect(() => {
    resetWorkers();
  }, []);

  if (workers === null) {
    // Show a loading indicator whilst fetching workers
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (workers.length < 1) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No more stunt doubles available, sorry</Text>
      </View>
    );
  }

  const onUserLike = (worker: Worker) => {
    userlikesWorker(worker.id);
    setShowLike(true);
    setTimeout(() => {
      setShowLike(false);
    }, 1000);
    resetWorkers();
  };

  const onUserDislike = (worker: Worker) => {
    userDislikesWorker(worker.id);
    setShowDislike(true);
    setTimeout(() => {
      setShowDislike(false);
    }, 1000);
    resetWorkers();
  };

  return (
    <View style={styles.container}>
      {workers.map(worker => (
        <WorkerCard
          key={worker.id}
          style={[styles.card]}
          worker={worker}
          onRightDrag={onUserLike}
          onLeftDrag={onUserDislike}
        />
      ))}
      {showLike
        ? <Text style={[styles.responseText, styles.like]}>LIKE</Text>
        : undefined
      }
      {showDislike
        ? <Text style={[styles.responseText, styles.dislike]}>DISLIKE</Text>
        : undefined
      }
    </View>
  );
};

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    top: screen.height / 4,
    left: screen.width / 6,
    width: screen.width / 1.5,
    height: screen.height / 2,
  },
  responseText: {
    position: 'absolute',
    top: '20%',
    left: '30%',
    fontSize: 50,
    fontWeight: 'bold',
  },
  like: {
    color: '#34b233',
    left: '35%',
  },
  dislike: {
    color: '#cc0000',
    left: '30%',
  },
});

export default SwipeWorkers;
