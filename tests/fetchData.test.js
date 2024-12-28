import { vi, test, expect } from 'vitest';
import { fetchData } from './api/functions';

test('fetchData should return data when the response is successful', async () => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: 'Success' }),
    })
  ));

  const response = await fetchData('https://example.com');
  expect(response.data).toEqual({ message: 'Success' });

  vi.unstubAllGlobals();
});

test('fetchData should return error object with status: 404 when response if 404', async () => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve({}),
    })
  ));

  await expect(fetchData('https://example.com')).resolves.toMatchObject({
    error: {
      message: expect.any(String),
      status: 404,
    },
  });

  vi.unstubAllGlobals();
});

test('fetchData should return error object with status: 500 when response if 500', async () => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      ok: false,
      status: 500,
      json: () => Promise.resolve({}),
    })
  ));

  await expect(fetchData('https://example.com')).resolves.toMatchObject({
    error: {
      message: expect.any(String),
      status: 500,
    },
  });

  vi.unstubAllGlobals();
});

test('fetchData should return error object with status: 401 when response if 401', async () => {

  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      ok: false,
      status: 401,
      json: () => Promise.resolve({}),
    })
  ));

  await expect(fetchData('https://example.com')).resolves.toMatchObject({
    error: {
      message: expect.any(String),
      status: 401,
    },
  });

  vi.unstubAllGlobals();
});


test("should handle TypeError correctly", async () => {

  global.fetch = vi.fn().mockRejectedValue(new TypeError("Network request failed"));

  const result = await fetchData("http://example.com");

  expect(result).toEqual({
    error: { message: expect.any(String), status: -1 }
  });
});

test("should handle SyntaxError correctly", async () => {

  global.fetch = vi.fn().mockRejectedValue(new SyntaxError("Network request failed"));

  const result = await fetchData("http://example.com");

  expect(result).toEqual({
    error: { message: expect.any(String), status: -2 }
  });
});