import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MapView from 'react-native-maps';
const MapSheet = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <Button
        onPress={() => {
          bottomSheetRef.current?.expand();
        }}
        color={'red'}
        title="OPEN IT"
      />
      <BottomSheet
        enablePanDownToClose={true}
        snapPoints={[200, '%100']}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <View className='h-full w-full flex-1'>
            <MapView style={{ width:'100%', height:'100%'}}/>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MapSheet;
