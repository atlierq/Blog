<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <img class="logo" src="@/assets/logo.svg"  />
        </el-header>
        <el-main>
          <el-form  ref="form" :model="username" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>


        </el-main>
      </el-container>
    </div>
</template>

<script>
export default {

  name: "Login",

  data() {
    return {
      form: {
        username:'markerhub',
        password:'111111'
      }
    }
  },
  methods: {

    onSubmit() {
      this.axios.post('/login',this.form).then(res=>{
        const _this = this
        console.log(res)
        const jwt = res.headers['authorization']

        const userInfo = res.data.data
        // console.log(userInfo)
        _this.$store.commit("SET_TOKEN",jwt)
        _this.$store.commit("SET_USERINFO",userInfo)

        // console.log(this.$store.getters.getUser)
        this.$router.push("/blogs")


      })
      console.log('submit!');
    }
  }
}
</script>


<style scoped>



.el-header, .el-footer {
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  place-items: center;
}



.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  place-items: center;
}

.logo{
  height: 100%;
}

</style>
