# React Native Web, iOS, Android Monorepo

Monorepos are good for lean development with limited resources.  One repo builds your app for iOS and Android, and for web.  The code is shared in the Components folder, any changes you make there will be available across all platforms.

Orginal Work is [brunolemos's repo on the subject](https://github.com/brunolemos/react-native-web-monorepo/).  I needed to rename a lot of the files, and will not be submitting PR's from my project, so I'm starting my own.

### How to run

_Requirements:_

_[React Native](https://facebook.github.io/react-native/docs/getting-started.html)_

_[Yarn](https://yarnpkg.com/)_

_[Android Studio](https://developer.android.com/studio)_

_[XCode](https://developer.apple.com/xcode)_

  - `$ git clone git@github.com:reallynotburner/rn_web_monorepo.git`
  - `$ cd rn_web_monorepo`
  - `$ yarn`

To see your app running in iOS or Android:
  - `$ yarn mobile`

For iOS open up rn_web_monorepo/packages/mobile/ios/rn_web_monorepo.xcodeworkspace with XCode and hit the Play button.<br>
For Android up open up rn_web_monorepo/packages/mobile/android with Android Studio and hit the play button.

To see you app running in Web
  - `$ yarn web`

Your web app is served on [localhost:3000](http://localhost:3000).

Also consider [Ben Awad's Tutorial on Youtube](https://www.youtube.com/watch?v=J0b11tvEkFQ&t=3s), his focus being React Hooks and Typescript.

See [ReNative](https://renative.org/) which has excellent CLI's to build projects across many other platforms, again, with much code reuse.

Also see [Expo CLI](https://expo.io/) which has a lot of built-in support for the mono-repo approach, including extremely valuable push notification, and on-air updating for the mobile targets.