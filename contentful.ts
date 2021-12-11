import * as contentful from 'contentful'
const config = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}

export const createClient = () => {
  return contentful.createClient(config)
}