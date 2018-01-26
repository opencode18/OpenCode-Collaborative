const app3 = new Vue({
    el: '#contributors',
    data: {
        contributors: []
    },
    created() {
        fetch('https://shivhek25.github.io/OpenCode-Collaborative/json/scores.json')
        
            .then(response => response.json())
            .then(json => {
                this.contributors = json.scores
            });
    },
    methods: {
        scoreSort: function (arr) {
            return arr.sort(function (a, b) {
                var keyA = a.Total,
                    keyB = b.Total;

                if (keyA > keyB) return -1;
                if (keyA < keyB) return 1;
                return 0;
            });
        }
    }
});