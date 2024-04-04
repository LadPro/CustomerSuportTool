<template>
    <div class="absolute z-10 mt-5 flex px-4">
        <div v-if="!activeEditCol"
            class= " w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 p-5">


            <h1 class="text-center justify-center text-2xl">Editar tabla</h1>
            <div class="grid grid-cols-2 gap-3">

                <div v-for="(element, index) in store.userTable" :key="index" class=" flex w-full flex-shrink-0 flex-grow-0 justify-between">
                    <h2 class="capitalize">{{ element.name }}</h2>
                    <div class="flex gap-3">

                        <button @click="handleActiveEdit(index)">ED</button>
                        <ToggleCheck :status="element.visible" :indice="index" />
                    </div>
                </div>
            </div>
            <slot></slot>

        </div>

        <!--                           Editar campo tabla                           -->
        <div v-if="activeEditCol"
            class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 p-5">


            <h1 class="text-center justify-center text-2xl">Editar columna</h1>
            <div class="grid grid-cols-2 gap-3">

                <h1>Nombre Columna</h1>
                <input v-model="editName" type="text" placeholder="Coloca el nombre de la tabla">
                <h1>Agregar Valores</h1>
                <input v-model="addValueCheck" type="checkbox">
                <span v-if="addValueCheck" class="col-span-2 grid grid-cols-2 ">

                    <h1>Valores</h1>
                    <div class="flex gap-1">
                        <input v-model="editPrevalue" type="text" placeholder="agrega el campo predeterminado">
                        <button @click="addPreValue()" class="border-2 px-1 rounded-md">+</button>
                    </div>
                    <div id="dropdown-menu"
                        class="grid mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 max-h-36 overflow-y-auto col-span-2">
                        <div v-for="(item, index) in editPrevalueArray" :key="index" class="flex justify-around">
                            <input type="text" v-model="editPrevalueArray[index]"
                                class="block text-gray-700 hover:bg-gray-100 active:bg-blue-100  rounded-md">
                            <button @click="delPreValue(index)" class="border-2 px-2 rounded-md">-</button>
                        </div>
                    </div>
                    <!-- <h1>Agregar Valores</h1>
        <input v-model="addValueCheck" type="checkbox"> -->
                </span>
            </div>
            <div class="flex justify-around mt-4">

                <button @click="handleEdit">Agregar</button>
                <button @click="activeEditCol = false">Cancelar</button>
            </div>

        </div>

    </div>
</template>

<script lang="ts" setup>
import ToggleCheck from "@/components/minicomponentes/ToggleCheck.vue"
import { useUser } from "@/store/useUser";
import { ref, Ref } from "vue";

const store = useUser()
const editName = ref("")
const editPrevalue = ref("")
const indice = ref("")
const editPrevalueArray:Ref<Array<string>> = ref([])
const activeEditCol = ref(false)
const addValueCheck = ref(false)

const addPreValue = () =>{
    editPrevalueArray.value.push(editPrevalue.value)
    editPrevalue.value = ""
}

const delPreValue = (index:number) =>{
    editPrevalueArray.value.splice(index, 1)
    editPrevalue.value = ""
}

const handleActiveEdit = (index:string) =>{
    indice.value = index
    activeEditCol.value = !activeEditCol.value
    editName.value = store.userTable[index].name
    editPrevalueArray.value = store.userTable[index].prevalues
    if (editPrevalueArray.value[0] != undefined){
        addValueCheck.value = true 
    }
}
const handleEdit = ()=>{
    store.editTableItem(indice.value, editName.value, editPrevalueArray.value)
    activeEditCol.value = false
}

</script>

<style scoped></style>