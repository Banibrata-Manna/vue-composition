<template>
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

    export default{
        props: ['firstname', 'lastname', 'age'],
        setup(props) {
            const username = computed(() => {
                return props.firstname.trim().replace(/\s+/g, '').toLowerCase() + '.' + props.lastname.trim().replace(/\s+/g, '').toLowerCase();
            });
            const age = computed(() => {
                return props.age;
            });

            return {
                username,
                age
            }
        }
    }
</script>