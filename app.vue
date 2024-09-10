<script setup>

useHead({
  title: "Tiago Villa",
  meta: [{ name: 'description', content: "Tiago Villa's personal webiste" }]
})

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- <SiteHeader /> -->
    <main class="mx-auto max-w-7xl px-2 sm:px-6 grow items-start lg:px-8 w-full">
      <NuxtPage />
    </main>
    <SiteFooter />

  </div>
</template>
