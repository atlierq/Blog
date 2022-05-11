<template>
  <div class="m-header">
    <h1>采菊南山下</h1>
    <div class="block">
      <el-avatar shape="square" :size="100" :src="user.avatar"/>
      <div>{{ user.username }}</div>
    </div>
    <div class="m-divide">
      <span> <el-link type="primary" href="/blogs">主页</el-link></span>
      <el-divider direction="vertical"/>
      <span><el-link type="success" href="/blog/add">发表博客</el-link></span>
      <el-divider direction="vertical" border-style="dashed"/>
      <span v-show="!hasLogin"><el-link type="primary" href="/">登录</el-link></span>
      <span v-show="hasLogin"><el-link type="danger" @click="logout">退出</el-link></span>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        username: "lethe",
        avatar: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      },
      hasLogin:false
    }
  },
  methods:{
    logout(){
      this.axios.get("/logout",{
        headers:{
          "Authorization":localStorage.getItem("token")
        }
      }).then(res=>{
        this.$store.commit("REMOVE_INFO")
        this.$router.push("/")
      })
    }
  },
  created() {
    if(this.$store.getters.getUser.username) {
      this.user.username = this.$store.getters.getUser.username
      this.user.avatar = this.$store.getters.getUser.avatar
      this.hasLogin = true
    }

  }

}
</script>

<style scoped>
.m-header {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.m-divide {
  margin: 10px 0;
}

h1 {
  text-decoration: none;
  font-size: xxx-large;
  color: hsl(118, 56%, 39%);
}
</style>
