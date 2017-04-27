// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  storybookBaseConfig.module.loaders.push({
    test: /\.tsx?$/,
    loaders: ['babel', 'ts-loader'],
    exclude: /node_modules/
  });

  storybookBaseConfig.ts = {
    compilerOptions: {
      jsx: 'react'
    }
  }

  storybookBaseConfig.devtool = 'eval';
  storybookBaseConfig.resolve = {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  };

  // Return the altered config
  return storybookBaseConfig;
};
