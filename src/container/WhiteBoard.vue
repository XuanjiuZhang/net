<template>
  <div id="whiteboard-container">
  </div>
</template>
<script>
export default {
  data() {
    return {
      onLive: false
    }
  },
  mounted() {
    //开始直播，渲染白板
    window.sdkManager.startWhiteboardById('whiteboard-container')
  },
  methods: {
  },
  watch: {},
  computed: {},
  components: {}
};
</script>

<style lang="less">
</style>