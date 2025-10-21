<template>
  <div class="home">
      <input v-model="firstname" placeholder="First Name" />
      <input v-model="lastname" placeholder="Last Name" />
      <p>{{ "=========================== User Data Component ============================" }}</p>
      <user-data :firstname="firstname" :lastname="lastname" :age="age"/>
      <p>{{ "=========================== User Data Component ============================" }}</p>
      <div>Are you married?
        <label>
          <input type="radio" value="Yes" v-model="isMarried"/>Yes
        </label>
        <label>
          <input type="radio" value="No" v-model="isMarried"/>No
        </label>
      </div>
      <input v-model.number="age" type="number" placeholder="Age (optional)" />
      <input ref="templateRefInput" placeholder="Template Ref demo"/>
      <button @click="setTemplateRef">Set Template Ref</button>
      <p>Your name is: {{ firstname }} {{ lastname }}</p>
      <p>Your username is: {{ username }}</p><p v-if="age"> and your age is {{ age }}</p>
      <p>Template Ref value is: {{ templateRefInput?.value }}</p>
      <!-- The safe navigation because the templateRefInput might not be set on the time on DOM Loaded -->
  </div>
</template>

<script>
import { computed, provide, ref, watch } from 'vue';
import UserData from '@/components/UserData.vue';

export default {
  name: 'HomeView',
  components: {
    UserData
  },
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
    const templateRefInput = ref(null);
    const isMarried = ref(null);

    provide('isUserMarried', isMarried);

    function setTemplateRef() {
      templateRefInput.value = templateRefInput.value.value; // This extra .value you see here is the one from the DOM Input Element.
    }

    const username = computed(() => {
      return firstname.value.trim().replace(/\s+/g, '').toLowerCase() + '.' + lastname.value.trim().replace(/\s+/g, '').toLowerCase();
    });

    // watch(isMarried, (newVal) => {
    //   console.log('Marital status changed to: ', newVal, " and it's type is: ", typeof newVal);
    // });

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
      age,
      templateRefInput,
      setTemplateRef,
      isMarried
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
