<template>
    <div>
        <h2 class="title_vue">{{ title }}</h2>
        <p>我是内容: vue content</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "我是 vue 的标题",
        };
    },
};
</script>

<style>
.title_vue {
    color: blueviolet;
}
</style>
