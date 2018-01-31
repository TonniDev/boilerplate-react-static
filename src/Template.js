import React from 'react'
/*import icon from './assets/images/favicon.ico'
import {Helmet} from "react-helmet"*/

export default class Template extends React.Component {
  render() {
    return (
      <html lang="pt-br">
        <head>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
          <meta charSet="utf-8"/>
          <style>
            {
              `
              #outlet {
                transition: opacity 0.35s ease-in-out;
              }
              `
            }
          </style>
        </head>
        <body>
          <div id='outlet'>
            {this.props.children}
          </div>
          <script async src="/bundle.js"></script>
        </body>
      </html>
    )
  }
}
