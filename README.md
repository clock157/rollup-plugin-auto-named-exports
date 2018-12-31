# rollup-plugin-auto-named-exports
Base on rollup-plugin-commonjs, auto fix Error: "[name] is not exported by [module]"

## why
[Error: "[name] is not exported by [module]"](https://rollupjs.org/guide/en#error-name-is-not-exported-by-module-)

rollup-plugin-commonjs plugin need you manual specify unresolvable named exports, it's too trivial.

this plugin can auto do something like namedExports

## install

`npm install rollup-plugin-auto-named-exports --save-dev`

## how to use

```javascript
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import autoNamedExports from 'rollup-plugin-auto-named-exports';

export default {
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        // no need manual custom
      }
    }),
    autoNamedExports()
  ]
}

```

## issue

[tree shaking not work](https://github.com/rollup/rollup/issues/2201)

