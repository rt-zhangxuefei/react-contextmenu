const path = require('path');
const postcssNormalize = require('postcss-normalize');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'ReactContextMenu',
    libraryTarget: 'umd',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './src')],
        options: {
          presets: [['@babel/preset-typescript'], ['@babel/preset-env'], ['@babel/preset-react']],
          plugins: [['@babel/plugin-transform-typescript'], ['@babel/plugin-transform-react-jsx']],
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env'),
                  // Adds PostCSS Normalize as the reset css with default options,
                  // so that it honors browserslist config in package.json
                  // which in turn let's users customize the target behavior as per their needs.
                  postcssNormalize(),
                ],
              },
            },
          },
          { loader: 'less-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
};
