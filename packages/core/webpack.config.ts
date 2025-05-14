import path from 'node:path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import sharedConfig from '../../webpack.config';

export default merge<Configuration>(sharedConfig, {
  entry: './src/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    clean: false,
  },
});
