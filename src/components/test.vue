<template>
    <div class='test'>
        <h1>{{title}}</h1>
        <p v-if='showName'>{{user.f_name}}</p>
        <p v-else>{{user.l_name}}</p>
        <input type="text" v-model='items[0].title'>
        <ul>
            <li v-for='i in items'>{{i.title}}</li>
        </ul>
        <button v-on:click='greet'>Say Greeting</button>
        <input type='text' v-on:keyup='pressKey' v-on:keyup.enter='enterHit'>
        <hr>
        <label>First Name: </label><input type='text' v-model='user.f_name'>
        <br>
        <label>Last Name: </label><input type='text' v-model='user.l_name'>
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'test',
        props: {
          msg: {
              type: String,
              default: 'Foobar'
          }
        },
        data() {
            return {
                title: 'Hello',
                user: {
                    f_name: 'John',
                    l_name: 'Doe'
                },
                showName: true,
                items: [
                    {title: 'apples'},
                    {title: 'bananas'},
                    {title: 'cherries'}
                ]
            }
        },
        methods: {
            greet: function(){
                alert('Hello');
            },
            pressKey: function(e){
                console.log('you pressed', e.target.value);
            },
            enterHit: function(){
                console.log('you hit Enter');
            }
        },
        computed: {
            fullName: function(){
                return this.user.f_name + ' ' + this.user.l_name
            }
        }
    }
</script>

<style scoped>

</style>
