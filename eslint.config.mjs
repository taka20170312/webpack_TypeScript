import kintoneCustomize from "@cybozu/eslint-config/presets/kintone-customize";
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  ...kintoneCustomize,
  {
    plugins: {jsdoc},
  },
  {
    rules: {
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          }
        }
      ]
    }
  }
];
