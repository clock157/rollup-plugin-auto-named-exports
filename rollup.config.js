import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import pkg from './package.json'

const config = {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        }
    ],
    plugins: [
        builtins(),
        json(),
        nodeResolve(),
        commonjs(),
        typescript()
    ],
    external: Object.keys(pkg.dependencies).concat(['crypto'])
}

export default config;