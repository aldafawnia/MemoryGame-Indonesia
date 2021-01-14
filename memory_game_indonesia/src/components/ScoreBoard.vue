<template>
    <div>
        <b-table-simple class="table">
        <b-thead class="header">

            <b-tr>
                <b-th>Username</b-th>
                <b-th>Time</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="s in scoreBoard.slice(0,10)" v-bind:key="s._id">
        <b-td>{{s.username}}</b-td>
        <b-td>{{s.time}}s</b-td>
            </b-tr>
        </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data:function(){
        return {
            scoreBoard:[]
        }
    },
    created:async function(){
        let response = await axios.get('https://3000-f24adeeb-0634-4252-a732-713ee7ce62f1.ws-eu03.gitpod.io/score');
        this.scoreBoard = response.data;
    },

}
</script>

<style scoped>

</style>