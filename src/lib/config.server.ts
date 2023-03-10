export const appConfig = {
  notion: {
    // token: 'secret_B8Y62xvxYqksYEJD3wAfWlMH3RHfDNG3pGraGq6v3IX',
    // databaseId: 'bfca80fe77574392abb18e3356c06d3e'
    token: String(import.meta.env.NOTION_API_KEY || process['env']['NOTION_API_KEY']),
    databaseId: String(
      import.meta.env.NOTION_ESSAY_DATABASE_ID || process['env']['NOTION_ESSAY_DATABASE_ID']
    )
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
