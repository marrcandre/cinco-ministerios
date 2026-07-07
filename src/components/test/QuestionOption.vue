<script setup lang="ts">
import type { Ministry } from '@/domain/types'

interface Props {
  text: string
  ministry: Ministry
  selected: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})

const emit = defineEmits<{
  select: [ministry: Ministry]
}>()
</script>

<template>
  <button
    class="question-option"
    :class="{ 'question-option--selected': selected }"
    :disabled="disabled"
    @click="emit('select', ministry)"
  >
    <span class="question-option__indicator" :class="{ 'question-option__indicator--selected': selected }">
      <v-icon v-if="selected" icon="mdi-check" size="small" />
    </span>
    <span class="question-option__text">{{ text }}</span>
  </button>
</template>

<style scoped>
.question-option {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  width: 100%;
  padding: var(--spacing-md);
  text-align: left;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-normal);
}

.question-option:hover {
  border-color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 4%, transparent);
}

.question-option--selected {
  border-color: var(--color-primary);
  border-left: 4px solid var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
}

.question-option__indicator {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.0625rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-full);
  transition: all 0.2s ease;
  color: #ffffff;
}

.question-option__indicator--selected {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}

.question-option__text {
  flex: 1;
}
</style>
