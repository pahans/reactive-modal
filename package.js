Package.describe({
  summary: "Reactive bootstrap modals for meteor",
  version: "1.0.2",
  git: "https://github.com/pahans/reactive-modal.git",
  name: "pahans:reactive-modal"
});

Package.on_use(function (api) {
  if(api.versionsFrom){
    api.versionsFrom('METEOR@0.9.0');
  }
  api.use(['underscore', 'jquery','templating', 'reactive-var@1.0.1'], 'client');
  api.add_files(['lib/reactive-modal.html', 'lib/reactive-modal.js', 'lib/ev.js'], "client");
  api.export('ReactiveModal', ['client']);
});
