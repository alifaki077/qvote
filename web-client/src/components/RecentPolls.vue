<template>
  <div class="recent-polls">
    <h1>Recent Polls</h1>
    <div class="polls" v-for="poll in polls">
      <div class="poll">
        <router-link :to="poll.uid">{{poll.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'recent-polls',
  data () {
    return {
      polls: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('/api/polls?limit=10')
      .then((response) => {
        this.polls = response.data
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  watch: {
    $route: 'fetchData'
  }
}
</script>
<style scoped>
.recent-polls{
  margin-top: 50px;
}

.poll{
  margin-bottom: 20px;
  font-size: 22px;
}
</style>
