/* eslint-disable no-console */
import Vue from 'vue'

var Main = Vue.extend({
    template : `
        <div>
            <h3>v-if</h3>
            <template v-if="loginType === 'username'">
                <label>name</label>
                <input placeholder="name....."/>
            </template>
            <template v-else>
                <label>email</label>
                <input placeholder="email....."/>
            </template>

            <h3>v-if...key</h3>
            <template v-if="loginType === 'username'">
                <label>name</label>
                <input placeholder="name....." key="username"/>
            </template>
            <template v-else>
                <label>email</label>
                <input placeholder="email....." key="email"/>
            </template>

            <button @click="loginTypeChange">change</button>

            <h3>v-for</h3>
            <ul>
                <li v-for="(item, index) in items">
                    {{index}} - {{item.message}}
                </li>
            </ul>
            <ul>
                <li v-for="(value,key,index) in object">
                    {{index}} - {{key}} - {{value}}
                </li>
            </ul>


            <h3>event...</h3>
            <div v-on:click="topClick">
                top
                
                <div v-on:click="middleClick">
                    middle

                        <div v-on:click="bottomClick">bottom</div>
                </div>
            </div>

            <h3>event...stop</h3>
            <div v-on:click="topClick">
                top
                
                <div v-on:click.stop="middleClick">
                    middle

                        <div v-on:click="bottomClick">bottom</div>
                </div>
            </div>

            <h3>event...self</h3>
            <div v-on:click="topClick">
                top
                
                <div v-on:click.self="middleClick">
                    middle

                        <div v-on:click="bottomClick">bottom</div>
                </div>
            </div>

            <h3>event...capture</h3>
            <div v-on:click="topClick">
                top
                
                <div v-on:click.capture="middleClick">
                    middle

                        <div v-on:click="bottomClick">bottom</div>
                </div>
            </div>


            <h3>submit...</h3>
            <form>
                <input type="submit" v-on:click="submitMethod"/>
                <input type="submit" v-on:click.prevent="submitMethod"/>
            </form>

            <h3>enter.space</h3>
            <input @keyup.enter.space="keyEvent"/>
            <h3>ctrl+c</h3>
            <input @keyup.ctrl.67="keyEvent"/>


            <h3>cutom direcive</h3>
            <div v-aDirective:foo="message"></div>
        </div>
    `,
    data() {
        return {
            loginType : 'username',
            items : [
                {message : 'hello'},
                {message : 'world'}
            ],
            object : {
                firstName : 'gildong',
                lastName : 'hong',
                age : 30
            },
            message : 'hello'
        }
    },
    methods : {
        loginTypeChange() {
            if(this.loginType === 'username')
                this.loginType = 'email'
            else
                this.loginType = 'username'
        },
        topClick() {
            console.log('topclick...')
        },
        middleClick(){
            console.log('middleClick...')
        },
        bottomClick() {
            console.log('bottomClick...')
        },
        submitMethod() {
            console.log('submit...')
        },
        keyEvent() {
            console.log('keyEvent...')
        }
    },

    directives : {
        aDirective : {
            inserted(el,binding) {
                console.log('insert...' + el.tagName)
                var s = JSON.stringify
                el.innerHTML =
                    'name:' + s(binding.name) + '<br/>' +
                    'value:' + s(binding.value)
            }
        }
    }
})

new Vue( {
    render : h=>h(Main)
}).$mount('#app')