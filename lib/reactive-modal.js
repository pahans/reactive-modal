var _modals = {};
ReactiveModal = function(){

};
Template._reactiveModal.class = function(){
  var att;
  if(this.class){
    att = 'btn ' + this.class;
  }
  return att;
}
Template._reactiveModal.dismiss = function(){
  if(this.closeModalOnClick){
    return "modal";
  }
}

Template._reactiveModal.events({
  'click .modal-footer .btn': function(e){
    if(this.onclick){
      this.onclick(e)
    }
  }
});

ReactiveModal.initDialog = function (info){
  var key = "rm-"+Meteor.uuid();
  if(!info || !info.template){
    console.error("you must define a template for " , key);
  } else {
    info.key = key;
    _modals[key] = info;
    UI.insert(UI.renderWithData(Template._reactiveModal, info), document.body)
  }
  var modalTarget = $('#' + key);

  var functions = {
    'show': function(){
      modalTarget.modal('show');
    },
    'hide': function(){
      modalTarget.modal('hide');
    },
    info: info,
    modalTarget: modalTarget
  }
  return functions;
};
