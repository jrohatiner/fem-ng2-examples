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
    "ng2-material":"https://cdn.rawgit.com/justindujardin/ng2-material/gh-pages/v/0.2.5/ng2-material",
    'rx.all': 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/4.1.0/rx.js'
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