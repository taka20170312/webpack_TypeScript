/**
 * @file app1<br>
 *       common_constant.js<br>
 *       定数定義
 * @author INET
 */
const constants = {
  // チェンジイベント
  CHANGE_EVENT: [
    {
      events: ['app.record.create.change.フィールド', 'app.record.edit.change.フィールド',
        'mobile.app.record.create.change.フィールド', 'mobile.app.record.edit.change.フィールド'],
      funcNames: ['フィールド']
    }
  ]
};

export default constants;
