<template>
    <div class="mx-4">
        <div class="primeraBarra flex justify-between">
            <h1>Clients</h1>
            <div class="relative">
                <h1 class="absolute left-2 w-4 h-4">♠</h1>
                <input class="pl-6" type="search" placeholder="Search client">
            </div>
            <div class="funtionbuttons flex gap-2">
                <button>Send Emails</button>
                <button>Send messages</button>
                <button>bulk Clients</button>
                <button @click="() => activeEdit = !activeEdit">Edit table</button>
            </div>
        </div>
        <div class="flex justify-end" :class="{ hidden: !activeEdit }">

            <EditTable class="translate-y-12">
                <div class="flex justify-around mt-4">

                    <button @click="activeAddTable = true">Agregar</button>
                    <button @click="() => { activeEdit = !activeEdit; activeAddTable = false }">Cancelar</button>
                </div>
            </EditTable>
            <AddTablecolumn v-if="activeAddTable" class="translate-y-12" v-model="data">
                <div class="flex justify-around mt-4">

                    <button @click="addTable()">Agregar</button>
                    <button @click="activeAddTable = !activeAddTable">Cancelar</button>
                </div>
            </AddTablecolumn>
        </div>
        <div class="botonera flex gap-3">
            <button>+ New</button>
            <button>♣ Edit</button>
            <button>- Delete</button>
        </div>
        <div class="w-full  px-4">
            <TableData />
        </div>
    </div>
</template>

<script lang="ts" setup>
import TableData from "@/components/table/TableData.vue"
import AddTablecolumn from "@/components/table/AddTablecolumn.vue"
import EditTable from "@/components/table/EditTable.vue"
import { ref, Ref} from "vue";
import { useUser } from "@/store/useUser";

interface Idata {
    name:string,
    preValue:Array<string>
}

const store = useUser()
const activeEdit = ref(false)
const activeAddTable = ref(false)

const data:Ref<Idata> = ref({
    name:"",
    preValue:[]
})

// const getData = (data:Idata)=>{
//     data = data
// }

const addTable = async () =>{
    const name = data.value.name.toLowerCase()
    const array = data.value.preValue
    if (name === ""){
        alert("Agregale un nombre al campo")
        return
    }
    const exist = Object.values(store.userTable).some(obj => obj.name === name)
    if (exist && !(await confirm("esta repetido quieres crealo?"))){
            alert("no creado")
        }else{
            store.createTableItem(name, array)
            alert("creado")
        }
    activeAddTable.value = false
    }
</script>

<style scoped></style>