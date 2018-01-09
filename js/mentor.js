 const app=new Vue({
          el : '#mentors',
          data : {
              mentors : []
          },
          created() {
              fetch('mentors.json')
            .then(response => response.json() )
            .then(json => {
                this.mentors = json.mentors
            })
          }
      })