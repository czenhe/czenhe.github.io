import { getDatabase } from '$lib/notion';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function load() {
  const result = await getDatabase();
  return {
    body: {
      result
    }
  };
}
