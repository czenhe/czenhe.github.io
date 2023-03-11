import { getDatabase } from '../../lib/notion';
import { appConfig } from '../../lib/config.server';
const { databaseId } = appConfig.notion;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function load() {
  const result = await getDatabase(databaseId.essay);
  return {
    body: {
      result
    }
  };
}
