(function(global) {

  var ngVer = '@2.0.0-rc.5', // lock in the angular package version; do not let it float to current!
    formVer = '@0.3.0',
    routerVer = '@3.0.0-rc.1',
    materialVer = '@2.0.0-alpha.7-4';

  //map tells the System loader where to look for things
  var  map = {
    'app':                        'src', // 'dist',
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api' // get latest
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js', main: 'Rx.js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular2-material/core',
    '@angular2-material/tabs',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/testing',
    '@angular/upgrade'
  ];

  // add map entries for angular packages in the form '@angular/common': 'https://npmcdn.com/@angular/common@0.0.0-3'
  packageNames.forEach(function(pkgName) {
    var ver = pkgName.includes('forms') ? formVer
      : pkgName.includes('router') ? routerVer
      : pkgName.includes('angular2-material') ? materialVer
      : ngVer;

    map[pkgName] = 'https://npmcdn.com/' + pkgName + ver;
  });

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    var format = pkgName.includes('angular2-material')
      ? { format: 'cjs', defaultExtension: 'js', main: pkgName.split('/')[1] + '.js' }
      : { main: 'index.js', defaultExtension: 'js' };

    packages[pkgName] = format;
  });

  var config = {
    transpiler: 'typescript',
    typescriptOptions: {
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  };

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
