<template>
  <div class="flex flex-col rubik">
    <button class="flex justify-center items-center bg-yellow mt-2 pt-3 pb-3 pl-5 pr-5 rounded hover:bg-yellow-dark outline-none">
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
