<template>
    <div class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 p-5">

            
            <h1 class="text-center justify-center text-2xl">Editar tabla</h1>
            <div class="grid grid-cols-2 gap-3">

                <div v-for="(element, index) in store.userTable" :key="index" class=" flex justify-between ">
                    <h2 class="capitalize">{{ element.name }}</h2>
                    <ToggleCheck :status="element.visible" :indice="index"/></div>
            </div>

                
        </div>

    </div>
</template>

<script lang="ts" setup>
import ToggleCheck from "@/components/minicomponentes/ToggleCheck.vue"
import { useUser } from "@/store/useUser";
const store = useUser()

</script>

<style scoped>
</style>