// Banco de preguntas para el simulador BUAP
// Cada pregunta tiene: texto, opciones (A-D), respuesta correcta, y materia

const questionBank = [
    // RAZONAMIENTO MATEMÁTICO (50 preguntas)
    {
        id: 1,
        subject: "Razonamiento Matemático",
        subtema: "Álgebra básica",
        question: "Si 3x + 5 = 20, ¿cuál es el valor de x?",
        options: {
            A: "3",
            B: "5",
            C: "7",
            D: "10"
        },
        correct: "B"
    },
    {
        id: 1,
        subtema: "Álgebra básica",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de 15% de 200?",
        options: {
            A: "15",
            B: "20",
            C: "30",
            D: "35"
        },
        correct: "C"
    },
    {
        id: 2,
        subtema: "Porcentajes",
        subject: "Razonamiento Matemático",
        question: "Si un triángulo tiene ángulos de 60° y 80°, ¿cuánto mide el tercer ángulo?",
        options: {
            A: "30°",
            B: "40°",
            C: "50°",
            D: "60°"
        },
        correct: "B"
    },
    {
        id: 3,
        subtema: "Geometría",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el área de un rectángulo de 8 cm de largo y 5 cm de ancho?",
        options: {
            A: "13 cm²",
            B: "26 cm²",
            C: "40 cm²",
            D: "80 cm²"
        },
        correct: "C"
    },
    {
        id: 4,
        subtema: "Áreas y perímetros",
        subject: "Razonamiento Matemático",
        question: "Si 2^x = 32, ¿cuál es el valor de x?",
        options: {
            A: "4",
            B: "5",
            C: "6",
            D: "7"
        },
        correct: "B"
    },
    {
        id: 5,
        subtema: "Exponentes y potencias",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el siguiente número en la secuencia: 2, 6, 12, 20, ...?",
        options: {
            A: "28",
            B: "30",
            C: "32",
            D: "36"
        },
        correct: "B"
    },
    {
        id: 6,
        subtema: "Secuencias numéricas",
        subject: "Razonamiento Matemático",
        question: "Si un producto cuesta $500 y tiene un descuento del 20%, ¿cuál es el precio final?",
        options: {
            A: "$300",
            B: "$350",
            C: "$400",
            D: "$450"
        },
        correct: "C"
    },
    {
        id: 7,
        subtema: "Descuentos y precios",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es la raíz cuadrada de 144?",
        options: {
            A: "10",
            B: "11",
            C: "12",
            D: "13"
        },
        correct: "C"
    },
    {
        id: 8,
        subtema: "Raíces",
        subject: "Razonamiento Matemático",
        question: "Si 5x - 3 = 2x + 9, ¿cuál es el valor de x?",
        options: {
            A: "2",
            B: "3",
            C: "4",
            D: "5"
        },
        correct: "C"
    },
    {
        id: 9,
        subtema: "Ecuaciones lineales",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el perímetro de un cuadrado con lado de 7 cm?",
        options: {
            A: "14 cm",
            B: "21 cm",
            C: "28 cm",
            D: "49 cm"
        },
        correct: "C"
    },
    // Continuamos con más preguntas de matemáticas...
    {
        id: 10,
        subtema: "Perímetros",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de (8 + 2) × 3 - 5?",
        options: {
            A: "20",
            B: "25",
            C: "30",
            D: "35"
        },
        correct: "B"
    },
    {
        id: 11,
        subtema: "Operaciones aritméticas",
        subject: "Razonamiento Matemático",
        question: "Si un círculo tiene un radio de 7 cm, ¿cuál es su área aproximada? (π ≈ 3.14)",
        options: {
            A: "44 cm²",
            B: "88 cm²",
            C: "154 cm²",
            D: "308 cm²"
        },
        correct: "C"
    },
    {
        id: 12,
        subtema: "Áreas de círculos",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el mínimo común múltiplo de 6 y 8?",
        options: {
            A: "12",
            B: "18",
            C: "24",
            D: "48"
        },
        correct: "C"
    },
    {
        id: 13,
        subtema: "Mínimo común múltiplo",
        subject: "Razonamiento Matemático",
        question: "Si 3/4 de un número es 60, ¿cuál es el número?",
        options: {
            A: "45",
            B: "60",
            C: "75",
            D: "80"
        },
        correct: "D"
    },
    {
        id: 14,
        subtema: "Fracciones",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el valor de x en la ecuación: x/5 = 12?",
        options: {
            A: "50",
            B: "55",
            C: "60",
            D: "65"
        },
        correct: "C"
    },
    {
        id: 15,
        subtema: "División",
        subject: "Razonamiento Matemático",
        question: "¿Cuántos grados tiene un ángulo recto?",
        options: {
            A: "45°",
            B: "60°",
            C: "90°",
            D: "180°"
        },
        correct: "C"
    },
    {
        id: 16,
        subtema: "Ángulos",
        subject: "Razonamiento Matemático",
        question: "Si un auto recorre 240 km en 3 horas, ¿cuál es su velocidad promedio?",
        options: {
            A: "60 km/h",
            B: "70 km/h",
            C: "80 km/h",
            D: "90 km/h"
        },
        correct: "C"
    },
    {
        id: 17,
        subtema: "Velocidad y distancia",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de 7² - 3²?",
        options: {
            A: "16",
            B: "32",
            C: "40",
            D: "58"
        },
        correct: "C"
    },
    {
        id: 18,
        subtema: "Potencias",
        subject: "Razonamiento Matemático",
        question: "Si un número aumenta de 50 a 75, ¿cuál es el porcentaje de aumento?",
        options: {
            A: "25%",
            B: "33%",
            C: "50%",
            D: "75%"
        },
        correct: "C"
    },
    {
        id: 19,
        subtema: "Porcentajes de aumento",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el máximo común divisor de 24 y 36?",
        options: {
            A: "6",
            B: "8",
            C: "12",
            D: "18"
        },
        correct: "C"
    },
    {
        id: 20,
        subtema: "Máximo común divisor",
        subject: "Razonamiento Matemático",
        question: "Si 2x + 3y = 13 y x = 2, ¿cuál es el valor de y?",
        options: {
            A: "2",
            B: "3",
            C: "4",
            D: "5"
        },
        correct: "B"
    },
    {
        id: 21,
        subtema: "Sistemas de ecuaciones",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el volumen de un cubo con arista de 4 cm?",
        options: {
            A: "16 cm³",
            B: "32 cm³",
            C: "48 cm³",
            D: "64 cm³"
        },
        correct: "D"
    },
    {
        id: 22,
        subtema: "Volumen",
        subject: "Razonamiento Matemático",
        question: "Si 5 obreros construyen una casa en 12 días, ¿cuántos días tardarán 3 obreros?",
        options: {
            A: "15 días",
            B: "18 días",
            C: "20 días",
            D: "24 días"
        },
        correct: "C"
    },
    {
        id: 23,
        subtema: "Regla de tres",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de √(25 + 144)?",
        options: {
            A: "11",
            B: "12",
            C: "13",
            D: "14"
        },
        correct: "C"
    },
    {
        id: 24,
        subtema: "Raíces cuadradas",
        subject: "Razonamiento Matemático",
        question: "Si el precio de un artículo es $800 más IVA del 16%, ¿cuál es el precio total?",
        options: {
            A: "$816",
            B: "$864",
            C: "$916",
            D: "$928"
        },
        correct: "D"
    },
    // Continuamos hasta completar 50 preguntas de matemáticas
    {
        id: 25,
        subtema: "IVA y precios",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el siguiente término en la serie: 1, 4, 9, 16, 25, ...?",
        options: {
            A: "30",
            B: "32",
            C: "36",
            D: "40"
        },
        correct: "C"
    },
    {
        id: 26,
        subtema: "Series numéricas",
        subject: "Razonamiento Matemático",
        question: "Si un rectángulo tiene un perímetro de 30 cm y un ancho de 5 cm, ¿cuál es su largo?",
        options: {
            A: "8 cm",
            B: "10 cm",
            C: "12 cm",
            D: "15 cm"
        },
        correct: "B"
    },
    {
        id: 27,
        subtema: "Perímetros y áreas",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el valor de 3! (factorial de 3)?",
        options: {
            A: "3",
            B: "6",
            C: "9",
            D: "12"
        },
        correct: "B"
    },
    {
        id: 28,
        subtema: "Factoriales",
        subject: "Razonamiento Matemático",
        question: "Si un tanque se llena en 6 horas con una llave y en 3 horas con otra, ¿en cuánto tiempo se llena con ambas?",
        options: {
            A: "1.5 horas",
            B: "2 horas",
            C: "2.5 horas",
            D: "3 horas"
        },
        correct: "B"
    },
    {
        id: 29,
        subtema: "Problemas de llenado",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de 0.5 × 0.4?",
        options: {
            A: "0.2",
            B: "0.25",
            C: "0.3",
            D: "0.35"
        },
        correct: "A"
    },
    {
        id: 30,
        subtema: "Multiplicación de decimales",
        subject: "Razonamiento Matemático",
        question: "Si un número es divisible por 2 y 3, también es divisible por:",
        options: {
            A: "4",
            B: "5",
            C: "6",
            D: "9"
        },
        correct: "C"
    },
    {
        id: 31,
        subtema: "Divisibilidad",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el promedio de 15, 20, 25 y 30?",
        options: {
            A: "20",
            B: "22.5",
            C: "25",
            D: "27.5"
        },
        correct: "B"
    },
    {
        id: 32,
        subtema: "Promedios",
        subject: "Razonamiento Matemático",
        question: "Si x² = 81, ¿cuáles son los posibles valores de x?",
        options: {
            A: "±7",
            B: "±8",
            C: "±9",
            D: "±10"
        },
        correct: "C"
    },
    {
        id: 33,
        subtema: "Ecuaciones cuadráticas",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el área de un triángulo con base 10 cm y altura 6 cm?",
        options: {
            A: "20 cm²",
            B: "30 cm²",
            C: "40 cm²",
            D: "60 cm²"
        },
        correct: "B"
    },
    {
        id: 34,
        subtema: "Áreas de triángulos",
        subject: "Razonamiento Matemático",
        question: "Si 4x - 7 = 13, ¿cuál es el valor de 2x?",
        options: {
            A: "5",
            B: "8",
            C: "10",
            D: "12"
        },
        correct: "C"
    },
    {
        id: 35,
        subtema: "Ecuaciones y expresiones",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de 2/3 + 1/6?",
        options: {
            A: "1/2",
            B: "2/3",
            C: "5/6",
            D: "1"
        },
        correct: "C"
    },
    {
        id: 36,
        subtema: "Suma de fracciones",
        subject: "Razonamiento Matemático",
        question: "Si un producto cuesta $1,200 y se vende con una ganancia del 25%, ¿cuál es el precio de venta?",
        options: {
            A: "$1,300",
            B: "$1,400",
            C: "$1,500",
            D: "$1,600"
        },
        correct: "C"
    },
    {
        id: 37,
        subtema: "Ganancia y precios",
        subject: "Razonamiento Matemático",
        question: "¿Cuántos lados tiene un hexágono?",
        options: {
            A: "4",
            B: "5",
            C: "6",
            D: "8"
        },
        correct: "C"
    },
    {
        id: 38,
        subtema: "Polígonos",
        subject: "Razonamiento Matemático",
        question: "Si log₁₀(100) = x, ¿cuál es el valor de x?",
        options: {
            A: "1",
            B: "2",
            C: "10",
            D: "100"
        },
        correct: "B"
    },
    {
        id: 39,
        subtema: "Logaritmos",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de 15 ÷ 0.5?",
        options: {
            A: "7.5",
            B: "15",
            C: "30",
            D: "45"
        },
        correct: "C"
    },
    {
        id: 40,
        subtema: "División de decimales",
        subject: "Razonamiento Matemático",
        question: "Si un ángulo mide 135°, ¿qué tipo de ángulo es?",
        options: {
            A: "Agudo",
            B: "Recto",
            C: "Obtuso",
            D: "Llano"
        },
        correct: "C"
    },
    {
        id: 41,
        subtema: "Clasificación de ángulos",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el valor de π (pi) aproximadamente?",
        options: {
            A: "2.14",
            B: "3.14",
            C: "4.14",
            D: "5.14"
        },
        correct: "B"
    },
    {
        id: 42,
        subtema: "Valor de pi",
        subject: "Razonamiento Matemático",
        question: "Si 3 manzanas cuestan $15, ¿cuánto cuestan 7 manzanas?",
        options: {
            A: "$30",
            B: "$35",
            C: "$40",
            D: "$45"
        },
        correct: "B"
    },
    {
        id: 43,
        subtema: "Proporciones",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de |−8|?",
        options: {
            A: "-8",
            B: "0",
            C: "8",
            D: "16"
        },
        correct: "C"
    },
    {
        id: 44,
        subtema: "Valor absoluto",
        subject: "Razonamiento Matemático",
        question: "Si un cuadrado tiene un área de 64 cm², ¿cuál es la longitud de su lado?",
        options: {
            A: "6 cm",
            B: "7 cm",
            C: "8 cm",
            D: "9 cm"
        },
        correct: "C"
    },
    {
        id: 45,
        subtema: "Áreas de cuadrados",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de 100 - 25% de 100?",
        options: {
            A: "25",
            B: "50",
            C: "75",
            D: "100"
        },
        correct: "C"
    },
    {
        id: 46,
        subtema: "Porcentajes y restas",
        subject: "Razonamiento Matemático",
        question: "Si x + y = 10 y x - y = 4, ¿cuál es el valor de x?",
        options: {
            A: "3",
            B: "5",
            C: "7",
            D: "9"
        },
        correct: "C"
    },
    {
        id: 47,
        subtema: "Sistemas de ecuaciones 2x2",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es la mediana de los números: 3, 7, 9, 12, 15?",
        options: {
            A: "7",
            B: "9",
            C: "10",
            D: "12"
        },
        correct: "B"
    },
    {
        id: 48,
        subtema: "Mediana",
        subject: "Razonamiento Matemático",
        question: "Si un reloj marca las 3:00, ¿qué ángulo forman las manecillas?",
        options: {
            A: "60°",
            B: "75°",
            C: "90°",
            D: "120°"
        },
        correct: "C"
    },
    {
        id: 49,
        subtema: "Ángulos en relojes",
        subject: "Razonamiento Matemático",
        question: "¿Cuál es el resultado de 2³ × 2²?",
        options: {
            A: "16",
            B: "24",
            C: "32",
            D: "64"
        },
        correct: "C"
    },

    // RAZONAMIENTO VERBAL (50 preguntas)
    {
        id: 50,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de EFÍMERO:",
        options: {
            A: "Eterno",
            B: "Pasajero",
            C: "Permanente",
            D: "Duradero"
        },
        correct: "B"
    },
    {
        id: 51,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de DIÁFANO:",
        options: {
            A: "Claro",
            B: "Transparente",
            C: "Opaco",
            D: "Cristalino"
        },
        correct: "C"
    },
    {
        id: 52,
        subtema: "Analogías",
        subject: "Razonamiento Verbal",
        question: "Completa la analogía: LIBRO es a BIBLIOTECA como CUADRO es a:",
        options: {
            A: "Marco",
            B: "Pintura",
            C: "Museo",
            D: "Arte"
        },
        correct: "C"
    },
    {
        id: 53,
        subtema: "Clasificación de palabras",
        subject: "Razonamiento Verbal",
        question: "¿Cuál palabra NO pertenece al grupo?",
        options: {
            A: "Perro",
            B: "Gato",
            C: "Mesa",
            D: "Caballo"
        },
        correct: "C"
    },
    {
        id: 54,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de PERSPICAZ:",
        options: {
            A: "Torpe",
            B: "Agudo",
            C: "Lento",
            D: "Confuso"
        },
        correct: "B"
    },
    {
        id: 55,
        subtema: "Significados",
        subject: "Razonamiento Verbal",
        question: "¿Cuál es el significado de ALTRUISTA?",
        options: {
            A: "Egoísta",
            B: "Generoso",
            C: "Avaro",
            D: "Indiferente"
        },
        correct: "B"
    },
    {
        id: 56,
        subtema: "Completar oraciones",
        subject: "Razonamiento Verbal",
        question: "Completa: La _____ es fundamental para el éxito en cualquier proyecto.",
        options: {
            A: "pereza",
            B: "negligencia",
            C: "perseverancia",
            D: "apatía"
        },
        correct: "C"
    },
    {
        id: 57,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de PROLIJO:",
        options: {
            A: "Detallado",
            B: "Minucioso",
            C: "Conciso",
            D: "Extenso"
        },
        correct: "C"
    },
    {
        id: 58,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "¿Qué palabra completa correctamente la oración? El científico realizó un _____ exhaustivo.",
        options: {
            A: "análisis",
            B: "análizes",
            C: "analicis",
            D: "analisys"
        },
        correct: "A"
    },
    {
        id: 59,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de INMUTABLE:",
        options: {
            A: "Variable",
            B: "Cambiante",
            C: "Invariable",
            D: "Flexible"
        },
        correct: "C"
    },
    {
        id: 60,
        subtema: "Analogías",
        subject: "Razonamiento Verbal",
        question: "Completa la analogía: MÉDICO es a HOSPITAL como PROFESOR es a:",
        options: {
            A: "Libro",
            B: "Escuela",
            C: "Estudiante",
            D: "Pizarrón"
        },
        correct: "B"
    },
    {
        id: 61,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "¿Cuál es el antónimo de BENEVOLENTE?",
        options: {
            A: "Bondadoso",
            B: "Caritativo",
            C: "Malévolo",
            D: "Generoso"
        },
        correct: "C"
    },
    {
        id: 62,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "Selecciona la palabra escrita correctamente:",
        options: {
            A: "Expontáneo",
            B: "Espontáneo",
            C: "Espontanio",
            D: "Expontanio"
        },
        correct: "B"
    },
    {
        id: 63,
        subtema: "Significados",
        subject: "Razonamiento Verbal",
        question: "¿Qué significa IDIOSINCRASIA?",
        options: {
            A: "Enfermedad mental",
            B: "Rasgos característicos de una persona o grupo",
            C: "Falta de educación",
            D: "Comportamiento extraño"
        },
        correct: "B"
    },
    {
        id: 64,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de VEHEMENTE:",
        options: {
            A: "Apático",
            B: "Indiferente",
            C: "Apasionado",
            D: "Tranquilo"
        },
        correct: "C"
    },
    {
        id: 65,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "Completa: El orador fue muy _____ en su discurso.",
        options: {
            A: "elocuente",
            B: "elocuante",
            C: "eloquente",
            D: "ellocuente"
        },
        correct: "A"
    },
    {
        id: 66,
        subtema: "Clasificación de palabras",
        subject: "Razonamiento Verbal",
        question: "¿Cuál palabra NO pertenece al grupo?",
        options: {
            A: "Alegría",
            B: "Tristeza",
            C: "Enojo",
            D: "Silla"
        },
        correct: "D"
    },
    {
        id: 67,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de AUSTERO:",
        options: {
            A: "Sobrio",
            B: "Moderado",
            C: "Ostentoso",
            D: "Sencillo"
        },
        correct: "C"
    },
    {
        id: 68,
        subtema: "Significados",
        subject: "Razonamiento Verbal",
        question: "¿Qué significa PARADOJA?",
        options: {
            A: "Contradicción aparente",
            B: "Verdad absoluta",
            C: "Mentira evidente",
            D: "Historia ficticia"
        },
        correct: "A"
    },
    {
        id: 69,
        subtema: "Analogías",
        subject: "Razonamiento Verbal",
        question: "Completa la analogía: PLUMA es a ESCRIBIR como PINCEL es a:",
        options: {
            A: "Dibujar",
            B: "Pintar",
            C: "Colorear",
            D: "Trazar"
        },
        correct: "B"
    },
    {
        id: 70,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de ENIGMÁTICO:",
        options: {
            A: "Claro",
            B: "Evidente",
            C: "Misterioso",
            D: "Obvio"
        },
        correct: "C"
    },
    {
        id: 71,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "¿Cuál es la forma correcta?",
        options: {
            A: "Haber si vienes",
            B: "A ver si vienes",
            C: "Haver si vienes",
            D: "A ber si vienes"
        },
        correct: "B"
    },
    {
        id: 72,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de ESCASO:",
        options: {
            A: "Poco",
            B: "Limitado",
            C: "Abundante",
            D: "Insuficiente"
        },
        correct: "C"
    },
    {
        id: 73,
        subtema: "Significados",
        subject: "Razonamiento Verbal",
        question: "¿Qué significa PRAGMÁTICO?",
        options: {
            A: "Teórico",
            B: "Práctico",
            C: "Idealista",
            D: "Soñador"
        },
        correct: "B"
    },
    {
        id: 74,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "Completa: La _____ del proyecto fue evidente desde el inicio.",
        options: {
            A: "viabilidad",
            B: "biabilidad",
            C: "viabilidá",
            D: "biabilidá"
        },
        correct: "A"
    },
    {
        id: 75,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de SUCINTO:",
        options: {
            A: "Extenso",
            B: "Detallado",
            C: "Breve",
            D: "Prolijo"
        },
        correct: "C"
    },
    {
        id: 76,
        subtema: "Analogías",
        subject: "Razonamiento Verbal",
        question: "Completa la analogía: AGUA es a SED como COMIDA es a:",
        options: {
            A: "Cocina",
            B: "Hambre",
            C: "Plato",
            D: "Sabor"
        },
        correct: "B"
    },
    {
        id: 77,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "¿Cuál palabra está mal escrita?",
        options: {
            A: "Excelente",
            B: "Excepcional",
            C: "Exhuberante",
            D: "Exhaustivo"
        },
        correct: "C"
    },
    {
        id: 78,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de MAGNÁNIMO:",
        options: {
            A: "Generoso",
            B: "Noble",
            C: "Mezquino",
            D: "Bondadoso"
        },
        correct: "C"
    },
    {
        id: 79,
        subtema: "Significados",
        subject: "Razonamiento Verbal",
        question: "¿Qué significa AMBIGUO?",
        options: {
            A: "Claro y preciso",
            B: "Con varios significados posibles",
            C: "Único e inequívoco",
            D: "Falso"
        },
        correct: "B"
    },
    {
        id: 80,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de DILIGENTE:",
        options: {
            A: "Perezoso",
            B: "Negligente",
            C: "Cuidadoso",
            D: "Descuidado"
        },
        correct: "C"
    },
    {
        id: 81,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "Completa: El abogado presentó argumentos muy _____.",
        options: {
            A: "sólidos",
            B: "solidos",
            C: "solidoz",
            D: "sollidos"
        },
        correct: "A"
    },
    {
        id: 82,
        subtema: "Clasificación de palabras",
        subject: "Razonamiento Verbal",
        question: "¿Cuál palabra NO pertenece al grupo?",
        options: {
            A: "Rojo",
            B: "Azul",
            C: "Verde",
            D: "Dulce"
        },
        correct: "D"
    },
    {
        id: 83,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de FRUGAL:",
        options: {
            A: "Moderado",
            B: "Sobrio",
            C: "Derrochador",
            D: "Austero"
        },
        correct: "C"
    },
    {
        id: 84,
        subtema: "Analogías",
        subject: "Razonamiento Verbal",
        question: "Completa la analogía: LÁPIZ es a PAPEL como AGUJA es a:",
        options: {
            A: "Hilo",
            B: "Tela",
            C: "Coser",
            D: "Dedal"
        },
        correct: "B"
    },
    {
        id: 85,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "¿Qué significa EUFEMISMO?",
        options: {
            A: "Expresión directa y cruda",
            B: "Expresión suave para algo desagradable",
            C: "Exageración evidente",
            D: "Mentira piadosa"
        },
        correct: "B"
    },
    {
        id: 86,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de LOCUAZ:",
        options: {
            A: "Callado",
            B: "Silencioso",
            C: "Hablador",
            D: "Tímido"
        },
        correct: "C"
    },
    {
        id: 87,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "¿Cuál es la forma correcta?",
        options: {
            A: "Haz lo que te dije",
            B: "Has lo que te dije",
            C: "Az lo que te dije",
            D: "As lo que te dije"
        },
        correct: "A"
    },
    {
        id: 88,
        subtema: "Clasificación de palabras",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de INCIPIENTE:",
        options: {
            A: "Inicial",
            B: "Naciente",
            C: "Avanzado",
            D: "Emergente"
        },
        correct: "C"
    },
    {
        id: 89,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "¿Qué significa REDUNDANTE?",
        options: {
            A: "Necesario",
            B: "Repetitivo innecesariamente",
            C: "Único",
            D: "Escaso"
        },
        correct: "B"
    },
    {
        id: 90,
        subtema: "Significados",
        subject: "Razonamiento Verbal",
        question: "Completa: La _____ del problema requiere atención inmediata.",
        options: {
            A: "magnitud",
            B: "magnitú",
            C: "manitud",
            D: "magnitut"
        },
        correct: "A"
    },
    {
        id: 91,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de OSTENTAR:",
        options: {
            A: "Ocultar",
            B: "Esconder",
            C: "Exhibir",
            D: "Disimular"
        },
        correct: "C"
    },
    {
        id: 92,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "Completa la analogía: DIRECTOR es a ORQUESTA como CAPITÁN es a:",
        options: {
            A: "Mar",
            B: "Barco",
            C: "Navegación",
            D: "Puerto"
        },
        correct: "B"
    },
    {
        id: 93,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "¿Cuál palabra está correctamente escrita?",
        options: {
            A: "Conciensia",
            B: "Conciencia",
            C: "Consiencia",
            D: "Concienzia"
        },
        correct: "B"
    },
    {
        id: 94,
        subtema: "Significados",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de EFÍMERO:",
        options: {
            A: "Breve",
            B: "Pasajero",
            C: "Perdurable",
            D: "Fugaz"
        },
        correct: "C"
    },
    {
        id: 95,
        subtema: "Sinónimos",
        subject: "Razonamiento Verbal",
        question: "¿Qué significa ANACRÓNICO?",
        options: {
            A: "Moderno",
            B: "Actual",
            C: "Fuera de su época",
            D: "Contemporáneo"
        },
        correct: "C"
    },
    {
        id: 96,
        subtema: "Ortografía",
        subject: "Razonamiento Verbal",
        question: "Selecciona el sinónimo de ESCÉPTICO:",
        options: {
            A: "Crédulo",
            B: "Confiado",
            C: "Incrédulo",
            D: "Ingenuo"
        },
        correct: "C"
    },
    {
        id: 97,
        subtema: "Clasificación de palabras",
        subject: "Razonamiento Verbal",
        question: "Completa: El juez dictó una sentencia _____.",
        options: {
            A: "justa",
            B: "juzta",
            C: "gusta",
            D: "xusta"
        },
        correct: "A"
    },
    {
        id: 98,
        subtema: "Antónimos",
        subject: "Razonamiento Verbal",
        question: "¿Cuál palabra NO pertenece al grupo?",
        options: {
            A: "Correr",
            B: "Saltar",
            C: "Nadar",
            D: "Rojo"
        },
        correct: "D"
    },
    {
        id: 99,
        subtema: "Significados",
        subject: "Razonamiento Verbal",
        question: "Selecciona el antónimo de TRIVIAL:",
        options: {
            A: "Insignificante",
            B: "Banal",
            C: "Importante",
            D: "Superficial"
        },
        correct: "C"
    }
];
