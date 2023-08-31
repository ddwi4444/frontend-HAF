import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter);

function importComponent(path) {
  return () => import(`../components/${path}.vue`);
}

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: "/login",
      name: "login",
      meta: {
        title: "HAF - Login",
      },
      component: importComponent("user/userLogin"),
    },
    {
      path: "/register",
      name: "register",
      meta: {
        title: "HAF - Register",
      },
      component: importComponent("user/userRegister"),
    },
    {
      path: "",
      component: importComponent("main"),
      children: [{
          path: "/",
          name: "home",
          meta: {
            title: "HAF",
          },
          component: importComponent("main/landingPage"),
        },
        {
          path: "/haf-service",
          name: "haf-service",
          meta: {
            title: "HAF - Service ",
          },
          component: importComponent("services/hafService"),
        },
        {
          path: "/haf-merchandise",
          name: "haf-merchandise",
          meta: {
            title: "HAF - Merchandise ",
          },
          component: importComponent("merchandise/hafMerchandise"),
        },
        {
          path: "/haf-school",
          name: "haf-school",
          meta: {
            title: "HAF - School ",
          },
          component: importComponent("school/hafSchool"),
        },
        {
          path: "/haf-about",
          name: "haf-about",
          meta: {
            title: "HAF - About ",
          },
          component: importComponent("about/hafAbout"),
        },
        {
          path: "/haf-profile",
          name: "haf-profile",
          meta: {
            title: "HAF - Profile ",
          },
          component: importComponent("user/userProfile"),
        },
      ],
    },
    // {
    //   path: '*',
    //   redirect: '/riwayat-pencucian'
    // },
  ],
});

router.beforeEach((to, form, next) => {
  if (to.name == "login" && localStorage.getItem("userLogin") != null) {
    next({
      name: "home",
    });
  } else if (to.name == "register" && localStorage.getItem("userLogin") != null) {
    next({
      name: "home",
    });
  }

  document.title = to.meta.title;
  next();
});

export default router;