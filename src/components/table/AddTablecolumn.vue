<template>
    <div class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 p-5">

            
            <h1 class="text-center justify-center text-2xl">Agregar Columna</h1>
            <div class="grid grid-cols-2 gap-3">

                <h1>Nombre Columna</h1>
                <input v-model="name" type="text" placeholder="Coloca el nombre de la tabla">
                <h1>Agregar Valores</h1>
                <input v-model="addValueCheck" type="checkbox">
                <span v-if="addValueCheck" class="col-span-2 grid grid-cols-2 ">
                    
                    <h1>Valores</h1>
                    <div class="flex gap-1">
                        <input v-model="preValue" type="text" placeholder="agrega el campo predeterminado" >
                        <button @click="addPreValue()" class="border-2 px-1 rounded-md">+</button>
                    </div>
                    <div id="dropdown-menu" class="grid mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 max-h-36 overflow-y-auto col-span-2">
                        <div v-for="(item, index) in preValueArray" :key="index" class="flex justify-around">
                            <input type="text" v-model="preValueArray[index]"  class="block text-gray-700 hover:bg-gray-100 active:bg-blue-100  rounded-md"> 
                            <button @click="delPreValue(index)" class="border-2 px-2 rounded-md">-</button> 
                        </div>
                    </div>
                </span>
            </div>

            <div class="flex justify-around mt-4">

                <button @click="addTable()">Agregar</button>
                <button>Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useUser } from '@/store/useUser';
import ToggleCheck from '../minicomponentes/ToggleCheck.vue';
import { Ref, ref } from 'vue';

const store = useUser()
const name = ref("")
const addValueCheck = ref(false)
const preValue = ref("")
const preValueArray:Ref<Array<string>> = ref([])

const addPreValue = () =>{
    preValueArray.value.push(preValue.value)
    preValue.value = ""
}

const delPreValue = (index:number) =>{
    preValueArray.value.splice(index, 1)
    preValue.value = ""
}

const addTable = async () =>{
    const exist = Object.values(store.userTable).some(obj => obj.name == name.value)
    if (exist && !(await confirm("esta repetido quieres crealo?"))){
            alert("no creado")
        }else{
            store.createTableItem(name.value.toLowerCase())
            alert("creado")
        }
    

}

</script>

<style scoped>
</style>