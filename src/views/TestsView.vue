<template>
    <div>
        <EditTable/>
        <AddTablecolumn/>
        <MainTable />
        <!-- <TableCopy/> -->
    </div>
</template>

<script lang="ts" setup>
    import MainTable from "@/components/MainTable.vue"
    import EditTable from "@/components/table/EditTable.vue"
    import AddTablecolumn from "@/components/table/AddTablecolumn.vue"
</script>

<style scoped>
</style>