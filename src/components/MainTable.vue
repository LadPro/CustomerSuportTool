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
                <button>Edit table</button>
            </div>
        </div>
        <div class="botonera flex gap-3">
            <button>+ New</button>
            <button>♣ Edit</button>
            <button>- Delete</button>
        </div>
        <div class="w-full  px-4">
            <TableData/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TableData from "@/components/table/TableData.vue"
</script>

<style scoped>


</style>