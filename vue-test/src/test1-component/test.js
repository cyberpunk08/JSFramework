import Vue from 'vue'
import VueFileComponent from './ComponentFileMain.vue'

//component global 등록 이용...
//선언만 한거다. 이용하려면 등록이 필요함
var MyComponent = Vue.extend({
    template : '<div>global component...</div>'
})

//global 등록
Vue.component('global-component', MyComponent)

const GlobalComponentTest = Vue.extend({
    template : '<div><global-component></global-component></div>'
})

var MyComponent2 = Vue.extend({
    template : '<div>MyComponent2</div>'
})

var MyComponent3 = Vue.extend({
    template : '<div>MyComponent3</div>'
})

var MyComponent4 = Vue.extend({
    template : '<div>MyComponent4</div>'
})


const LocalComponentTest = Vue.extend({
    template : `<div>
                    <MyComponent2></MyComponent2>
                    <my-component3></my-component3>
                    <hello-world></hello-world>
                </div>`,
    components : {
        MyComponent2,
        'MyComponent3' : MyComponent3,
        'HelloWorld' : MyComponent4
    }
})


var Main = Vue.extend({
    template : `
            <div>
                <VueFileComponent></VueFileComponent>
                <GlobalComponentTest></GlobalComponentTest>
                <LocalComponentTest></LocalComponentTest>
            </div>
    `,
    components : {
        VueFileComponent,
        GlobalComponentTest,
        LocalComponentTest

    }
})

new Vue( {
    render : h=>h(Main)
}).$mount('#app')