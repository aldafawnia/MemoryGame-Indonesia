<template>
    <div>
        <table class="table">
        <tbody>
        <tr v-for="(row, rindex) in game" :key="rindex">
        <td v-for="(col, cindex) in row" :key="cindex">
            <div class="card-border m-2">
            
            </div>
        </td>
      </tr>
        </tbody>
    </table>  
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>