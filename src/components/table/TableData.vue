<template>
    <table class="p-4 w-full  border-collapse border-solid border-2 border-gray-400 table-auto ">
                <thead class="text-left border-solid border-2 border-gray-400 ">
                    <tr class="">
                    <th class="table-auto px-4 py-2">
                        <input type="checkbox">
                    </th>   
                    <th v-for="(element, index) in store.userTable" :key="index" class="capitalize" :class="{hidden: !element.visible}">{{element.name}}</th>   
                </tr>
                </thead>
                <tbody class="">
                    <tr v-for="client in clients" :key="client.numero" class="border-solid border-b-2 border-gray-300">
                        <td class="table-auto px-4">
                            <input type="checkbox">
                        </td>
                        <td v-for="(element, index) in store.userTable" :key="index" :class="{hidden: !element.visible}"> 
                            <span v-if="index=='historial'" class="text-center"><button>view</button> </span>
                            <span v-else>{{client[index]}} </span>
                        </td> 
                    </tr>
                </tbody>
            </table>
      
</template>

<script lang="ts" setup>
import { useUser } from '@/store/useUser';
const store = useUser()
const clients = store.userData.user




</script>

<style scoped>
</style>