<template>
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

    export default{
        props: ['firstname', 'lastname', 'age'],
        setup(props, context) {
            const username = computed(() => {
                return props.firstname.trim().replace(/\s+/g, '').toLowerCase() + '.' + props.lastname.trim().replace(/\s+/g, '').toLowerCase();
            });
            const age = computed(() => {
                return props.age;
            });

            // console.log("This is the context in User Data Component: ", context);

            // context.emit('custom-event', 'Data from UserData Component');

            return {
                username,
                age
            }
        }
    }
</script>