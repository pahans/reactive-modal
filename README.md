meteor-reactive-modal
=====================

How to Use
=========
###install it from atmosphere


```js 
mrt add reactive-modal
```

###Init your bootstrap modal 
a meteor template is the body of your modal

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

var reactiveDialog = ReactiveModal.initDialog(shareDialogInfo);
```
###Displaying Modal
you can use show/hide methods to show/hide modal
```js
reactiveDialog.show();
```

```js
reactiveDialog.hide();
```

### License
MIT







