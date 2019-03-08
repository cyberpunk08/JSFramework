import Vue from 'vue'

var Main = Vue.extend({
    template : `
        <div>
            <div>message : {{msg}}</div>
            <span v-once>only one : {{msg}}</span>
            <input type="text" v-model="msg"/>

            <button v-bind:disabled="isButtonDisabled">
                button
            </button>

            <p>computed... {{computeMethod}}</p>
            <p>method... {{methodMethod}}</p>

            <div>fullname : {{fullName}}</div>
            <input type="text" v-model="firstName"/>
            <input type="text" v-model="lastName"/>
        </div>
    `,
    data () {
        return {
            msg : 'hello',
            isButtonDisabled : true,
            firstName : 'gildong',
            lastName : 'hong',
            fullName : 'gildong hong'
        }
    },
    computed : {
        //목적은 복잡한 expression
        computeMethod : function(){
            return this.msg.split('').reverse().join('')
        }

    },
    methods : {
        methodMethod : function(){
            return this.msg.split('').reverse().join('')
        }
    },
    watch : {
        firstName : function(val){
            this.fullName = val + ' ' + this.lastName
        },
        lastName : function(val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})

new Vue( {
    render : h=>h(Main)
}).$mount('#app')