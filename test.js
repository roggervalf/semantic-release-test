const { isMatchWith, isString } = require('lodash');
const micromatch = require('micromatch');

console.log(
  isMatchWith(
    { message: 'fix: hola ' },
    { message: '!**\\[python\\]**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola )' },
    { message: '!**\\[python\\]**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola [python]' },
    { message: '!**\\[python\\]**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola [d python] ' },
    { message: '!**\\[python\\]**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'feat: only py [python]' },
    { message: '!**\\[python\\]**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);

console.log('gg');

console.log(
  isMatchWith(
    { message: 'fix: hola ' },
    { message: '!**\\(python\\)**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola )' },
    { message: '!**\\(python\\)**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola (python)' },
    { message: '!**\\(python\\)**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola (d python) ' },
    { message: '!**\\(python\\)**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'feat: only py [python]' },
    { message: '!**\\(python\\)**' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);

console.log('gg2');

console.log(
  isMatchWith(
    { message: 'fix: hola ' },
    { message: '!(*\\(python\\)*|*\\[python\\]*)' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola )' },
    { message: '!(*\\(python\\)*|*\\[python\\]*)' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola (python) ' },
    { message: '!(*\\(python\\)*|*\\[python\\]*)' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'fix: hola (d python) ' },
    { message: '!(*\\(python\\)*|*\\[python\\]*)' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);
console.log(
  isMatchWith(
    { message: 'feat: only py [python] ' },
    { message: '!(*\\(python\\)*|*\\[python\\]*)' },
    (object, src) =>
      isString(src) && isString(object)
        ? micromatch.isMatch(object, src)
        : undefined,
  ),
);

console.log('regex');
console.log(new RegExp('\\[python\\]').test('hola'));
console.log(new RegExp('\\[python\\]').test('[python]'));
console.log(new RegExp('\\[python\\]').test('hola [python]'));
console.log(new RegExp('\\[python\\]').test('[python] hola'));
console.log(new RegExp('\\[python\\]').test('[python1] hola'));
