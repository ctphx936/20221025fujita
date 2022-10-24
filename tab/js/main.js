new Vue({
  el: '#tab',
  data: {
    isActive: '1'
  },
  methods: {
    isSelect: function (num) {
      this.isActive = num;
    }
  }
})