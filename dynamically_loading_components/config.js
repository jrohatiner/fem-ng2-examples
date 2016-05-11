System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: "./src",
    "ng2-material":"https://cdn.rawgit.com/justindujardin/ng2-material/gh-pages/v/0.3.7/ng2-material"
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    'ng2-material': {
      defaultExtension: 'js'
    }
  }
});