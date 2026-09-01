/**
 * @file kintone JavaScript API の最小型定義
 *       プロジェクトで実際に使用している API のみを定義しています。
 *       必要に応じて追記してください。
 */

/** kintone イベントオブジェクト */
interface KintoneEvent {
  /** イベントタイプ (例: 'app.record.index.show') */
  type: string;
  appId?: number;
  viewId?: number;
  viewName?: string;
  record?: Record<string, KintoneFieldValue>;
  records?: Array<Record<string, KintoneFieldValue>>;
  error?: string;
  [key: string]: unknown;
}

/** フィールド値の汎用形 */
interface KintoneFieldValue {
  type?: string;
  value: unknown;
  error?: string;
  disabled?: boolean;
  lookup?: boolean;
}

interface KintoneRecordApi {
  get(): { record: Record<string, KintoneFieldValue> };
  set(data: { record: Record<string, KintoneFieldValue> }): void;
  getSpaceElement(spaceId: string): HTMLElement | null;
  getFieldElement(fieldCode: string): HTMLElement | null;
}

interface KintoneAppApi {
  getId(): number | null;
  getHeaderMenuSpaceElement(): HTMLElement | null;
  getHeaderSpaceElement(): HTMLElement | null;
  record: KintoneRecordApi;
}

interface KintoneMobileAppApi {
  getId(): number | null;
  getHeaderSpaceElement(): HTMLElement | null;
  record: KintoneRecordApi;
}

interface KintoneEventsApi {
  on(
    events: string | string[],
    handler: (event: KintoneEvent) => KintoneEvent | Promise<KintoneEvent>,
  ): void;
  off(events: string | string[]): void;
}

interface Kintone {
  app: KintoneAppApi;
  mobile: {
    app: KintoneMobileAppApi;
  };
  events: KintoneEventsApi;
}

declare const kintone: Kintone;
