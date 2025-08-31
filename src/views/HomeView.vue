<template>
  <div class="home">
    <p ref="para"> Hello My Name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="increamentAge">Increment Age</button>
    <input type="text" v-model="name"/>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'HomeView',
  mounted() {
    // Logic to run when the component is mounted
  },
  created() {
    // Logic to run when the component is created
  },
  setup() {
    // Composition API logic can be added here if needed, always first

     const para = ref(null);


    // valuse defined here are not reactive as in data() { } property.
    const name = ref('Banibrata Manna');
    const age = ref(25);
    // These variables being const doesn't mean that these can't be changedd or are constant, it means only the references to the variables are contant and their values can still change.

    const handleClick = () => {
      if (para.value) {
        para.value.style.color = 'red';
        para.value.style.fontSize = '30px';
        para.value.style.fontWeight = 'bold';
        name.value = 'Bani';
        age.value = 24;
      }
    };
    const increamentAge = () => {
      if (age.value) {
        age.value++;
      }
    }

    return {
      // name: name,
      // age: age
      name, age, handleClick,
      para, increamentAge
    };
  }
}
</script>
