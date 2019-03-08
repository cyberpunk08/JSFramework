<template>
    <div>
        <com1/>
        <com2/>
    </div>
</template>
<script>
import com1 from './Component1.vue'
import com2 from './Component2.vue'

//component class 내용
export default {
   components : {
       com1,
       com2
   } 
}
</script>