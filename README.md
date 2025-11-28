# Simulador de Examen BUAP

Simulador interactivo para preparación de los exámenes EGA-I y EGAV-I de la BUAP (Benemérita Universidad Autónoma de Puebla).

🔗 **[Ver Demo en Vivo](https://TU-USUARIO.github.io/buap-exam-simulator/)**

## 🎯 Características

- **100 preguntas** divididas en:
  - 50 preguntas de Razonamiento Matemático
  - 50 preguntas de Razonamiento Verbal
- **Navegación intuitiva** entre preguntas
- **Guardado automático** de respuestas usando localStorage
- **Resultados detallados** con análisis por áreas y subtemas
- **Barras de progreso** con código de colores (Rojo/Amarillo/Verde)
- **Interfaz responsive** para dispositivos móviles
- **Atajos de teclado** para navegación rápida

## 🚀 Cómo usar

### Opción 1: Usar en línea
Visita: [https://TU-USUARIO.github.io/buap-exam-simulator/](https://TU-USUARIO.github.io/buap-exam-simulator/)

### Opción 2: Usar localmente
1. Clona este repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/buap-exam-simulator.git
   ```
2. Abre el archivo `index.html` en tu navegador web

## 💾 Persistencia de Datos

El simulador guarda automáticamente tu progreso en el navegador usando localStorage:
- ✅ Respuestas guardadas automáticamente
- ✅ Posición actual en el examen
- ✅ Puedes cerrar el navegador y continuar después
- ✅ Opción para reiniciar y borrar datos

## ⌨️ Atajos de teclado

- **Flecha izquierda (←)**: Pregunta anterior
- **Flecha derecha (→)**: Pregunta siguiente
- **Enter**: Finalizar examen (solo en la última pregunta)

## 📊 Resultados

Al finalizar el examen verás:
- Puntuación total (sobre 100)
- Porcentaje de aciertos
- Desglose por áreas principales
- Análisis detallado por subtemas
- Barras de progreso con código de colores:
  - 🔴 Rojo: < 60% (necesita mejorar)
  - 🟡 Amarillo: 60-79% (bien)
  - 🟢 Verde: ≥ 80% (excelente)

## 🛠️ Estructura del proyecto

```
buap-exam-simulator/
├── index.html       # Estructura HTML principal
├── styles.css       # Estilos CSS
├── questions.js     # Banco de 100 preguntas
├── app.js          # Lógica de la aplicación
└── README.md       # Este archivo
```

## 🎨 Personalización

### Agregar más preguntas

Edita el archivo `questions.js` y agrega objetos con el siguiente formato:

```javascript
{
    id: 101,
    enunciado: "Texto de la pregunta",
    opciones: {
        A: "Opción A",
        B: "Opción B",
        C: "Opción C",
        D: "Opción D"
    },
    correcta: "B", // Letra de la respuesta correcta
    bloque: "Razonamiento Matemático", // o "Razonamiento Verbal"
    subtema: "Álgebra básica" // Subtema específico
}
```

### Modificar colores

Los colores principales están definidos en `styles.css` como variables CSS:

```css
:root {
    --buap-blue: #003b5c;
    --buap-light-blue: #00b5e2;
    --success: #28a745;
    --warning: #ffc107;
    --danger: #dc3545;
}
```

## 📱 Compatibilidad

- ✅ Chrome/Edge (versiones recientes)
- ✅ Firefox (versiones recientes)
- ✅ Safari (versiones recientes)
- ✅ Dispositivos móviles (responsive)

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube los archivos:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/buap-exam-simulator.git
   git push -u origin main
   ```
3. Ve a Settings → Pages
4. En "Source", selecciona la rama `main` y carpeta `/ (root)`
5. Haz clic en "Save"
6. Tu sitio estará disponible en: `https://TU-USUARIO.github.io/buap-exam-simulator/`

## 📝 Notas

- Las respuestas se guardan automáticamente en localStorage
- Puedes navegar libremente entre preguntas antes de finalizar
- El simulador no tiene límite de tiempo
- Los datos se mantienen incluso si cierras el navegador

## 🔮 Mejoras futuras sugeridas

- [ ] Temporizador de examen opcional
- [ ] Modo de revisión (ver respuestas correctas/incorrectas)
- [ ] Exportar resultados a PDF
- [ ] Más categorías de preguntas
- [ ] Modo práctica por materia específica
- [ ] Estadísticas históricas de intentos

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

**Desarrollado para estudiantes de la BUAP** 🎓
