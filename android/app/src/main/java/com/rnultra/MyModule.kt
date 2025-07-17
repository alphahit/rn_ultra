package com.rnultra

// Importing necessary React Native classes for creating native modules
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

// Define the native module MyModule that extends ReactContextBaseJavaModule
class MyModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    // A sample native value that we will send to JavaScript
    private val myNativeValue: String = "This is a value from Native Module"

    // Overriding the getName() method to define the name of this module
    // This name is used in JavaScript to reference this native module
    override fun getName(): String {
        return "MyModule"
    }

    // ReactMethod annotation exposes this method to JavaScript
    // This method doesn't use Promise and is for logging purposes only
    @ReactMethod
    fun greet(name: String) {
        println("Hello, $name")// Log a greeting message with the given name
    }

    // ReactMethod annotation exposes this method to JavaScript
    // This method sends data from native to JavaScript using a Promise
    @ReactMethod
    fun getNativeValue(promise: Promise) {
        // Resolve the promise with the native value, sending data back to JS
        promise.resolve(myNativeValue)
    }
}
