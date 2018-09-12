<template>
  <div class="home">
    <Button @click="handleClick('back')">返回上一页</Button>
    <Button @click="handleClick('next')">跳转下一页</Button>
    <Button @click="handleClick('push')">跳转到parent</Button>
    <Button @click="handleClick('replace')">替换到parent</Button>
    <b>{{ food }}</b>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next()
  },
  methods: {
    handleClick (type) {
      if (type === 'back'){
        this.$router.back()
      } else if (type === 'next') {
        this.$router.go(1)
      } else if (type === 'push') {
        const name = 'lihao'
        this.$router.push({
          path: `/argu/${name}`,
          // params: {
          //   name: 'lihao'
          // }
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent',
        })
      }
    }
  }
}
</script>
