// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      AIRTABLE_API:process.env.AIRTABLE_API,
AIRTABLE_BASE_ID:process.env.AIRTABLE_BASE_ID,
    }
  }
})
