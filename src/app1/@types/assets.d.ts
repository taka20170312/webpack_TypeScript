/**
 * @file 非 JS/TS アセットのモジュール型定義
 *       webpack のローダー経由で import するファイルの型を宣言します。
 */

/** html-loader: HTML を文字列として import */
declare module '*.html' {
  const content: string;
  export default content;
}

/** css-loader + style-loader: 副作用 import 用 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

/** webpack DefinePlugin で注入されるビルド時定数 */
declare const DEVICE_TYPE: 'desktop' | 'mobile';
