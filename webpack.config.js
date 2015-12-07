var common = {
  context: __dirname,
  output: {
    path: 'build',
    filename: '[name].js',
  },
  module: {
    loaders: [
      // Assume all published artifacts are browser-safe (ES5).
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  devtool: 'source-map',
};

var client = {
  name: 'client',
  target: 'web',
  entry: {
    client: './client.js',
  },
};
client = Object.assign({}, common, client);

var server = {
  name: 'server',
  target: 'node',
  entry: {
    server: './server.js',
  },
  externals: function(context, request, callback) {
    // If the module name starts with . or .., assume it is not external.
    // All externals are loaded as commonjs so that it loads native in Node.
    /^\./.test(request) ? callback() : callback(null, 'commonjs ' + request);
  },
  node: {
    // Expose real paths to modules.
    __dirname: false,
    __filename: false,
  },
};
server = Object.assign({}, common, server);

module.exports = [client, server];
