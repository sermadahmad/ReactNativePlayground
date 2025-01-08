import { Vibration } from "react-native";

const vibrate = () => {
    if (Vibration.vibrate) {
        Vibration.vibrate(100);
    }
  }

export default vibrate;