window.config = {
  transpiler: 'plugin-babel',
  meta: {
    'devextreme/localization.js': {
      'esModule': true,
    },
  },
  paths: {
    'npm:': 'https://unpkg.com/',
  },
  defaultExtension: 'js',
  map: {
    'react': 'npm:react@17.0.2/umd/react.development.js',
    'react-dom': 'npm:react-dom@17.0.2/umd/react-dom.development.js',
    'prop-types': 'npm:prop-types@15.8.1/prop-types.js',
    'rrule': 'npm:rrule@2.6.4/dist/es5/rrule.js',
    'luxon': 'npm:luxon@1.28.0/build/global/luxon.min.js',
    'es6-object-assign': 'npm:es6-object-assign@1.1.0',
    'devextreme': 'npm:devextreme@22.1.4/cjs',
    'devextreme-react': 'npm:devextreme-react@22.1.4',
    'jszip': 'npm:jszip@3.7.1/dist/jszip.min.js',
    'devextreme-quill': 'npm:devextreme-quill@1.5.16/dist/dx-quill.min.js',
    'devexpress-diagram': 'npm:devexpress-diagram@2.1.63/dist/dx-diagram.js',
    'devexpress-gantt': 'npm:devexpress-gantt@4.1.32/dist/dx-gantt.js',
    '@devextreme/runtime': 'npm:@devextreme/runtime@3.0.7',
    'inferno': 'npm:inferno@7.4.4/dist/inferno.min.js',
    'inferno-compat': 'npm:inferno-compat@7.4.11/dist/inferno-compat.min.js',
    'inferno-create-element': 'npm:inferno-create-element@7.4.11/dist/inferno-create-element.min.js',
    'inferno-dom': 'npm:inferno-dom/dist/inferno-dom.min.js',
    'inferno-hydrate': 'npm:inferno-hydrate@7.4.11/dist/inferno-hydrate.min.js',
    'inferno-clone-vnode': 'npm:inferno-clone-vnode@7.4.11/dist/inferno-clone-vnode.min.js',
    'inferno-create-class': 'npm:inferno-create-class@7.4.11/dist/inferno-create-class.min.js',
    'inferno-extras': 'npm:inferno-extras@7.4.11/dist/inferno-extras.min.js',
    // SystemJS plugins
    'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25/plugin-babel.js',
    'systemjs-babel-build': 'npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',
  },
  packages: {
    'devextreme': {
      defaultExtension: 'js',
    },
    'devextreme-react': {
      main: 'index.js',
    },
    'devextreme/events/utils': {
      main: 'index',
    },
    'devextreme/events': {
      main: 'index',
    },
    'es6-object-assign': {
      main: './index.js',
      defaultExtension: 'js',
    },
  },
  packageConfigPaths: [
    'npm:@devextreme/*/package.json',
    'npm:@devextreme/runtime@3.0.7/inferno/package.json',
  ],
  babelOptions: {
    sourceMaps: false,
    stage0: true,
    react: true,
  },
};
System.config(window.config);
​
