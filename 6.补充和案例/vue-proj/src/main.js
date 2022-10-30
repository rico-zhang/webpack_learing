import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('hell', {
  data: () => {
    return {
      he: '你好',
    };
  },
  methods: {
    method() {
      console.log('clicked');
    },
  },
  render() {
    return (
      <div>
        <button onClick:prevent={this.method}>你好</button>
        <input type="text" v-model={this.he} />
        {this.he}
      </div>
    );
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
