package com.myip

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        // Показать экран загрузки перед вызовом super.onCreate
        SplashScreen.show(this)  
        super.onCreate(savedInstanceState)
    }

    /**
     * Возвращает имя главного компонента, зарегистрированного в JavaScript.
     * Используется для запуска рендеринга компонента.
     */
    override fun getMainComponentName(): String = "myIP"

    /**
     * Возвращает экземпляр [ReactActivityDelegate]. 
     * Используется [DefaultReactActivityDelegate] для включения новой архитектуры.
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
