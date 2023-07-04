

import airtable from "airtable"
export const useAirtable = () => {

  airtable.configure({ apiKey: process.env.AIRTABLE_API, endpointUrl: 'https://api.airtable.com' })
  const at = airtable.base(process.env.AIRTABLE_BASE_ID as string)
  return at
}