<template>
  <div>
    <NavHeader />
    <KeepAlive>
      <slot />
    </KeepAlive>
    <div class="py-20">
      <WhatsappCta />
    </div>
    <Footer />
  </div>
</template>
