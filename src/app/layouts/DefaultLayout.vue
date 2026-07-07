<script setup lang="ts">
import AppHeader from '@/components/ui/AppHeader.vue'
import AppFooter from '@/components/ui/AppFooter.vue'
import AppContainer from '@/components/ui/AppContainer.vue'
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <AppContainer>
        <router-view />
      </AppContainer>
    </v-main>
    <AppFooter />
  </v-app>
</template>
