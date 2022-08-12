import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import './i18n'

const rootElement = document.getElementById('root') as Element

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
