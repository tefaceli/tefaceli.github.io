const scrollHint = document.getElementById('scroll-hint');

const header_height = 64;
const width = window.innerWidth;
const height = window.innerHeight - header_height;

const margin = { top: 10, right: 10, bottom: 10, left: 10 };

const svg = d3.select("#svg-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("width", "100%")
    .style("height", "100%")
    .style("background", "#000");

d3.csv("data-violencia-2025.csv").then(data => {

console.log("Filas totales:", data.length);

const parseDate = d3.timeParse("%Y-%m-%d");
const formatDate = d3.timeFormat("%d-%m-%Y");

data.forEach(d => {
    d.fecha = parseDate(d.fecha_muerte);
});

data.sort((a, b) => a.fecha - b.fecha);

const usableWidth = width - margin.left - margin.right;
const usableHeight = height - margin.top - margin.bottom;

const totalPoints = data.length;

const cols = Math.ceil(Math.sqrt(totalPoints * (usableWidth / usableHeight)));
const rows = Math.ceil(totalPoints / cols);

const spacingFactor = 0.85; 

const cellWidth = usableWidth / cols;
const cellHeight = usableHeight / rows;

const pointRadius = Math.min(cellWidth, cellHeight) / 2 * spacingFactor;

const points = svg.selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", (d, i) => {
    const col = i % cols;
    return margin.left + col * cellWidth + cellWidth / 2;
    })
    .attr("cy", (d, i) => {
    const row = Math.floor(i / cols);
    return margin.top + row * cellHeight + cellHeight / 2;
    })
    .attr("r", 0)
    .attr("fill", "#b03a2e")
    .attr("opacity", 0);

const dateBgWidth = 125;
const dateBgHeight = 28;

const dateBg = svg.append("rect")
    .attr("x", width - margin.right - dateBgWidth)
    .attr("y", margin.top)
    .attr("width", dateBgWidth)
    .attr("height", dateBgHeight)
    .attr("fill", "rgba(0,0,0,0.6)")
    .attr("rx", 4)
    .attr("ry", 4);

const dateLabel = svg.append("text")
    .attr("x", width - margin.right - 5)
    .attr("y", margin.top + dateBgHeight / 2 + 5)
    .attr("text-anchor", "end")
    .attr("fill", "#ffffff")
    .attr("font-size", "20px")
    .attr("font-family", "Inter, system-ui, sans-serif")
    .attr("font-weight", 500)
    .attr("opacity", 0.9)
    .text("");

const delayPerPoint = 1.8;
const growDuration = 200;

const groupedByDate = d3.groups(data, d => formatDate(d.fecha));

let index = 0;

groupedByDate.forEach(([fechaStr, puntosDeDia]) => {
    puntosDeDia.forEach((d) => {
    points
        .filter(p => p === d)
        .transition()
        .delay(400 + index * delayPerPoint)
        .duration(growDuration)
        .ease(d3.easeLinear)
        .attr("r", pointRadius)
        .attr("opacity", 0.9);
    index++;
    });
    setTimeout(() => {
    dateLabel.text(fechaStr);
    }, (index - puntosDeDia.length) * delayPerPoint);
});

let animationFinished = false;

const totalAnimationTime =
    index * delayPerPoint + growDuration;

setTimeout(() => {
    animationFinished = true;
}, totalAnimationTime);

setTimeout(() => {
    scrollHint.style.opacity = 1;
}, 3000);

setTimeout(() => {
    dateLabel.transition().duration(600).attr("opacity", 0);
    dateBg.transition().duration(600).attr("opacity", 0);
}, totalAnimationTime + 2000);

// --- COLORES PUNTOS ---
const COLORS = {
    masc: "#4e79a7",
    fem: "#e15759",
    trans: "#59a14f",
    nino: "#f28e2b",
    adolescente: "#9ad0f5",
    jovenes: "#f7dc6f",
    aduljov: "#f1c40f",
    casa: "#af7aa1",
    via_publica: "#76b7b2",
    arma_fuego: "#4c78a8",
    arma_blanca: "#bab0ab",
    delincuencia: "#e17c05",
    muted: "#555555"
};

// --- FUNCIONES RESTAURADAS CON OPTIMIZACIÓN MÓVIL ---
const isMobile = window.innerWidth < 768;
const duracion = isMobile ? 0 : 600; 

function paintGenero() {
    points
    .transition()
    .duration(duracion)
    .attr("fill", d => {
        if (d.genero === "m") return COLORS.masc;
        if (d.genero === "f") return COLORS.fem;
        if (d.genero === "t") return COLORS.trans;
        return COLORS.muted;
    })
    .attr("opacity", d =>
        (d.genero === "m" || d.genero === "f" || d.genero === "t") ? 0.9 : 0.25
    );
}
window.paintGenero = paintGenero;

function paintEdad1() {
    points
    .transition()
    .duration(duracion)
    .attr("fill", d => {
        if (d.edad_rango === "0–11") return COLORS.nino;
        if (d.edad_rango === "12–17") return COLORS.adolescente;
        return COLORS.muted;
    })
    .attr("opacity", d =>
        (d.edad_rango === "0–11" || d.edad_rango === "12–17") ? 0.9 : 0.25
    );
}
window.paintEdad1 = paintEdad1;

function paintEdad2() {
    points
    .transition()
    .duration(duracion)
    .attr("fill", d => {
        if (d.edad_rango === "18–29") return COLORS.jovenes;
        if (d.edad_rango === "30–44") return COLORS.aduljov;
        return COLORS.muted;
    })
    .attr("opacity", d =>
        (d.edad_rango === "18–29" || d.edad_rango === "30–44") ? 0.9 : 0.25
    );
}
window.paintEdad2 = paintEdad2;

function paintLugar() {
    points
    .transition()
    .duration(duracion)
    .attr("fill", d => {
        if (d.lugar === "VÍA PÚBLICA") return COLORS.via_publica;
        if (d.lugar === "CASA/VILLA") return COLORS.casa;
        return COLORS.muted;
    })
    .attr("opacity", d =>
        (d.lugar === "VÍA PÚBLICA" || d.lugar === "CASA/VILLA") ? 0.9 : 0.25
    );
}
window.paintLugar = paintLugar;

function paintArma() {
    points
    .transition()
    .duration(duracion)
    .attr("fill", d => {
        if (d.arma === "ARMA DE FUEGO") return COLORS.arma_fuego;
        if (d.arma === "ARMA BLANCA") return COLORS.arma_blanca;
        return COLORS.muted;
    })
    .attr("opacity", d =>
        (d.arma === "ARMA DE FUEGO" || d.arma === "ARMA BLANCA") ? 0.9 : 0.25
    );
}
window.paintArma = paintArma;

function paintMotiv() {
    points
    .transition()
    .duration(duracion)
    .attr("fill", d => {
        if (d.presunta_motivacion === "DELINCUENCIA COMUN") return COLORS.delincuencia;
        return COLORS.muted;
    })
    .attr("opacity", d =>
        (d.presunta_motivacion === "DELINCUENCIA COMUN") ? 0.9 : 0.25
    );
}
window.paintMotiv = paintMotiv;

function paintDefault() {
    if (!animationFinished) return;
    points
    .transition()
    .duration(duracion)
    .attr("fill", "#b03a2e")
    .attr("opacity", 0.9);
}
window.paintDefault = paintDefault;

// --- OBSERVER STEPS ---
const steps = document.querySelectorAll(".step");

const stepObserver = new IntersectionObserver(
    (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        const step = entry.target.dataset.step;

        if (step === "scrolly1-genero") {
            window.paintGenero();
        } else if (step === "scrolly1-edad1") {
            window.paintEdad1();
        } else if (step === "scrolly1-edad2") {
            window.paintEdad2();
        } else if (step === "scrolly2-lugar") {
            window.paintLugar();
        } else if (step === "scrolly2-arma") {
            window.paintArma();
        } else if (step === "scrolly2-motivacion") {
            window.paintMotiv();
        }
        }
    });
    },
    {
    root: null,
    threshold: 0.6
    }
);

steps.forEach(step => stepObserver.observe(step));

}).catch(err => {
console.error("Error cargando CSV:", err);
});

// --- OBSERVER FASES ---
const titular = document.getElementById("titular");

const phases = document.querySelectorAll("section[data-phase]");

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05
};

const phaseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const phase = entry.target.dataset.phase;

        switch(phase) {
        case "intro":
            titular.style.opacity = 1;
            break;
        case "editorial-1":
        case "editorial-2":
            titular.style.opacity = 0;
            scrollHint.style.opacity = 0;
            window.paintDefault();
            break;
        case "scrolly-1":
        case "scrolly-2":
            titular.style.opacity = 0;
            scrollHint.style.opacity = 0;
            break;
        case "credits":
            titular.style.opacity = 0;
            scrollHint.style.opacity = 0;
            window.paintDefault();
            break;
        }
    }
    });
}, observerOptions);

phases.forEach(phase => phaseObserver.observe(phase));
