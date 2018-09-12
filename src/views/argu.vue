<template>
  <div>
    Hello World!
    {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'lihao'
    }
  }
}
</script>

