import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('rn_web_monorepo', () => App)
AppRegistry.runApplication('rn_web_monorepo', {
  rootTag: document.getElementById('root'),
})
