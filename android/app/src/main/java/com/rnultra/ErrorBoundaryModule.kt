package com.rnultra

import android.content.Intent
import android.os.Handler
import android.os.Looper
import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class ErrorBoundaryModule(
  reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String = "ErrorBoundaryModule"

  /**
   * Called from JS with either "ram" or "storage" (or any string you like).
   * We pick the message, emit to JS, then start a native fallback Activity.
   */
  @ReactMethod
  fun triggerError(errorType: String) {
    val message = when (errorType) {
      "ram"     -> "🚨 Out of RAM! The app cannot continue."
      "storage" -> "🚨 Out of Storage! Cannot download new content."
      else      -> "🚨 Unknown native error: $errorType"
    }

    // 1️⃣ Log & send to JS if you still want JS to know
    Log.e("ErrorBoundary", message)
    sendErrorToJS(message)

    // 2️⃣ Launch your ErrorFallbackActivity on the main thread
    val intent = Intent(reactApplicationContext, ErrorFallbackActivity::class.java).apply {
      addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      putExtra("errorType", errorType)
      putExtra("errorMessage", message)
    }
    Handler(Looper.getMainLooper()).post {
      reactApplicationContext.startActivity(intent)
      currentActivity?.finish()
    }
  }


  /**
   * Throw a RuntimeException to simulate a native‐side crash.
   */
  @ReactMethod
  fun simulateNativeError() {
    val context = currentActivity
    val appContext = reactApplicationContext
    val handler = Handler(Looper.getMainLooper())
    handler.post {
      val intent = Intent(appContext, ErrorFallbackActivity::class.java)
      intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      appContext.startActivity(intent)
      // Finish the current React Native activity if possible
      context?.finish()
    }
  }

  /**  
   * Helper to emit an event back to JS if you want to show an alert there too
   */
  private fun sendErrorToJS(payload: String) {
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit("onErrorOccurred", payload)
  }
}
