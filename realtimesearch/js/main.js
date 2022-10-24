
    
new Vue({
              el: '#app',
              data: {
                  keyword: '',
                  users: [
                      {
                          name: '佐藤',
                      },
                      {
                          name: '山田',
                      },
                      {
                          name: '鈴木',
                      },
                      {
                          name: '田中',
                      },
                  ]
              },
              computed: {
                  filteredUsers: function() {
      
                      var users = [];
      
                      for(var i in this.users) {
      
                          var user = this.users[i];
      
                          if(user.name.indexOf(this.keyword) !== -1) {
      
                              users.push(user);
      
                          }
      
                      }
      
                      return users;
      
                  }
              }
          });