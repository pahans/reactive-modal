Package.describe({
    summary: "Reactive bootstrap modals for meteor"
});

Package.on_use(function (api) {
  api.use(['bootstrap-3', 'jquery','templating'], 'client');
  api.add_files(['lib/reactive-modal.html', 'lib/reactive-modal.js'], "client");
  api.export('ReactiveModal', ['client']);
});
