<script setup>
import Greet from '@/components/Greet.vue'
</script>

<template>
    <div>
        <div class="grid grid-cols-12 h-fit min-h-fit w-fit min-w-fit gap-4">
            <div class="col-span-12 bg-primary dark:bg-primary-contrast">
                <img class="h-auto w-auto object-contain p-10" id="logo" alt="Wails logo" src="../../assets/images/wails-logo-universal.png"/>
            </div>
            <div class="col-span-12">
                <Greet/>
            </div>
        </div>
    </div>
</template>

<style>
</style>
