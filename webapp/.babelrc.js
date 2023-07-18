const plugins = [
  [
    'babel-plugin-import',
    {
      libraryName: '@mui/material',
      libraryDirectory: '',
      camel2DashComponentName: false,
    },
    'core',
  ],
  [
    'babel-plugin-import',
    {
      libraryName: '@mui/icons-material',
      libraryDirectory: '',
      camel2DashComponentName: false,
    },
    'icons',
  ],
  [
    'module-resolver',
    {
      root: ['.'],
      extension: ['.js', '.ts', '.tsx', '.svg', '.json'],
      alias: {
        components: './src/components',
        context: './src/context',
        config: './src/config',
        layouts: './src/layouts',
        language: './src/language',
        utils: './src/utils',
        gql: './src/gql',
        hooks: './src/hooks',
        routes: './src/routes',
        types: './src/types',
      },
    },
  ],
]

module.exports = { plugins }
