<script setup lang="ts">
defineProps<{
  test: string
}>()
</script>

<template>
  <div>{{ test }}</div>
</template>
