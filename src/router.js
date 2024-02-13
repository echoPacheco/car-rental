import { createRouter, createWebHistory } from "vue-router";
import CarHome from "./views/CarHome.vue";
import SignIn from "./views/SignIn.vue";
import RegisterAccount from "./views/RegisterAccount.vue";
import BookCars from "./views/BookCars.vue";
import CheckoutDetail from "./views/CheckoutDetail.vue";
import PreviousBookings from "./views/PreviousBookings.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const routes = [
  {
    path: "/",
    name: "CarHome",
    component: CarHome,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "RegisterAccount",
    component: RegisterAccount,
  },
  {
    path: "/cars",
    name: "cars",
    component: BookCars,
  },
  {
    path: "/checkout/:carData/:carImage",
    name: "CheckoutDetail",
    component: CheckoutDetail,
    props: true,
  },
  {
    path: "/previousBookings",
    name: "PreviousBookings",
    component: PreviousBookings,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      (error) => {
        console.error('Error in onAuthStateChanged:', error);
        removeListener();
        reject(error);
      }
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
