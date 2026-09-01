/**
 * @file app1<br>
 *       common_evnProgram.js<br>
 *       環境共通化クラス
 * @author INET
 */
export default class EvnProgram {
  deviceType;
  KIN_JS_API = {
    desktop: {
      app: {
        /**
         *
         */
        getId() {
          return kintone.app.getId();
        },
        record: {
          /**
           *
           */
          get() {
            return kintone.app.record.get();
          },
          /**
           *
           */
          set() {
            return kintone.app.record.set();
          },
          /**
           *
           */
          getSpaceElement(spaceCode) {
            return kintone.app.record.getSpaceElement(spaceCode);
          }
        },
      },
    },
    mobile: {
      app: {
        /**
         *
         */
        getId() {
          return kintone.mobile.app.getId();
        },
        record: {
          /**
           *
           */
          get() {
            return kintone.mobile.app.record.get();
          },
          /**
           *
           */
          set() {
            return kintone.mobile.app.record.set();
          },
          /**
           *
           */
          getSpaceElement(spaceCode) {
            return kintone.mobile.app.record.getSpaceElement(spaceCode);
          }
        }
      }
    }
  };

  /**
   * 使用するデバイスを設定
   * @param {string} deviceType 使用するデバイス
   */
  constructor(deviceType) {
    this.deviceType = deviceType;
  }

  /**
   * 環境のAPIを返す
   * @returns {Function}
   */
  prog() {
    return this.KIN_JS_API[this.deviceType];
  }
}
