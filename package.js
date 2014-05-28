Package.describe({
    summary: "Reactive bootstrap modals for meteor"
});

Package.on_use(function (api) {
  api.use(['underscore', 'jquery','templating'], 'client');
  api.add_files(['lib/reactive-modal.html', 'lib/reactive-modal.js', 'lib/ev.js'], "client");
  api.export('ReactiveModal', ['client']);
});
