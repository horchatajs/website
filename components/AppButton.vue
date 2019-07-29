<template>
  <div class="flex flex-col items-center xl:items-end pb-4 rubik">
    <a 
      target="_blank" 
      :href="link" 
      class="flex justify-center bg-yellow-400 rounded hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:shadow-outline inline-block px-6 py-3 uppercase tracking-wider font-medium text-sm"
    >
      <slot name="button-text" />
      <slot name="icon" />
    </a>
    <div class="text-sm text-gray-500 mt-3 font-thin tracking-wide leading-normal">
      <slot name="sub-text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style>
</style>
