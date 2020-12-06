var APP_DATA = {
  "scenes": [
    {
      "id": "0-vorderseite",
      "name": "Vorderseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.16193915112977209,
        "pitch": 0.07352359502996464,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": -0.0484343863565897,
          "pitch": -0.0022227239617116368,
          "rotation": 0,
          "target": "3-flur-erdgeschoss-eingang"
        },
        {
          "yaw": -0.4249738428471179,
          "pitch": 0.018010629125210897,
          "rotation": 0,
          "target": "2-garten-terrasse"
        },
        {
          "yaw": 0.4172009585746892,
          "pitch": -0.040687344827144756,
          "rotation": 5.497787143782138,
          "target": "1-hochbeet-garten"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hochbeet-garten",
      "name": "Hochbeet-Garten",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.2016119837850212,
        "pitch": 0.1876995913455186,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": -0.9393014461517701,
          "pitch": -0.03791976480701997,
          "rotation": 1.5707963267948966,
          "target": "0-vorderseite"
        },
        {
          "yaw": 0.3943042099784364,
          "pitch": 0.02330968840209735,
          "rotation": 0,
          "target": "10-wohnzimmer"
        },
        {
          "yaw": 1.2978989690097826,
          "pitch": 0.06677890390838748,
          "rotation": 0,
          "target": "2-garten-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garten-terrasse",
      "name": "Garten-Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.23046988142691305,
        "pitch": 0.08464641970657283,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 0.42712182376853747,
          "pitch": 0.019625558459232195,
          "rotation": 0,
          "target": "0-vorderseite"
        },
        {
          "yaw": -0.8375643767037033,
          "pitch": 0.0386694373006371,
          "rotation": 0,
          "target": "1-hochbeet-garten"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-flur-erdgeschoss-eingang",
      "name": "Flur Erdgeschoss Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.16916268134714585,
        "pitch": 0.16558384800787884,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 0.10357717057794602,
          "pitch": 0.05285754597449177,
          "rotation": 0,
          "target": "8-flur-erdgeschoss"
        },
        {
          "yaw": 1.5338609387768498,
          "pitch": 0.7576228033030681,
          "rotation": 16.493361431346422,
          "target": "4-flur-keller"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-flur-keller",
      "name": "Flur Keller",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11225470586506603,
        "pitch": 0.25393925911967585,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 1.7119545814484285,
          "pitch": 0.2215759029513844,
          "rotation": 0,
          "target": "7-werkstatt"
        },
        {
          "yaw": -1.5810313497899617,
          "pitch": 0.22413569698302993,
          "rotation": 0,
          "target": "5-waschraum"
        },
        {
          "yaw": -2.986099308285615,
          "pitch": 0.29563914540763037,
          "rotation": 0,
          "target": "6-hobbyraum"
        },
        {
          "yaw": -0.3001333892449001,
          "pitch": -0.37611709404439253,
          "rotation": 0.7853981633974483,
          "target": "3-flur-erdgeschoss-eingang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4230140573488157,
          "pitch": -0.19029555754393535,
          "title": "Mond<br>",
          "text": "Die Lampe ist eigtl. ein Mond, leider auf dem Foto nicht zu erkennen.<br>"
        },
        {
          "yaw": -2.990782639682628,
          "pitch": 0.11508672480758086,
          "title": "Hobbyraum<br>",
          "text": "<div>Der noch nicht fertige und leider auch mit allen möglichen Zeugs zu gestellte Hobbyraum.</div>"
        }
      ]
    },
    {
      "id": "5-waschraum",
      "name": "Waschraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.22968500813352577,
        "pitch": 0.09135982718497004,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 1.7902381027602283,
          "pitch": 0.33262196630637497,
          "rotation": 0,
          "target": "4-flur-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08445548918864709,
          "pitch": -0.03922437112996846,
          "title": "Geheimtür<br>",
          "text": "<div>Keiner weiß, wohin die Tür führt, denn Sie ist verriegelt und der Schlüssel nicht auffindbar. ;)<br></div>"
        }
      ]
    },
    {
      "id": "6-hobbyraum",
      "name": "Hobbyraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10616798502343983,
        "pitch": 0.253854479267698,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 0.025795648876783872,
          "pitch": 0.15596147280767347,
          "rotation": 0,
          "target": "4-flur-keller"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-werkstatt",
      "name": "Werkstatt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.004401900000001291,
        "pitch": 0,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": -1.8871097270204071,
          "pitch": 0.24956094777329163,
          "rotation": 0,
          "target": "4-flur-keller"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-flur-erdgeschoss",
      "name": "Flur Erdgeschoss",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.005370243852279799,
        "pitch": 0.1105537969409518,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 0.40835375729939827,
          "pitch": 0.20705107723530247,
          "rotation": 5.497787143782138,
          "target": "3-flur-erdgeschoss-eingang"
        },
        {
          "yaw": 1.2097145792384012,
          "pitch": 0.21054717931676592,
          "rotation": 12.566370614359176,
          "target": "9-hauswirtschaftsraum"
        },
        {
          "yaw": 2.5388913082212987,
          "pitch": 0.22135720703885475,
          "rotation": 0.7853981633974483,
          "target": "10-wohnzimmer"
        },
        {
          "yaw": -1.6890895937692427,
          "pitch": 0.23575656197026973,
          "rotation": 0,
          "target": "11-arbeitszimmer"
        },
        {
          "yaw": -0.2972583796245445,
          "pitch": -0.38458192197141905,
          "rotation": 0.7853981633974483,
          "target": "12-flur-obergeschoss-fenster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hauswirtschaftsraum",
      "name": "Hauswirtschaftsraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.699177228861636,
        "pitch": 0.3955405439524604,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 1.632244201107488,
          "pitch": 0.22481746864069763,
          "rotation": 0,
          "target": "8-flur-erdgeschoss"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06306681740708342,
          "pitch": 0.42130697802869577,
          "title": "Entkalktungsanlage<br>",
          "text": "Wegen des sehr hohen Kalkanteils im Leitungswasser mussten wir uns eine Entkalkungsanlage anschaffen.<br>"
        },
        {
          "yaw": 0.7860646730424321,
          "pitch": -0.40088850238012874,
          "title": "Heizung / Wärmepumpe<br>",
          "text": "Die Wärmepumpe ist leider im Winter nicht so effizient, heizt aber trotzdem zuverlässig.<br>"
        },
        {
          "yaw": -2.8166211811549324,
          "pitch": -0.1658731559391331,
          "title": "Lüftung<br>",
          "text": "Alle Räume haben entweder eine Zu-/ oder Abluft (Außnahme die Flure)<br>"
        },
        {
          "yaw": 0.0019425421221654915,
          "pitch": 1.0099164649229344,
          "title": "Salztabs",
          "text": "<div>Nachfüllpackung für die Entkalkungsanlage.</div>"
        }
      ]
    },
    {
      "id": "10-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.169594105002778,
        "pitch": 0.25230661628994966,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 0.25054587248878946,
          "pitch": 0.10872859717789574,
          "rotation": 0,
          "target": "8-flur-erdgeschoss"
        },
        {
          "yaw": 2.4326093090183125,
          "pitch": 0.10416681664887761,
          "rotation": 1.5707963267948966,
          "target": "1-hochbeet-garten"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-arbeitszimmer",
      "name": "Arbeitszimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.13581838699777649,
        "pitch": 0.2391436654355683,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 1.663952815948205,
          "pitch": 0.2565161003085983,
          "rotation": 0,
          "target": "8-flur-erdgeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-flur-obergeschoss-fenster",
      "name": "Flur Obergeschoss Fenster",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.791894399623537,
        "pitch": 0.25193635807477754,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": -1.5077366002321178,
          "pitch": 0.6599929327601988,
          "rotation": 3.9269908169872414,
          "target": "8-flur-erdgeschoss"
        },
        {
          "yaw": -3.0326409754160473,
          "pitch": 0.24239232611542505,
          "rotation": 0,
          "target": "13-flur-obergeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-flur-obergeschoss",
      "name": "Flur Obergeschoss",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.065275508109446,
        "pitch": 0.1343741857052052,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": -2.705750644703457,
          "pitch": 0.23351772769029644,
          "rotation": 0,
          "target": "17-schlafzimmer"
        },
        {
          "yaw": 2.2643419003351166,
          "pitch": 0.10601101905852417,
          "rotation": 0.7853981633974483,
          "target": "15-bad-licht"
        },
        {
          "yaw": 1.226739958256175,
          "pitch": 0.20879385499339875,
          "rotation": 0,
          "target": "14-gstezimmer"
        },
        {
          "yaw": 0.3348307953912375,
          "pitch": 0.2694864181569674,
          "rotation": 5.497787143782138,
          "target": "12-flur-obergeschoss-fenster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-gstezimmer",
      "name": "Gästezimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.024166097335307057,
        "pitch": 0.12880976911868203,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": -1.6445039651606095,
          "pitch": 0.26841957381108017,
          "rotation": 0,
          "target": "13-flur-obergeschoss"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.511286992420108,
          "pitch": 0.633199623406977,
          "title": "Nähmaschine",
          "text": "Hier stand das Keyboard, aber wegen Corona hat die Nähmaschine den Platz vorübergehend bekommen.<br>"
        },
        {
          "yaw": -0.5003988724635295,
          "pitch": 0.5807864546712889,
          "title": "Material für Masken<br>",
          "text": "Stoff und Schnüre zum Masken nähen.<br>"
        }
      ]
    },
    {
      "id": "15-bad-licht",
      "name": "Bad (Licht)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.550454760593185,
        "pitch": 0.13365586159722298,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 1.3149987849264697,
          "pitch": 0.06090910861746934,
          "rotation": 0,
          "target": "13-flur-obergeschoss"
        },
        {
          "yaw": 1.522776786105771,
          "pitch": 0.03214867146009226,
          "rotation": 9.42477796076938,
          "target": "16-bad-wow"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6363758774089314,
          "pitch": 0.03258464899504432,
          "title": "Lichtschalter",
          "text": "Noch mehr WOW zum Universum.<br>"
        }
      ]
    },
    {
      "id": "16-bad-wow",
      "name": "Bad (WOW)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.520973908464991,
        "pitch": -0.008963577072783835,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 1.2773170636199644,
          "pitch": 0.04297363619233607,
          "rotation": 0,
          "target": "13-flur-obergeschoss"
        },
        {
          "yaw": 1.4533131752560209,
          "pitch": 0.024457017673652715,
          "rotation": 3.141592653589793,
          "target": "15-bad-licht"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7867407243605307,
        "pitch": 0.12144921088330918,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": 1.7881600124367854,
          "pitch": 0.09114057362841876,
          "rotation": 0,
          "target": "13-flur-obergeschoss"
        },
        {
          "yaw": 1.1456032958169686,
          "pitch": 0.08361653940466063,
          "rotation": 0,
          "target": "18-ankleide"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ankleide",
      "name": "Ankleide",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.192363440385085,
        "pitch": 0.025913411821541388,
        "fov": 1.4095469020700806
      },
      "linkHotspots": [
        {
          "yaw": -0.03658023005173838,
          "pitch": 0.11859929599453345,
          "rotation": 0,
          "target": "17-schlafzimmer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.07234894981011308,
          "pitch": -0.07072560809355721,
          "title": "Schiebetür",
          "text": "Da hat jemand hinter euch die Glasschiebetür zu gemacht! ;)<br>"
        }
      ]
    }
  ],
  "name": "HomeSweetHome",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
