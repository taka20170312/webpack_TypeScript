/**
 * @file app1<br>
 *       common_index_show.js<br>
 *       レコード一覧画面表示時の処理
 * @author INET
 */

import momoHtml from '../../html/test.html';
import '../../css/test.css';

const func = {
  /**
   * レコード一覧画面を開いたタイミングで実行するプログラム<br>
   * @function
   * @memberof app1
   * @param {Object} event イベントオブジェクト
   * @returns {Object} event イベントオブジェクト
   */
  exec(event) {
    // 画像表示
    const space = kintone.app.getHeaderMenuSpaceElement();
    const html = new DOMParser().parseFromString(momoHtml, 'text/html').body.firstElementChild;
    if (space) {
      space.append(html);
    }

    return event;
  },
};

export default func;
