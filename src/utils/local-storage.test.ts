/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

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
    setItem: jest.fn((key: string, value: unknown) => {
      store[key] = JSON.stringify(value);
    }),
    removeItem: jest.fn((key: string) => {
      store[key] = '';
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

  it('getItem 메소드를 실행할 때 존재하지 않는 key로 접근하면 null을 리턴한다.', () => {
    const key = 'notExist';

    const retrievedValue = LocalStorage.getItem(key);

    expect(retrievedValue).toBeNull();
    expect(localStorageMock.getItem).toHaveBeenCalledWith(key);
  });

  it('setItem 메소드를 실행하면 값이 localStorage에 저장된다.', () => {
    const key = 'key';
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

  it('removeItem 메소드를 실행하면 저장된 값이 삭제된다.', () => {
    const key = 'key';
    const value = 'value';

    LocalStorage.setItem(key, value);

    const item = LocalStorage.getItem(key);

    expect(item).toBe(value);

    LocalStorage.removeItem(key);

    const newItem = LocalStorage.getItem(key);

    expect(newItem).toBeNull();
  });
});
