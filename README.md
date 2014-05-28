meteor-reactive-modal
=====================

How to Use
=========
###install it from atmosphere


```js 
mrt add reactive-modal
```
### make sure you have bootstrap-3 or less-bootstrap-3 installed or bootstrap-3 from a other resource.
```js
mrt add bootstrap-3
```
###Init your bootstrap modal 
a meteor template is the body of your modal

```js
var shareDialogInfo = {
  template: Template.appShareDialog,
  title: "Share the app",
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

  }
}

var rd = ReactiveModal.initDialog(shareDialogInfo);
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

### License
MIT







