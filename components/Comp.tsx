import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface DataProps {
  title: string;
  desc: string;
}

interface CompProps {
  data: DataProps;
}

const Comp: React.FC<CompProps> = ({data: {title, desc}}) => {
  return (
    <View>
        <Text>hello {title}</Text>
        <Text>{desc}</Text>
        <Text>fdsfs fds </Text>
        
    </View>
  );
};

export default Comp;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  txt1: {
    color: 'blue',
    fontSize: 20,
  },
  txt2: {
    color: 'blue',
    fontSize: 20,
  },
});
