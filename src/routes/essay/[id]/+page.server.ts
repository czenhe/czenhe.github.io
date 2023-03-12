import {
  getPageTitle,
  getBlocks,
  getSupportedBlocks,
  getAsSensiblyStructuredBlocks
} from '$notion';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function load({ params }: { params: any }) {
  const { id } = params;
  const postTitle = await getPageTitle(id);
  const result = await getBlocks(id);
  return {
    result: getAsSensiblyStructuredBlocks(getSupportedBlocks(result)),
    title: postTitle
  };
}
