import { Client } from '@notionhq/client';

const NotionDB = new Client({
	auth: process.env.NOTION_SECRET_KEY
});

export default NotionDB;
