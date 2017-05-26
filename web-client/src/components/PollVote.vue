<template>
<div class="poll-vote">
    <h1 class="question">{{question}}</h1>
    <div class="choices" v-for="choice in choices">
        <div class="choice">
            {{choice.name}}
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'poll-vote',
  data () {
    return {
      question: '',
      choices: []
    }
  },
  created () {
    let root = 'http://localhost:5000'
    axios.get(root + '/api/polls/' + this.$route.params.uid)
    .then((response) => {
      this.question = response.data.title
      this.choices = response.data.choices
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
</style>
