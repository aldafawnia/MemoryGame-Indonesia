<template>
    <div>
        <b-table-simple class="table">
        <b-thead class="header">

            <b-tr>
                <b-th>Username</b-th>
                <b-th>Time</b-th>
                <b-th>Score</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="s in sortScore.slice(0,10)" v-bind:key="s._id" >
        <b-td>{{s.username}}</b-td>
        <b-td> {{s.time}}s</b-td>
        <b-td> {{s.score}} </b-td>
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
        let response = await axios.get('https://af-memory-api.herokuapp.com/score');
        this.scoreBoard = response.data;

        // let timing = await axios.get('https://af-memory-api.herokuapp.com/score');
        // this.timing = response.data;

        // for (let t of timing){
        //     t.sort()
        // }
    },
    computed: {
    sortScore: function () {
      let sortScore = this.scoreBoard.slice(0);
      sortScore.sort(function (a, b) {
        return a.time - b.time;
      });
      return sortScore;
}
}
}
</script>

<style scoped>

</style>