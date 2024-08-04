import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Button({ label, theme, onPress }) {
  const primary = theme === 'primary';
  return (
    <View
      style={
        primary
          ? [styles.buttonContainer, styles.buttonContainerPrimary]
          : styles.buttonContainer
      }
    >
      <Pressable
        style={primary ? [styles.button, styles.buttonPrimary] : styles.button}
        onPress={onPress}
      >
        {primary && (
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
        )}
        <Text
          style={
            primary
              ? [styles.buttonLabel, styles.buttonLabelPrimary]
              : styles.buttonLabel
          }
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  buttonContainerPrimary: {
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 18,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonPrimary: {
    backgroundColor: '#fff',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonLabelPrimary: {
    color: '#25292e',
  },
});
