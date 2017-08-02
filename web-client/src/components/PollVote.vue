<template>
<div class="poll-vote">
    <h1 class="question">{{question}}</h1>
    <div class="choices" v-for="choice in choices">
        <div class="choice" v-on:click="_vote(choice.id)">
          <div class="name">{{choice.name}}</div>
          <div class="result"
               :style="{ width: getOptimalRatio(choice.ratio) + '%'}"
               v-show="showResults"
          >
            <div class="ratio">{{choice.ratio}}%</div>
          </div>
        </div>
    </div>
    <button id="show-results" v-on:click="toggleResults()">
        show results
    </button>
    <div id="note">NOTE: Share the link to allow people to vote</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'poll-vote',
  data () {
    return {
      question: '',
      choices: [],
      showResults: false,
      voted: false
    }
  },
  methods: {
    _vote (choiceId) {
      if (this.voted) {
        return
      }
      this.voted = true
      axios.post('/api/vote', {
        choice_id: choiceId,
        poll_id: this.poll_id,
        ip: `${Math.floor(Math.random() * 255)}` // just for debug
      }).then((response) => {
        this.question = response.data.title
        this.choices = response.data.choices
      }).catch((error) => {
        console.log(error)
      })

      this.toggleResults()
    },
    fetchData () {
      axios.get('/api/polls/' + this.$route.params.uid)
      .then((response) => {
        this.poll_id = response.data.id
        this.question = response.data.title
        this.choices = response.data.choices
      }).catch((error) => {
        console.log(error)
      })
    },
    toggleResults () {
      this.showResults = !this.showResults
    },
    getOptimalRatio (ratio) {
      if (ratio === 0) {
        return 2
      } else if (ratio === 100) {
        return 95
      } else {
        return ratio
      }
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  }
}
</script>

<style scoped>
.result{
  display: inline-block;
  background-color: #0090d3;
  margin: 5px;
  height: 100%;
  padding: 10px;
}
.ratio{
  float: right;
  color: #fff;
}
.choice{
  border: 1px solid grey;
  margin-bottom: 10px;
  padding: 5px;
}

.choice:hover{
  background: #000;
  cursor: pointer;
  color: #fff;
  opacity: 0.5;
}

.choice .name{
  margin: 10px;
}

#show-results{
  background: #000;
}

#note{
  margin-top: 10px;
  font-weight: bold;
}

</style>
