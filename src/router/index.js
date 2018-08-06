
import Router from 'vue-router'
const HelloWorld = () => import ('@/components/HelloWorld');
//import HelloWorld from '@/components/HelloWorld'
const pagemain = () => import ('../page/pagemain');//��ʵ���ַ������������д�ɺ��� Ȼ����ö԰� �����Ծ� ��Ҫ��ʱ���ٵ��ã�  �� ԭ����ѵ� ���벻��
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
  //mode: 'history',  //����˵�����ʱ��Ҫɾ�����Ҹ��˾�ը�� ��֪���ǲ���spa�������ˡ�
  routes: [
    {
      path:'',  redirect: '/article'//����index������������
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
