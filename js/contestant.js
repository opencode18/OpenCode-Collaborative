 const app=new Vue({
          el : '#contestant',
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