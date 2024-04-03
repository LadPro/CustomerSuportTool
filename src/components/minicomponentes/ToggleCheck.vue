<template>
        <label class="relative inline-flex cursor-pointer items-center">
        <input @click="ocultar()" v-model="checked" id="switch" type="checkbox" class="peer sr-only" />
        <label for="switch" class="hidden"></label>
        <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
        </label>
</template>

<script lang="ts" setup>
import { useUser } from '@/store/useUser';
import {defineProps , ref} from "vue"
const store = useUser()

const props = defineProps({
    status: {
        type: Boolean,
        default: false
    },
    indice: {
        type: String,
        default: ""
    },
})
const checked = ref(props.status)

const ocultar = ()=>{
        store.changeVisivility(props.indice)
}

</script>

<style scoped>
</style>