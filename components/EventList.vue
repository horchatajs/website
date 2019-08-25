<template>
  <div>
    <div
      v-for="(event, index) in events"
      :key="index"
      class="shadow-lg rounded-lg mx-2 my-2 bg-white inline-block">
      <img
        class="w-full rounded-t-lg"
        :src="event.image"
        alt="1.0.0">
      <div class="pl-6 pr-8 pb-4 mt-4">
        <div class="font-medium tracking-wide">
          {{ event.title }}
        </div>
        <div class="mt-2 text-xs tracking-wide font-light">
          {{ event.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  props: {
    events: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>
