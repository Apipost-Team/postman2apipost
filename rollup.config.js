import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs'
import dts from "rollup-plugin-dts";
import copy from 'rollup-plugin-copy';

export default [{
  name:'postman2apipost',
  input: 'src/index.ts',
  output: {
    name:'postman2apipost',
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/postman_schema2.0.ts', dest: 'dist/' },
        { src: 'src/postman_schema2.1.ts', dest: 'dist/' },
      ]
    })
  ]
},
{
  input: "src/index.ts",
  output: [{ file: "dist/index.d.ts", format: "es" }],
  plugins: [dts()],
}]
