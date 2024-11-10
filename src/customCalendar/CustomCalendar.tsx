// import React, {useState, useEffect} from 'react';
// import {StyleSheet, View} from 'react-native';
// import ScrollPicker from 'react-native-wheel-scrollview-picker';

// const CustomCalendar = () => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   const years = Array.from({length: 105}, (_, i) => (1900 + i).toString());

//   // Helper function to calculate the number of days in a given month and year
//   const getDaysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   // Generate an array of day strings up to a given number
//   const generateDays = numDays => {
//     return Array.from({length: numDays}, (_, i) => (i + 1).toString());
//   };

//   const [selectedDay, setSelectedDay] = useState(1);
//   const [selectedMonth, setSelectedMonth] = useState(0); // January is index 0
//   const [selectedYear, setSelectedYear] = useState(1992);
//   const [days, setDays] = useState(
//     generateDays(getDaysInMonth(selectedMonth, selectedYear)),
//   );

//   useEffect(() => {
//     // Update the days array when month or year changes
//     const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
//     setDays(generateDays(daysInMonth));

//     // Adjust the selected day if it exceeds the days in the month
//     if (selectedDay > daysInMonth) {
//       setSelectedDay(daysInMonth);
//     }
//   }, [selectedDay, selectedMonth, selectedYear]);

//   return (
//     <View style={styles.pickerContainer}>
//       <ScrollPicker
//         dataSource={days}
//         selectedIndex={selectedDay - 1}
//         onValueChange={(data, selectedIndex) => {
//           console.log('data: ' + data);
//           setSelectedDay(selectedIndex + 1);
//         }}
//         wrapperHeight={180}
//         wrapperBackground="#FFFFFF"
//         itemHeight={60}
//         highlightColor="#d8d8d8"
//         highlightBorderWidth={0}
//         activeItemTextStyle={{
//           fontSize: 26,
//           color: '#292929',
//           fontFamily: 'PT Sans',
//           lineHeight: 39
//         }}
//         itemTextStyle={{fontSize: 18, color: '#C5C5C5', fontFamily: 'PT Sans'}}
//       />
//       <ScrollPicker
//         dataSource={months}
//         selectedIndex={selectedMonth}
//         onValueChange={(data, selectedIndex) => {
//           console.log('data: ' + data);
//           setSelectedMonth(selectedIndex);
//         }}
//         wrapperHeight={180}
//         wrapperBackground="#FFFFFF"
//         itemHeight={60}
//         highlightColor="#d8d8d8"
//         highlightBorderWidth={0}
//         activeItemTextStyle={{
//           fontSize: 26,
//           color: '#292929',
//           fontFamily: 'PT Sans',
//         }}
//         itemTextStyle={{fontSize: 18, color: '#C5C5C5', fontFamily: 'PT Sans'}}
//       />
//       <ScrollPicker
//         dataSource={years}
//         selectedIndex={years.indexOf(selectedYear.toString())}
//         onValueChange={(data, selectedIndex) => {
//           console.log('data: ' + data);
//           setSelectedYear(Number(years[selectedIndex]));
//         }}
//         wrapperHeight={180}
//         wrapperBackground="#FFFFFF"
//         itemHeight={60}
//         highlightColor="#d8d8d8"
//         highlightBorderWidth={0}
//         activeItemTextStyle={{
//           fontSize: 26,
//           color: '#292929',
//           fontFamily: 'PT Sans',
//         }}
//         itemTextStyle={{fontSize: 18, color: '#C5C5C5', fontFamily: 'PT Sans'}}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   pickerContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     height: 191,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default CustomCalendar;

import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const CustomCalendar = ({ locale = 'en' }) => {
  const monthNames = useMemo(
    () => ({
      en: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      de: [
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
      ],
    }),
    []
  );
  const today = new Date();
  const currentYear = today.getFullYear();
  const months = monthNames[locale] || monthNames.en;
  const years = useMemo(() => Array.from({ length:currentYear - 1900 }, (_, i) => (1900 + (i+1)).toString()), []);

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const generateDays = numDays => Array.from({ length: numDays }, (_, i) => (i + 1).toString());

  // Get today's date

  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // Months are 0-based


  // Initialize state with today's date
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [days, setDays] = useState(generateDays(getDaysInMonth(currentMonth, currentYear)));

  useEffect(() => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
    setDays(generateDays(daysInMonth));
    if (selectedDay > daysInMonth) {
      setSelectedDay(daysInMonth);
    }
  }, [selectedDay, selectedMonth, selectedYear]);

  const handleDayChange = (data, selectedIndex) => setSelectedDay(selectedIndex + 1);
  const handleMonthChange = (data, selectedIndex) => setSelectedMonth(selectedIndex);
  const handleYearChange = (data, selectedIndex) => setSelectedYear(Number(years[selectedIndex]));

  const renderPicker = (dataSource, selectedIndex, onValueChange) => (
    <ScrollPicker
      dataSource={dataSource}
      selectedIndex={selectedIndex}
      onValueChange={onValueChange}
      wrapperHeight={180}
      wrapperBackground="#FFFFFF"
      itemHeight={60}
      highlightColor="#d8d8d8"
      highlightBorderWidth={0}
      activeItemTextStyle={styles.activeItemTextStyle}
      itemTextStyle={styles.itemTextStyle}
    />
  );

  return (
    <View style={styles.pickerContainer}>
      {renderPicker(days, selectedDay - 1, handleDayChange)}
      {renderPicker(months, selectedMonth, handleMonthChange)}
      {renderPicker(years, years.indexOf(selectedYear.toString()), handleYearChange)}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 191,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeItemTextStyle: {
    fontSize: 26,
    color: '#292929',
    fontFamily: 'PT Sans',
    lineHeight: 39,
  },
  itemTextStyle: {
    fontSize: 18,
    color: '#C5C5C5',
    fontFamily: 'PT Sans',
  },
});

export default CustomCalendar;
