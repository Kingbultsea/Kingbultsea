
import Router from 'vue-router'
const HelloWorld = () => import ('@/components/HelloWorld');
//import HelloWorld from '@/components/HelloWorld'
const pagemain = () => import ('../page/pagemain');//其实这种方法就是让这个写成函数 然后调用对吧 ？所以就 需要的时候再调用？  哇 原理很难的 我想不到
//import pagemain from "../page/pagemain"
import pagecontent from "../page/content"
// const pagecontent = () => import ('../page/content');
const TopMain = () => import ('../components/TopMain');
//import TopMain from "../components/TopMain"
const TopBack = () => import ('../components/TopBack');
//import TopBack from "../components/TopBack"
import Article from "../page/pagearticle"


Vue.use(Router)



export default new Router({
  //mode: 'history',  //他们说打包的时候，要删掉。我改了就炸了 不知道是不是spa的问题了。
  routes: [
    {
      path:'',  redirect: '/article'//配置index可以做到定向
    },
    {
      path: '/home',
      components:{
        default:pagemain,
        top:TopMain
        }
    },
    {
      path:'/article',
      components:{
          default:Article,
          top:TopMain
      }
    },
    {
      path:'/content',
      components:{
        content:pagecontent,
        top:TopBack
      }
    }
  ]
  ,
  scrollBehavior(to,from,savedPosition){
      if(savedPosition){
          return savedPosition;
      }else{
          return {x:0,y:0}
      }
      
  }
})
