meteor-reactive-modal
=====================

How to Use
=========
###install it from atmosphere


```js 
mrt add reactive-modal
```

###Init your bootstrap modal (preferably inside a rendered function) 
template is the body of your modal

```js
var shareDialogInfo = {
  template: Template.appShareDialog,
  title: "Share the app",
  buttons: [
    {
      closeModalOnClick: true,
      class: 'btn-danger',
      label: 'Cancel',
      onclick: function(evt){

      }
    },
    {
      closeModalOnClick: true,
      class: 'btn-info',
      label: 'Ok',
      onclick: function(evt){

      }
    },
  ]
}

ReactiveModal.initDialog('dialog_id', shareDialogInfo);
```
###Displaying Modal
you can use bootstrap methods to show/hide modal
$('dialog_id').modal('show');







