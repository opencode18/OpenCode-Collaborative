 const app1=new Vue({
          el : '#contestants',
          data : {
              contestants : []
          },
          created() {
              fetch('contestants.json')
            .then(response => response.json() )
            .then(json => {
                this.contestants = json.contestants
            })
          }
      })