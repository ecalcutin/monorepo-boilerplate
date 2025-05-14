import path from 'node:path';
import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import { configs } from '@packages/shared';

export default merge<Configuration>(configs.sharedWebpackConfig, {
  entry: './src/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    clean: false,
  },
});
