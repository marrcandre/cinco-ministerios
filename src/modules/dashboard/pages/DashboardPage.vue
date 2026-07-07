<script setup lang="ts">
import PageHeader from '@/components/ui/PageHeader.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
</script>

<template>
  <div>
    <PageHeader
      title="Os Cinco Ministérios"
      description="Teste de Identificação dos Cinco Ministérios"
    />

    <SectionTitle title="Bem-vindo" />

    <EmptyState
      icon="mdi-church"
      title="Em breve"
      message="O questionário será disponibilizado em breve."
    />
  </div>
</template>
