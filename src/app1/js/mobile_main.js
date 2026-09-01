/**
 * @file app1<br>
 *       mobile_main.js<br>
 *       イベント定義
 * @author INET
 */

import CN from './const/common_constant';
import indexShow from './event/common_index_show';
import CreateEditShow from './event/common_create_edit_show';
import DetailShow from './event/common_detail_show';
import Submit from './event/common_submit';
import SubmitSuccess from './event/common_submit_success';
import ProcessProceed from './event/common_process_proceed';
import Change from './event/common_change';

/**
 * レコード一覧画面表示<br>
 * @function mobile.app.record.index.show
 * @memberof app1
 * @returns {Object} event イベントオブジェクト
 */
kintone.events.on(['mobile.app.record.index.show'], (event) => {
  return indexShow.exec(event);
});

/**
 * レコード追加編集画面表示<br>
 * @function mobile.app.record.create.show_mobile.app.record.edit.show
 * @memberof app1
 * @returns {Object} event イベントオブジェクト
 */
kintone.events.on(['mobile.app.record.create.show', 'mobile.app.record.edit.show'], (event) => {
  return CreateEditShow.exec(event);
});

/**
 * レコード詳細画面表示<br>
 * @function mobile.app.record.detail.show
 * @memberof app1
 * @returns {Object} event イベントオブジェクト
 */
kintone.events.on(['mobile.app.record.detail.show'], (event) => {
  return DetailShow.exec(event);
});

/**
 * レコード保存実行前<br>
 * @function mobile.app.record.create.submit_mobile.app.record.edit.submit
 * @memberof app1
 * @returns {Object} event イベントオブジェクト
 */
kintone.events.on(['mobile.app.record.create.submit', 'mobile.app.record.edit.submit'], (event) => {
  return Submit.exec(event);
});

/**
 * レコード保存実行後<br>
 * @function mobile.app.record.create.submit.success_mobile.app.record.edit.submit.success
 * @memberof app1
 * @returns {Object} event イベントオブジェクト
 */
kintone.events.on(['mobile.app.record.create.submit.success', 'mobile.app.record.edit.submit.success'], (event) => {
  return SubmitSuccess.exec(event);
});

/**
 * ステータス変更<br>
 * @function mobile.app.record.detail.process.proceed
 * @memberof app1
 * @returns {Object} event イベントオブジェクト
 */
kintone.events.on(['mobile.app.record.detail.process.proceed'], (event) => {
  return ProcessProceed.exec(event);
});

/**
 * フィールド変更<br>
 * @function mobile.app.record.change
 * @memberof app1
 * @returns {Object} event イベントオブジェクト
 */
kintone.events.on(CN.CHANGE_EVENT.map((dl) => dl.events).flat(), (event) => {
  return Change.exec(event);
});
