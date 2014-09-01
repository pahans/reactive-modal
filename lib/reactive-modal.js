var _modals = {};
ReactiveModal = function(){
  // EV.call(this);
  this.buttons = {};
};
// _.extend(ReactiveModal.prototype, EV.prototype);
Template._reactiveModal.class = function(){
  var att;
  if(this.class){
    att = 'btn ' + this.class;
  }
  return att;
}
Template._reactiveModal.dismiss = function(){
  if(this.button.closeModalOnClick){
    return "modal";
  }
}

Template._reactiveModal.arrayify = function(obj){
  result = [];
  for (var key in obj) result.push({name:key,button:obj[key]});
  return result;
}

Template._reactiveModal.events({
  'click .modal-footer .reactive-modal-btn.btn': function(e){
    this.button.emit('click', this.button);
  }
});

ReactiveModal.initDialog = function (info){
  var key = "rm-"+Meteor.uuid();
  if(!info || !info.template){
    console.error("you must define a template for " , key);
  } else {
    info.key = key;
    _modals[key] = info;

    for(var button in info.buttons){
      var newButton = _.clone(info.buttons[button]);
      _.extend(newButton, new EV());
      info.buttons[button] = newButton;
      newButton.closeModalOnClick = (button.closeModalOnClick === undefined || info.closeModalOnClick) ? true : true;
    };
    UI.insert(UI.renderWithData(Template._reactiveModal, info), document.body)
  }

  var modalTarget = $('#' + key);
  info.show = function(){
    modalTarget.modal('show');
  }
  info.hide = function(){
    modalTarget.modal('hide');
  }

  if (info.removeOnHide) {
    modalTarget.on('hidden.bs.modal', function() {
      $(this).remove();
    });
  }

  info.modalTarget = modalTarget;
  return info;
};
