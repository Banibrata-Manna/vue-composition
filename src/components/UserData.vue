<template>
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
    <h3>Married: {{ isUserMarried }}</h3>
</template>

<script>
import { computed, inject, watch } from 'vue';

    export default{
        props: ['firstname', 'lastname', 'age'],
        setup(props, context) {
            const username = computed(() => {
                return props.firstname.trim().replace(/\s+/g, '').toLowerCase() + '.' + props.lastname.trim().replace(/\s+/g, '').toLowerCase();
            });
            const age = computed(() => {
                return props.age;
            });

            const isUserMarried = inject('isUserMarried'); // It is always prefered to change these values where they were provided.

            // watch(isUserMarried, (newVal) => {
            //     console.log('User marital status in UserData component changed to: ', newVal, " and it's type is: ", typeof newVal);
            // });

            // console.log("This is the context in User Data Component: ", context);

            // context.emit('custom-event', 'Data from UserData Component');

            return {
                username,
                age,
                isUserMarried
            }
        }
    }
</script>