/**
 * @file app1<br>
 *       common_index_show.ts<br>
 *       レコード一覧画面表示時の処理
 * @author INET
 */

import momoHtml from '../../html/test.html';
import '../../css/test.css';

interface IndexShowFunc {
  /**
   * レコード一覧画面を開いたタイミングで実行するプログラム<br>
   * @param event イベントオブジェクト
   * @returns event イベントオブジェクト
   */
  exec(event: KintoneEvent): KintoneEvent;
}

const func: IndexShowFunc = {
  exec(event: KintoneEvent): KintoneEvent {
    // 画像表示
    const space = kintone.app.getHeaderMenuSpaceElement();
    const html = new DOMParser().parseFromString(momoHtml, 'text/html').body
      .firstElementChild;
    if (space && html) {
      space.append(html);
    }

    return event;
  },
};

export default func;
