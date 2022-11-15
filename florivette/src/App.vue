<script setup>
import Background_Image from './views/First_Page.vue'
import Menu from './views/Menu.vue';
import footerVue from './views/footer.vue';
</script>
    <template>
      <router-view></router-view>
    <Menu>
      <router-link to="/a_florivette">A Florivette</router-link>
      <br>
      <router-link to="/">Portifólio</router-link>
      <br>
      <router-link to="/">Notícias</router-link>
      <br>
      <router-link to="/">Trabalhe Conosco</router-link>
    </Menu>
    <footerVue></footerVue>
</template>

  <style scoped>
  </style>
