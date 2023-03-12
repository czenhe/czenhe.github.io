import { getDatabase, getPublishedPost } from '$notion';
import { appConfig } from '$lib/config.server';
const { databaseId } = appConfig.notion;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function load() {
  const res = await getDatabase(databaseId.essay);
  return {
    result: getPublishedPost(res)
  };
}
