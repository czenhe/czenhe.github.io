import { getBlocks, getSupportedBlocks, getAsSensiblyStructuredBlocks } from '$lib/notion';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function load({ params }) {
  const { id } = params;
  const result = await getBlocks(id);
  return {
    body: {
      result: getAsSensiblyStructuredBlocks(getSupportedBlocks(result))
    }
  };
}
