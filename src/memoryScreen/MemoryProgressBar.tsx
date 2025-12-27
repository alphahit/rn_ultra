// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   NativeModules,
//   TouchableOpacity,
// } from 'react-native';

// const { MemoryInfo, ErrorBoundaryModule } = NativeModules;

// const MemoryProgressBar: React.FC = () => {
//   const ramRef = useRef<View>(null);
//   const storageRef = useRef<View>(null);

//   const [usedRam, setUsedRam] = useState(0);
//   const [totalRam, setTotalRam] = useState(1);
//   const [usedStorage, setUsedStorage] = useState(0);
//   const [totalStorage, setTotalStorage] = useState(1);

//   // 1️⃣ Fetch native data once
//   useEffect(() => {
//     MemoryInfo.getMemoryInfo(
//       (uRam: number, tRam: number, uStor: number, tStor: number) => {
//         setUsedRam(Math.round(uRam));
//         setTotalRam(Math.max(Math.round(tRam), 1));
//         setUsedStorage(Math.round(uStor));
//         setTotalStorage(Math.max(Math.round(tStor), 1));
//       },
//     );
//   }, []);

//   const ramProgress = usedRam / totalRam;
//   const storageProgress = usedStorage / totalStorage;

//   // 2️⃣ Animate bars
//   useEffect(() => {
//     ramRef.current?.setNativeProps({
//       style: { width: `${Math.min(ramProgress, 1) * 100}%` },
//     });
//     storageRef.current?.setNativeProps({
//       style: { width: `${Math.min(storageProgress, 1) * 100}%` },
//     });
//   }, [ramProgress, storageProgress]);

//   // ▶️ Helpers to trigger native errors
//   const simulateRamError = useCallback(() => {
//     ErrorBoundaryModule.triggerError('ram');
//   }, []);

//   const simulateStorageError = useCallback(() => {
//     ErrorBoundaryModule.triggerError('storage');
//   }, []);

//   // 3️⃣ Auto‑trigger if they hit 100%
//   useEffect(() => {
//     if (ramProgress >= 1) {
//       simulateRamError();
//     }
//   }, [ramProgress, simulateRamError]);

//   useEffect(() => {
//     if (storageProgress >= 1) {
//       simulateStorageError();
//     }
//   }, [storageProgress, simulateStorageError]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.sectionTitle}>RAM Usage</Text>
//       <Text style={styles.label}>
//         {usedRam} MB / {totalRam} MB
//       </Text>
//       <View style={styles.progressBarBackground}>
//         <View ref={ramRef} style={styles.progressBarFilled} />
//       </View>

//       <Text style={styles.sectionTitle}>Storage Usage</Text>
//       <Text style={styles.label}>
//         {usedStorage} GB / {totalStorage} GB
//       </Text>
//       <View style={styles.progressBarBackground}>
//         <View
//           ref={storageRef}
//           style={[styles.progressBarFilled, { backgroundColor: '#03A9F4' }]}
//         />
//       </View>

//       {/* 4️⃣ Manual trigger buttons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={simulateRamError}>
//           <Text style={styles.buttonText}>Simulate RAM Error</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={simulateStorageError}>
//           <Text style={styles.buttonText}>Simulate Storage Error</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { alignItems: 'center', padding: 20 },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//     color: '#333',
//   },
//   label: { fontSize: 16, marginBottom: 10, color: '#333' },
//   progressBarBackground: {
//     width: 300,
//     height: 10,
//     backgroundColor: '#E0E0E0',
//     borderRadius: 5,
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   progressBarFilled: {
//     height: '100%',
//     backgroundColor: '#6200EE',
//     borderRadius: 5,
//   },
//   buttonContainer: { flexDirection: 'row', marginTop: 30 },
//   button: {
//     flex: 1,
//     marginHorizontal: 5,
//     paddingVertical: 12,
//     backgroundColor: '#FF5252',
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   buttonText: { color: '#FFF', fontWeight: '600' },
// });

// export default MemoryProgressBar;

import React from 'react'
import { View } from 'react-native';

const MemoryProgressBar = () => {
  return (
    <View>

    </View>
  )
}
export default MemoryProgressBar;