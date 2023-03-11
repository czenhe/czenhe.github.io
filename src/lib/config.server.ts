export const appConfig = {
  notion: {
    token: String(import.meta.env.VITE_NOTION_API_KEY || process['env']['VITE_NOTION_API_KEY']),
    databaseId: {
      essay: String(
        import.meta.env.VITE_NOTION_ESSAY_DATABASE_ID ||
          process['env']['VITE_NOTION_ESSAY_DATABASE_ID']
      )
    }
  },
  baseUrl: String(import.meta.env.APP_URL || process['env']['APP_URL'] || ''),
  properties: {
    title: 'title',
    summary: 'summary',
    tags: 'tags',
    published: 'published',
    author: 'author'
  }
};
console.log('env info', import.meta.env);
console.log('env info2', process.env);
