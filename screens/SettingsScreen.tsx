import {ScrollView} from 'react-native';
import React from 'react';
import MyCard from '../components/card';
import Head from '../components/Head';
import {
  SpeakerWaveIcon,
  BellSnoozeIcon,
  DeviceTabletIcon,
  PlusIcon,
  ArrowPathIcon,
  Cog8ToothIcon,
  TrashIcon,
  ShareIcon,
  ExclamationCircleIcon,
} from 'react-native-heroicons/solid';

const controls = [
  {
    title: 'Turn on sounds',
    desc: 'Play sounds when changing values',
    Icon: SpeakerWaveIcon,
    isCheckbox: true,
  },
  {
    title: 'Turn on vibration',
    desc: 'Vibrate on value changes',
    Icon: BellSnoozeIcon,
    isCheckbox: true,
  },
  {
    title: 'Use hardware buttons',
    desc: 'Change counter value using volume buttons',
    Icon: DeviceTabletIcon,
    isCheckbox: true,
  },
  {
    title: 'Tap value to increment',
    desc: 'Increment a counter by tapping the current value',
    Icon: PlusIcon,
    isCheckbox: true,
  },
];

const display = [
  {
    title: 'Theme',
    desc: 'Light',
    Icon: ArrowPathIcon,
  },
  {
    title: 'Keep the screen on',
    desc: 'Keep the screen on while the app is active',
    Icon: Cog8ToothIcon,
    isCheckbox: true,
  },
];

const others = [
  {
    title: 'Remove all counters',
    desc: '',
    Icon: TrashIcon,
  },
  {
    title: 'Export counters',
    desc: 'Export all counters in CSV format',
    Icon: ShareIcon,
  },
  {
    title: 'Version',
    desc: '29',
    Icon: ExclamationCircleIcon,
  },
];

const cont = 'Controls';
const disp = 'Display';
const oth = 'Other';

const SettingsScreen = () => {
  return (
    <ScrollView>
      <Head title={cont} />
      {controls.map((control, index) => (
        <MyCard key={index} data={control} />
      ))}
      <Head title={disp} />
      {display.map((disp, index) => (
        <MyCard key={index} data={disp} />
      ))}
      <Head title={oth} />
      {others.map((other, index) => (
        <MyCard key={index} data={other} />
      ))}
    </ScrollView>
  );
};

export default SettingsScreen;
