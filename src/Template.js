import React from 'react';
import PropTypes from 'prop-types';
/*
import icon from './assets/images/favicon.ico'
import {Helmet} from "react-helmet"
*/

const Template = (props) => {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta charSet="utf-8" />
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
        <div id="outlet">
          {props.children}
        </div>
        <script async src="/bundle.js" />
      </body>
    </html>
  );
};

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Template;
