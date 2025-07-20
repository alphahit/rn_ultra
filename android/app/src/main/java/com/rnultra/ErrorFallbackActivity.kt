package com.rnultra

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView

class ErrorFallbackActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Retrieve errorType and errorMessage from Intent
        val errorType = intent.getStringExtra("errorType")
        val errorMessage = intent.getStringExtra("errorMessage")

        // Set error message for TextView, fallback to default if not provided
        val displayMessage = errorMessage ?: "Oops! The app encountered a fatal error."
        val displayErrorType = errorType?.let { "Error Type: $it" } ?: "Error Type: Unknown"

        // Create UI elements
        val errorTypeView = TextView(this).apply {
            text = displayErrorType
            textSize = 16f
            setPadding(20, 20, 20, 10)
        }

        val messageView = TextView(this).apply {
            text = displayMessage
            textSize = 18f
            setPadding(20, 10, 20, 20)
        }

        val button = Button(this).apply {
            text = "Restart App"
            setOnClickListener {
                val restartIntent = Intent(this@ErrorFallbackActivity, MainActivity::class.java).apply {
                    addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_NEW_TASK)
                }
                startActivity(restartIntent)
                finish()
                Runtime.getRuntime().exit(0)
            }
        }

        // Create layout
        val layout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(20, 20, 20, 20)
            addView(errorTypeView)
            addView(messageView)
            addView(button)
        }

        setContentView(layout)
    }
}