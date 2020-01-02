Component({
  properties: {
    model: Object,
  },

  data: {
    open: false,
    isBranch: false,
  },

  methods: {
    toggle: function (e) {
      if (this.data.isBranch) {
        this.setData({
          open: !this.data.open,
        })
      }
    },

    tapItem: function (e) {
      var item = e.currentTarget.dataset.item;
      this.triggerEvent('tapitem', { item: item }, { bubbles: true, composed: true });
    }
  },

  ready: function (e) {
    this.setData({
      isBranch: Boolean(this.data.model.childItems && this.data.model.childItems.length)
    });
  },
})