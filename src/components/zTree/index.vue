<template>
  <div>
    <div v-for="item in lists" :key="item.name" class="level_one">
      <span v-if="item.children.length" @click="handleToggle" class="open_icon">{{ isOpen ? '-' : '+' }}</span>
      {{ item.name }}
      <div v-if="item.children" v-show="isOpen" class="level_two">
        <z-tree :lists="item.children"></z-tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zTree', // 递归组件需name
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      isOpen: true,
    }
  },
  methods: {
    handleToggle () {
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style lang="less" scoped>
  .level_one {
    font-size: 18px;

    .level_two {
      font-size: 16px;
      padding-left: 20px;
    }

    .open_icon {
      padding: 5px;
      font-size: 20px;
      cursor: pointer;
    }
  }
</style>