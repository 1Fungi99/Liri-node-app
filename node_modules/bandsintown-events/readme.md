# BandsInTown Events

A simple wrapper for the BandsInTown Events Search JS API.

### Basic Usage

Include the compressed version in your project.

```javascript
<script src="./../dist/bit-events.min.js"></script>
```

Create an instance, set your parameters, and get some events.

```javascript
var Events = new BandsInTownEvents();

//set options for instance
//app_id and artists are required
Events.setParams({
  "app_id":"myappname", //can be anything
  "artists":[ //accepts string for single artist or an array of artist names
    "Wilco",
    "Yeah Yeah Yeahs"
  ]
});

//get your events with success and error callbacks
Events.getEvents(function( events ){
  for(var i = 0; i < events.length; i++){
    console.log( events[i].venue.city + ", " + events[i].venue.region );
  }
},function( errors ){
  console.log(errors);
});

```

### Additional Methods

```javascript
//setParams - set a group of parameters as an object
//these will merge with the currently set params
bitGet.setParams( obj );

//setParam - set a new single parameter as key, value pair
Events.setParam( key, value );

//getParams - get the currently set parameters
var params = Events.getParams();
console.log(params);

//unsetParam - unset a parameter that you previously set by key
Events.unsetParam(key);
```

### Use with Browserify

Use in your app.
```javascript
var BandsInTownEvents = require('bandsintown-events');

var Events = new BandsInTownEvents();
```

### Parameters

These are the only required parameters by BandsInTown documentation.
```javascript
{
  "app_id"  : "MyAppId",
  "artists" : "Wilco"
}
```

The full list of parameters can be found on the [BandsInTown API page.](https://www.bandsintown.com/api/requests#artists-event-search)
