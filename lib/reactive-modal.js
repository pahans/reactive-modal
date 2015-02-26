var _modals = {};
ReactiveModal = function(){
  // EV.call(this);
  this.buttons = {};
};
// _.extend(ReactiveModal.prototype, EV.prototype);
Template._reactiveModal.helpers({
  class: function(){
    var att;
    if(this.class){
      att = 'btn ' + this.class;
    }
    return att;
  },
  disabled: function(){
    if (this.button.disabled.get()) {
      return "disabled"
    } else {
      return null;
    }
  },
  dismiss: function(){
    if(this.button.closeModalOnClick.get()){
      return "modal";
    }
  },
  arrayify: function(obj){
    result = [];
    for (var key in obj) result.push({name:key,button:obj[key]});
    return result;
  },
  label: function() {
    return this.button.label.get();
  }
});

Template._reactiveModal.events({
  'click .modal-footer .reactive-modal-btn.btn': function(e){
    this.button.emit('click', this.button);
  }
});

var createReactiveFunc = function(variable, val) {
    if (val === undefined)  return function(val) { variable.set(val); };
    else                    return function() { variable.set(val); };
}

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

      newButton.closeModalOnClick = new ReactiveVar((info.buttons[button].closeModalOnClick === undefined || info.buttons[button].closeModalOnClick === true || (info.buttons[button].closeModalOnClick instanceof ReactiveVar && info.buttons[button].closeModalOnClick.curValue === true)) ? true : false);
      newButton.closeOnClick = createReactiveFunc(newButton.closeModalOnClick, true);
      newButton.noCloseOnClick = createReactiveFunc(newButton.closeModalOnClick, false);

      newButton.disabled = new ReactiveVar((info.buttons[button].disabled === undefined || info.buttons[button].disabled === false || (info.buttons[button].disabled instanceof ReactiveVar && info.buttons[button].disabled.curValue===false)) ? false : true);
      newButton.disable = createReactiveFunc(newButton.disabled, true);
      newButton.enable = createReactiveFunc(newButton.disabled, false);

      newButton.label = new ReactiveVar((info.buttons[button].label === undefined) ? '' : info.buttons[button].label);
      newButton.setLabel = createReactiveFunc(newButton.label);
    };
  
    Blaze.renderWithData(Template._reactiveModal, info, document.body);
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
