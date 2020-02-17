const sourcesUrl = `${process.env.MAPSERVER_URL}`;
const glyphsUrl = `file://${process.env.WORK}/node_modules/hsl-map-style/`;

module.exports = {
  "/map/v1/hsl-vector-map": {
    "source": "mbtiles://./estonia.mbtiles",
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  "/map/v1/hsl-map": {
    "source": {
      "protocol": "gl:",
      "query": {},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { icons: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-sv": {
    "source": {
      "protocol": "gl:",
      "query": {},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { text_sv: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-sv-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { icons: { enabled: true }, text_sv: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-fi-sv": {
    "source": {
      "protocol": "gl:",
      "query": {},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { text_fisv: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },
  "/map/v1/hsl-map-fi-sv-256": {
    "source": {
      "protocol": "gl:",
      "query": {layerTileSize: 256},
      "style": require("hsl-map-style").generateStyle({
        sourcesUrl,
        glyphsUrl,
        components: { icons: { enabled: true }, text_fisv: { enabled: true } }
      })
    },
    "headers": {
      "Cache-Control": "public,max-age=604800"
    }
  },  
  "/map/v1/estonia-stop-map": {
    "source": `otpstops://${process.env.ESTONIA_OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
   "/map/v1/hsl-parkandride-map": {
    "source": "hslparkandride://",
    "headers": {
      "Cache-Control": "public,max-age=172800"
    }
  },
  "/map/v1/estonia-parkandride-bikestop-map": {
    "source": "estoniaparkandridebikestop://",
    "headers": {
      "Cache-Control": "public,max-age=172800"
    }
  }
}
