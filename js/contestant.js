const app1=new Vue({
    el : '#contestants',
    data : {
        contestants : []
    },
    created() {
        fetch('https://opencode18.github.io/OpenCode-Collaborative/contestants.json')
      .then(response => response.json() )
      .then(json => {
          this.contestants = json.contestants
      })
    }
})