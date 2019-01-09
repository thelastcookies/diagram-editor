datamodel_config = 
{
  "v": "6.2.8",
  "p": {
    "layers": [
      "0",
      1
    ],
    "autoAdjustIndex": true,
    "hierarchicalRendering": false
  },
  "d": [
    {
      "c": "ht.Node",
      "i": 178,
      "p": {
        "name": "阻波器",
        "layer": 1,
        "tag": "ZB0001",
        "image": "symbols/电力/阻波器.json",
        "position": {
          "x": -10.00152,
          "y": -28.44559
        }
      },
      "s": {
        "label": ""
      },
      "a": {
        "threshold": 60,
        "moreThenThColor": "rgb(0,0,255)",
        "lessThenThColor": "rgb(255,0,0)"
      }
    },
    {
      "c": "ht.Node",
      "i": 212,
      "p": {
        "name": "开关",
        "layer": 1,
        "tag": "KG0001",
        "image": "symbols/电力/开关.json",
        "position": {
          "x": 71.96061,
          "y": 34.99386
        }
      },
      "s": {
        "label": ""
      },
      "a": {
        "threshold": 80,
        "moreThenThColor": "rgb(255,255,0)",
        "lessThenThColor": "rgb(255,0,0)"
      }
    },
    {
      "c": "ht.Node",
      "i": 246,
      "p": {
        "name": "电阻",
        "layer": 1,
        "tag": "R0001",
        "image": "symbols/电力/电阻.json",
        "position": {
          "x": -10.00152,
          "y": 96.56952
        }
      },
      "s": {
        "label": ""
      },
      "a": {
        "threshold": 100,
        "moreThenThColor": "rgb(100,100,100)",
        "lessThenThColor": "rgb(255,0,0)"
      }
    },
    {
      "c": "ht.Node",
      "i": 280,
      "p": {
        "name": "放电间隙",
        "layer": 1,
        "tag": "FD0001",
        "image": "symbols/电力/放电间隙.json",
        "position": {
          "x": -87.86242,
          "y": 34.99386
        }
      },
      "s": {
        "label": ""
      },
      "a": {
        "threshold": 30,
        "moreThenThColor": "rgb(0,255,255)",
        "lessThenThColor": "rgb(255,0,0)"
      }
    },
    {
      "c": "ht.Edge",
      "i": 4934,
      "p": {
        "source": {
          "__i": 178
        },
        "target": {
          "__i": 212
        }
      },
      "s": {
        "edge.type": "h.v",
        "body.color": "rgb(255, 0, 0)"
      }
    },
    {
      "c": "ht.Edge",
      "i": 7075,
      "p": {
        "source": {
          "__i": 178
        },
        "target": {
          "__i": 280
        }
      },
      "s": {
        "edge.type": "h.v",
        "body.color": "rgb(255, 0, 0)"
      }
    },
    {
      "c": "ht.Edge",
      "i": 11786,
      "p": {
        "source": {
          "__i": 246
        },
        "target": {
          "__i": 212
        }
      },
      "s": {
        "edge.type": "h.v",
        "body.color": "rgb(255, 0, 0)"
      }
    },
    {
      "c": "ht.Edge",
      "i": 13366,
      "p": {
        "source": {
          "__i": 246
        },
        "target": {
          "__i": 280
        }
      },
      "s": {
        "edge.type": "h.v",
        "body.color": "rgb(255, 0, 0)"
      }
    }
  ]
}