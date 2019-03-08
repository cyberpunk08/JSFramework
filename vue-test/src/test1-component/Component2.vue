<template>
    <div>
        {{message}}
    </div>
</template>

<script>
export default {
    //data option에 명시된 데이터가 template 에 바인딩된다.
    data() {
        return {
            message : 'hello Component2'
        }
    }
}
</script>