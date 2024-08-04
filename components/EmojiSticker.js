import { View, Image, StyleSheet } from 'react-native';

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View style={styles.emojiContainer}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  emojiContainer: {
    top: -350,
  },
});
