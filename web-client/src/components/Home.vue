<template>
    <div class="home">
        <create-poll :notifications="notifications"></create-poll>
    </div>
</template>

<script>
import CreatePoll from './CreatePoll'

export default {
  name: 'home',
  props: ['notifications'],
  components: {CreatePoll}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
