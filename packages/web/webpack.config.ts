import path from 'node:path';

import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';

import { configs } from '@packages/shared';

export default merge<Configuration & DevServerConfiguration>(
  configs.sharedWebpackConfig,
  {
    entry: './src/index.tsx',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: '[name].bundle.js',
      clean: true,
    },

    devServer: {
      port: 8080,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(process.cwd(), 'build'),
            to: path.resolve(process.cwd(), '..', 'core', 'build'),
          },
        ],
      }),
    ],
  },
);
