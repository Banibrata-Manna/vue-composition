<template>
    <div>
        <h1>User Details</h1>
            <img :src="selectedUser.avatar" :alt="selectedUser.name" width="150" />
            <p><strong>Name:</strong> {{ selectedUser.name }}</p>
            <p><strong>Email:</strong> {{ selectedUser.email }}</p>
            <p><strong>Role:</strong> {{ selectedUser.role }}</p>
            <p><strong>Status:</strong> {{ selectedUser.status }}</p>
            <p><strong>Account Created At:</strong> {{ selectedUser.createdAt }}</p>
            <p><strong>Last Login:</strong> {{ selectedUser.lastLogin ? selectedUser.lastLogin : 'Never logged in' }}</p>
    </div>
    <router-link to="/users">Back to Users List</router-link>
</template>

<script>

export default {
  name: 'User',
  props: ['userId'],
  setup(props) {
    const { userId } = props;
    const users = [
        {
            id: 1,
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com",
            role: "Admin",
            status: "Active",
            createdAt: "2024-12-01",
            lastLogin: "2025-10-20 14:35",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            id: 2,
            name: "Priya Mehta",
            email: "priya.mehta@example.com",
            role: "Manager",
            status: "Active",
            createdAt: "2024-12-15",
            lastLogin: "2025-10-21 09:22",
            avatar: "https://randomuser.me/api/portraits/women/21.jpg"
        },
        {
            id: 3,
            name: "Rahul Verma",
            email: "rahul.verma@example.com",
            role: "Staff",
            status: "Inactive",
            createdAt: "2025-01-02",
            lastLogin: "2025-09-10 17:40",
            avatar: "https://randomuser.me/api/portraits/men/31.jpg"
        },
        {
            id: 4,
            name: "Sneha Kapoor",
            email: "sneha.kapoor@example.com",
            role: "Viewer",
            status: "Active",
            createdAt: "2025-02-10",
            lastLogin: "2025-10-18 10:12",
            avatar: "https://randomuser.me/api/portraits/women/41.jpg"
        },
        {
            id: 5,
            name: "Rohan Das",
            email: "rohan.das@example.com",
            role: "Staff",
            status: "Pending",
            createdAt: "2025-03-20",
            lastLogin: null,
            avatar: "https://randomuser.me/api/portraits/men/51.jpg"
        },
        {
            id: 6,
            name: "Ananya Nair",
            email: "ananya.nair@example.com",
            role: "Manager",
            status: "Active",
            createdAt: "2025-05-08",
            lastLogin: "2025-10-22 11:05",
            avatar: "https://randomuser.me/api/portraits/women/61.jpg"
        },
        {
            id: 7,
            name: "Vikram Singh",
            email: "vikram.singh@example.com",
            role: "Admin",
            status: "Suspended",
            createdAt: "2025-06-14",
            lastLogin: "2025-08-09 18:00",
            avatar: "https://randomuser.me/api/portraits/men/71.jpg"
        },
        {
            id: 8,
            name: "Meera Joshi",
            email: "meera.joshi@example.com",
            role: "Viewer",
            status: "Active",
            createdAt: "2025-07-30",
            lastLogin: "2025-10-19 16:40",
            avatar: "https://randomuser.me/api/portraits/women/81.jpg"
        },
        {
            id: 9,
            name: "Arjun Patel",
            email: "arjun.patel@example.com",
            role: "Staff",
            status: "Active",
            createdAt: "2025-08-22",
            lastLogin: "2025-10-21 13:55",
            avatar: "https://randomuser.me/api/portraits/men/91.jpg"
        },
        {
            id: 10,
            name: "Kavya Reddy",
            email: "kavya.reddy@example.com",
            role: "Viewer",
            status: "Inactive",
            createdAt: "2025-09-10",
            lastLogin: "2025-09-29 15:10",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg"
        }
    ];
    
    const selectedUser = users.find(user => user.id === parseInt(userId));

    return {
        selectedUser
    }
  }
};
</script>