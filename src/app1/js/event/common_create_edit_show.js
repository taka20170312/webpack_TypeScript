/**
 * @file app1<br>
 *       common_create_edit_show.js<br>
 *       レコード追加編集画面表示の処理
 * @author INET
 */

import TestComponent from '../../vue/test.vue';
import DevProg from '../other/common_evnProgram';

import {createApp} from 'vue';

const func = {
  /**
   * レコード追加編集画面を開いたタイミングで実行するプログラム<br>
   * @function
   * @memberof app1
   * @param {Object} event イベントオブジェクト
   * @returns {Object} event イベントオブジェクト
   */
  exec(event) {
    // eslint-disable-next-line no-undef
    const Dev = new DevProg(DEVICE_TYPE);
    const space = Dev.prog().app.record.getSpaceElement('vue-space');

    // vue表示 ※getSpaceElementで取得した要素に直接mountすると表示されない
    const divElm = document.createElement('div');
    const app = createApp(TestComponent);
    app.mount(divElm);
    space.append(divElm);

    return event;
  }
};

export default func;
