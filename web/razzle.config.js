'use strict'

const path = require('path')

module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
        useEslint: true,
        forkTsChecker: {
          tsconfig: "./tsconfig.json",
          tslint: undefined,
          watch: "./src",
          typeCheck: true,
        },
      },
    },
  ],
  modify: (defaultConfig, { target, dev }) => {
    const config = defaultConfig
    if (!dev) {
      config.performance = Object.assign(
        {},
        {
          maxAssetSize: 100000,
          maxEntrypointSize: 300000,
          hints: false
        }
      )
    }

    if (config.devServer) {
      // Handle HMR within docker env: https://github.com/jaredpalmer/razzle/issues/416
      config.devServer.watchOptions['poll'] = 1000
      config.devServer.watchOptions['aggregateTimeout'] = 300
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve('./src/components'),
      routes: path.resolve('./src/routes'),
      theme: path.resolve('./src/theme')
    }

    return config
  }
}
