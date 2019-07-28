<template>
  <div class="flex flex-col items-center lg:items-end mb-0 rubik">
    <button class="flex justify-center bg-yellow-400 mt-8 lg:mt-12 pr-5 pl-5 h-12 rounded hover:bg-yellow-500 active:bg-yellow-600 outline-none">
      <slot name="button-text" />
      <slot name="icon" />
    </button>
    <div class="text-xs text-grey mt-3">
      <slot name="sub-text" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
