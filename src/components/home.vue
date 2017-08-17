<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
const changeWord = (oldStr, newStr) => {
  [...oldStr].reverse().forEach((letter, index) => {
    if (letter === newStr[index]) {

    }
  })
}
export default {
  data () {
    return {
      index: 0,
      messages: [
        '当困难选择我的时候，是不是机会也选择了我'
      ]
    }
  },
  mounted () {
    this.carousel()
  },
  computed: {
    msg () {
      return this.messages[this.index]
    }
  },
  methods: {
    carousel () {
      setTimeout(() => {
        if (this.index === (this.messages.length - 1)) {
          this.index = 0
        } else {
          this.index++
        }
        this.carousel()
      }, 10000)
    }
  }
}
</script>
