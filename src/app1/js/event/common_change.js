/**
 * @file app1<br>
 *       common_change.js<br>
 *       フィールド変更時の処理
 * @author INET
 */

import CN from '../const/common_constant';

const func = {
  /**
   * フィールドを変更したタイミングで実行するプログラム<br>
   * @function
   * @memberof app1
   * @param {Object} event イベントオブジェクト
   * @returns {Object} event イベントオブジェクト
   */
  exec(event) {
    const result = CN.CHANGE_EVENT.find((dl) => dl.events.some((ev) => ev === event.type));
    if (result) {
      result.funcNames.forEach((funcName) => {
        if (func[funcName]) {
          func[funcName](event);
        }
      });
    }

    return event;
  },
  /**
   * フィールドフィールドを変更したタイミングで実行するプログラム<br>
   * @function
   * @memberof app1
   * @param {Object} event イベントオブジェクト
   * @returns {Object} event イベントオブジェクト
   */
  [`フィールド`](event) {
    alert('change');
    return event;
  }
};

export default func;
