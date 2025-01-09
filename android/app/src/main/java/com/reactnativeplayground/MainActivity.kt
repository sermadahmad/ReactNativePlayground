package com.reactnativeplayground

import android.view.KeyEvent
import com.github.kevinejohn.keyevent.KeyEventModule
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ReactNativePlayground"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flag [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  /**
   * Handle key down events for hardware keys (e.g., volume buttons).
   */
  override fun onKeyDown(keyCode: Int, event: KeyEvent): Boolean {
    if (keyCode == KeyEvent.KEYCODE_VOLUME_UP || keyCode == KeyEvent.KEYCODE_VOLUME_DOWN) {
      // Forward the event to the KeyEventModule for React Native
      KeyEventModule.getInstance().onKeyDownEvent(keyCode, event)
      return true // Consume the event, preventing the default behavior
    }
    return super.onKeyDown(keyCode, event) // Allow other keys to behave normally
  }

  /**
   * Handle key up events for hardware keys.
   */
  override fun onKeyUp(keyCode: Int, event: KeyEvent): Boolean {
    if (keyCode == KeyEvent.KEYCODE_VOLUME_UP || keyCode == KeyEvent.KEYCODE_VOLUME_DOWN) {
      // Forward the event to the KeyEventModule for React Native
      KeyEventModule.getInstance().onKeyUpEvent(keyCode, event)
      return true // Consume the event, preventing the default behavior
    }
    return super.onKeyUp(keyCode, event) // Allow other keys to behave normally
  }
}
