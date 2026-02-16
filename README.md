# 🎓 Simulador de Examen Multi-Grado - Bachillerato

Sistema de exámenes en línea para estudiantes de **2° y 3° año de bachillerato** con panel de administración completo.

## 📊 Características

### Para Estudiantes
- ✅ **Selector de grado** (2° o 3° año)
- ✅ **Registro completo**: Nombre, NIA, Correo electrónico
- ✅ **Exámenes personalizados por grado**:
  - **2° Año**: 45 preguntas (9 materias)
  - **3° Año**: 35 preguntas (7 materias)
- ✅ **Guardado automático** de respuestas
- ✅ **Navegación intuitiva** entre preguntas
- ✅ **Resultados detallados** por materia y subtema
- ✅ **Envío automático** a Firebase

### Para Administradores
- ✅ **Panel de administración** completo
- ✅ **Filtros avanzados**:
  - Por grado (2° o 3°)
  - Por fecha
  - Por nombre o NIA
- ✅ **Estadísticas generales**:
  - Total de exámenes
  - Promedio general
  - Aprobados
  - % de aprobación
- ✅ **Vista detallada** de cada examen
- ✅ **Exportación a CSV**
- ✅ **Historial completo** de todos los exámenes

## 📚 Materias por Grado

### 2° Año (Tercer Semestre) - 45 preguntas
1. Probabilidad y Estadística I (5)
2. Cultura Digital (5)
3. Lengua y Comunicación II (5)
4. Inglés III (5)
5. Ecosistema, Interacciones, Energía y Dinámica (5)
6. Taller de Ciencias II (5)
7. Conserva frutas, verduras y legumbres (5)
8. Transforma cereales - Nixtamalización (5)
9. Pensamiento Matemático III (5)

### 3° Año (Quinto Semestre) - 35 preguntas
1. Salud Integral I (5)
2. Conciencia Histórica II (5)
3. Sexualidad y Género (5)
4. Derecho y Sociedad I (5)
5. Obtiene bebidas no alcohólicas (5)
6. Prepara productos de carnes (5)
7. Taller del Pensamiento (5)

## 🚀 Instalación y Uso

### Opción 1: Usar en línea (GitHub Pages)
1. Visita: `https://TU-USUARIO.github.io/SIMULADOR-EXAMENBGO/`

### Opción 2: Usar localmente
1. Clona este repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/SIMULADOR-EXAMENBGO.git
   ```
2. Abre `index.html` en tu navegador

### Panel de Administración
- Accede a `admin.html` para ver todos los resultados
- Filtra por grado, fecha o busca por nombre/NIA
- Exporta los datos a CSV para análisis

## 📁 Estructura del Proyecto

```
SIMULADOR-EXAMENBGO/
├── index.html                  # Página principal del examen
├── admin.html                  # Panel de administración
├── styles.css                  # Estilos generales
├── admin.css                   # Estilos del panel admin
├── app.js                      # Lógica del examen
├── admin.js                    # Lógica del panel admin
├── questions-multigrado.js     # Banco de 80 preguntas
├── firebase-config.js          # Configuración de Firebase
└── README.md                   # Este archivo
```

## 🔧 Configuración de Firebase

El proyecto usa Firebase Firestore para almacenar los resultados. La configuración está en `firebase-config.js`.

### Estructura de datos en Firestore

```javascript
{
  alumno: {
    grado: "2",                    // "2" o "3"
    nombre: "Juan Pérez García",
    matricula: "201912345",        // NIA
    email: "alumno@ejemplo.com"
  },
  examen: {
    fecha: "16/02/2026",
    hora: "10:30:45",
    timestamp: Timestamp,
    duracion: "25 minutos"
  },
  resultados: {
    totalCorrectas: 35,
    totalPreguntas: 45,
    porcentaje: 77.8,
    respuestas: {...},
    porMateria: {...},
    porSubtema: {...}
  }
}
```

## 💾 Copia de Seguridad

Se crearon dos copias de seguridad antes de implementar el sistema multi-grado:

1. **Carpeta local**: `SIMULADOR-EXAMENBGO-BACKUP-20260216-XXXXXX/`
2. **Rama Git**: `backup-antes-multi-grado-20260216`

Para restaurar la versión anterior:
```bash
git checkout backup-antes-multi-grado-20260216
```

## 🎨 Personalización

### Agregar más preguntas

Edita `questions-multigrado.js` y agrega objetos en el formato:

```javascript
{
    id: 81,
    grado: "2",  // "2" o "3"
    subject: "Nombre de la Materia",
    subtema: "Subtema específico",
    question: "Texto de la pregunta",
    options: {
        A: "Opción A",
        B: "Opción B",
        C: "Opción C",
        D: "Opción D"
    },
    correct: "B"
}
```

### Modificar colores

Los colores principales están en `styles.css`:

```css
:root {
    --buap-blue: #003b5c;
    --buap-light-blue: #00b5e2;
    --success: #28a745;
    --warning: #ffc107;
}
```

## 📱 Compatibilidad

- ✅ Chrome/Edge (versiones recientes)
- ✅ Firefox (versiones recientes)
- ✅ Safari (versiones recientes)
- ✅ Dispositivos móviles (responsive)

## 🔮 Características Futuras

- [ ] Gráficas interactivas en el panel admin (Chart.js)
- [ ] Comparativas entre grados
- [ ] Estadísticas por materia
- [ ] Exportar resultados a PDF
- [ ] Temporizador de examen opcional
- [ ] Modo de revisión (ver respuestas correctas/incorrectas)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

**Desarrollado para estudiantes de Bachillerato** 🎓
**Versión Multi-Grado 2.0** - Febrero 2026
