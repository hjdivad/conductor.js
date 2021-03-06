Conductor.card({
  activate: function () {
    ok(true, "Card was activated");
    start();

    var destinationUrl = window.location.protocol + "//" + window.location.hostname + ":" + (parseInt(window.location.port, 10) + 2);
    var conductor = new Conductor({
      testing: true,
      conductorURL: destinationUrl + '/conductor-0.3.0.js.html'
    });

    conductor.addDefaultCapability('assertion', Conductor.MultiplexService.extend({
      upstream: this.consumers.assertion,
      transformEvent: function (eventName, data) {
        return "transformedData";
      }
    }));
    conductor.load("/test/fixtures/child/send_event_to_be_transformed_card.js").appendTo(document.body);
  }
});
