<template>
  <div>
    <!-- <z-input v-model="model.username" type="password"></z-input> -->
    <!-- {{ model }} -->
    <z-form :model="formData" :rules="rules" ref="form">
      <z-form-item label="用户名" prop="username">
        <z-input v-model="formData.username"></z-input>
      </z-form-item>
      <z-form-item label="密码" prop="password">
        <z-input v-model="formData.password" type="password"></z-input>
      </z-form-item>
      <z-form-item>
        <button @click="handleSubmit">提交</button>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
  import zForm from '@/components/Form/zForm'
  import zFormItem from '@/components/Form/zFormItem'
  import zInput from '@/components/Form/zInput'
  export default {
    name: 'home',
    components: {
      zForm,
      zFormItem,
      zInput,
    },
    provide() {
      return {
        foo: 'foo',
      }
    },
    data () {
      return {
        status: true,
        formData: {
          username: 'zdd',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: 'username必填' },
          ],
          password: [
            { required: true, message: 'pwd必填' },
          ],
        },
        todos: [
          { text: 'learn slot', id: 1, isComplete: true, },
          { text: 'learn components', id: 2, isComplete: true, },
          { text: 'learn event', id: 3, isComplete: false, },
        ],
        inputVal: '',
      }
    },
    mounted () {
      // console.log(this.$refs.demo.msg)
      // console.log(this.$children[0].msg)
    },
    methods: {
      handleAdd (e) {
        console.log(e)
      },
      handleHello (e) {
        console.log(e, 1)
      },
      handleInput (e) {
        console.log(e)
      },
      handleSubmit () {
        this.$refs.form.validate((valid) => {
          console.log(valid, 'valid')
          if (valid) {
            alert('提交')
          } else {
            console.log('有错')
          }
        })
      },
    },
  }
</script>

<style>

</style>
