<template>
  <div class="home">
    <!-- <HelloWorld v-model="test" :msg="abc" @change="fun" :name.sync="active" :age.sync="menu" v-bind.sync="doc">
    </HelloWorld> -->
    <!-- <button @click="goAbout">切换页面</button>
    <button @click="clone">克隆</button> -->
    <button @click="add">增加属性</button>
    {{ doc }}
    {{ newDoc }}
    {{ abc | capitalize }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'
import _ from 'lodash'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      obj: {},
      test: 100,
      abc: 'abc',
      active: [1, 2, 3, 4, 5],
      menu: ['苹果', '西瓜'],
      doc: {
        grade: 1,
        count: 200,
        address: '深圳',
        f123: function () {
          console.log(123)
        },
        o1: {
          score: 1,
          num: 3
        }
      }
    }
  },
  computed: {
    newDoc(){
      console.log(this.doc,'doc')
      axios({
          url:'http://geek.itheima.net/v1_0/authorizations',
          method:'POST',
          data:{
            code:"246810",
            mobile:"13888888888"
          }
        }).then((res=>{
          console.log(res)
        }))
      return this.doc.o1
    }
    // newDoc: {
    //   get() {
    //     console.log(this.doc, 'doc')
    //     axios({
    //       url: 'http://geek.itheima.net/v1_0/authorizations',
    //       method: 'POST',
    //       data: {
    //         code: "246810",
    //         mobile: "13888888888"
    //       }
    //     }).then((res => {
    //       console.log(res)
    //     }))
    //     return this.doc.o1.score
    //   },
    //   set(val){
    //     console.log('set')
    //     console.log(val)
    //   }

    // }
  },
  watch: {
    // question:function(newQuestion,oldQuestion){
    //   console.log(newQuestion,oldQuestion)
    // }
    // question: function (newQuestion) {
    //   console.log(newQuestion)
    // }
    // question(newVal){
    //   console.log(newVal)
    // },
    // doc(newVal,oldVal){
    //   console.log(newVal,oldVal)
    // }
    doc: {
      handler(newVal, oldVal) {
        // console.log(newVal,oldVal)
        axios({
          url: 'http://geek.itheima.net/v1_0/authorizations',
          method: 'POST',
          data: {
            code: "246810",
            mobile: "13888888888"
          }
        }).then((res => {
          // console.log(res)
        }))
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    add() {
      // this.doc.o1.home='shenzhen'
      this.$set(this.doc.o1, 'home', 'shenzhen')
      // this.$set(this.newDoc, 'home', 'shenzhen')
      // this.newDoc=5
    },
    deepClone(source) {
      if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'deepClone')
      }
      const targetObj = source.constructor === Array ? [] : {}
      Object.keys(source).forEach((keys) => {
        if (source[keys] && typeof source[keys] === 'object') {
          targetObj[keys] = this.deepClone(source[keys])
        } else {
          targetObj[keys] = source[keys]
        }
      })
      return targetObj
    },
    deepClone(source) {
      return JSON.parse(JSON.stringify(source))
    },
    fun(v) {
      console.log(v)
    },
    clone() {
      this.obj = this.deepClone(this.doc)
      console.log(this.obj)
      console.log(this.obj == this.doc)
      console.log(this.obj.f123 == this.doc.f123)
      console.log(this.obj.o1 == this.doc.o1)
    },
    goAbout() {
      // this.$router.push('/about/13?name=abc&age=100')
      this.$router.push({
        name: 'about', params: {
          id: 20
        },
        query: {
          plan: this.doc
        }
      })
    },
  }
}
</script>
