html {
    scroll-snap-type: x mandatory;
    overflow-y: hidden;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: grid;
    grid-auto-flow: column;
}

.level {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 3em;
    position: relative;
    scroll-snap-align: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(15, 17, 18);
    gap: 2em;

    display: grid;
   
}

#level-1 {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr .25fr;
    grid-template-areas: 
        "description title examples"
        "description image examples"
        "description navigation examples";
}

#level-2 {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        "description title title"
        "description image examples";
}

#level-3 {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
        "description title examples"
        "description image examples";
}

.light {
    grid-area: image;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20vw;
    height: 20vw;

    opacity: 0.05;                  
    transition: opacity 1.5s ease-in;
}

.light.active {
    opacity: 1;                     
}
.light.progressed {
    opacity: 1;
}

.light.inPorgress {
    opacity: .5;
}

.light.noProgress {
    opacity: .1;
}

.info {
    border-radius: 1em;
    background-color: rgb(39, 49, 52);
    opacity: 0;               
    
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.info.active {
    opacity: 1;
    transform: translateY(0);
}

#description {
    grid-area: description;
}

#title {
    grid-area: title;
}

#title h1 {
    font-size: 6em;
    text-align: center;
}

#examples {
    grid-area: examples;
}

#navigation {
    grid-area: navigation;
}
