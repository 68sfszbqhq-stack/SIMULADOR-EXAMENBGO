// Banco de preguntas organizado por grado
// Total: 80 preguntas (2° año: 45 preguntas, 3° año: 35 preguntas)

const questionBankMultiGrado = {
    // ==================== SEGUNDO AÑO (45 PREGUNTAS) ====================
    "2": [
        // PROBABILIDAD Y ESTADÍSTICA I (5 preguntas)
        {
            id: 1,
            grado: "3",
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
            grado: "3",
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
            grado: "3",
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
            grado: "3",
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
            grado: "3",
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
    ],
    "1": [
        {
            id: 1,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "Es una representación de una molécula de:",
            options: {
                A: "Ozono (O3)",
                B: "Cloro (CI2)",
                C: "Agua (H2O)",
                D: "Dióxido de carbono (CO2)",
            },
            correct: null
        },
        {
            id: 2,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "En la clase de ciencias realizan un sencillo experimento: ponen a flotar sobre agua caliente un cubo de madera de 3 cm3 y un clavo de metal de 3 cm de longitud, el cubo de madera flota, mientras que el clavo de metal se hunde. ¿Qué propiedad del objeto determina que flote o que se hunda?",
            options: {
                A: "Tamaño",
                B: "Densidad",
                C: "Elasticidad",
                D: "Temperatura",
            },
            correct: null
        },
        {
            id: 3,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "¿En qué grupo de la tabla periódica se encuentran los gases nobles?",
            options: {
                A: "VIIB (7)",
                B: "VIIIB (8)",
                C: "VIIA (17)",
                D: "VIIIA (18)",
            },
            correct: null
        },
        {
            id: 4,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "La figura muestra la distribución electrónica del modelo atómico de Bohr de un elemento. Calcula el número de protones del elemento.",
            image: "assets/exam_images/1/page_4_image_1.png",
            options: {
                A: "18",
                B: "10",
                C: "8",
                D: "2",
            },
            correct: null
        },
        {
            id: 5,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "¿Cuál es la estructura de Lewis del cloro (17Cl) con la que se forma la molécula de ácido hipocloroso (HClO), empleado en la industria principalmente para la desinfección de agua para consumo humano?",
            options: {
                A: "B.",
                C: "D.",
            },
            correct: null
        },
        {
            id: 6,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "La combustión del metano (CH₄), un gas natural utilizado en algunos procesos industriales, como la de los motores de combustión interna, es un ejemplo de una reacción química que produce dióxido de carbono (CO₂) y agua (H₂O). Dada la siguiente ecuación no balanceada: CH₄ + ____ O₂ → CO₂ + ____ H₂O ¿Cuál es el número correcto de moléculas de oxígeno (O₂) y de agua (H₂O) que se necesitan para balancear esta ecuación?",
            options: {
                A: "4 / 4",
                B: "3 / 3",
                C: "2 / 2",
                D: "1 / 1 Cl",
            },
            correct: null
        },
        {
            id: 7,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "Relaciona los tipos de energía con la descripción que le corresponde. Energía Descripción 1. Lumínica a. Energía de movimiento de los objetos. 2. Química b. Permite observar los objetos. 3. Térmica c. Es la energía almacenada en un objeto. 4. Cinética d. Se almacena en los enlaces de los compuestos. 5. Potencial e. Es interna de un cuerpo y se manifiesta como calor.",
            options: {
                A: "1b, 2d, 3e, 4a y 5c",
                B: "1b, 2e, 3a, 4d y 5c",
                C: "1d, 2a, 3c, 4e y 5b",
                D: "1d, 2b, 3e, 4c y 5a",
            },
            correct: null
        },
        {
            id: 8,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "Cuando se lanza una pelota hacia arriba, en contra del viento, en el momento en que la pelota alcanza su punto más alto, su energía __________ es mínima y su energía __________ es máxima.",
            options: {
                A: "eólica / mecánica",
                B: "mecánica / eólica",
                C: "potencial / cinética",
                D: "cinética / potencial",
            },
            correct: null
        },
        {
            id: 9,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "Cuando un niño está en un columpio y alguien lo empuja, esa persona experimenta una fuerza que lo empuja hacia atrás; si no está bien apoyado puede caer por el impulso. ¿Qué ley se cumple?",
            options: {
                A: "Gravitación",
                B: "Termodinámica",
                C: "Acción - reacción",
                D: "Conservación de la energía",
            },
            correct: null
        },
        {
            id: 10,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "Un país está planeando su futuro energético y necesita decidir entre varias opciones: 1. Construir una termoeléctrica 2. Instalar paneles solares 3. Construir un reactor nuclear 4. Instalar turbinas eólicas ¿Cuáles opciones representan las energías renovables?",
            options: {
                A: "1 y 3",
                B: "1 y 4",
                C: "2 y 3",
                D: "2 y 4",
            },
            correct: null
        },
        {
            id: 11,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "En el ciclo del agua, ¿cómo se llama la fase donde el agua pasa del estado líquido al gaseoso?",
            options: {
                A: "Evaporación",
                B: "Sublimación",
                C: "Precipitación",
                D: "Condensación",
            },
            correct: null
        },
        {
            id: 12,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "El aumento del nivel del mar se atribuye al calentamiento global. ¿Qué fenómeno es responsable de este suceso?",
            options: {
                A: "La reflexión del calor de la Tierra hacia la atmósfera.",
                B: "La emisión de gases de efecto invernadero en la atmósfera.",
                C: "Los ciclones y huracanes provocados por el impacto de los fenómenos climáticos.",
                D: "El derretimiento de los casquetes polares debido al aumento de la temperatura.",
            },
            correct: null
        },
        {
            id: 13,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "Relaciona el modelo corpuscular con el tipo de materia. Modelo corpuscular Materia 1. a. Elemento 2. b. Ion 3. c. Compuesto d. Mezcla",
            options: {
                A: "1a, 2b y 3d",
                B: "1c, 2a y 3d",
                C: "1c, 2d y 3b",
                D: "1d, 2a y 3c",
            },
            correct: null
        },
        {
            id: 14,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "La sal de mesa se puede mezclar fácilmente en agua, pero el jabón en polvo no. ¿A cuál de sus propiedades fisicoquímicas se debe este efecto?",
            options: {
                A: "Peso",
                B: "Polaridad",
                C: "Densidad",
                D: "Solubilidad",
            },
            correct: null
        },
        {
            id: 15,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "Relaciona los siguientes elementos químicos con la familia a la que pertenecen en la tabla periódica. Elemento Familia 1. Flúor (F) a. Gases nobles 2. Boro (B) b. Halógenos 3. Mercurio (Hg) c. Metal 4. Argón (Ar) d. Metaloide",
            image: "assets/exam_images/1/page_8_image_1.png",
            options: {
                A: "1a, 2c, 3d y 4b",
                B: "1b, 2c, 3d y 4a",
                C: "1b, 2d, 3c y 4a",
                D: "1c, 2a, 3b y 4d",
            },
            correct: null
        },
        {
            id: 16,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "Calcula el número de protones, electrones y neutrones del sodio, sabiendo que tiene un número de masa de 23 y un número atómico de 11.",
            options: {
                A: "11 protones, 11 electrones, 12 neutrones",
                B: "11 protones, 12 electrones, 12 neutrones",
                C: "12 protones, 11 electrones, 11 neutrones",
                D: "12 protones, 12 electrones, 11 neutrones",
            },
            correct: null
        },
        {
            id: 17,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "De la siguiente estructura de Lewis calcula ¿cuántos electrones de valencia tiene cada carbono?",
            image: "assets/exam_images/1/page_8_image_2.png",
            options: {
                A: "2",
                B: "4",
                C: "6",
                D: "8",
            },
            correct: null
        },
        {
            id: 18,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "En la reacción de fotosíntesis intervienen los compuestos: dióxido de carbono (CO2) y agua (H2O), como producto se obtiene glucosa (C6H12O6) y oxígeno (O2). Dada la siguiente ecuación no balanceada: ¿Cuál es el número correcto de moléculas de oxígeno (CO₂), de agua (H₂O) y de oxígeno (O₂) que se necesitan para balancear esta ecuación?",
            options: {
                A: "5 / 7 / 6",
                B: "6 / 5 / 6",
                C: "6 / 6 / 6",
                D: "7 / 6 / 6",
            },
            correct: null
        },
        {
            id: 19,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "¿Cuál de las siguientes energías se produce mediante el aprovechamiento de la fuerza de las olas de los océanos a través de un generador?",
            options: {
                A: "Eólica",
                B: "Hidráulica",
                C: "Mareomotriz",
                D: "Hidroeléctrica",
            },
            correct: null
        },
        {
            id: 20,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "La conservación de la energía mecánica se basa en la relación de las energías cinética y potencial, cuando la energía cinética __________, la energía potencial __________.",
            options: {
                A: "aumenta / aumenta",
                B: "aumenta / disminuye",
                C: "se anula / se conserva",
                D: "se conserva / se anula",
            },
            correct: null
        },
        {
            id: 21,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "La siguiente imagen representa la tercera ley de Newton, las personas no se moverán debido a que las fuerzas que aplican son: Imagen tomada de: https://media.baamboozle.com/uploads/images/160716/1637846254_9555.png",
            image: "assets/exam_images/1/page_9_image_1.png",
            options: {
                A: "iguales y nulas",
                B: "iguales y opuestas",
                C: "diferentes y opuestas",
                D: "equivalentes y paralelas",
            },
            correct: null
        },
        {
            id: 22,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "¿Cuáles son las desventajas de obtener energía con recursos no renovables? 1. Provocan daños a la flora y fauna local. 2. Requieren grandes extensiones de terreno. 3. Tienen elevado costo de producción. 4. Emiten gases de efecto invernadero (GEI).",
            options: {
                A: "1 y 2",
                B: "1 y 4",
                C: "2 y 3",
                D: "3 y 4",
            },
            correct: null
        },
        {
            id: 23,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "En la etapa de los procesos atmosféricos sucede la descomposición de la molécula del agua en estado gaseoso, ¿a qué ciclo biogeoquímico corresponde esta etapa?",
            options: {
                A: "Fósforo",
                B: "Carbono",
                C: "Oxígeno",
                D: "Nitrógeno",
            },
            correct: null
        },
        {
            id: 24,
            grado: "1",
            subject: "CIENCIAS NATURALES Y EXPERIMENTALES",
            subtema: "CIENCIAS NATURALES Y EXPERIMENTALES",
            question: "En 2020 en el confinamiento provocado por la pandemia de COVID-2019 las emisiones de dióxido de carbono disminuyeron drásticamente, lo que da una idea clara de lo que provoca el ser humano con todas sus actividades, ¿cuál actividad humana genera la mayor cantidad de emisiones de dióxido de carbono?",
            options: {
                A: "La deforestación de áreas verdes",
                B: "La quema de combustibles fósiles",
                C: "La generación de basura electrónica",
                D: "El uso de fertilizantes en actividades agrícolas",
            },
            correct: null
        },
        {
            id: 25,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "¿Qué opción representa una situación de riesgo social en la comunidad?",
            image: "assets/exam_images/1/page_11_image_1.png",
            options: {
                A: "Carlos tiene una discapacidad auditiva y quiere estudiar la preparatoria, sin embargo, le han negado el acceso porque no cuentan con profesores que impartan clases en Lengua de Señas Mexicana.",
                B: "Ana cuenta con una beca por parte del gobierno para realizar sus estudios de bachillerato ya que su familia no tiene los recursos para pagar los útiles escolares, uniforme y pasajes.",
                C: "Un grupo de amigos se inscribió a un concurso de grafiti organizado por las autoridades municipales, los ganadores pintarán murales con su arte en las paredes del recinto cultural.",
                D: "Un grupo de vecinos se ha organizado para realizar la fiesta patronal de su colonia, por lo que han decidido cerrar los principales accesos con el fin de celebrar con los demás. Observa la siguiente imagen de accesibilidad en el transporte y contesta la pregunta 26.",
            },
            correct: null
        },
        {
            id: 26,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "¿Qué valor social está considerado en la imagen anterior?",
            options: {
                A: "Justicia",
                B: "Libertad",
                C: "Igualdad",
                D: "Bienestar común",
            },
            correct: null
        },
        {
            id: 27,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "¿En qué situación se manifiesta la empatía?",
            options: {
                A: "Un profesor escuchó una queja de un padre de familia, él no está de acuerdo, pero cree que es mejor aparentar que presta atención.",
                B: "Martha se siente muy feliz porque junto con sus amigas comparten muchos gustos, intereses y opiniones sobre la música pop coreana.",
                C: "Ana le contó a Juan que estaba triste, él escuchó y comprendió su situación, así que trató de ponerse en su lugar para darle un consejo.",
                D: "Marcos vio que a un hombre le habían robado sus pertenencias en la calle; sin embargo, prefirió no ayudar para no meterse en problemas.",
            },
            correct: null
        },
        {
            id: 28,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "En una escuela se requiere conformar un comité de estudiantes que los represente para la toma de decisiones colectivas. ¿Cuál de las siguientes opciones demuestra participación democrática?",
            options: {
                A: "Se hace una votación de elección estudiantil.",
                B: "Se proponen a las y los compañeros más populares.",
                C: "Los directivos eligen a las y los estudiantes con mayor promedio.",
                D: "Se decide solo tomar en cuenta a las y los estudiantes de último año.",
            },
            correct: null
        },
        {
            id: 29,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "Lupita de 15 años y Juan de 16 años tienen una relación sentimental, de esta relación se produjo un embarazo no deseado. Ambas familias son tradicionales, por lo que les obligan a casarse. ¿Qué factor interviene en la decisión de las familias?",
            options: {
                A: "Cultural",
                B: "Personal",
                C: "Educativo",
                D: "Económico",
            },
            correct: null
        },
        {
            id: 30,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "En la clase de química se llevó a cabo un proyecto escolar. Durante la dinámica, surgió un conflicto entre dos estudiantes. Uno de ellos, se siente frustrado porque considera que su compañero no está participando en las actividades y no está cumpliendo con las tareas asignadas. Por tanto, lo confronta enojado, así que su compañero de manera respetuosa le explica que no se siente cómodo expresando sus ideas y que prefiere trabajar solo. El grupo se ve afectado por esta situación y el proyecto se retrasa. ¿Cuál de las siguientes acciones sería la más adecuada para que el docente pueda resolver este conflicto y promover una mejor convivencia en el grupo?",
            options: {
                A: "Ignorar el conflicto y esperar a que se resuelva.",
                B: "Separarlos del equipo e integrarlos en otro para la tranquilidad de todos.",
                C: "Asignar todas las tareas al que no quiere trabajar en equipo para que puedan terminar el proyecto a tiempo.",
                D: "Generar un espacio de diálogo entre las y los compañeros para buscar una solución que beneficie a todas y todos.",
            },
            correct: null
        },
        {
            id: 31,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "Selecciona las características que se presentan en espacios donde hay una sana convivencia. 1. Individualismo 2. Buenas costumbres 3. Trabajo colaborativo 4. Comunicación asertiva 5. Interacciones constructivas",
            options: {
                A: "1, 2 y 5",
                B: "1, 4 y 5",
                C: "2, 3 y 4",
                D: "3, 4 y 5 Lee el siguiente párrafo y contesta la pregunta 32. Redacción BBC mundo 5 de diciembre de 2014 Por segundo día consecutivo, miles de manifestantes se concentraron en las principales ciudades de Estados Unidos en repulsa por la decisión de no procesar a un policía de Nueva York por la muerte por estrangulamiento de Eric Garner, un hombre negro desarmado.",
            },
            correct: null
        },
        {
            id: 32,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "¿Qué situación social ejemplifica la nota periodística?",
            options: {
                A: "Racismo",
                B: "Genocidio",
                C: "Inmigración",
                D: "Segregación",
            },
            correct: null
        },
        {
            id: 33,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "Selecciona las actividades que reflejan actitudes solidarias. 1. En el sismo de 2017 las personas de una comunidad en Morelos organizaron brigadas de apoyo recolectando víveres para los más afectados. 2. En una comunidad los vecinos organizan una convivencia para celebrar las fiestas patrias y todos están de acuerdo en cooperar. 3. En la escuela se organiza una campaña para recolectar PET, el grupo que más recolecte al final será premiado con una salida al cine. 4. En enero los estudiantes del grupo de primer semestre organizaron una campaña de donación de juguetes para una casa hogar.",
            options: {
                A: "1 y 2",
                B: "1 y 4",
                C: "2 y 3",
                D: "3 y 4",
            },
            correct: null
        },
        {
            id: 34,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "En Acapulco debido al huracán John, el río creció tanto que se desbordó y afectó cientos de viviendas, gracias a los rescatistas las familias y mascotas se encuentran bien, pero perdieron todas sus pertenencias y ahora se enfrentan a una serie de circunstancias inciertas. ¿Cuál de las siguientes opciones demuestra participación colectiva?",
            options: {
                A: "El gobierno inicia un censo de damnificados.",
                B: "Las familias se reubican en un albergue temporal.",
                C: "La comunidad se organiza y se apoyan entre ellos mismos.",
                D: "Cada persona afectada busca cómo mejorar sus condiciones.",
            },
            correct: null
        },
        {
            id: 35,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "Antonio es un estudiante de bachillerato que tiene una condición que limita su desempeño físico y académico; la situación económica en su casa es muy difícil ya que su papá está desempleado y su mamá no puede trabajar porque tiene un hermano pequeñito. En la escuela es retraído y se aísla, algunos de sus compañeros de clase lo molestan y se burlan de él. Clara observa que Antonio se ve afligido todo el tiempo por lo que decide acercarse a platicar con él y ofrecerle su apoyo. Clara habla con el grupo para decirles la problemática de su compañero y pedirles su ayuda. ¿Qué factor de la colectividad influye y justifica la decisión de Clara?",
            options: {
                A: "Ciudadanía activa",
                B: "Políticas inclusivas",
                C: "Prevención de la violencia",
                D: "Formación en valores éticos",
            },
            correct: null
        },
        {
            id: 36,
            grado: "1",
            subject: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            subtema: "MI CONSTRUCCIÓN PERSONAL EN LA COLECTIVIDAD",
            question: "En un salón de clases, varios estudiantes han estado discutiendo con frecuencia y han generado un ambiente de tensión. ¿Qué acción deberían realizar las autoridades educativas para fomentar un mejor clima de convivencia?",
            options: {
                A: "Ignorar las discusiones para evitar empeorar la situación.",
                B: "Organizar un taller estudiantil de resolución de conflictos.",
                C: "Sancionar a los estudiantes involucrados en las discusiones.",
                D: "Separar a los estudiantes que discuten para evitar más conflictos.",
            },
            correct: null
        },
        {
            id: 37,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Medio gramo de alcohol en un litro de sangre es equivalente a 6 vasos de cerveza. ¿Qué expresión algebraica representa esta relación? A . 2a = 1 6 c",
            options: {
                B: "1 2 a + 6c",
                C: "2a − 1 6 c",
                D: "1 2 a = 6c",
            },
            correct: null
        },
        {
            id: 38,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Carlos y su prima ahorraron $390 para un viaje. Carlos aportó el doble que su prima, además de $30 extra. ¿Cuánto ahorró su prima?",
            options: {
                A: "$110",
                B: "$120",
                C: "$130",
                D: "$140",
            },
            correct: null
        },
        {
            id: 39,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "El fondo de una alberca tiene las medidas que se muestran en la siguiente imagen: Se realizará una ampliación de la alberca duplicando el ancho y posteriormente se cubrirá el fondo con mosaico. ¿Cuál es la representación algebraica del área que se cubrirá?",
            options: {
                A: "6z2",
                B: "6z",
                C: "5z",
                D: "4z2 3z z",
            },
            correct: null
        },
        {
            id: 40,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "En una empresa, Luis, Martha y Jorge deben dividir una bonificación de $24 000 de forma proporcional a las horas trabajadas. Luis trabajó 40 horas, Marta 60 horas y Jorge 50 horas. ¿Cuánto dinero debe recibir Martha?",
            options: {
                A: "$6 400",
                B: "$8 000",
                C: "$9 600",
                D: "$12 000",
            },
            correct: null
        },
        {
            id: 41,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Una familia percibe $5 000 de ingresos mensuales, de los cuales gasta el 75% en gastos fijos (luz, teléfono y alimentos). ¿Cuánto paga la familia en gastos fijos?",
            options: {
                A: "$4 000",
                B: "$3 750",
                C: "$3 333",
                D: "$1 250",
            },
            correct: null
        },
        {
            id: 42,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Un agricultor quiere cercar un terreno de forma irregular, como la que se observa en la siguiente figura. ¿Cuántos metros de material tiene que comprar para cercar completamente el terreno?",
            options: {
                A: "150 m",
                B: "180 m",
                C: "220 m",
                D: "240 m 50 m 70 m 40 m 30 m",
            },
            correct: null
        },
        {
            id: 43,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "En un parque se va a instalar una zona para días de campo que tiene la siguiente forma: ¿Cuál es el área total de esta zona?",
            options: {
                A: "64 m2",
                B: "88 m2",
                C: "94 m2",
                D: "112 m2",
            },
            correct: null
        },
        {
            id: 44,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "La siguiente gráfica presenta los promedios de dos asignaturas. ¿Cuál es el promedio de la asignatura de comunicación en el tercer semestre?",
            options: {
                A: "9",
                B: "8",
                C: "7",
                D: "5 D A C B DA=8 CB=10 AB=14 DC=8",
            },
            correct: null
        },
        {
            id: 45,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "En una campaña de recolección de juguetes, un grupo de niños donó las siguientes cantidades: 8, 12, 5, 15, 10, 7, 9. ¿Cuál es la mediana del número de juguetes donados?",
            options: {
                A: "8",
                B: "9",
                C: "10",
                D: "12",
            },
            correct: null
        },
        {
            id: 46,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Adriana y Evans jugaron con un dado y lo lanzaron 4 veces cada uno. Determinaron que ganaría quien tuviera el menor rango de puntos. Adriana Evans Lanzamiento Puntos Lanzamiento Puntos 1 3 1 2 2 5 2 5 3 4 3 6 4 2 4 1 ¿Quién ganó y cuál fue su rango?",
            options: {
                A: "Adriana, rango de 3",
                B: "Evans, rango de 3",
                C: "Adriana, rango de 5",
                D: "Evans, rango de 5",
            },
            correct: null
        },
        {
            id: 47,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "En un hotel después de la temporada de vacaciones, hay 9 huéspedes, 1 botones, 2 amas de llaves y 1 persona de mantenimiento. ¿Cuál es la probabilidad de que al elegir una persona al azar este sea un huésped?",
            options: {
                A: "1",
                B: "4",
                C: "1",
                D: "9",
            },
            correct: null
        },
        {
            id: 48,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "El periodo de rotación de Saturno es el doble del de la Tierra disminuido en 2. ¿Qué expresión algebraica representa el periodo de rotación de Saturno?",
            options: {
                A: "2p + 2",
                B: "p2 – 2",
                C: "2(p – 2)",
                D: "2p – 2",
            },
            correct: null
        },
        {
            id: 49,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Un panal de abejas, aparte de su función de refugio, tiene la de almacenamiento de miel y cuna para las larvas, si de un total de 200 celdas, las celdas de refugio exceden en 32 a las celdas de almacenamiento de miel y en 65 a las cunas para larvas.",
            options: {
                A: "34",
                B: "51",
                C: "99",
                D: "116",
            },
            correct: null
        },
        {
            id: 50,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "La pantalla de un celular tiene las medidas que se muestran en la siguiente imagen: Para reemplazar la pantalla rota es necesario saber su tamaño. ¿Cuál expresión algebraica representa el área de la pantalla?",
            options: {
                A: "A = 3x2 − 1",
                B: "A = 4x2 − 1",
                C: "A = 3x2 − x",
                D: "A = (3x − 1)2 x 3x - 1",
            },
            correct: null
        },
        {
            id: 51,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Tres amigos ahorran en una inversión para generar ingresos extras para las compras navideñas. Alberto aporta $500, Bernardo $750 y Camila $900. Al cabo de un año han ganado un total de $645. Si se hace el reparto de la ganancia de manera proporcional a su aportación inicial, ¿qué cantidad le corresponde a cada uno?",
            options: {
                A: "$215.00, $215.00, $215.00",
                B: "$210.00, $215.00, $320.00",
                C: "$161.25, $161.25, $322.50",
                D: "$150.00, $225.00, $270.00",
            },
            correct: null
        },
        {
            id: 52,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Se realizó una encuesta a estudiantes y profesores respecto al medio de transporte utilizan para llegar a la escuela, obteniendo los siguientes resultados: Medio de Transporte Frecuencia Automóvil 25 Camión 45 A pie 60 Metro 15 Bicicleta 5 Total 150 De acuerdo con la información anterior, ¿cuál es el porcentaje de personas que llegan en automóvil?",
            options: {
                A: "16.7%",
                B: "25%",
                C: "30%",
                D: "37.5%",
            },
            correct: null
        },
        {
            id: 53,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "En la colonia la Esmeralda se organizó una carrera en la que los competidores tendrán que pasar por todos los puntos, hasta regresar al punto de salida como se muestra en la figura. ¿Cuál es la distancia que recorrerán?",
            options: {
                A: "21.90 m",
                B: "24.11 m",
                C: "29.11 m",
                D: "33.23 m",
            },
            correct: null
        },
        {
            id: 54,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "La cancha de la zona sur de un deportivo tiene la forma y medidas que muestra la siguiente ilustración. ¿Cuántos metros cuadrados de pasto sintético se necesitan para cubrir la cancha?",
            options: {
                A: "80",
                B: "64",
                C: "60",
                D: "40 C E D A B BC=5.85 CD=5 DE=5	EA=7.21 AB=6.05 AD=4.12 Salida 8 m 2 m 2 m 4 m",
            },
            correct: null
        },
        {
            id: 55,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "En los Juegos Olímpicos de 2024, Japón fue uno de los tres países que más medallas ganó (oro, plata y bronce) como se muestra en la siguiente tabla: 20 12 13 Atletismo 1 0 0 Bádminton 0 0 2 Breaking 1 0 0 Escalada deportiva 0 1 0 Esgrima 2 1 2 Gimnasia artística 3 0 1 Golf 0 0 1 Hípica 0 0 1 Judo 3 2 3 Lucha 8 1 2 Natación 0 1 0 Pentatlón moderno 0 1 0 Saltos 0 1 0 Skateboarding 2 2 0 Tenis de mesa 0 1 1 Vela 0 1 0 Medallero. (s/f). Olympics.com. Recuperado de https://olympics.com/es/paris-2024/medallas ¿Cuál de las siguientes afirmaciones es correcta?",
            image: "assets/exam_images/1/page_24_image_1.png",
            options: {
                A: "Japón obtuvo más medallas de plata que bronce.",
                B: "Japón obtuvo más medallas de oro que de plata en el golf.",
                C: "Japón obtuvo menos medallas en esgrima que en bádminton.",
                D: "Japón obtuvo más medallas en judo que en gimnasia artística.",
            },
            correct: null
        },
        {
            id: 56,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Las calificaciones de un grupo de estudiantes obtenidas en el primer parcial en matemáticas fueron las siguientes: 3, 6, 7, 9, 8, 5, 8, 7, 10 ,6 ,7 ,5, 8, 3, 5, 9, 8, 10, 7, 8, 5, 6, 7, 8, 9, 10, 8 ¿Cuál fue la moda en la calificación obtenida en el primer parcial?",
            options: {
                A: "3",
                B: "7.1",
                C: "7.5",
                D: "8",
            },
            correct: null
        },
        {
            id: 57,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "El equipo meteorológico centró su atención en los cambios de temperatura en el mes de enero y tomó una muestra de los grados centígrados registrados en los primeros 7 días. Los datos se presentan en la siguiente tabla: Enero 01 Enero 02 Enero 03 Enero 04 Enero 05 Enero 06 Enero 07 22°C 21°C 18°C 24°C 20°C 19°C 23°C ¿Cuál es la desviación estándar de las temperaturas registradas? Considera que el valor de la media es igual a 21°C.",
            options: {
                A: "0°C",
                B: "2°C",
                C: "4°C",
                D: "6°C",
            },
            correct: null
        },
        {
            id: 58,
            grado: "1",
            subject: "MATEMÁTICAS",
            subtema: "MATEMÁTICAS",
            question: "Un profesor coloca en una tómbola las 27 letras del alfabeto. ¿Cuál es la probabilidad de que el primer alumno saque de la tómbola una vocal?",
            options: {
                A: "1",
                B: "1",
                C: "5",
                D: "5",
            },
            correct: null
        },
        {
            id: 59,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Selecciona la opción que refiere a la división del trabajo en los procesos productivos y su impacto en la satisfacción de necesidades.",
            options: {
                A: "La especialización en la división del trabajo aumenta la eficiencia, aunque genera dependencia entre diferentes sectores y reduce la resiliencia social.",
                B: "La división del trabajo forma parte del crecimiento económico de las sociedades y no suele estar directamente influida por factores sociales o culturales.",
                C: "La especialización en el trabajo facilita la distribución de recursos, permitiendo así una mejor satisfacción de las necesidades básicas en nuestra sociedad.",
                D: "La división del trabajo impulsa la productividad en ciertos sectores, aunque su implementación depende de las características y demandas específicas de cada sector económico.",
            },
            correct: null
        },
        {
            id: 60,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Es el conjunto de actividades que se realizan para transformar recursos en bienes o servicios, y tienen como objetivo satisfacer la demanda que la sociedad requiere.",
            options: {
                A: "Proceso productivo",
                B: "Proceso económico",
                C: "Proceso organizativo",
                D: "Proceso de distribución",
            },
            correct: null
        },
        {
            id: 61,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Qué impacto social negativo puede provocar la implementación de procesos productivos que priorizan la eficiencia sobre la sostenibilidad?",
            options: {
                A: "Migración laboral forzada hacia áreas urbanas",
                B: "Desigualdad en el acceso a recursos y servicios",
                C: "Aumento en la dependencia de recursos para el comercio",
                D: "Deterioro de las condiciones laborales en los centros de trabajo",
            },
            correct: null
        },
        {
            id: 62,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Cómo contribuye el sistema político democrático mexicano a la construcción de una sociedad pacífica y sin violencia?",
            options: {
                A: "Fomentando la competencia entre ciudadanos y grupos políticos mediante la limitación de ciertos recursos, lo que incentiva la resolución pacífica de disputas.",
                B: "Fortaleciendo el liderazgo político mediante el uso de medidas de control social, asegurando que se mantenga el orden y se eviten levantamientos violentos.",
                C: "Estableciendo leyes y políticas públicas para bridar seguridad y reducir la posibilidad de conflictos entre diversos grupos sociales.",
                D: "Promoviendo el respeto a las personas y exigiendo la participación ciudadana activa.",
            },
            correct: null
        },
        {
            id: 63,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Cuáles son las instituciones encargadas de brindar apoyo y seguimiento en caso de violaciones a derechos humanos, como el matrimonio forzado en menores de edad? 1. Comisión Nacional de Derechos Humanos (CNDH) 2. Sistema Nacional para el Desarrollo Integral de la Familia (DIF) 3. Instituto Nacional de la Juventud (INJUVE) 4. Organización de Naciones Unidas (ONU)",
            options: {
                A: "1 y 2",
                B: "1 y 4",
                C: "2 y 4",
                D: "3 y 4",
            },
            correct: null
        },
        {
            id: 64,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Cuál de los siguientes grupos representa la diversidad de la identidad nacional pluricultural?",
            options: {
                A: "Minorías religiosas, comunidades rurales y migrantes internos",
                B: "Trabajadores del sector agrícola, pescadores y artesanos locales",
                C: "Artistas locales, músicos tradicionales y escritores contemporáneos",
                D: "Comunidades indígenas, afrodescendientes y grupos urbanos diversos",
            },
            correct: null
        },
        {
            id: 65,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Cuál de las siguientes afirmaciones describe el impacto de la diversidad cultural en la construcción de políticas públicas en México?",
            options: {
                A: "La inclusión de la diversidad cultural en las políticas públicas ha resultado en un aumento de tensiones sociales y conflictos interétnicos.",
                B: "Las políticas públicas en México tienden a ignorar las necesidades de los pueblos originarios y afromexicanos, priorizando solo los intereses de la mayoría.",
                C: "La diversidad cultural ha logrado crear políticas inclusivas que reconocen y respetan los derechos de todos los grupos sociales, promoviendo su participación en la vida política.",
                D: "Las políticas públicas en México se enfocan exclusivamente en la homogeneización cultural, lo cual busca unificar las tradiciones de todos los grupos sociales en una sola identidad nacional.",
            },
            correct: null
        },
        {
            id: 66,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Del siguiente listado, selecciona las políticas que implementaron los gobiernos en el periodo de 1970 al 2000 para tratar de sanear las finanzas públicas y superar las crisis económicas. 1. Reducción del gasto público 2. Crecimiento de la deuda externa 3. Desregulación de los mercados 4. Disminución de salarios 5. Aumento de la estatización 6. Ajuste de los tipos de cambio 7. Aumento de las tasas de interés",
            options: {
                A: "1, 2, 4 y 5",
                B: "1, 3, 6 y 7",
                C: "2, 3, 5 y 6",
                D: "2, 4, 5 y 7",
            },
            correct: null
        },
        {
            id: 67,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Cuál opción describe una característica de las políticas económicas gubernamentales aplicadas durante las crisis económicas ocurridas entre 1982- 2000?",
            options: {
                A: "Implementación de políticas de austeridad que priorizaron el gasto en programas sociales.",
                B: "Desregulación de la economía y apertura comercial sin considerar los efectos en el mercado interno.",
                C: "Uso de controles de precios y salarios como medidas para combatir la inflación y proteger el poder adquisitivo.",
                D: "Fomento de la inversión pública en infraestructura para estimular el crecimiento económico inmediato del país.",
            },
            correct: null
        },
        {
            id: 68,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Cuál ha sido un efecto de las intervenciones de gobiernos extranjeros en la vida interna de México?",
            options: {
                A: "Aceleró el desarrollo económico del país.",
                B: "Han afectado tanto la soberanía como el desarrollo del país.",
                C: "Mantienen una política propia sin ninguna influencia externa desde su independencia.",
                D: "Se justifican como una forma de promover la estabilidad, pero han provocado desconfianza entre la población.",
            },
            correct: null
        },
        {
            id: 69,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Qué necesidades pueden satisfacerse al tener acceso a la canasta básica de alimentos en el contexto de los derechos humanos?",
            options: {
                A: "Alimentación variada",
                B: "Alimentación suficiente",
                C: "Alimentación de una dieta específica",
                D: "Alimentación con productos frescos y saludables",
            },
            correct: null
        },
        {
            id: 70,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Cuál de las siguientes opciones describe correctamente una característica de la división del trabajo en un proceso de fabricación de automóviles?",
            options: {
                A: "Un solo trabajador realiza todas las tareas de producción.",
                B: "Cada trabajador se especializa en una tarea específica del ensamble.",
                C: "Los trabajadores realizan las tareas desde el inicio hasta el final del ensamble.",
                D: "Los trabajadores cambian de tarea constantemente para experimentar todas las áreas de la producción.",
            },
            correct: null
        },
        {
            id: 71,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Los procesos productivos tienen impactos significativos en el entorno social y medioambiental, ¿cuál de las siguientes iniciativas podría disminuirlos?",
            options: {
                A: "Fortalecer los programas de reciclaje y compostaje.",
                B: "Imprimir y pegar carteles sobre reducción y reciclaje de residuos.",
                C: "Establecer nuevas plantas de tratamiento de residuos utilizando métodos avanzados.",
                D: "Ampliar la capacidad de los vertederos existentes y crear nuevas áreas para almacenamiento.",
            },
            correct: null
        },
        {
            id: 72,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Para que la democracia sea posible son necesarias las elecciones a través de las cuales la ciudadanía ejerce sus derechos y elige entre diversas propuestas políticas para formar el gobierno, integrar las diferentes representaciones y otorgar legitimidad al sistema político. De acuerdo con el ejercicio electoral del año 2024, en el que se eligió a la presidenta de la República Mexicana, ¿cómo se ejerce la democracia?",
            options: {
                A: "Tienen la autoridad para emitir sanciones legales y emitir sentencias penales.",
                B: "Actúan como meros observadores, sin facultades para investigar violaciones",
                C: "Se enfocan únicamente en la defensa de los derechos de grupos vulnerables,",
                D: "Proporcionan un marco de cooperación entre el Estado y la sociedad civil en materia de derechos humanos, pero carecen de facultades legales para hacer cumplir recomendaciones.",
            },
            correct: null
        },
        {
            id: 74,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "¿Cuál es la lengua surgida de los pueblos originarios con mayor número de hablantes y con gran influencia en el español mexicano?",
            options: {
                A: "Náhuatl",
                B: "Mazahua",
                C: "Lacandón",
                D: "Tarahumara",
            },
            correct: null
        },
        {
            id: 75,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Selecciona las acciones que atentan en contra de los derechos de los individuos y que surgen a partir de la existencia de diferentes grupos sociales, económicos, ideológicos, sexuales o de género. 1. Pluralismo 2. Segregación 3. Heterogeneidad social 4. Intolerancia 5. División 6. Multiculturalidad",
            options: {
                A: "1, 2 y 6",
                B: "1, 3 y 4",
                C: "2, 4 y 5",
                D: "3, 5 y 6",
            },
            correct: null
        },
        {
            id: 76,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Durante el periodo de 1970 a 2000, el gobierno de México implementó diversas políticas económicas y sociales en respuesta a las crisis surgidas. Estas políticas incluyeron medidas como la nacionalización de la banca, el incremento del gasto público y la liberalización del comercio. Los impactos de estas políticas fueron diversos y afectaron tanto la a estructura económica como a la sociedad mexicana. ¿Cuál fue el impacto de estas políticas en la economía y sociedad mexicana durante ese periodo?",
            options: {
                A: "Lograron cierta estabilidad económica y mejoraron la calidad de vida de las ciudadanas y ciudadanos.",
                B: "Condujeron a un crecimiento económico y provocaron mejor distribución de la riqueza.",
                C: "Resultaron en un aumento de la deuda pública y en crisis económicas recurrentes que afectaron a la mayoría de la población.",
                D: "Lograron una distribución equitativa de la riqueza, aunque no todas las clases sociales se beneficiaron por igual.",
            },
            correct: null
        },
        {
            id: 77,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "A partir de 1982, en México se implementó un modelo económico que produjo cambios significativos en la política, economía y sociedad. Selecciona la afirmación que describe a este modelo económico y sus características:",
            options: {
                A: "Se basó en el aumento del gasto público para estimular la economía y reducir el desempleo.",
                B: "Fortaleció la intervención del Estado en la economía a través de políticas de nacionalización y control de precios.",
                C: "Se centró en el desarrollo de la agricultura y la producción local, apoyando a los pequeños productores mediante subsidios.",
                D: "Promovió la privatización de empresas estatales, la desregulación de mercados y una reducción en la intervención del Estado.",
            },
            correct: null
        },
        {
            id: 78,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Una vez concluida la Guerra de Reforma, nuestro país experimentó una aguda problemática económica, pues los gastos generados por dicha guerra impidieron cubrir la deuda externa que se había contraído con Inglaterra, Francia y España. Razón por la cual, el 17 de julio de 1861, el Congreso de la República emitió un decreto en el que declaró la suspensión de pagos de todas las deudas públicas. ¿A través de qué tratado dichos países reclamaron el pago de la deuda?",
            options: {
                A: "Mon-Almonte",
                B: "Alianza Tripartita",
                C: "McLane-Ocampo",
                D: "Preliminares de la Soledad",
            },
            correct: null
        },
        {
            id: 79,
            grado: "1",
            subject: "RELACIONES Y PROCESOS SOCIALES",
            subtema: "RELACIONES Y PROCESOS SOCIALES",
            question: "Elige la opción que complete la idea del siguiente párrafo: Al fomentar el diálogo y la colaboración entre diferentes sectores de la sociedad, las ciudadanas y ciudadanos contribuyen a la construcción de una cultura de paz y respeto a la diversidad. Esto es posible si:",
            options: {
                A: "El gobierno crea más partidos para las votaciones.",
                B: "El sistema político fomenta la participación ciudadana.",
                C: "Las personas se involucran en las campañas electorales.",
                D: "El sistema de participación ciudadana propone una campaña.",
            },
            correct: null
        },
        {
            id: 80,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "La maestra solicita al grupo que realice una investigación sobre las principales fiestas de la comunidad y sus lugares atractivos, para realizar un trabajo sobre el contexto de su comunidad. ¿Cuál de las siguientes opciones representa una fuente de información accesible para esta tarea?",
            options: {
                A: "Libros electrónicos",
                B: "Entrevistas directas",
                C: "Periódico municipal",
                D: "Revistas regionales",
            },
            correct: null
        },
        {
            id: 81,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Relaciona el género literario con las características que le corresponden. Género literario Características 1. Narrativo a. Es un texto que representa una historia mediante diálogos, en donde se elaboran mundos de ficción a través de la expresión directa de los personajes y la representación de sus acciones en escena. 2. Lírico b. Es un texto en el que se cuenta una sucesión de hechos. Por medio de un relato, uno o varios personajes evolucionan en la trama y llevan a cabo distintas acciones. 3. Dramático c. Es una obra poética que comparte rasgos comunes, como la subjetividad de la voz, la escritura en verso y prosa haciendo uso de metáforas.",
            options: {
                A: "1a, 2c y 3b",
                B: "1a, 2b y 3c",
                C: "1b, 2a y 3c",
                D: "1b, 2c y 3a Lee el texto: “La leyenda de la flor de Cempasúchil” y responde la pregunta 82. Según la leyenda, Xóchitl y Huitzilin se enamoraron cuando eran niños, y acostumbraban a subir a la montaña dedicada a Tonatiuh, el dios azteca del sol para ofrecerle ramos de flores. Sin embargo, Huitzilin fue a pelear a la guerra para defender las tierras aztecas y murió. Por ello, Xóchitl pidió al dios Tonatiuh que la reuniera con su amado. El dios del sol decidió cumplir su deseo dejó caer sus rayos sobre Xóchitl, y ella se transformó en una flor de color amarillo, en la que un colibrí posó y ésta abrió sus 20 pétalos, liberando un aroma intenso. Así, se dice que el amor de la pareja azteca permanecerá mientras haya colibríes y flores de cempasúchil en los campos mexicanos. Por ello, la flor de cempasúchil forma parte de la cultura popular y del festejo del Día de Muertos. Espinosa, P. (2023, octubre 27). La leyenda de la flor de Cempasúchil. Revista Travesías | Inspiración Para Viajeros. https://www.travesiasdigital.com/noticias/leyenda-flor-cempasuchil/",
            },
            correct: null
        },
        {
            id: 82,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Selecciona la opción que contenga la trama de la historia.",
            options: {
                A: "Mientras exista la flor de cempasúchil y haya colibríes en los campos, el amor de Huitzilin y Xóchitl perdurará para siempre.",
                B: "Huitzilin tuvo que partir a la guerra, murió en combate y el dios del Sol lo convirtió en una flor con un color amarillo intenso de 20 pétalos.",
                C: "El dios del Sol cumplió el deseo de Xóchitl y la convirtió en una flor de 20 pétalos para que pudiera reunirse con su amado quien murió en la guerra.",
                D: "Una pareja de jóvenes aztecas, enamorados desde niños, se une en la muerte, él por ir a la guerra y ella convertida en flor de cempasúchil por el dios del Sol. Lee el siguiente texto y contesta la pregunta 83. \"—Allí está—murmuró el doctor. —Allí, al pie del muro, ha quedado como un perro. Me incliné para verle la cara: la piel gris, los ojos vidriosos y una espuma ligera en los labios. De repente sentí un calor extraño en las manos. Era su sangre. Él había muerto por defender sus ideas.\" \"El general en su laberinto\" Gabriel García Márquez.",
            },
            correct: null
        },
        {
            id: 83,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "De acuerdo con el fragmento narrativo, selecciona la opción que mejor describe la idea principal y una idea secundaria.",
            options: {
                A: "Principal: El hombre había muerto por defender sus ideas. Secundaria: El doctor ve que el hombre yace como un perro.",
                B: "Principal: El doctor siente calor en sus manos debido a la sangre. Secundaria: El hombre murió por defender sus ideas.",
                C: "Principal: El doctor se inclina para ver la cara del hombre muerto. Secundaria: El hombre tenía la piel gris y los ojos vidriosos.",
                D: "Roosevelt) NUEVO Albert Einstein había recibido las investigaciones entonces recientes de E. Fermi y L. Szilard y había concluido que el uranio podía llegar a ser una fuente de energía nueva e importante en un futuro no muy lejano.",
            },
            correct: null
        },
        {
            id: 84,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "El párrafo nuevo es un(a):",
            options: {
                A: "Cita textual",
                B: "Paráfrasis",
                C: "Resumen",
                D: "Relato Observa la imagen y la información complementaria para contestar la pregunta 85. a. Exploración de nuevos territorios b. Máquina de vapor c. Creación de herramientas de piedra d. Invención de la escritura",
            },
            correct: null
        },
        {
            id: 85,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Completa la línea del tiempo con la información adecuada.",
            options: {
                A: "1a, 2d, 3c y 4b",
                B: "1b, 2a, 3d y 4c",
                C: "1c, 2d, 3a y 4b",
                D: "1d, 2b, 3a y 4c",
            },
            correct: null
        },
        {
            id: 86,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Lee el siguiente párrafo y elige los conectores textuales que permitan una relación entre ideas y le den coherencia. La educación es fundamental para el desarrollo de cualquier sociedad, __________ que brinda oportunidades de crecimiento a los individuos. __________, promueve la adquisición de conocimientos y habilidades necesarios para enfrentar los desafíos del mundo laboral. __________, es importante destacar que la educación no solo se limita a la instrucción académica.",
            image: "assets/exam_images/1/page_38_image_1.png",
            options: {
                A: "puesto a / También / Aunque",
                B: "encima a / Aunque / Así mismo",
                C: "debido a / Además / Sin embargo",
                D: "posterior a / De este modo / En este sentido Lee el siguiente texto, observa la imagen y responde la pregunta 87. ¿Qué es un eclipse lunar? Los eclipses lunares son fenómenos naturales que tienen como protagonistas al Sol, la Luna y la Tierra. Son espectáculos que atraen a miles de fanáticos de la astronomía que contemplan y graban estos fenómenos del universo. Los eclipses lunares son fenómenos en donde la sombra de la Tierra cubre a la Luna. Este fenómeno es una situación espacial en donde los tres astros, la Tierra, el Sol y la Luna se alinean en orden como se muestra en la imagen. De esta manera, la Tierra bloqueará los rayos solares provenientes de la estrella y se producirá una sombra en forma de cono que tapará por completo al satélite, en el caso que la alineación sea perfecta.",
            },
            correct: null
        },
        {
            id: 87,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "¿Qué función cumple la imagen dentro del texto?",
            options: {
                A: "(2019, julio 27). Un Aleph propio por compañía. Ediciones EL PAÍS S.L.",
                B: "Completar",
                C: "Aclarar",
                D: "Atraer Lee el siguiente fragmento y contesta la pregunta 88. UN ALEPH PROPIO POR COMPAÑÍA Jorge Luis Borges publicó en 1949 un corto libro de cuentos que tituló El Aleph. […] “Aclaró que un Aleph es uno de los puntos del espacio que contienen todos los puntos”. En él están todas las imágenes: “En la parte inferior del escalón, hacia la derecha, vi una pequeña esfera tornasolada, de casi intolerable fulgor. Al principio la creí giratoria; luego comprendí que ese movimiento era una ilusión producida por los vertiginosos espectáculos que encerraba. El diámetro del Aleph sería de dos o tres centímetros, pero el espacio cósmico estaba ahí”. Desde su publicación esta maravilla dio para muchas ensoñaciones. Lo que no era de suponer es que casi cada habitante del planeta acabara teniendo uno. En los noventa el teléfono móvil era un instrumento grande como un zapato, con una hora de autonomía, que servía para cruzar las palabras imprescindibles. Diez años después comenzó a disminuir hasta alcanzar el enanismo de caber, doblado, en la palma de la mano. […] En 10 años más ya casi poseía el tamaño original, hacía fotografías y vídeos, nos enseñaba las calles, nos despertaba, compraba y pagaba, hablaba; había sustituido al reloj y estaba constantemente encendido; multiplicaba también los enchufes que pudieran alimentarlo. […] Intuimos que las técnicas aparecen cuando se necesitan. La informática, justamente, sirve al desarrollo del Estado y su administración. Cuando fue preciso refinarla, porque el Estado se cargó de datos y deberes, ella creció. Digamos que empezó bien. Pero ¿a qué sirve este su despliegue en forma de Aleph? […] Es difícil saberlo. De momento instaura una burbuja alrededor de cada persona, sentada cada una junto a otra a la que no habla, pendiente de lo que la cajita enseña. Es un permiso de silencio. Como una marca del espacio privado de cada uno. Un principio externo de individuación. Fragmento adaptado de Valcárcel, https://elpais.com/elpais/2019/07/26/ideas/1564136597_136119.html",
            },
            correct: null
        },
        {
            id: 88,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Selecciona cuál es la conclusión de la autora sobre el celular.",
            image: "assets/exam_images/1/page_39_image_1.png",
            options: {
                A: "Ha ocasionado que las personas se aíslen.",
                B: "Fue el cuento del Aleph quien inspiro su creación.",
                C: "Sirve a la práctica del Estado y su administración.",
                D: "En diez años ha desarrollado una vigorosa evolución. Lee el siguiente fragmento y contesta la pregunta 89. La mañana del jueves 19 de septiembre de 1985, mi padre nos despertó para ponernos a salvo ante la fuerte sacudida que azotaba la ciudad. A mis cinco años no entendía la magnitud de lo que estaba sucediendo, pero me sentía protegida junto a mis padres y mi hermano. Los que vivimos en carne propia el sismo del 85 obtuvimos la responsabilidad de enseñar a nuestros hijos a afrontar con valentía y prontitud las llamadas de atención que nos hace la naturaleza. […] Texto modificado con fines educativos. Cuaderno de competencias y lenguaje en comunicación. (2024). Edu.mx. Recuperado de http://www.cbtis33.edu.mx/alumno/formatosplanea/Volumen%202-%20LyC.pdf",
            },
            correct: null
        },
        {
            id: 89,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "En el segundo párrafo se utilizó un argumento de:",
            options: {
                A: "dato",
                B: "teoría",
                C: "opinión",
                D: "hipótesis",
            },
            correct: null
        },
        {
            id: 90,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "En clase, un docente organiza equipos para la investigación del tema: trastornos alimenticios. Sugiere visitar la biblioteca y elegir el material adecuado para complementar el tema. De las siguientes opciones, elige la que podría ser útil para la revisión del tema.",
            options: {
                A: "Torres. (2014). Medicina Geriatríca.https://medicinageriatríca.org/124- argumentos-tercera/edad.",
                B: "Dolores. (2000). Deporte Saludable.https://deportesaludable.org/7- argumentos-salud/deporte.",
                C: "Medina. (2023). Salud Mental Clínica. https://saludmentalclinica.org/12-argu- mentos-la-saludmental/estable.",
                D: "Jorge Suárez. (2024). Fisioterapia Clínica.https://fisioterapiaclínica.org/27- argumentos-rehabilitacíón/física.",
            },
            correct: null
        },
        {
            id: 91,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Selecciona las características que corresponden a cada género literario, completando los espacios en blanco del siguiente párrafo. De acuerdo con la clasificación de los textos literarios, el género __________ se caracteriza por representar situaciones a través de diálogos y acciones de los personajes, el género __________ consiste en contar una historia, situación o acontecimientos a través de un narrador, mientras que el género __________ expresa sentimientos, emociones o pensamientos subjetivos del autor a través de imágenes y ritmo.",
            options: {
                A: "narrativo / lírico / dramático",
                B: "dramático / lírico / narrativo",
                C: "lírico / dramático / narrativo",
                D: "dramático / narrativo / lírico Lee el siguiente poema y contesta la pregunta 92. En paz Amado Nervo Muy cerca de mi ocaso, yo te bendigo, vida, porque nunca me diste ni esperanza fallida, ni trabajos injustos, ni pena inmerecida; porque veo al final de mi rudo camino que yo fui el arquitecto de mi propio destino; que si extraje las mieles o la hiel de las cosas, fue porque en ellas puse hiel o mieles sabrosas: cuando planté rosales, coseché siempre rosas. …Cierto, a mis lozanías va a seguir el invierno: ¡mas tú no me dijiste que mayo fuese eterno! Hallé sin duda largas las noches de mis penas; mas no me prometiste tan sólo noches buenas; y en cambio tuve algunas santamente serenas… Amé, fui amado, el sol acarició mi faz. ¡Vida, nada me debes! ¡Vida, estamos en paz! Archiletras. (2022, septiembre 18). En paz, de Amado Nervo. Poemas sentidos. https://www.archiletras.com/poemassentidos/en-paz-de-amado-nervo/",
            },
            correct: null
        },
        {
            id: 92,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "¿Cuál es el tema central del poema?",
            options: {
                A: "Miedo a la muerte",
                B: "Aceptación de la muerte",
                C: "Las injusticias de la vida",
                D: "Agradecimiento a la vida Revisa la siguiente infografía y responde la pregunta 93. Ajolote (Infografía)- Ciencia UNAM. (2022, enero 11). Agua.org.mx. https://agua.org.mx/biblioteca/ajolote- infografia-ciencia-unam/",
            },
            correct: null
        },
        {
            id: 93,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Selecciona la opción que presenta la idea principal de la infografía.",
            options: {
                A: "El ajolote es una especie endémica de México, capaz de regenerar sus extremidades en tan solo unos meses y su población está en declive.",
                B: "De acuerdo con el censo de la población de este animal, la cantidad de ajolotes ha disminuido cien veces en los últimos años.",
                C: "El ajolote es el actor principal de la ciencia y ha sido protagonista de leyendas prehispánicas.",
                D: "Los ajolotes respiran de tres formas distintas: por los pulmones, las branquias y la piel. Lee el siguiente texto y contesta la pregunta 94. Clara quedó muda tras la muerte de su hermana Rosa, la Bella. No habló durante años, mientras su madre intentaba todo lo posible para devolverle la voz. La tragedia familiar marcó a Clara, quien, a pesar de su silencio, desarrolló una capacidad inusual para comunicarse de otras maneras. Mientras tanto, el resto de la familia luchaba por mantener el orden en la casa, enfrentando las dificultades que surgían tras la muerte de Rosa. Fragmento de “La casa de los espíritus” de Isabel Allende.",
            },
            correct: null
        },
        {
            id: 94,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Selecciona la opción que mejor resuma el fragmento anterior.",
            image: "assets/exam_images/1/page_43_image_1.png",
            options: {
                A: "Clara perdió la voz después de la muerte de su hermana Rosa y su familia intentó ayudarla a recuperarla, aunque ella desarrolló otras formas de comunicación.",
                B: "Tras la muerte de su hermana, Clara decidió no volver a hablar nunca más, lo que causó una crisis en la familia, quienes no sabían cómo lidiar con su mutismo.",
                C: "La familia de Clara vivió en paz hasta que la muerte de Rosa trajo una serie de dificultades, especialmente para Clara, quien dejó de hablar.",
                D: "Clara se afectó mucho por la muerte de su hermana y sus padres enfrentaron muchas dificultades para seguir adelante con sus vidas.",
            },
            correct: null
        },
        {
            id: 95,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Selecciona la opción que completa el cuadro sinóptico con las características de los géneros literarios. a. Usualmente en verso b. Representado mediante diálogo c. Se caracteriza por un lenguaje claro y conciso d. Expresa emociones e. Enseña lecciones morales f. Su objetivo es entretener",
            options: {
                A: "1ab, 2cf y 3de",
                B: "1ad, 2bf y 3ce",
                C: "1be, 2cf y 3ad",
                D: "1cf, 2ab y 3de Lee el siguiente texto y contesta la pregunta 96. Hemos paseado, leído, descansado, comido y bebido, en resumen, pasamos unas vacaciones extraordinarias, por lo que deberíamos preparar las cosas para volver a casa previniendo los posibles contratiempos, como sucedió la vez anterior cuando se pinchó una llanta del automóvil, tuvimos que hablarle al seguro, esperamos por aproximadamente tres horas y finalmente fuimos rescatados y llevados hasta nuestra casa por la policía.",
            },
            correct: null
        },
        {
            id: 96,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "Identifica cuál de los conectores resaltados en negritas corresponde al de recapitulación.",
            options: {
                A: "en resumen",
                B: "finalmente",
                C: "por lo que",
                D: "cuando Géneros literarios 1. Lírico 2. Dramático 3. Didáctico Lee la siguiente infografía y contesta la pregunta 97. El Fentanilo TE MATA. (2023, abril 26). CETis 160. https://cetis160.edu.mx/el-fentanilo-te-mata/",
            },
            correct: null
        },
        {
            id: 97,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "¿Cuál es el propósito de la infografía?",
            image: "assets/exam_images/1/page_45_image_1.png",
            options: {
                A: "Los daños y consecuencias en el cerebro",
                B: "La manera en que el fentanilo causa adicción",
                C: "El impacto negativo del consumo del fentanilo",
                D: "Brindar una orientación sobre como mezclar el fentanilo",
            },
            correct: null
        },
        {
            id: 98,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "La voluntad anticipada permite a las personas manifestar su deseo a no ser sometida a ciertos procedimientos médicos que alarguen el padecimiento. ¿Cuál es una postura contraria a la voluntad anticipada?",
            options: {
                A: "Se reconocería como un derecho que no se le debería negar a alguien.",
                B: "Ayudaría a que el Estado tuviera un sistema de salud organizado.",
                C: "Evitaría gastos al Estado y a la familia de quién decida hacerlo.",
                D: "Se impondría a todos los enfermos vulnerables. Lee el siguiente fragmento y contesta la pregunta 99. Legalización de sustancias nocivas en México: ¿solución o trampa? El tema de la legalización de sustancias nocivas ha sido uno de gran peso en el debate público en numerosos países del mundo. Este tema, como muchos otros, es controversial, ya que representa un choque entre valores y filosofías de vida. Sin embargo, en el caso mexicano, este tema posee otra capa de complejidad, ya que el tema de narcotráfico es sumamente relevante en el país y la acción de legalizar o prohibir ciertas drogas afecta directamente este fenómeno. Por su parte, un partidario de la prohibición de la venta de estas sustancias puede argumentar que legalizar las drogas resulta en un problema colectivo. Si muchas personas consumen estas sustancias que alteran el funcionamiento regular del organismo, toda la sociedad pagaría las consecuencias de su libre consumo: habría más accidentes de tráfico porque éstas distorsionan las percepciones sensoriales; se cometerían más crímenes porque las drogas reducen las inhibiciones, y los hospitales estarían más presionados tratando las sobredosis. Modificado con fines educativos. Legalización de sustancias nocivas en México: ¿solución o trampa? (s/f). Gob.mx. Recuperado el 6 de enero de 2025, de https://comunicacionsocial.diputados.gob.mx/revista/index.php/pluralidad/legalizacion-de-sustancias-nocivas- en-mexico-solucion-o-trampa-",
            },
            correct: null
        },
        {
            id: 99,
            grado: "1",
            subject: "LENGUAJE",
            subtema: "LENGUAJE",
            question: "¿En qué se basan los argumentos utilizados por el autor(a) en el segundo párrafo?",
            options: {
                A: "Opinión",
                B: "Hechos",
                C: "Teorías",
                D: "Datos Fin del examen",
            },
            correct: null
        }
    ]
};

// Función para obtener preguntas por grado
function getQuestionsByGrade(grado) {
    return questionBankMultiGrado[grado] || [];
}

// Función para obtener todas las preguntas
function getAllQuestions() {
    return [...questionBankMultiGrado["1"], ...questionBankMultiGrado["2"], ...questionBankMultiGrado["3"]];
}

// Función para obtener estadísticas por grado
function getGradeStats() {
    return {
        "1": {
            total: questionBankMultiGrado["1"] ? questionBankMultiGrado["1"].length : 0,
            materias: questionBankMultiGrado["1"] ? [...new Set(questionBankMultiGrado["1"].map(q => q.subject))].length : 0
        },
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
