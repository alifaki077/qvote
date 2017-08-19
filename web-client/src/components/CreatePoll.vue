<template>
<div class="create_poll">
    <input type="text"
           placeholder="enter your question here"
           id="question"
           v-model="question"
    >
    <div class="choices" v-for="choice in choices">
        <div class="choice" v-show="!choice.delete">
            <input type="text"
               placeholder="choice"
               v-model="choice.name"
            >
        <span id="delete-choice" v-on:click="choice.delete = true">delete</span>
        </div>
    </div>
    <button id="add-choice" v-on:click="addChoice()">Add a choice</button>
    <button id="create" v-on:click="submitPoll()">Create Poll</button>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'create-poll',
  props: ['notifications'],
  data () {
    return {
      question: '',
      choices: [{'name': '', 'delete': false}, {'name': '', 'delete': false}],
      root: process.env.ROOT || ''
    }
  },
  methods: {
    addChoice () {
      this.choices.push({'name': '', 'delete': false})
    },
    validate () {
      if (this.question === '') {
        this.notifications.push({
          'msg': 'please type the question',
          'type': 'error',
          'ignore': false
        })
        return false
      }
      let _choices = []
      for (let choice of this.choices) {
        if (choice.name !== '' && choice.delete === false) {
          _choices.push(choice.name)
        }
      }
      if (_choices.length < 2) {
        this.notifications.push({
          'msg': 'you must have at least two choices',
          'type': 'error',
          'ignore': false
        })
        return false
      }
      return _choices
    },
    submitPoll () {
      let _choices = this.validate()
      if (_choices) {
        axios.post(this.root + '/api/polls', {
          title: this.question,
          choices: _choices
        }).then((response) => {
          this.$router.push('/' + response.data.uid)
          this.notifications.push({
            msg: 'poll submitted successfully',
            type: 'success',
            ignore: false
          })
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>
.create_poll{
    margin-top: 50px;
    margin-left: 40px;
}

#question{
    margin-bottom: 20px;
    width: 50%;
    height: 40px;
}

.choice input{
    display: inline-block;
    /* 22% carefully selected */
    width: 22%;
    height: 20px;
}

#add-choice{
    background-color: #000;
}

#delete-choice{
    display: inline-block;
    color: red;
    text-decoration: underline;
    cursor: pointer;
}

@media all and (max-width: 720px){
  #question{
    width: 75%;
  }
  .choice input{
    width: 60%;
  }
}
</style>
