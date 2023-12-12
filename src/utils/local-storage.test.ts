import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';

import { LocalStorage } from './local-storage';

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: jest.fn((key: string) => {
      const item = store[key];
      if (!item) {
        return null;
      }

      return JSON.parse(item);
    }),
    setItem: jest.fn((key: string, value: any) => {
      store[key] = JSON.stringify(value);
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('LocalStorage', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  test('setItem 메소드를 실행하면 값이 localStorage에 저장된다.', () => {
    const key = LOCAL_STORAGE_KEYS.QUIZ_RESULT;
    const value = { someData: 'test' };

    LocalStorage.setItem(key, value);

    const retrievedValue = LocalStorage.getItem(key);

    expect(retrievedValue).toEqual(value);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value),
    );
    expect(localStorageMock.getItem).toHaveBeenCalledWith(key);
  });

  test('localStorage에 존재하지 않는 key로 접근하면 null을 리턴한다.', () => {
    const key = 'notExist';

    const retrievedValue = LocalStorage.getItem(key);

    expect(retrievedValue).toBeNull();
    expect(localStorageMock.getItem).toHaveBeenCalledWith(key);
  });
});
