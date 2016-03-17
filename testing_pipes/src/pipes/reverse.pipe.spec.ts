import {
  describe,
  expect,
  it,
  beforeEachProviders,
  beforeEach,
  inject
} from 'angular2/testing';

import {
  ReversePipe
} from './reverse.pipe';

describe('Reverse Pipe', () => {
  let pipe;
  
  beforeEachProviders(() => [
    ReversePipe
  ]);
  
  beforeEach(inject([ReversePipe], p => {
    pipe = p;
  }));
  
  it('should handle an empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('should reverse a string', () => {
    expect(pipe.transform('reverse me')).toEqual('em esrever');
  });
});