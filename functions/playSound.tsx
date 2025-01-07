import Sound from 'react-native-sound';

const playSound = () => {
  var click = new Sound('click.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('loaded successfully');

    // Play the sound with an onEnd callback
    click.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
};

export default playSound;
