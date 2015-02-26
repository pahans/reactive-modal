meteor-reactive-modal
=====================

How to Use
=========
###install it from atmosphere

#### For Meteor 0.9 or Later
```js
meteor add pahans:reactive-modal
```
#### For older versions than 0.9

```js 
mrt add reactive-modal
```
### make sure you have bootstrap-3 or less-bootstrap-3 installed or bootstrap-3 from a other resource.
```js
mrt add bootstrap-3
```
###Init your bootstrap modal 
a meteor template is the body of your modal

```html
<template name="appShareDialog">
<p>OK to go ahead and share {{app}}?</p>
</template>
```

```js
Meteor.startup(function(){
  var shareDialogInfo = {
    template: Template.appShareDialog,
    title: "Share the app",
    modalDialogClass: "share-modal-dialog", //optional
    modalBodyClass: "share-modal-body", //optional
    modalFooterClass: "share-modal-footer",//optional
    removeOnHide: true, //optional. If this is true, modal will be removed from DOM upon hiding
    buttons: {
      "cancel": {
        class: 'btn-danger',
        label: 'Cancel'
      },
      "ok": {
        closeModalOnClick: false, // if this is false, dialog doesnt close automatically on click
        class: 'btn-info',
        label: 'Ok'
      }

    },
    doc: {  // Provide data context for Template.appShareDialog
      app: "My Application"
    }
  }

  var rd = ReactiveModal.initDialog(shareDialogInfo);

});
```

###button event handling
```js
rd.buttons.ok.on('click', function(button){
  // what needs to be done after click ok.
});
```

###Displaying Modal
you can use show/hide methods to show/hide modal
```js
rd.show();
```

```js
rd.hide();
```
### capture modal html element
```javascript
  //modalTarget contains the html
  $(rd.modalTarget).find('[name=inputFooBar]').val()
```

### Modal template data context

Provide a `doc` property on the info options object to provide a data context for your dialog template

### Convenience functions

For any button, you can call the following functions:
 * .disable()
 * .enable()
 * .closeOnClick()
 * .noCloseOnClick()
 * .setLabel()

For example, the following code would change the label of the button and make it so that clicking 'ok' a second time would close the modal.
```js
rd.buttons.ok.on('click', function(button){
  rd.buttons.setLabel('Are you sure?');
  rd.buttons.ok.closeOnClick();
});
```

### License
MIT






