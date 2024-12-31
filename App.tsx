import {View, Text, ScrollView, Vibration} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-btr';
import MyCard from './components/card';
import Head from './components/Head';
import Comp from './components/Comp';

const controls = [
  {
    title: 'Turn on sounds',
    desc: 'Play sounds when changing values',
  },
  {
    title: 'Turn on vibration',
    desc: 'Vibrate on value changes',
  },
  {
    title: 'Use hardware buttons',
    desc: 'Change counter value using volume buttons',
  },
  {
    title: 'Tap value to increment',
    desc: 'Increment a counter by tapping the current value',
  },
];

const display = [
  {
    title: 'Theme',
    desc: 'Light',
  },
  {
    title: 'Keep the screen on',
    desc: 'Keep the screen on while the app is active',
  },
];

const others = [
  {
    title: 'Remove all counters',
    desc: '',
  },
  {
    title: 'Export counters',
    desc: 'Export all counters in CSV format',
  },
  {
    title: 'Version',
    desc: '29',
  },
];

const cont = 'Controls';
const disp = 'Display';
const oth = 'Other';

const App = () => {
  return (
    <ScrollView style={{marginTop: 50}}>
      <Head title={cont} />
      {controls.map((control, index) => (
        <MyCard key={index} data={control} />
      ))}
      <Head title={disp} />
      {display.map((control, index) => (
        <MyCard key={index} data={control} />
      ))}
      <Head title={oth} />
      {others.map((control, index) => (
        <MyCard key={index} data={control} />
      ))}
    </ScrollView>
  );
};

export default App;

// <ScrollView style={{marginTop:50}}>
//   <Head data={cont} />
//   {controls.map((control, index) => (
//     <MyCard key={index} data={control} />
//   ))}
//   <Head data={disp} />
//   {display.map((control, index) => (
//     <MyCard key={index} data={control} />
//   ))}
//   <Head data={oth} />
//   {others.map((control, index) => (
//     <MyCard key={index} data={control} />
//   ))}
// </ScrollView>

// <MyCard data={display} />;
// {
//   controls.map((control, index) => <MyCard key={index} data={control} />);
// }
