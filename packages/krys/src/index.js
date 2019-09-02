import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './reset.css'

// import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import configureStore from './configureStore'
import { breakpoints, spacing, typeHierarchy, typography } from './theme'

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

const MOUNT_NODE = document.getElementById('root')

const preloadedState = {
  'theme/breakpoints': breakpoints,
  'theme/colors': {
    brandColors: { '123132': '#9f3dff' }
  },
  'theme/spacing': spacing,
  'theme/typeHierarchy': typeHierarchy,
  'theme/typography': typography,
  'ui/viewportSize': Object.values(breakpoints)[0], // refactor this later
  'ui/zoom': 100,
  library: {
    byComponentName: {
      Button: {
        name: 'Button',
        Tag: 'button',
        style: {
          color: 'red',
          width: 'auto',
          height: '20px'
        },
        defaultProps: {
          children: 'Button'
        }
      },
      Button2: {
        name: 'Button2',
        Tag: 'button',
        style: {
          color: 'red',
          width: 'auto'
        },
        defaultProps: {
          children: 'Button'
        }
      },
      H1: {
        name: 'H1',
        Tag: 'h1',
        style: {
          color: 'blue'
        },
        defaultProps: {
          children: 'Big Title'
        }
      }
    },
    allComponents: ['Button', 'Button2', 'H1']
  },
  'canvas/positioning': {
    '12314214': {
      x: 20,
      y: 20,
      w: 500,
      h: 300,
      r: 0
    },
    '1324': { x: 600, y: 40, w: 500, h: 300, r: 0 }
  },
  'canvas/nodes': {
    root: {
      id: 'root',
      childNodeIds: ['12314214', '1324'],
      style: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(241, 244, 247, 1)'
      }
    },
    '12314214': {
      id: '12314214',
      Tag: 'div',
      type: 'Frame',
      freeDragging: true,
      // position: { x: 20, y: 20, w: 500, h: 300 }, // get from draw rectangle
      componentRef: null,
      style: {
        top: 0,
        left: 0,
        position: 'absolute',
        transform: `translate3d(20px, 20px, 0) rotate(0deg)`,
        width: 500,
        height: 300,
        backgroundColor: 'rgba(255,255,255,1)',
        boxShadow: '0 1px 6px 0 rgba(0,0,0,0.1)'
      },
      parentNodeId: 'root',
      childNodeIds: []
    },
    '1324': {
      id: '1324',
      Tag: 'div',
      type: 'Frame',
      freeDragging: true,
      // position: { x: 600, y: 40, w: 500, h: 300 },
      style: {
        top: 0,
        left: 0,
        position: 'absolute',
        transform: `translate3d(600px, 40px, 0) rotate(0deg)`,
        width: 500,
        height: 300,
        backgroundColor: 'rgba(255,255,255,1)',
        boxShadow: '0 1px 6px 0 rgba(0,0,0,0.1), 0 3px 6px 0 rgba(0,0,0,0.1)'
      },
      parentNodeId: 'root',
      childNodeIds: []
    }
  }
}

const store = configureStore(preloadedState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
)
// registerServiceWorker()
