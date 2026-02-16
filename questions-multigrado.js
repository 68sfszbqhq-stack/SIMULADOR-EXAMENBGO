// Banco de preguntas organizado por grado
// Total: 80 preguntas (2° año: 45 preguntas, 3° año: 35 preguntas)

const questionBankMultiGrado = {
    // ==================== SEGUNDO AÑO (45 PREGUNTAS) ====================
    "2": [
        // PROBABILIDAD Y ESTADÍSTICA I (5 preguntas)
        {
            id: 1,
            grado: "2",
            subject: "Probabilidad y Estadística I",
            subtema: "Permutaciones",
            question: "Un grupo de 6 amigos va a tomarse una foto en una fila. ¿De cuántas formas diferentes pueden colocarse?",
            options: {
                A: "6",
                B: "36",
                C: "120",
                D: "720"
            },
            correct: "D"
        },
        {
            id: 2,
            grado: "2",
            subject: "Probabilidad y Estadística I",
            subtema: "Permutaciones con orden",
            question: "En una competencia de atletismo con 8 corredores, ¿de cuántas maneras diferentes se pueden repartir las medallas de oro, plata y bronce?",
            options: {
                A: "24",
                B: "56",
                C: "336",
                D: "6720"
            },
            correct: "C"
        },
        {
            id: 3,
            grado: "2",
            subject: "Probabilidad y Estadística I",
            subtema: "Media aritmética",
            question: "Las edades de un grupo de 5 amigos son: 12, 14, 15, 15 y 19 años. ¿Cuál es la media aritmética de sus edades?",
            options: {
                A: "15",
                B: "14",
                C: "13",
                D: "12"
            },
            correct: "A"
        },
        {
            id: 4,
            grado: "2",
            subject: "Probabilidad y Estadística I",
            subtema: "Moda",
            question: "En una tienda se registraron las ventas diarias de la semana: $100, $150, $100, $200, $150, $100, $250. ¿Cuál es la moda de las ventas?",
            options: {
                A: "$100",
                B: "$150",
                C: "$200",
                D: "$250"
            },
            correct: "A"
        },
        {
            id: 5,
            grado: "2",
            subject: "Probabilidad y Estadística I",
            subtema: "Mediana",
            question: "Las calificaciones de un estudiante en 7 exámenes son: 6, 7, 9, 5, 8, 10, 7. ¿Cuál es la mediana de estas calificaciones?",
            options: {
                A: "5",
                B: "6",
                C: "7",
                D: "8"
            },
            correct: "C"
        },

        // CULTURA DIGITAL (5 preguntas)
        {
            id: 6,
            grado: "2",
            subject: "Cultura Digital",
            subtema: "Navegadores web",
            question: "¿Cuál es la función principal de un navegador web?",
            options: {
                A: "Crear bases de datos complejas.",
                B: "Interpretar archivos HTML para permitir la visualización de sitios web.",
                C: "Editar videos en alta definición."
            },
            correct: "C"
        },
        {
            id: 7,
            grado: "2",
            subject: "Cultura Digital",
            subtema: "Netiqueta",
            question: "¿A qué se refiere el término 'Netiqueta' en las redes sociales?",
            options: {
                A: "Al conjunto de reglas de cortesía y comportamiento para interactuar en línea.",
                B: "Al software utilizado para bloquear anuncios.",
                C: "A la velocidad de conexión a internet."
            },
            correct: "A"
        },
        {
            id: 8,
            grado: "2",
            subject: "Cultura Digital",
            subtema: "HTML",
            question: "¿Cuál es la función de HTML en el desarrollo de una página web?",
            options: {
                A: "Darle estilo, colores y diseño visual.",
                B: "Estructurar el contenido (títulos, párrafos, imágenes).",
                C: "Agregar funciones interactivas y cálculos complejos."
            },
            correct: "B"
        },
        {
            id: 9,
            grado: "2",
            subject: "Cultura Digital",
            subtema: "CSS",
            question: "Si deseo cambiar el color de fondo y el tipo de letra de mi sitio, ¿qué lenguaje debo usar?",
            options: {
                A: "JavaScript",
                B: "CSS (Hojas de Estilo en Cascada)",
                C: "HTML"
            },
            correct: "C"
        },
        {
            id: 10,
            grado: "2",
            subject: "Cultura Digital",
            subtema: "JavaScript",
            question: "¿Cuál es el propósito de JavaScript en una página web?",
            options: {
                A: "Definir solo el texto plano de la página.",
                B: "Crear interactividad (animaciones, validación de formularios, mapas).",
                C: "Configurar el servidor de correo electrónico."
            },
            correct: "C"
        },

        // LENGUA Y COMUNICACIÓN II (5 preguntas)
        {
            id: 11,
            grado: "2",
            subject: "Lengua y Comunicación II",
            subtema: "Ensayo",
            question: "¿Qué significa problematizar un tema?",
            options: {
                A: "Determinar si será útil para un ensayo.",
                B: "Plantearlo como un problema.",
                C: "Revisar la información que conocemos de él."
            },
            correct: "B"
        },
        {
            id: 12,
            grado: "2",
            subject: "Lengua y Comunicación II",
            subtema: "Fuentes de información",
            question: "Si un texto presenta un sesgo religioso, ¿de qué cualidad carece esta fuente de información?",
            options: {
                A: "Objetividad",
                B: "Relevancia",
                C: "Actualidad"
            },
            correct: "A"
        },
        {
            id: 13,
            grado: "2",
            subject: "Lengua y Comunicación II",
            subtema: "Estructura del ensayo",
            question: "¿En qué parte del ensayo se presenta el tema?",
            options: {
                A: "Introducción",
                B: "Desarrollo",
                C: "Conclusión"
            },
            correct: "A"
        },
        {
            id: 14,
            grado: "2",
            subject: "Lengua y Comunicación II",
            subtema: "Selección de tema",
            question: "¿Cómo puedes encontrar un tema para tu ensayo?",
            options: {
                A: "Leyendo otros ensayos.",
                B: "Explorando mis temas de interés.",
                C: "Identificando los temas controversiales."
            },
            correct: "C"
        },
        {
            id: 15,
            grado: "2",
            subject: "Lengua y Comunicación II",
            subtema: "Proceso de escritura",
            question: "¿En qué etapa se corrige la ortografía?",
            options: {
                A: "Planeación",
                B: "Revisión",
                C: "Reconsideración del tema"
            },
            correct: "B"
        },

        // INGLÉS III (5 preguntas)
        {
            id: 16,
            grado: "2",
            subject: "Inglés III",
            subtema: "Infinitivos",
            question: "Would you like _________ the concert this weekend?",
            options: {
                A: "to want to",
                B: "to visit to",
                C: "to go to",
                D: "to play to"
            },
            correct: "C"
        },
        {
            id: 17,
            grado: "2",
            subject: "Inglés III",
            subtema: "Infinitivos",
            question: "Do you want _____________ the new restaurant with me?",
            options: {
                A: "to want to",
                B: "to visit to",
                C: "to go to",
                D: "to play to"
            },
            correct: "C"
        },
        {
            id: 18,
            grado: "2",
            subject: "Inglés III",
            subtema: "Present Perfect",
            question: "Have you ever _________ Chinese food?",
            options: {
                A: "eating",
                B: "eaten",
                C: "eat",
                D: "ate"
            },
            correct: "B"
        },
        {
            id: 19,
            grado: "2",
            subject: "Inglés III",
            subtema: "Past Continuous",
            question: "What __________ you doing yesterday morning?",
            options: {
                A: "were",
                B: "is",
                C: "was",
                D: "are"
            },
            correct: "A"
        },
        {
            id: 20,
            grado: "2",
            subject: "Inglés III",
            subtema: "Present Perfect",
            question: "How long __________ you studied at Carlos Camacho Espíritu?",
            options: {
                A: "is",
                B: "has",
                C: "have",
                D: "were"
            },
            correct: "C"
        },

        // ECOSISTEMA, INTERACCIONES, ENERGÍA Y DINÁMICA (5 preguntas)
        {
            id: 21,
            grado: "2",
            subject: "Ecosistema, Interacciones, Energía y Dinámica",
            subtema: "Estabilidad de ecosistemas",
            question: "Un ecosistema es más estable cuando:",
            options: {
                A: "Tiene pocos organismos y una sola cadena alimentaria",
                B: "La energía se crea constantemente dentro del ecosistema",
                C: "Existen muchas interacciones entre productores, consumidores y descomponedores",
                D: "No ocurren cambios en el ambiente"
            },
            correct: "C"
        },
        {
            id: 22,
            grado: "2",
            subject: "Ecosistema, Interacciones, Energía y Dinámica",
            subtema: "Perturbaciones",
            question: "¿Qué sucede generalmente en un ecosistema inmaduro o inestable cuando ocurre una perturbación (incendio, sequía, contaminación)?",
            options: {
                A: "El ecosistema se recupera fácilmente sin cambios",
                B: "La productividad aumenta inmediatamente",
                C: "La red trófica se debilita y disminuye la productividad",
                D: "La energía y la materia dejan de circular"
            },
            correct: "C"
        },
        {
            id: 23,
            grado: "2",
            subject: "Ecosistema, Interacciones, Energía y Dinámica",
            subtema: "Ciclo del carbono",
            question: "¿Cuál de las siguientes opciones describe correctamente cómo se mueve el carbono en un ecosistema?",
            options: {
                A: "El carbono solo se encuentra en la atmósfera y no interactúa con los seres vivos.",
                B: "El carbono pasa de las plantas a los animales y regresa a la atmósfera mediante la respiración y la descomposición.",
                C: "El carbono se destruye cuando los animales lo usan para obtener energía.",
                D: "El carbono solo circula en los océanos y no en los ecosistemas terrestres."
            },
            correct: "B"
        },
        {
            id: 24,
            grado: "2",
            subject: "Ecosistema, Interacciones, Energía y Dinámica",
            subtema: "Productores",
            question: "En una red trófica, ¿cuál es la función principal de los productores?",
            options: {
                A: "Descomponer la materia orgánica muerta y reciclar nutrientes.",
                B: "Obtener energía al alimentarse de otros organismos.",
                C: "Regular la población de los consumidores mediante la depredación.",
                D: "Transformar la energía del Sol en energía química que inicia el flujo de energía en el ecosistema."
            },
            correct: "D"
        },
        {
            id: 25,
            grado: "2",
            subject: "Ecosistema, Interacciones, Energía y Dinámica",
            subtema: "Redes tróficas",
            question: "¿Qué son las redes tróficas en un ecosistema?",
            options: {
                A: "Son listas de animales que viven en un mismo lugar sin relacionarse entre sí.",
                B: "Son las relaciones de alimentación entre los seres vivos, que muestran cómo fluye la energía y la materia en un ecosistema.",
                C: "Son únicamente las cadenas alimenticias de los animales carnívoros.",
                D: "Son los cambios del clima que afectan a los ecosistemas."
            },
            correct: "B"
        },

        // TALLER DE CIENCIAS II (5 preguntas)
        {
            id: 26,
            grado: "2",
            subject: "Taller de Ciencias II",
            subtema: "Sistemas",
            question: "¿Qué es un sistema?",
            options: {
                A: "Es un conjunto de partes interrelacionadas que forman un todo con un propósito o función común.",
                B: "Es una magnitud física que permite realizar trabajo",
                C: "Cómo la energía se mueve y se transforma entre las distintas partes"
            },
            correct: "A"
        },
        {
            id: 27,
            grado: "2",
            subject: "Taller de Ciencias II",
            subtema: "Energía",
            question: "¿Qué es la energía?",
            options: {
                A: "Es un conjunto de partes interrelacionadas que forman un todo con un propósito o función común.",
                B: "Es una magnitud física que permite realizar trabajo",
                C: "Cómo la energía se mueve y se transforma entre las distintas partes"
            },
            correct: "B"
        },
        {
            id: 28,
            grado: "2",
            subject: "Taller de Ciencias II",
            subtema: "Flujo de energía",
            question: "¿Qué es el flujo de energía?",
            options: {
                A: "Es un conjunto de partes interrelacionadas que forman un todo con un propósito o función común.",
                B: "Es una magnitud física que permite realizar trabajo",
                C: "Cómo la energía se mueve y se transforma entre las distintas partes"
            },
            correct: "C"
        },
        {
            id: 29,
            grado: "2",
            subject: "Taller de Ciencias II",
            subtema: "Tipos de sistemas",
            question: "Intercambian energía y/o materia con el entorno (por ejemplo, una casa, una planta).",
            options: {
                A: "Sistemas cerrados",
                B: "Sistemas abiertos",
                C: "Sistemas duales"
            },
            correct: "B"
        },
        {
            id: 30,
            grado: "2",
            subject: "Taller de Ciencias II",
            subtema: "Tipos de sistemas",
            question: "Intercambian solo energía (idealmente) o casi nada de materia (ejemplos teóricos; en la práctica, todos los sistemas intercambian algo de materia).",
            options: {
                A: "Sistemas cerrados",
                B: "Sistemas abiertos",
                C: "Sistemas duales"
            },
            correct: "C"
        },

        // CONSERVA FRUTAS, VERDURAS Y LEGUMBRES (5 preguntas)
        {
            id: 31,
            grado: "2",
            subject: "Conserva frutas, verduras y legumbres",
            subtema: "Higiene",
            question: "¿Cuál es el objetivo principal del lavado correcto de manos en la manipulación de alimentos?",
            options: {
                A: "Mejorar el sabor de los alimentos",
                B: "Evitar el uso de guantes",
                C: "Prevenir la contaminación de los alimentos",
                D: "Reducir el tiempo de preparación"
            },
            correct: "C"
        },
        {
            id: 32,
            grado: "2",
            subject: "Conserva frutas, verduras y legumbres",
            subtema: "Métodos de conservación",
            question: "¿Cuál es un método tradicional de conservación por eliminación de humedad?",
            options: {
                A: "Refrigeración",
                B: "Congelación",
                C: "Deshidratación",
                D: "Pasteurización"
            },
            correct: "C"
        },
        {
            id: 33,
            grado: "2",
            subject: "Conserva frutas, verduras y legumbres",
            subtema: "Salmuera",
            question: "La salmuera se elabora principalmente con:",
            options: {
                A: "Agua y azúcar",
                B: "Aceite y vinagre",
                C: "Agua y sal",
                D: "Agua y levadura"
            },
            correct: "C"
        },
        {
            id: 34,
            grado: "2",
            subject: "Conserva frutas, verduras y legumbres",
            subtema: "Pruebas organolépticas",
            question: "Una prueba organoléptica evalúa:",
            options: {
                A: "El valor nutrimental",
                B: "El costo del producto",
                C: "El tiempo de conservación",
                D: "Color, olor, sabor y textura"
            },
            correct: "D"
        },
        {
            id: 35,
            grado: "2",
            subject: "Conserva frutas, verduras y legumbres",
            subtema: "Buenas prácticas",
            question: "¿Cuál es una práctica correcta de higiene durante la preparación de alimentos?",
            options: {
                A: "Usar anillos y pulseras",
                B: "Probar alimentos con la misma cuchara",
                C: "Utilizar vestuario limpio y adecuado",
                D: "Trabajar sin cubrir el cabello"
            },
            correct: "C"
        },

        // TRANSFORMA CEREALES - NIXTAMALIZACIÓN (5 preguntas)
        {
            id: 36,
            grado: "2",
            subject: "Transforma cereales y harinas - Nixtamalización",
            subtema: "Nixtamalización",
            question: "¿Cuál es la función principal de la cal en el proceso de nixtamalización?",
            options: {
                A: "Endulzar el maíz",
                B: "Pintar el grano",
                C: "Aumentar el valor nutritivo y facilitar la eliminación del pericarpio",
                D: "Reducir el tamaño del grano"
            },
            correct: "C"
        },
        {
            id: 37,
            grado: "2",
            subject: "Transforma cereales y harinas - Nixtamalización",
            subtema: "Proceso",
            question: "El proceso de nixtamalización consiste principalmente en:",
            options: {
                A: "Moler el maíz crudo",
                B: "Tostar el maíz seco",
                C: "Cocer el maíz con agua y cal y dejarlo reposar",
                D: "Fermentar el maíz durante varios días"
            },
            correct: "C"
        },
        {
            id: 38,
            grado: "2",
            subject: "Transforma cereales y harinas - Nixtamalización",
            subtema: "Beneficios nutricionales",
            question: "Un beneficio nutricional de la nixtamalización es que:",
            options: {
                A: "Elimina completamente la fibra",
                B: "Reduce el contenido de calcio",
                C: "Mejora la disponibilidad de niacina y calcio",
                D: "Convierte el maíz en proteína animal"
            },
            correct: "C"
        },
        {
            id: 39,
            grado: "2",
            subject: "Transforma cereales y harinas - Nixtamalización",
            subtema: "Proceso",
            question: "Después de cocer y reposar el maíz nixtamalizado, el siguiente paso es:",
            options: {
                A: "Secarlo al sol",
                B: "Mezclarlo con levadura",
                C: "Lavarlo para retirar el exceso de cal y pericarpio",
                D: "Congelarlo inmediatamente"
            },
            correct: "C"
        },
        {
            id: 40,
            grado: "2",
            subject: "Transforma cereales y harinas - Nixtamalización",
            subtema: "Productos",
            question: "La masa obtenida del nixtamal se utiliza para elaborar:",
            options: {
                A: "Solo pan dulce",
                B: "Refrescos tradicionales",
                C: "Tortillas, tamales y atoles",
                D: "Conservas en vinagre"
            },
            correct: "C"
        },

        // PENSAMIENTO MATEMÁTICO III (5 preguntas)
        {
            id: 41,
            grado: "2",
            subject: "Pensamiento Matemático III",
            subtema: "Funciones cuadráticas",
            question: "De las siguientes funciones, ¿cuál corresponde a una función cuadrática?",
            options: {
                A: "f(x) = 2",
                B: "f(x) = 2x + 2",
                C: "f(x) = 2x² + 2x + 2",
                D: "Todas las anteriores"
            },
            correct: "C"
        },
        {
            id: 42,
            grado: "2",
            subject: "Pensamiento Matemático III",
            subtema: "Evaluación de funciones",
            question: "Si f(x) = 4x - 1 y g(x) = x² + 3x - 5, ¿cuál es el valor de f(2) + g(2)?",
            options: {
                A: "12",
                B: "14",
                C: "16",
                D: "18"
            },
            correct: "A"
        },
        {
            id: 43,
            grado: "2",
            subject: "Pensamiento Matemático III",
            subtema: "Funciones lineales",
            question: "Un taxi cobra una tarifa inicial de $30 y $10 por cada kilómetro recorrido. Si representamos el costo total del viaje como C(x), donde x es la distancia en kilómetros, ¿cuál es la expresión correcta de la función?",
            options: {
                A: "C(x) = 30x + 10",
                B: "C(x) = 10x + 30",
                C: "C(x) = 40x",
                D: "C(x) = 20x"
            },
            correct: "B"
        },
        {
            id: 44,
            grado: "2",
            subject: "Pensamiento Matemático III",
            subtema: "Problemas de aplicación",
            question: "Una persona pago en un estacionamiento $200, por banderazo cobran $40 y estuvo 8 horas. ¿cuánto pagará alguien que solo ingresa una hora a dicho estacionamiento?",
            options: {
                A: "$20",
                B: "$25",
                C: "$60",
                D: "$65"
            },
            correct: "C"
        },
        {
            id: 45,
            grado: "2",
            subject: "Pensamiento Matemático III",
            subtema: "Ecuaciones lineales",
            question: "Un vendedor recibe un sueldo fijo de $250 más una comisión de $15 por cada producto vendido. Si su sueldo total fue $700, ¿cuántos productos vendió?",
            options: {
                A: "10 productos",
                B: "20 productos",
                C: "30 productos",
                D: "47 productos"
            },
            correct: "C"
        }
    ],

    // ==================== TERCER AÑO (35 PREGUNTAS) ====================
    "3": [
        // SALUD INTEGRAL I (5 preguntas)
        {
            id: 46,
            grado: "3",
            subject: "Salud Integral I",
            subtema: "Pilares de la salud",
            question: "Es uno de los pilares de la salud integral y se refiere al funcionamiento óptimo del cuerpo a través de prácticas que promueven el bienestar",
            options: {
                A: "Salud mental",
                B: "Salud física",
                C: "Salud social"
            },
            correct: "B"
        },
        {
            id: 47,
            grado: "3",
            subject: "Salud Integral I",
            subtema: "Pilares de la salud",
            question: "Es un componente clave de la salud integral que se enfoca en las relaciones con otras personas, la calidad de las interacciones y el sentido de pertenencia.",
            options: {
                A: "Salud mental",
                B: "Salud física",
                C: "Salud social"
            },
            correct: "C"
        },
        {
            id: 48,
            grado: "3",
            subject: "Salud Integral I",
            subtema: "Pilares de la salud",
            question: "Es un componente esencial de la salud integral que engloba el bienestar emocional.",
            options: {
                A: "Salud mental",
                B: "Salud física",
                C: "Salud social"
            },
            correct: "A"
        },
        {
            id: 49,
            grado: "3",
            subject: "Salud Integral I",
            subtema: "Factores que impactan la salud",
            question: "Factores biológicos y genéticos que impactan en la salud.",
            options: {
                A: "Rasgos fisiológicos y la edad",
                B: "Cambios climáticos y eventos extremos",
                C: "Calidad de servicios y costos"
            },
            correct: "A"
        },
        {
            id: 50,
            grado: "3",
            subject: "Salud Integral I",
            subtema: "Factores que impactan la salud",
            question: "Factores culturales y contextuales que impactan en la salud.",
            options: {
                A: "Rasgos fisiológicos y la edad",
                B: "Cambios climáticos y eventos extremos",
                C: "Calidad de servicios y costos"
            },
            correct: "C"
        },

        // CONCIENCIA HISTÓRICA II (5 preguntas)
        {
            id: 51,
            grado: "3",
            subject: "Conciencia Histórica II",
            subtema: "Época colonial",
            question: "Nombrado por el rey de España, concentraba el poder político y militar, pero respondía a los intereses de la metrópoli, no a las necesidades locales.",
            options: {
                A: "Criollos",
                B: "Sistema judicial",
                C: "Iglesia",
                D: "Virrey"
            },
            correct: "D"
        },
        {
            id: 52,
            grado: "3",
            subject: "Conciencia Histórica II",
            subtema: "Ilustración",
            question: "Rousseau planteó que el poder político debía basarse entre gobernantes y gobernados.",
            options: {
                A: "Ilustración",
                B: "Contrato social",
                C: "Separación de poderes",
                D: "Pensamiento crítico"
            },
            correct: "B"
        },
        {
            id: 53,
            grado: "3",
            subject: "Conciencia Histórica II",
            subtema: "Reformas borbónicas",
            question: "Expulsión de esta orden religiosa durante las reformas borbónicas.",
            options: {
                A: "Franciscanos",
                B: "Jesuitas",
                C: "Carmelitas",
                D: "Musulmanes"
            },
            correct: "C"
        },
        {
            id: 54,
            grado: "3",
            subject: "Conciencia Histórica II",
            subtema: "Estructura social colonial",
            question: "Hecho que propició la oportunidad para que las colonias buscaran su independencia.",
            options: {
                A: "Invasión francesa a España",
                B: "Invasión francesa a México",
                C: "Separación de poderes",
                D: "Independencia de E.U."
            },
            correct: "A"
        },
        {
            id: 55,
            grado: "3",
            subject: "Conciencia Histórica II",
            subtema: "Iglesia colonial",
            question: "Poseía poder e influencia, estaba controlada en sus altos puestos por clérigos peninsulares, aunque muchos sacerdotes criollos (como Hidalgo y Morelos) simpatizaban con ideas de cambio.",
            options: {
                A: "Criollos",
                B: "Sistema judicial",
                C: "Iglesia",
                D: "Virrey"
            },
            correct: "C"
        },

        // SEXUALIDAD Y GÉNERO (5 preguntas)
        {
            id: 56,
            grado: "3",
            subject: "Sexualidad y Género",
            subtema: "Género",
            question: "¿Cuál de las siguientes afirmaciones es más inclusiva respecto al género?",
            options: {
                A: "Solo hay dos géneros: hombre y mujer.",
                B: "El género es un espectro y las personas pueden identificarse de muchas maneras.",
                C: "El género no es relevante para la salud."
            },
            correct: "B"
        },
        {
            id: 57,
            grado: "3",
            subject: "Sexualidad y Género",
            subtema: "Relaciones respetuosas",
            question: "¿Qué acción promueve una relación respetuosa de género en la escuela?",
            options: {
                A: "Evitar hablar sobre diferencias de género.",
                B: "Escuchar y validar las experiencias de otras personas, sin estereotipos.",
                C: "Juzgar a quienes no cumplen con ciertos roles de género."
            },
            correct: "B"
        },
        {
            id: 58,
            grado: "3",
            subject: "Sexualidad y Género",
            subtema: "Identidad de género",
            question: "¿Cuál es la razón principal para respetar la identidad de género y los pronombres elegidos por una persona?",
            options: {
                A: "Para evitar conflictos",
                B: "Para mantener la armonía sin cuestionar ideas",
                C: "Para reconocer la dignidad y autonomía de la persona",
                D: "Para cumplir una norma burocrática"
            },
            correct: "C"
        },
        {
            id: 59,
            grado: "3",
            subject: "Sexualidad y Género",
            subtema: "Políticas de inclusión",
            question: "¿Qué acción es la más adecuada para la escuela ante una situación de no respeto a pronombres?",
            options: {
                A: "Ignorar el incidente",
                B: "Reforzar políticas de inclusión y apoyar a la persona afectada",
                C: "Castigar al estudiante que no respeta los pronombres",
                D: "Prohibir conversaciones sobre género"
            },
            correct: "B"
        },
        {
            id: 60,
            grado: "3",
            subject: "Sexualidad y Género",
            subtema: "Identidad de género",
            question: "¿Qué es la identidad de género?",
            options: {
                A: "El conjunto de características biológicas con las que nace una persona",
                B: "La forma en que una persona se siente y se identifica internamente respecto a su género",
                C: "El rol de género que la sociedad espera de alguien",
                D: "La orientación sexual de una persona"
            },
            correct: "B"
        },

        // DERECHO Y SOCIEDAD I (5 preguntas)
        {
            id: 61,
            grado: "3",
            subject: "Derecho y Sociedad I",
            subtema: "Concepto de derecho",
            question: "El derecho es:",
            options: {
                A: "Combinación de métodos empíricos.",
                B: "Normas, instituciones, procesos de producción normativa y sus impactos en la convivencia social.",
                C: "Es una ciencia social que estudia las normas jurídicas, su creación, interpretación, aplicación y efectos en la conducta humana dentro de una comunidad."
            },
            correct: "A"
        },
        {
            id: 62,
            grado: "3",
            subject: "Derecho y Sociedad I",
            subtema: "Historia del derecho",
            question: "Se le consideraba como la 'Ley del talión'",
            options: {
                A: "Código de Hammurabi.",
                B: "Cilindro de Ciro.",
                C: "Corpus Iuris Civilis"
            },
            correct: "B"
        },
        {
            id: 63,
            grado: "3",
            subject: "Derecho y Sociedad I",
            subtema: "Tipos de normas",
            question: "Es una regla de conducta creada, reconocida y exigida por una autoridad pública competente, cuyo cumplimiento puede ser obligado mediante la coerción del Estado.",
            options: {
                A: "Normas Jurídicas",
                B: "Normas Morales",
                C: "Normas sociales"
            },
            correct: "B"
        },
        {
            id: 64,
            grado: "3",
            subject: "Derecho y Sociedad I",
            subtema: "Tipos de normas",
            question: "Su incumplimiento, por ende, no constituye un delito, pero sí puede traer consecuencias negativas por parte de la sociedad, como el rechazo o incluso la hostilidad.",
            options: {
                A: "Normas Jurídicas",
                B: "Normas Morales",
                C: "Normas sociales"
            },
            correct: "B"
        },
        {
            id: 65,
            grado: "3",
            subject: "Derecho y Sociedad I",
            subtema: "Poder ejecutivo",
            question: "¿Quién figura típicamente como el jefe del poder Ejecutivo?",
            options: {
                A: "El presidente o el alcalde",
                B: "El presidente del Congreso",
                C: "El Juez Supremo",
                D: "El Defensor del Pueblo"
            },
            correct: "B"
        },

        // OBTIENE BEBIDAS NO ALCOHÓLICAS (5 preguntas)
        {
            id: 66,
            grado: "3",
            subject: "Obtiene bebidas no alcohólicas",
            subtema: "Tipos de bebidas",
            question: "¿Cuál es un ejemplo de bebida no alcohólica obtenida mediante procedimiento simple?",
            options: {
                A: "Cerveza artesanal",
                B: "Vino tinto",
                C: "Agua de frutas natural",
                D: "Sidra fermentada"
            },
            correct: "C"
        },
        {
            id: 67,
            grado: "3",
            subject: "Obtiene bebidas no alcohólicas",
            subtema: "Concentrados",
            question: "Una diferencia entre jugo y concentrado es que el concentrado:",
            options: {
                A: "Tiene menos sabor",
                B: "No contiene fruta",
                C: "Ha reducido su contenido de agua",
                D: "Es siempre artificial"
            },
            correct: "C"
        },
        {
            id: 68,
            grado: "3",
            subject: "Obtiene bebidas no alcohólicas",
            subtema: "Pasteurización",
            question: "La pasteurización en bebidas tiene como finalidad:",
            options: {
                A: "Cambiar el color",
                B: "Eliminar microorganismos",
                C: "Endulzar el producto",
                D: "Espesar el líquido"
            },
            correct: "B"
        },
        {
            id: 69,
            grado: "3",
            subject: "Obtiene bebidas no alcohólicas",
            subtema: "Concentrados",
            question: "Un concentrado de fruta se obtiene principalmente mediante:",
            options: {
                A: "Fermentación",
                B: "Evaporación parcial del agua",
                C: "Congelación rápida",
                D: "Molienda seca"
            },
            correct: "B"
        },
        {
            id: 70,
            grado: "3",
            subject: "Obtiene bebidas no alcohólicas",
            subtema: "Buenas prácticas",
            question: "Una práctica correcta al elaborar bebidas es:",
            options: {
                A: "No lavar la fruta",
                B: "Usar agua potable",
                C: "Mezclar utensilios sucios",
                D: "Dejar el producto a temperatura ambiente todo el día"
            },
            correct: "B"
        },

        // PREPARA PRODUCTOS DE CARNES (5 preguntas)
        {
            id: 71,
            grado: "3",
            subject: "Prepara productos de carnes y sustitutos de proteína",
            subtema: "Marinado",
            question: "El marinado en carnes tiene como propósito principal:",
            options: {
                A: "Cambiar el color",
                B: "Endurecer la carne",
                C: "Aportar sabor y mejorar la textura",
                D: "Secar el producto"
            },
            correct: "C"
        },
        {
            id: 72,
            grado: "3",
            subject: "Prepara productos de carnes y sustitutos de proteína",
            subtema: "Sustitutos de proteína",
            question: "La soya procesada es utilizada principalmente como:",
            options: {
                A: "Conservador natural",
                B: "Colorante vegetal",
                C: "Sustituto de proteína animal",
                D: "Endulzante"
            },
            correct: "C"
        },
        {
            id: 73,
            grado: "3",
            subject: "Prepara productos de carnes y sustitutos de proteína",
            subtema: "Seguridad alimentaria",
            question: "Una práctica segura al manipular carne cruda es:",
            options: {
                A: "Mezclar carne cruda con cocida",
                B: "Mantener refrigeración adecuada",
                C: "Dejarla varias horas fuera",
                D: "No lavar utensilios"
            },
            correct: "B"
        },
        {
            id: 74,
            grado: "3",
            subject: "Prepara productos de carnes y sustitutos de proteína",
            subtema: "Cocción",
            question: "La cocción adecuada de la carne ayuda a:",
            options: {
                A: "Aumentar bacterias",
                B: "Eliminar microorganismos patógenos",
                C: "Reducir sabor",
                D: "Cambiar el origen del producto"
            },
            correct: "B"
        },
        {
            id: 75,
            grado: "3",
            subject: "Prepara productos de carnes y sustitutos de proteína",
            subtema: "Sustitutos vegetales",
            question: "Un ejemplo de sustituto de proteína vegetal es:",
            options: {
                A: "Gelatina",
                B: "Soya texturizada",
                C: "Manteca",
                D: "Azúcar refinada"
            },
            correct: "B"
        },

        // TALLER DEL PENSAMIENTO (5 preguntas)
        {
            id: 76,
            grado: "3",
            subject: "Taller del Pensamiento",
            subtema: "Derivadas",
            question: "¿Cuál es la interpretación geométrica de la derivada de una función f(x) en un punto x = a?",
            options: {
                A: "El área bajo la curva de f(x) entre x = a y x = a + h.",
                B: "La pendiente de la recta secante que une los puntos (a, f(a)) y (a + h, f(a + h)).",
                C: "La pendiente de la recta tangente a la curva en el punto (a, f(a)).",
                D: "El valor de la función en ese punto, f(a)."
            },
            correct: "C"
        },
        {
            id: 77,
            grado: "3",
            subject: "Taller del Pensamiento",
            subtema: "Recta secante",
            question: "Dada la función f(x) = x² + 2x, ¿cuál es la pendiente de la recta secante que pasa por los puntos donde x = 1 y x = 3?",
            options: {
                A: "4",
                B: "6",
                C: "8",
                D: "15"
            },
            correct: "B"
        },
        {
            id: 78,
            grado: "3",
            subject: "Taller del Pensamiento",
            subtema: "Definición de límite",
            question: "Al calcular la derivada de f(x) = 5x - 3 usando la definición de límite lim(h→0) [f(x+h)-f(x)]/h, ¿qué expresión se obtiene antes de evaluar el límite?",
            options: {
                A: "(5h-6)/h",
                B: "5h/h",
                C: "(5x+5h-6)/h",
                D: "(5x+5h-3+5x-3)/h"
            },
            correct: "D"
        },
        {
            id: 79,
            grado: "3",
            subject: "Taller del Pensamiento",
            subtema: "Recta tangente",
            question: "¿Cuál es la pendiente de la recta tangente a la curva f(x) = x² + 1 en el punto donde x = 1?",
            options: {
                A: "0",
                B: "1",
                C: "2",
                D: "3"
            },
            correct: "C"
        },
        {
            id: 80,
            grado: "3",
            subject: "Taller del Pensamiento",
            subtema: "Recta secante y tangente",
            question: "¿Qué ocurre con la recta secante cuando el incremento h (la distancia entre los dos puntos) tiende a cero?",
            options: {
                A: "La recta secante se vuelve horizontal.",
                B: "La recta secante se convierte en la recta tangente.",
                C: "La recta secante desaparece.",
                D: "La recta secante se vuelve vertical."
            },
            correct: "B"
        }
    ]
};

// Función para obtener preguntas por grado
function getQuestionsByGrade(grado) {
    return questionBankMultiGrado[grado] || [];
}

// Función para obtener todas las preguntas
function getAllQuestions() {
    return [...questionBankMultiGrado["2"], ...questionBankMultiGrado["3"]];
}

// Función para obtener estadísticas por grado
function getGradeStats() {
    return {
        "2": {
            total: questionBankMultiGrado["2"].length,
            materias: [...new Set(questionBankMultiGrado["2"].map(q => q.subject))].length
        },
        "3": {
            total: questionBankMultiGrado["3"].length,
            materias: [...new Set(questionBankMultiGrado["3"].map(q => q.subject))].length
        }
    };
}
