<template>
  <div>
    <Header></Header>
    <el-timeline>
      <el-timeline-item v-bind:timestamp="blog.created" placement="top" v-for="blog in blogs">
        <el-card>
          <h4>
            <router-link :to="{name:'BlogDetail',params:{blogId:blog.id}}">
              {{blog.title}}
            </router-link>

          </h4>
          <p>{{blog.description}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline >
    <el-pagination
        class="m-pagination"
        background layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        @current-change=page
    >
    </el-pagination>
  </div>
</template>

<script>
import Header  from "../components/Header.vue";
export default {
  name: "Blogs",
  components :{Header},
  data(){
    return{
      blogs:{},
      currentPage:1,
      total:0,
      pageSize:5
    }
  },
  methods:{
    page(currentPage){
      this.axios.get("/blogs?currentPage="+currentPage).then(res=>{
        console.log("res=>>"+res)
        console.log(res)
        const _this = this
        _this.blogs = res.data.data.records
        _this.currentPage = res.data.data.current
        _this.total = res.data.data.total
        _this.pageSize = res.data.data.size
      })
    }
  },
  created(){
    this.page(1 )
  }
}
</script>

<style scoped>




</style>
