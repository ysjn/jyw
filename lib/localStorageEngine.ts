export class LocalStorageEngine {
  save(key: string, value: string) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {}
    return;
  }

  load(key: string) {
    let rawData: string | null = null;
    try {
      rawData = window.localStorage.getItem(key);
    } catch (e) {}
    return rawData;
  }

  remove(key: string) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  }
}
