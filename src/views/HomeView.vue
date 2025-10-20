<template>
  <div class="home">
      <input v-model="firstname" placeholder="First Name" />
      <input v-model="lastname" placeholder="Last Name" />
      <input v-model.number="age" type="number" placeholder="Age (optional)" />
      <p>Your name is: {{ firstname }} {{ lastname }}</p>
      <p>Your username is: {{ username }}</p><p v-if="age"> and your age is {{ age }}</p>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue';


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
    const age = ref(null);

    const username = computed(() => {
      return firstname.value.trim().replace(/\s+/g, '').toLowerCase() + '.' + lastname.value.trim().replace(/\s+/g, '').toLowerCase();
    });

    watch(age, (newAge) => {
      if (newAge !== null && (isNaN(newAge) || newAge < 0)) {
        age.value = null; // Reset age if invalid
        alert('Please enter a valid age.');
      }
    });

    watch([firstname, lastname], ([newFirst, newLast]) => {
      console.log(`Name changed to: ${newFirst} ${newLast}`);
    });

    watch([firstname, lastname], (newValues, oldValues) => {
      const [newFirst, newLast] = newValues;
      const [oldFirst, oldLast] = oldValues;
      console.log(`Name changed from: ${oldFirst} ${oldLast} to: ${newFirst} ${newLast}`);
    });

    return {
      firstname,
      lastname,
      username,
      age
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
