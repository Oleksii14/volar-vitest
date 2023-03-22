<script lang="ts" setup>
defineProps<{
  title: string;
}>();
// fixes the issue
// defineEmits([] as string[]);
</script>

<template>
  <section class="w-flex">
    <slot />
    {{ title }}
  </section>
</template>