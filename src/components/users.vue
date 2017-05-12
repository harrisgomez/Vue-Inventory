<template>
    <div class='users'>
        <h1>Users</h1>
        <form v-on:submit='addUser'>
            <input type='text' v-model='newUser.name' placeholder='Enter Name'>
            <br>
            <input type='text' v-model='newUser.email' placeholder='Enter Email'>
            <br>
            <input type='submit' value='Submit'>
        </form>
        <ul>
            <li v-for='u in users'>
                <input type='checkbox' class='toggle' v-model='u.contacted'>
                <span :class='{contacted: u.contacted}'>
                    {{u.name}}: {{u.email}} <button v-on:click='deleteUser(u)'>x</button>
                </span>
            </li>
        </ul>
        <div class="col-sm-6">
            <p>test</p>
        </div>
        <div class="col-sm-6">
            <p>test</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'users',
        data() {
            return {
                users: [
                    {
                        name: 'Anh Nguyen',
                        email: 'an@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'Bob Smith',
                        email: 'bs@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'Djangus Roundstone',
                        email: 'dr@gmail.com',
                        contacted: false
                    }
                ],
                newUser: {},
            }
        },
        methods: {
            addUser: function(e){
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                })
                e.preventDefault(); //prevents form from submitting
            },
            deleteUser: function(user){
                this.users.splice(this.users.indexOf(user), 1);
            }
        }
    }
</script>

<style scoped>
    .contacted{
        text-decoration: line-through;
    }
</style>
