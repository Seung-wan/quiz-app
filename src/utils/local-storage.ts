import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';

type LocalStorageKeys =
  (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];

export class LocalStorage {
  static getItem(key: LocalStorageKeys) {
    try {
      const item = localStorage.getItem(key);

      if (!item) {
        return null;
      }

      return JSON.parse(item);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('로컬스토리지를 접근할 때 에러가 발생했어요.');
    }
  }

  static setItem(key: LocalStorageKeys, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('로컬스토리지를 접근할 때 에러가 발생했어요.');
    }
  }

  static removeItem(key: LocalStorageKeys) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error('로컬스토리지를 접근할 때 에러가 발생했어요.');
    }
  }
}
