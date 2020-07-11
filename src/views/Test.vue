<template>
<div>im test</div>
</template>

<script>
    export default {
        name: "Test",
        created() {
            var url=window.location.href;
            console.log(url+'im')
            var cs = url.split('?')[1];
            var code=cs.split('=')[1]
            console.log(code+'asdasd')

        }
    }
</script>

<style scoped>

</style>
