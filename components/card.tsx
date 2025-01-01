import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FunctionComponent, useState} from 'react';
import {SvgProps} from 'react-native-svg';
import {FaceSmileIcon} from 'react-native-heroicons/solid';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface DataProps {
  title: string;
  desc?: string;
  Icon?: React.FC<SvgProps>;
  isCheckbox?: boolean;
}

interface CompProps {
  data: DataProps;
}

const MyCard: React.FC<CompProps> = ({
  data: {title, desc, Icon, isCheckbox},
}) => {
  const [isSelected, setSelection] = useState(true);
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => setSelection(!isSelected)}>
      {/* Icon Section */}
      <View style={styles.iconBox}>
        {Icon ? <Icon color="black" /> : <FaceSmileIcon />}
      </View>
      {/* Details Section */}
      {desc && (
        <View style={styles.detailsBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      )}
      {/* Checkbox Section */}
      {isCheckbox && (
        <View style={styles.checkBox}>
          <BouncyCheckbox
            isChecked={isSelected}
            onPress={() => setSelection(!isSelected)}
            fillColor="#4259A9"
            innerIconStyle={{borderWidth: 2}}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingRight: 20,
  },
  detailsBox: {
    flex: 1, // Allow this section to take available space
    marginHorizontal: 10, // Add some spacing on the sides
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  desc: {
    flexWrap: 'wrap', // Ensure text wraps
    fontSize: 14,
  },
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
