AFRAME.registerComponent('displaced-text', {
    schema: {
        word: {type: 'string'}
    },
  init: function () {
      var data = this.data;
      var el = this.el;
      el.setAttribute('mixin', 'poem');
      el.setAttribute('text', 'value', data.word);
      console.log(data.word);
  }
});
