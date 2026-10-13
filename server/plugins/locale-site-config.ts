export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('site-config:init', ({ event, siteConfig }) => {
    const path = event.path.split('?')[0] || '/'
    const isEnglish = path === '/en' || path.startsWith('/en/')

    siteConfig.push({
      _context: 'roteirize:locale',
      _priority: 1,
      currentLocale: isEnglish ? 'en' : 'pt-BR',
    })
  })
})
