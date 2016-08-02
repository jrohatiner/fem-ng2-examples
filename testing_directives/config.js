(function(global) {

  var ngVer = '@2.0.0-rc.3'; // lock in the angular package version; do not let it float to current!

  //map tells the System loader where to look for things
  var  map = {
    'app':                        'src', // 'dist',
    'ng2-material':               'https://npmcdn.com/ng2-material@0.5.0',
    '@angular2-material/core':    'https://npmcdn.com/@angular2-material/core@2.0.0-alpha.5',
    // For some reason, if we don't include the checkbox code the app dies
    '@angular2-material/checkbox':'https://npmcdn.com/@angular2-material/checkbox@2.0.0-alpha.5',
    '@angular2-material/tabs':'https://npmcdn.com/@angular2-material/tabs@2.0.0-alpha.5',
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api' // get latest
  };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'ng2-material':               { main: 'index.js', defaultExtension: 'js' },
    '@angular2-material/core':    { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/tabs':    { format: 'cjs', defaultExtension: 'js', main: 'tabs.js' },
    'rxjs':                       { defaultExtension: 'js', main: 'Rx.js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var packageNames = [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/http',
      '@angular/router',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router-deprecated',
      '@angular/testing',
      '@angular/upgrade',
  ];

  // add map entries for angular packages in the form '@angular/common': 'https://npmcdn.com/@angular/common@0.0.0-3'
  packageNames.forEach(function(pkgName) {
    map[pkgName] = 'https://npmcdn.com/' + pkgName + ngVer;
  });

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    transpiler: 'typescript',
    typescriptOptions: {
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
