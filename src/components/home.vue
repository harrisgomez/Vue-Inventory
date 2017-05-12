<template>
    <div class="container">

        <div id='left' class="col-sm-6 mb-2">
            <h4>Create an Item</h4>
            <form @submit.prevent="validateBeforeSubmit">
                <b-form-fieldset label="Item Name" for='name'>
                    <b-form-input v-model='newItem.name' v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name') }" name="name"></b-form-input>
                    <span class='validation_errors' v-show="errors.has('name')">{{ errors.first('name') }}</span>
                </b-form-fieldset>
                <b-form-fieldset label="Price" for='price'>
                    <b-form-input v-model='newItem.price' v-validate="'required|min_value:0'" :class="{'input': true, 'is-danger': errors.has('price') }" name='price'></b-form-input>
                    <span class='validation_errors' v-show="errors.has('price')">{{ errors.first('price') }}</span>
                </b-form-fieldset>
                <b-form-fieldset label="Short Description" for='description'>
                    <b-form-input v-model='newItem.description' v-validate="'required|min:10'" :class="{'input': true, 'is-danger': errors.has('description') }" name='description'></b-form-input>
                    <span class='validation_errors' v-show="errors.has('description')">{{ errors.first('description') }}</span>
                </b-form-fieldset>
                <b-form-fieldset label="Date Available" for='date'>
                    <b-form-input v-model='newItem.date_available' v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('description') }" name='date'></b-form-input>
                    <span class='validation_errors' v-show="errors.has('date')">{{ errors.first('date') }}</span>
                </b-form-fieldset>
                <b-form-fieldset label="Quantity Available" for='quantity'>
                    <b-form-input v-model='newItem.qty_available' v-validate="'required|min_value:0'" :class="{'input': true, 'is-danger': errors.has('quantity') }" name='quantity'></b-form-input>
                    <span class='validation_errors' v-show="errors.has('quantity')">{{ errors.first('quantity') }}</span>
                </b-form-fieldset>

                <div class='col-md-12'>
                    <p class='control'>
                        <b-button class='button is-primary' type='submit' size="sm" variant="success">Add Item</b-button>
                    </p>
                </div>
            </form>
        </div>

        <div id='right' class="col-sm-6">
            <ul>
                <li class='alert-success' v-for='i in items'>
                    <b-card :title="i.name"
                            :sub-title="i.price"
                            show-footer
                    >
                    Description: {{ i.description }}
                    <small slot='footer' class='text-muted'>
                        Date Available: {{ i.date_available }} | Quantity Available: {{ i.quantity_available }}
                    </small>
                </b-card>
                <b-button v-on:click='deleteItem(i)'>Delete Item</b-button>
                </li>
            </ul>
        </div>

    </div>


</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            newItem: {},
            items: [],
            fake_users: []
        }
    },
    methods: {
        date_format: function(){
            return moment(date).format('DD/MM/YYYY');
        },
        addItem: function(){
            this.items.push({
                name: this.newItem.name,
                price: this.newItem.price,
                description: this.newItem.description,
                date_available: this.newItem.date_available,
                quantity_available: this.newItem.qty_available
            })
            // e.preventDefault();
        },
        deleteItem: function(item){
            // send deleted data to backend
            // this.$http.post('some api', item, function(response){
            //     this.someKeyInTheFrontEnd = response.someValueFromTheBackend;
            // })
            this.items.splice(this.items.indexOf(item), 1);
        },
        validateBeforeSubmit: function(){
            if(!this.validate()){
                this.addItem();
            }
        },
        validate: function(){
            this.$validator.validateAll()
            return this.errors.any()
        }
    },
    created: function(){ // make web requests here after installing vue-resource plugin
        this.$http.get('https://jsonplaceholder.typicode.com/users') // this returns a promise
            .then(function(response){
                console.log(response.data);
                this.fake_users = response.data;

                // let's see what users we get from the response
                for(var i=0; i<this.fake_users.length; i++){
                    console.log('Fake user data:', this.fake_users[i].name);
                }
            }, function(error){
                console.log(error);
            });
    }
}
</script>

<style scoped>
    .container{
        border: 1px solid black;
    }
    .validation_errors{
        color: red;
    }
    button{
        margin-bottom: .5rem;
    }
    li{
        margin: .5rem;
        list-style: none;
        border: 1px solid black;
        border-radius: 8px;
    }
</style>
