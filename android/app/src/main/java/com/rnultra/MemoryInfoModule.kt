package com.rnultra

import android.app.ActivityManager
import android.content.Context
import android.os.StatFs
import android.os.Environment
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class MemoryInfoModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = "MemoryInfo"

    @ReactMethod
    fun getMemoryInfo(callback: Callback) {
        // RAM Info
        val activityManager = reactContext.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        val memoryInfo = ActivityManager.MemoryInfo()
        activityManager.getMemoryInfo(memoryInfo)
        val totalRam = (memoryInfo.totalMem / (1024 * 1024)).toInt() // MB
        val availableRam = (memoryInfo.availMem / (1024 * 1024)).toInt() // MB
        val usedRam = totalRam - availableRam

        // Internal Storage Info
        val stat = StatFs(Environment.getDataDirectory().path)
        val totalStorage = (stat.totalBytes / (1024 * 1024 * 1024)).toInt() // MB
        val availableStorage = (stat.availableBytes / (1024 * 1024 * 1024)).toInt() // MB
        val usedStorage = totalStorage - availableStorage

        callback.invoke(usedRam, totalRam, usedStorage, totalStorage)
    }
} 