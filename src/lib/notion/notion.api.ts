import { Client } from '@notionhq/client';
import { appConfig } from '../config.server';

const { token, databaseId: notionDatabaseId } = appConfig.notion;

/**
 * Initialize the Notion client
 */
export const notionClient = new Client({
  auth: token
});

/**
 * Notion's DB to pull
 * @param databaseId
 * @returns
 */
export const getDatabase = async (databaseId = notionDatabaseId.essay) => {
  console.log('token', token);
  console.log('databaseId', databaseId);
  const { results } = await notionClient.databases.query({
    database_id: databaseId
  });
  return results;
};

/**
 *
 * @param pageId PageId of the Notion page you'd like to retrieve
 * @returns
 */
export const getPage = async (pageId: string) =>
  await notionClient.pages.retrieve({ page_id: pageId });

/**
 *
 * @param blockId Block id of the Notion block you'd like to retrieve
 * @returns
 */
export const getBlocks = async (blockId: string) => {
  const { results } = await notionClient.blocks.children.list({
    block_id: blockId,
    page_size: 50
  });
  return results;
};
