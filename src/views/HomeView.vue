<template>
  <div class="home">
    <p ref="para"> Hello My Name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
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
    let name = 'Banibrata Manna';
    let age = 25;

    const handleClick = () => {
      if (para.value) {
        para.value.style.color = 'red';
        para.value.style.fontSize = '30px';
        para.value.style.fontWeight = 'bold';
        para.value.textContent = 'Button Clicked. Name is Sonu and age is 24';
      }
    };

    return {
      // name: name,
      // age: age
      name, age, handleClick,
      para
    };
  }
}
</script>
