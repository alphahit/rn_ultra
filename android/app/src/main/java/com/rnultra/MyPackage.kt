package com.rnultra
// Import necessary React Native classes for creating React packages
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.uimanager.ViewManager
// The package class that tells React Native about the native modules we have created
class MyPackage : ReactPackage {
    // This method returns a list of NativeModules
    // Here, we are registering MyModule as a native module
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(MyModule(reactContext))
    }
    
    // This method returns a list of ViewManagers, but we don't have any custom view managers in this case
    // Therefore, we return an empty list
    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }
}
