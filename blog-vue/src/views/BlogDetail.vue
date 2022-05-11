<template>
  <div >
    <Header></Header>
    <div class="m-content">
      <h1>{{blog.title}}</h1>
      <el-link @click="edit" v-if="ownBlog">
        <Edit/>编辑
      </el-link>

      <el-divider></el-divider>
      <md-editor v-model="blog.content" previewOnly="true" ></md-editor>
    </div>

  </div>
</template>

<script>
import {Edit} from '@element-plus/icons-vue'
import Header from "../components/Header.vue";
import MdEditor from 'md-editor-v3';
export default {
  name: "BlogDetail",
  components: {Header,MdEditor,Edit},
  data(){
    return{
      blog:{
        title:'还没有起标题哦~',
        content:'加载中...',
        id:'',
        userId:''

      },
      ownBlog:false

    }
  },
  methods:{
    edit(){
      this.$router.push('/blog/'+this.id+'/edit')
    }
  },
  created() {
    this.id=this.$route.params.blogId

    if(this.id){
      this.axios.get('/blog/'+this.id).then(res=>{
        this.blog= res.data.data
        this.ownBlog = (this.blog.userId === this.$store.getters.getUser.id)


      })
    }

  }
}
</script>

<style scoped>
.m-content{
  width:80%;
  min-height: 700px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 20px 15px;
  margin: 0 auto;


}

</style>
