var config = {
    style: 'mapbox://styles/primmapbok/cmerd25d6000f01qt0rx95y6f',
    accessToken: 'pk.eyJ1IjoicHJpbW1hcGJvayIsImEiOiJjbWVseTlveWgwbTUwMmpwbDhndzJvdHdxIn0.RiKnC8WhBRvXni16HJr9zA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    insetOptions: {
        markerColor: 'grey'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    projection: 'mercator',
    use3dTerrain: false,
    auto: false,
    footer: `<p><strong>Metodología:</strong> Para la elaboración de este mapa, PRIMICIAS utilizó la base de datos de muertes violentas del Ministerio del Interior, disponible en el portal de Datos Abiertos, que incluye las coordenadas de cada suceso. Con esas ubicaciones, cada muerte violenta fue ubicada en un mapa.
            </p>
            <p>De acuerdo a la ubicación de cada punto, estos fueron asignados a las parroquias y las zonas usando la biblioteca de código abierto de Python GeoPandas, que permite trabajar con datos espaciales. PRIMICIAS utilizó la delimitación de zonas establecida por el Consejo Nacional Electoral para las elecciones, por ser la única aproximación disponible a los barrios o sectores de los cantones en Ecuador.
            <p>
            <p>Análisis de datos, redacción y desarrollo por Estefanía Celi.</p>`,
    chapters: [
        {   id: 'first-chapter',
            alignment: 'center',
            hidden: true,
            title: 'Ecuador',
            //image: '',
            description: "Ecuador",
            location: {
                center: [-78.78859, -1.46360],
                zoom: 5.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'nacional',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'nacional',
                     opacity: 0,
                     duration: 1000
                 }
            ]
        },
        {   id: 'second-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Guayas',
            //image: '',
            description: `
                <p>A escala nacional, Guayas es donde sus habitantes sienten la violencia más cercana, pues se vive a diario.
                </p>
                <p>En esa provincia, este 2025 se registraron dos picos de muertes violentas, dos días en los que hubo 31 muertos: el 6 de marzo y el 2 de mayo. En esas dos fechas, se registraron <a href="https://www.primicias.ec/seguridad/ecuador-masacres-violencia-multiple-victimas-102740/">dos grandes masacres en Guayaquil</a>.
                </p>
                <p>En promedio, 12 personas han muerto diariamente en Guayas en los primeros siete meses de 2025.
                </p>`
                ,
            location: {
                center: [-80.22823, -2.17491],
                zoom: 7,
                pitch: 0,
                bearing: 0,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'provincias',
                     opacity: 0.8,
                     duration: 1000
                 },
                 {
                    layer: 'guayas-asesinatos',
                    opacity: 1,
                    duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'guayas-asesinatos',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'provincias',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {   id: 'third-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Guayaquil',
            //image: '',
            description: `<p>El cantón Guayaquil, la capital de Guayas y la ciudad más poblada de Ecuador, concentra el 30% de los asesinatos a escala nacional entre enero y julio de 2025. Allí, el promedio es el más alto del país: siete víctimas al día o una cada 3 horas con 10 minutos.
            </p>
            <h4 class="chart-title">Días con al menos una muerte violenta en las parroquias de Guayaquil</h4>
            <iframe title="Días con al menos una muerte violenta en las parroquias de Guayaquil" aria-label="Gráfico de barras" id="datawrapper-chart-heUnq" src="https://datawrapper.dwcdn.net/heUnq/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="168" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}})}();
            </script>`,
            location: {
                center: [-79.92368, -2.16103],
                zoom: 10.3,
                pitch: 0.00,
                bearing: -10.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'guayaquil-parroquias',
                     opacity: 0.5,
                     duration: 1000
                 },
                 {
                     layer: 'guayaquil-murders',
                     opacity: 1,
                     duration: 3000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'guayaquil-murders',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'guayaquil-parroquias',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {   id: 'fourth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Pascuales',
            //image: '',
            description: `<p>Pascuales, en el norte de Guayaquil, es la parroquia más afectada por la violencia a escala nacional. Entre enero y julio de 2025, suma 555 homicidios: que significan el 10% de todas las muertes violentas en el país. Esta parroquia es también una de las más densamente pobladas de la ciudad, aunque su número exacto de habitantes no consta en <a href="https://cubos.inec.gob.ec/AppCensoEcuador/">los resultados del censo 2022</a>.
            </p>
            <p>Pascuales llegó a tener 21 días seguidos con asesinatos, entre el 21 de febrero y el 3 de marzo.
            </p>
            </script>`,
            location: {
                center: [-79.95330, -2.05650],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'pascuales',
                     opacity: 1,
                     duration: 100
                 },
                 {
                     layer: 'pascuales-murders',
                     opacity: 1,
                     duration: 100
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'pascuales-murders',
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
        {   id: 'fifth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Paraíso de la Flor',
            //image: '',
            description: `<p>Paraíso de la Flor, uno de los barrios de Pascuales, tiene las peores cifras del año. En los primeros siete meses de 2025, hubo 79 muertes violentas, lo que lo convierte en el barrio más peligroso de Guayaquil, sólo por debajo del centro de Pascuales (80).
            </p>
            <p>En esta zona de la ciudad han habido 50 días con al menos un asesinato. Varios de ellos están concentrados a lo largo de la avenida 24-A, la arteria principal de este sector.
            </p>`,
            location: {
                center: [-79.95760, -2.09571],
                zoom: 13.8,
                pitch: 40.5,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'flor-zona-murders',
                     opacity: 0.85,
                     duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'flor-zona-murders',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {   id: 'sixth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Tarqui',
            //image: '',
            description: `<p>Tarqui, la parroquia más grande de Guayaquil, concentra en su área urbana también gran parte de muertes violentas: 397.
            </p>
            <p>En esa parroquia llegó a haber 23 asesinatos en un sólo día: el 6 de marzo de 2025. En los siete meses de 2025, en Tarqui hay una muerte violenta cada 12 horas y 45 minutos en promedio.
            </p>
            <p>Allí, se concentran también barrios de mucha peligrosidad, como Socio Vivienda</p>
            </script>`,
            location: {
                center: [-79.92629, -2.16187],
                zoom: 11,
                pitch: 0,
                bearing: -12.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'tarqui',
                     opacity: 1,
                     duration: 100
                 },
                 {
                     layer: 'tarqui-murders',
                     opacity: 1,
                     duration: 100
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'tarqui-murders',
                     opacity: 0,
                     duration: 1000
                 },
                 {
                     layer: 'tarqui',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {   id: 'seventh-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Ximena',
            //image: '',
            description: `<p>Ximena, en el sur de Guayaquil, es la tercera parroquia con más muertes violentas entre enero y julio de 2025. Pero la diferencia es que en esta parroquia, la situación empeoró drásticamente en mayo, cuando se registraron 87 asesinatos en 26 días.
            </p>
            <p>En Ximena, el promedio es de una muerte violenta cada 15 horas. Y estos sucesos se concentran en barrios como Trinipuerto, Isla Trinitaria y Guasmo Norte.</p>
            </script>`,
            location: {
                center: [-79.90182, -2.26355],
                zoom: 12,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'ximena',
                     opacity: 1,
                     duration: 100
                 },
                 {
                     layer: 'ximena-murders',
                     opacity: 1,
                     duration: 100
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'ximena-murders',
                     opacity: 0,
                     duration: 1000
                 },
                 {
                     layer: 'ximena',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {   id: 'eighth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Durán',
            //image: '',
            description: `<p>Durán es el segundo cantón más violento de Guayas: en siete meses suma ya 370 muertes violentas. Es así que tiene en promedio una muerte violenta cada 13 horas y 40 minutos, más que el promedio de Tarqui, en Guayaquil.
            </p>
            <p>De sus tres parroquias, la más afectada ha sido Divino Niño.
            </p>
            <h4 class="chart-title">El número de muertes violentas en las parroquias de Durán<h4>
            <iframe title="El número de muertes violentas en las parroquias de Durán" aria-label="Gráfico de barras" id="datawrapper-chart-98eid" src="https://datawrapper.dwcdn.net/98eid/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="120" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}})}();
            </script>`,
            location: {
                center: [-79.82844, -2.16944],
                zoom: 12.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'duran-parroquias',
                     opacity: 0.5,
                     duration: 1000
                 },
                 {
                     layer: 'duran-murders',
                     opacity: 1,
                     duration: 100
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'duran-murders',
                     opacity: 0,
                     duration: 500
                 },
                 {
                     layer: 'duran-parroquias',
                     opacity: 0,
                     duration: 500
                 }
            ]
        },
        {   id: 'nineth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'El sector Secap',
            //image: '',
            description: `<p>Secap, que más que un barrio es un sector de la parroquia Divino Niño, de Durán, es el más afectado del cantón. Pero no sólo eso. Es la zona más violenta de todo el país en los primeros siete meses de 2025.
            </p>
            <p>En el sector Secap, entre enero y julio de 2025, se han registrado 124 asesinatos, un número mayor al Paraíso de la Flor, Balerio Estacio o Socio Vivienda, en Guayaquil.
            </script>
            `,
            location: {
                center: [-79.83745, -2.16088],
                zoom: 13.6,
                pitch: 40.5,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'secap-zona-murders',
                     opacity: 0.85,
                     duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'secap-zona-murders',
                     opacity: 0,
                     duration: 500
                 }
            ]
        }
    ]
};
