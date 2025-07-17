var config = {
    style: 'mapbox://styles/tefaceli/cmd3kzyj800g901qn8pwn5v69',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoidGVmYWNlbGkiLCJhIjoiY2lqbjM4eHdwMDBjeHZhbHg3b2F3MGxkOCJ9.Ixr6KVIlz7u_yXKM-AWX8Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'How murders plagued Ecuador',
    subtitle: "A deep dive into Ecuador's violence outburst since 2023.",
    byline: 'By Estefanía Celi',
    footer: 'Source: Ministerio del Interior, INEC, CNE. The analysis used for building this map is available <a href="https://github.com/tefaceli/ecuador_murder_data_analysis" target="_blank">here</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ecuador',
            //image: './assets/san-fran.jpeg',
            description: "In 2024, the country recorded a homicide rate of 38.8 per 100,000 inhabitants — an improvement over 2023, but still alarmingly high. <br>The violence has had a direct impact on the daily lives of Ecuadorians. Between 2023 and May 2025, there have been 19.335 murders all over the country.",
            location: {
                center: [-80.39183, -1.38817],
                zoom: 6.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'asesinatos',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'asesinatos',
                     opacity: 0,
                     duration: 1000
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Guayas',
            image: './assets/guayaquil.jpeg',
            description: 'One of the provinces most affected by violence has been Guayas, which recorded a total of 9,126 homicides over the past 29 months, accounting for 47.2% of all cases registered nationwide.',
            location: {
                center: [-80.22823, -2.17491],
                zoom: 7.3,
                pitch: 0,
                bearing: 0,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'guayas',
                     opacity: 0.5,
                     duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'guayas',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Guayaquil',
            //image: './assets/geneva.jpg',
            description: 'In Guayaquil, the most populous city in Ecuador, the highest number of homicides has been recorded in recent months: 5,635. <br>Homicides have been concentrated in the most densely populated areas of the city.',
            location: {
                center: [-79.99411, -2.19423],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'guayaquil',
                     opacity: 0.5,
                     duration: 1000
                 },
                 {
                     layer: 'parroquias',
                     opacity: 0.9,
                     duration: 1000
                 },
                 {
                     layer: 'asesinatos',
                     opacity: 1,
                     duration: 3000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'guayaquil',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'parroquias',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'asesinatos',
                     opacity: 0,
                     duration: 1000
                 }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Pascuales',
            image: './assets/balerio-estacio.jpg',
            description: 'Pascuales parish, in northern Guayaquil, is one of the areas hardest hit by violence. It recorded the highest number of consecutive days with at least one killing: 22 days between December 1 and 22, 2024. <br>Pascuales also saw one of the bloodiest days on record: on July 23, 2023, 22 people were murdered in a single day.',
            location: {
                center: [-79.97497, -2.07902],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'asesinatospascuales',
                     opacity: 1,
                     duration: 100
                 },
                 {
                     layer: 'pascuales',
                     opacity: 1,
                     duration: 100
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'asesinatospascuales',
                     opacity: 0,
                     duration: 1000
                 },
                 {
                     layer: 'pascuales',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Balerio Estacio',
            //image: './assets/j.jpg',
            description: 'Balerio Estacio, one of the neighborhoods in the Pascuales parish, has the worst figures in all of Guayaquil. It recorded 296 murders between 2023 and May 2025, including a mass shooting on June 1, 2024, in which seven people were killed. <br>Several streets in this neighborhood are consiedered "hot", because they register an high amount of murders.',
            location: {
                center: [-79.97535, -2.10921],
                zoom: 14.15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'asesinatospascuales',
                     opacity: 1,
                     duration: 1
                 },
                 {
                     layer: 'pascualeszonas',
                     opacity: 1,
                     duration: 1000
                 },
                 {
                     layer: 'balerioestacio',
                     opacity: 0.4,
                     duration: 1000
                 },
                 {
                     layer: 'asesinatosbalerio',
                     opacity: 0.9,
                     duration: 5000
                 }  
            ],
            onChapterExit: [
                 {
                     layer: 'asesinatospascuales',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'pascualeszonas',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'balerioestacio',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'asesinatosbalerio',
                     opacity: 0,
                     duration: 1000
                 }
                
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Durán',
            //image: './assets/j.jpg',
            description: 'Durán, the canton neighboring Guayaquil, is also one of the areas most affected by violence. Although it recorded far fewer murders (1,257 — just 6% of the total in the period analyzed), it is a much smaller territory: only 300 km2. <br>When deaths are analyzed in proportion to its population, this canton ranks among the most violent in Ecuador, and at one point, even in all of Latin America.',
            location: {
                center: [-79.75677, -2.20324],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'duran',
                     opacity: 0.5,
                     duration: 1000
                 },
                 {
                     layer: 'parroquias',
                     opacity: 0.9,
                     duration: 1000
                 },
                 {
                     layer: 'asesinatos',
                     opacity: 1,
                     duration: 3000
                 }  
            ],
            onChapterExit: [
                 {
                     layer: 'duran',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'parroquias',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'asesinatos',
                     opacity: 0,
                     duration: 1000
                 }
            ]
        },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Divino Niño',
            image: './assets/duran.jpeg',
            description: 'Divino Niño parish is the most violent area in the canton of Durán. It has recorded 587 murders, including 10 days with between seven and nine killings each. <br>This area has continued to experience high levels of violence in 2025. In February alone, it registered 41 homicides — including a streak of seven consecutive days with at least one murder.',
            location: {
                center: [-79.81806, -2.16291],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'asesinatosdivino',
                     opacity: 1,
                     duration: 100
                 },
                 {
                     layer: 'divino',
                     opacity: 1,
                     duration: 100
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'asesinatosdivino',
                     opacity: 0,
                     duration: 1000
                 },
                 {
                     layer: 'divino',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {
            id: 'eight-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Secap',
            //image: './assets/j.jpg',
            description: 'Secap, a neighborhood in Durán named after a public building, has recorded 147 murders during the analyzed period. This part of the city is among the most violent, with several hotspots where homicides have occurred.',
            location: {
                center: [-79.82870, -2.15817],
                zoom: 14.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'asesinatosdivino',
                     opacity: 1,
                     duration: 1
                 },
                 {
                     layer: 'divinozonas',
                     opacity: 1,
                     duration: 1000
                 },
                 {
                     layer: 'secap',
                     opacity: 0.4,
                     duration: 1000
                 },
                 {
                     layer: 'asesinatossecap',
                     opacity: 0.9,
                     duration: 5000
                 }  
            ],
            onChapterExit: [
                 {
                     layer: 'asesinatosdivino',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'divinozonas',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'secap',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'asesinatossecap',
                     opacity: 0,
                     duration: 1500
                 }
            ]
        }
    ]
};
