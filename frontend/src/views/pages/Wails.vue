<script setup>
import HelloWorld from '@/components/Greet.vue'
</script>

<template>
    <div id="wails-main">
        <img id="logo" alt="Wails logo" src="../../assets/images/wails-logo-universal.png"/>
        <main><Greet/></main>
    </div>
</template>

<style>
#wails-main {
    height: 100vh;
    text-align: center;
    background-color: rgba(27, 38, 54, 1);
    color: white;
    margin: 0;
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

#logo {
    display: block;
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 10% 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: content-box;
}
</style>
