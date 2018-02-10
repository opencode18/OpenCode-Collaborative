const app3 = new Vue({
    el: '#contributors',
    data: {
        contributors: []
    },
    created() {
        fetch('https://opencode18.github.io/OpenCode-Collaborative/json/scores.json')

            .then(response => response.json())
            .then(json => {
                this.contributors = json.scores
            });
    },
    methods: {
        scoreSort: function (arr) {

            arr.sort(function (a, b) {
                return b.Total-a.Total;
            });

            return arr;
        }
    }
});
