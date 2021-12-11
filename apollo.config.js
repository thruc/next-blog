module.exports = {
    client: {
      name: 'client',
      includes: ['src/graphql/schema/**/*.{ts,tsx,graphql}'],
      excludes: [
        'src/graphql/queries/*.{ts,tsx,graphql}',
        'src/graphql/generated/*.{ts,tsx,graphql}',
        'src/graphql/graphql.schema.json',
      ],
      addTypename: true,
      service: {
        name: 'contentful graphql endpoint',
        url: process.env.CONTENTFUL_GRAPHQL_ENDPOINT, //TODO:　環境変数が読読み込まれていない　直打ちは動作確認済み
      },
    },
  }