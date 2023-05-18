import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue';
import AppMain from "@/views/AppMain";
import AppNotice from "@/views/AppNotice";
import AppPlan from "@/views/AppPlan";
import AppPlace from "@/views/AppPlace";
import NoticeList from "@/components/notice/NoticeList";
import NoticeView from "@/components/notice/NoticeView";
import NoticeWrite from "@/components/notice/NoticeWrite";
import NoticeModify from "@/components/notice/NoticeModify";
import NoticeDelete from "@/components/notice/NoticeDelete";
import AppSignUp from "@/views/user/AppSignUp";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: AppMain,
  },
  {
    path: "/notice",
    name: "notice",
    redirect: "/notice/noticelist",
    component: AppNotice,
    children: [
      {
        path: "noticelist",
        name: "noticelist",
        component: NoticeList,
      },
      {
        path: "noticeview/:articleno",
        name: "noticeview",
        component: NoticeView,
      },
      {
        path: "noticewrite",
        name: "noticewrite",
        component: NoticeWrite,
      },
      {
        path: "noticemodify/:articleno",
        name: "noticemodify",
        component: NoticeModify,
      },
      {
        path: "noticedelete/:articleno",
        name: "noticedelete",
        component: NoticeDelete,
      },
    ],
  },
  {
    path: "/plan",
    name: "plan",
    component: AppPlan,
  },
  {
    path: "/place",
    name: "place",
    component: AppPlace,
  },
  {
    path: "/signup",
    name: "signup",
    component: AppSignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
