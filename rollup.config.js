import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
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
        json(),
        nodeResolve({
            module: true
        }),
        commonjs(),
        typescript()
    ],
    external: Object.keys(pkg.dependencies).concat(['crypto'])
}

export default config;