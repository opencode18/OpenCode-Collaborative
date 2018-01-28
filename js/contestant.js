const app1 = new Vue({
    el: '#contestants',
    data: {
        contestants: []
    },
    created() {
        fetch('https://jigar3.github.io/OpenCode-Collaborative/json/contestants.json')

            .then(response => response.json())
            .then(json => {
                this.contestants = json.contestants
            });
    },
    methods: {
        alphaSort: function (arr) {
            return arr.sort(function (a, b) {
                var keyA = a.name,
                    keyB = b.name;

                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });
        }
    }
});
