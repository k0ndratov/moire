import { createRouter, createWebHistory } from 'vue-router';
import CatalogView from '@/views/CatalogView.vue';
import ProductView from '@/views/ProductView.vue';
import СartView from '@/views/CartView.vue';
import OrderNewView from '@/views/OrderNewView.vue';
import OrderView from '@/views/OrderView.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'catalogView',
    component: CatalogView,
    meta: { name: 'Каталог' },
  },
  {
    path: '/product/:id',
    name: 'productView',
    component: ProductView,
    meta: { name: 'Продукт' },
  },
  {
    path: '/cart',
    name: 'cartView',
    component: СartView,
    meta: { name: 'Корзина' },
  },
  {
    path: '/order/new',
    name: 'orderNewView',
    component: OrderNewView,
    meta: { name: 'Новый заказ' },
  },
  {
    path: '/order/:id',
    name: 'orderView',
    component: OrderView,
    meta: { name: 'Заказ' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
