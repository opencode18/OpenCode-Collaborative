const app2 = new Vue({
    el: '#projects',
    data: {
        projects: []
    },
    created() {
        fetch('https://opencode18.github.io/OpenCode-Collaborative/json/projects.json')
        
            .then(response => response.json())
            .then(json => {
                this.projects = json.projects
            });
    },
    methods: {
        alphaSort: function (arr) {
            return arr.sort(function (a, b) {
                var keyA = a.name,
                    keyB = b.name;

                if (keyA == "OpenCode Collaborative") return 0;
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });
        }
    }
});
