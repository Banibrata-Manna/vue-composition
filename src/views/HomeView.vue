<template>
  <div class="home">
      <input v-model="firstname" placeholder="First Name" />
      <input v-model="lastname" placeholder="Last Name" />
      <p>Your name is: {{ firstname }} {{ lastname }}</p>
      <p>Your username is: {{ username }}</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue';


export default {
  name: 'HomeView',
  mounted() {
    // Logic to run when the component is mounted
  },
  created() {
    // Logic to run when the component is created
  },
  setup() {
    const firstname = ref('');
    const lastname = ref('');

    const username = computed(() => {
      return firstname.value.trim().replace(/\s+/g, '').toLowerCase() + '.' + lastname.value.trim().replace(/\s+/g, '').toLowerCase();
    });

    return {
      firstname,
      lastname,
      username
    };
  }
}
</script>

<style scoped>  
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.home input {
  margin: 10px;
  padding: 8px;
  font-size: 16px;
  width: 200px;
}
</style>
