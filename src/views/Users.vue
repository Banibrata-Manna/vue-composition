<template>
    <div>
        <div v-for="user in users" :key="user.id" style="margin-bottom: 20px; cursor: pointer;" @click="getUserDetails(user.id)">
            <img :src="user.avatar" :alt="user.name" width="150" />
            <p><strong>Name:</strong> {{ user.name }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'User',
  setup(props) {
    const router = useRouter();
    const users = [
        {
            id: 1,
            name: "Aarav Sharma",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            id: 2,
            name: "Priya Mehta",
            avatar: "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            id: 3,
            name: "Rahul Verma",
            avatar: "https://randomuser.me/api/portraits/men/31.jpg"
        },
        {
            id: 4,
            name: "Sneha Kapoor",
            avatar: "https://randomuser.me/api/portraits/women/41.jpg"
        },
        {
            id: 5,
            name: "Rohan Das",
            avatar: "https://randomuser.me/api/portraits/men/51.jpg"
        },
        {
            id: 6,
            name: "Ananya Nair",
            avatar: "https://randomuser.me/api/portraits/women/61.jpg"
        },
        {
            id: 7,
            name: "Vikram Singh",
            avatar: "https://randomuser.me/api/portraits/men/71.jpg"
        },
        {
            id: 8,
            name: "Meera Joshi",
            avatar: "https://randomuser.me/api/portraits/women/81.jpg"
        },
        {
            id: 9,
            name: "Arjun Patel",
            avatar: "https://randomuser.me/api/portraits/men/91.jpg"
        },
        {
            id: 10,
            name: "Kavya Reddy",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg"
        }
    ];

    const selectedUser = users.find(user => user.id === parseInt(props?.userId));

    function getUserDetails(id) {
        console.log("User ID clicked: ", id);
        router.push({ name: 'user', params: { userId: id } });
    }

    return {
        selectedUser,
        users,
        getUserDetails
    };
  }
});
</script>