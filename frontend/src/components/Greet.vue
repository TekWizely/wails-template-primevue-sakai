<script setup>
import {reactive} from 'vue'
import {Greet} from '../../wailsjs/go/main/App'

const data = reactive({
    name: "",
    resultText: "Please enter your name below 👇",
})

function greet() {
    Greet(data.name).then(result => {
        data.resultText = result
    })
}

</script>

<template>
    <div class="card flex flex-col items-center gap-4">
        <div class="font-semibold text-xl">{{ data.resultText }}</div>
        <div class="flex flex-no-wrap items-start gap-4">
            <div class="field">
                <InputText v-model="data.name" id="name" type="text"/>
            </div>
            <Button label="Greet" :fluid="false" @click="greet"></Button>
        </div>
    </div>
</template>

<style scoped>
</style>
