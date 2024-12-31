import React from 'react';
import {Text, View} from 'react-native';

interface CompProps {
  title: string;
}

const Header: React.FC<CompProps> = ({title}) => {
  return (
    <View
      style={{
        paddingLeft: 70,
        borderTopWidth: 1,
        paddingTop: 10,
        borderColor: 'gray',
      }}>
      <Text
        style={{
          color: 'gray',
          fontWeight: '600',
          padding: 5,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
