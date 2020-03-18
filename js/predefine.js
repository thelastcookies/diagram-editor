ht.Default.setImage('arrow1', {
    width: 100,
    height: 50,
    comps: [
        {
            type: 'shape',
            points: [2, 25, 30, 25],
            borderWidth: 4,
            borderColor: 'rgba(255, 0, 0, 0.9)'
        },
        {
            type: 'shape',
            points: [30, 10, 30, 40, 50, 25, 30, 10],
            background: 'rgba(255, 0, 0, 0.9)',
            borderWidth: 1,
            borderColor: 'red',
            gradient: 'spread.vertical',
            gradientColor: 'rgba(255, 255, 255, 0.9)'
        }
    ]
}); 
ht.Default.setImage('targetArrow1', {
    width: 40,
    height: 20,
    comps: [
        {
            type: 'image',
            name: 'arrow1',
            rect: [0, 0, 40, 20]
        }
    ]
});
ht.Default.setImage('sourceArrow1', {
    width: 40,
    height: 20,
    comps: [
        {
            type: 'image',
            name: 'arrow1',
            rect: [0, 0, 40, 20],
            rotation: Math.PI
        }
    ]
});  

ht.Default.setImage('arrow2', {
    width: 100,
    height: 50,
    comps: [
        {
            type: 'shape',
            points: [2, 25, 30, 25],
            borderWidth: 4,
            borderColor: 'rgba(255, 0, 0, 0.9)'
        },
        {
            type: 'shape',
            points: [15, 5, 30, 25, 15, 45, 50, 25, 15, 5],
            background: 'yellow',
            borderWidth: 1,
            borderColor: 'red'
        }
    ]
});   
ht.Default.setImage('targetArrow2', {
    width: 40,
    height: 16,
    comps: [
        {
            type: 'image',
            name: 'arrow2',
            rect: [0, 0, 40, 16]
        }
    ]
});
ht.Default.setImage('sourceArrow2', {
    width: 40,
    height: 16,
    comps: [
        {
            type: 'image',
            name: 'arrow2',
            rect: [0, 0, 40, 16],
            rotation: Math.PI
        }
    ]
});

ht.Default.setImage('alarmIcon-big', {
    width: 100,
    height: 100,
    comps: [
        {
            type: 'triangle',
            rect: [2, 2, 96, 96],
            background: { 
                value : 'red',
                func: 'attr@alarm.color'
            }
        },
        {
            type: 'rect',
            rect: [45, 30, 10, 40],
            background: 'white'
        },
        {
            type: 'circle',
            rect: [40, 72, 20, 20],
            background: 'white'
        }
    ]
});

ht.Default.setImage('alarmIcon', {
    width: 16,
    height: 16,
    comps: [
        {
            type: 'image',
            rect: [0, 0, 16, 16],
            name: 'alarmIcon-big'
        }
    ]
});

ht.Default.setImage('switch', {
    width: 100,
    height: 50,
    comps: [
        {
            type: 'roundRect',
            rect: [0, 0, 100, 50],
            background: '#2C3E50',
            gradient: 'linear.north'
        },
        {
            type: 'circle',
            rect: [10, 10, 10, 10],
            background: '#34495E',
            gradient: 'radial.center'
        },
        {
            type: 'circle',
            rect: [80, 10, 10, 10],
            background: '#34495E',
            gradient: 'radial.center'
        },
        {
            type: 'shape',
            points: [10, 40, 40, 40],
            borderWidth: 8,
            borderColor: '#40ACFF',
            border3d: true
        },
        {
            type: 'shape',
            points: [60, 40, 90, 40],
            borderWidth: 8,
            borderColor: '#40ACFF',
            border3d: true
        },
        {
            type: 'shape',
            points: [5, 40, 35, 40, 65, 40],
            segments: [1, 1, 2],
            borderWidth: 8,
            borderColor: '#40ACFF',
            border3d: true,
            borderCap: 'round',
            rotation: {
                value: -Math.PI/4,
                func: 'style@switch.angle'
            }
        },
        {
            type: 'circle',
            rect: [30, 35, 10, 10],
            borderColor: 'red',
            borderWidth: 5,
            border3d: true
        },
        {
            type: 'circle',
            rect: [60, 35, 10, 10],
            borderColor: 'red',
            borderWidth: 5,
            border3d: true
        }        
    ]
});

ht.Default.setImage('cloud', {
    "width": 72,
    "height": 45,
    "comps": [
        {
            "type": "shape",
            "points": [
                9,
                42,
                0.3,
                38.4,
                2.4,
                28.8,
                5.7,
                21.6,
                11.7,
                22.5,
                11.7,
                15.9,
                16.8,
                13.8,
                21.6,
                12,
                24.3,
                15.9,
                27.9,
                3,
                42.3,
                3,
                59.4,
                4.5,
                57.3,
                18.3,
                69.9,
                18.9,
                69.9,
                27.3,
                69.9,
                38.4,
                64.2,
                41.4
            ],
            "segments": [
                1,
                3,
                3,
                3,
                3,
                3,
                3,
                3,
                3
            ],
            "gradient": "linear.northeast",
            "background": "#3498DB",
            "borderWidth": 0.5,
            "borderColor": 'black'
        }
    ]
});