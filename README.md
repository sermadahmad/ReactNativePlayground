# React Native AI Chat Application

A cross-platform mobile chat application built with React Native that integrates with Groq AI API to provide intelligent conversational responses. This project demonstrates modern React Native development practices, state management, and AI integration.

## 🚀 Features

- **AI-Powered Conversations**: Real-time chat with Groq's Llama 3.1-8b-instant model
- **Cross-Platform**: Works on both iOS and Android devices
- **Modern UI/UX**: Clean, responsive interface with smooth animations
- **State Management**: React Context API for efficient chat state management
- **Navigation**: React Navigation for seamless screen transitions
- **TypeScript**: Full TypeScript support for better code quality and developer experience
- **Environment Configuration**: Secure API key management using react-native-config

## 🛠️ Tech Stack

- **Framework**: React Native 0.76.5
- **Language**: TypeScript
- **Navigation**: React Navigation v7
- **AI Integration**: Groq SDK
- **State Management**: React Context API
- **UI Components**: React Native Vector Icons
- **Animations**: React Native Reanimated & Gesture Handler
- **Code Quality**: ESLint, Prettier
- **Testing**: Jest

## 📱 Video

https://github.com/user-attachments/assets/d03188be-8879-4aa6-a462-310cd96a98ee

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 18)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Groq API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sermadahmad/ReactNativePlayground/tree/ChatBot
   cd ReactNativePlayground
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

### Running the Application

**Start Metro bundler:**
```bash
npm start
```

**Run on Android:**
```bash
npm run android
```

**Run on iOS:**
```bash
npm run ios
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── Contexts/           # React Context for state management
│   └── ChatContext.ts  # Chat state context
├── navigation/         # Navigation configuration
│   └── AppNavigator.tsx
├── screens/           # Screen components
│   ├── HomeScreen.tsx
│   ├── HomeComponent.tsx
│   ├── ChatComponent.tsx
│   ├── SearchComponent.tsx
│   └── ButtonsComponent.tsx
├── utils/             # Utility functions
│   ├── groqApi.ts     # Groq API integration
│   └── helpers.ts
└── App.tsx           # Main application component
```

## 🔧 Configuration

### API Configuration

The app uses Groq AI API for generating responses. Configure your API key in the `.env` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests

## 🎯 Usage

1. Launch the application
2. Type your message in the search bar at the bottom
3. Tap the send button (arrow icon) to send your message
4. View the AI response in the chat interface
5. Continue the conversation with follow-up questions

## 🔒 Security

- API keys are stored securely using environment variables
- No sensitive data is logged or stored locally
- All API calls are made over HTTPS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/) - Mobile app framework
- [Groq](https://groq.com/) - AI API provider
- [React Navigation](https://reactnavigation.org/) - Navigation library
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - Icon library

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the development team.

---

