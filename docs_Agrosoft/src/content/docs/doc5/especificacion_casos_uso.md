---
title: UML
description: A reference page in my new Starlight docs site.
---

---

<style is:global>
  :root {
    --iot-table-bg: #ffffff;
    --iot-table-header-bg: #2c3e50;
    --iot-table-border: #e0e0e0;
    --iot-table-text: #2d3436;
    --iot-table-accent: #3498db;
    --iot-table-hover: #f8f9fa;
  }

  [data-theme="dark"] {
    --iot-table-bg: #2d3436;
    --iot-table-header-bg: #1a252f;
    --iot-table-border: #3d4c58;
    --iot-table-text: #dfe6e9;
    --iot-table-accent: #74b9ff;
    --iot-table-hover: #34495e;
  }

  .iot-table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    background: var(--iot-table-bg);
    color: var(--iot-table-text);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .iot-table th, .iot-table td {
    padding: 1.2rem;
    border: 1px solid var(--iot-table-border);
    vertical-align: top;
  }

  .iot-table th {
    background: var(--iot-table-header-bg);
    color: white;
    font-weight: 600;
    border-bottom: 3px solid var(--iot-table-accent);
  }

  .iot-table tr:nth-child(even) {
    background-color: color-mix(in srgb, var(--iot-table-bg) 90%, var(--iot-table-accent));
  }

  .iot-table tr:hover {
    background-color: var(--iot-table-hover);
  }

  .highlight {
    color: var(--iot-table-accent);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .iot-table {
      display: block;
      overflow-x: auto;
    }
  }
</style>

### Tabla de especificación Trazabilidad.

---

<table class="iot-table">
  <thead>
    <tr>
      <th>Campo</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="highlight">NOMBRE</td>
      <td>Módulo Trazabilidad</td>
    </tr>
    <tr>
      <td class="highlight">AUTORES</td>
      <td>Carlos Manuel Zuñiga Lopez</td>
    </tr>
    <tr>
      <td class="highlight">DESCRIPCIÓN</td>
      <td>
        El módulo de trazabilidad permite gestionar y registrar de forma estructurada cada etapa del proceso agrícola, desde la creación de tipos de especie hasta la plantación final. Facilita el seguimiento detallado de cultivos, especies, semilleros, lotes y eras, permitiendo visualizar relaciones y evolución a lo largo del tiempo. Este control integral mejora la planificación, el análisis histórico y la toma de decisiones en la producción agrícola.
      </td>
    </tr>
    <tr>
      <td class="highlight">ACTORES</td>
      <td>
        <span class="highlight">Instructor:</span> Puede realizar todas las acciones del proceso de trazabilidad<br>
        <span class="highlight">Pasante:</span> Puede realizar todas las acciones del proceso de trazabilidad<br>
        <span class="highlight">Aprendiz:</span> Solo tiene permisos de visualización de los registros
      </td>
    </tr>
    <tr>
      <td class="highlight">PRIORIDAD</td>
      <td>Alta</td>
    </tr>
    <tr>
      <td class="highlight">PRECONDICIONES</td>
      <td>
        - Haber iniciado sesión con un rol válido<br>
        - Tener al menos un tipo de especie creado previamente
      </td>
    </tr>
    <tr>
      <td class="highlight">FLUJO NORMAL</td>
      <td>
        1. Crear un Tipo de Especie<br>
        2. Crear una Especie asociando un Tipo de Especie<br>
        3. Crear un Cultivo y vincular una Especie<br>
        4. (Opcional) Crear un Semillero para el Cultivo<br>
        5. Crear un Lote agrícola<br>
        6. Crear una Era dentro del Lote<br>
        7. Registrar una Plantación, asociando Cultivo, Semillero (si existe) y Era
      </td>
    </tr>
    <tr>
      <td class="highlight">FLUJOS ALTERNOS</td>
      <td>
        <span class="highlight">FA1: Semillero no registrado</span><br>
        - La plantación se puede registrar sin semillero<br><br>
        <span class="highlight">FA2: Falta de datos relacionados</span><br>
        - No se permite avanzar si no se ha registrado el paso anterior requerido (por ejemplo, especie sin tipo)
      </td>
    </tr>
    <tr>
      <td class="highlight">POSTCONDICIÓN</td>
      <td>
        - Registro completo y trazable del proceso agrícola<br>
        - Datos disponibles para consulta histórica y seguimiento
      </td>
    </tr>
    <tr>
      <td class="highlight">EXCEPCIONES</td>
      <td>
        <span class="highlight">EX1: Error de conexión con la base de datos</span> - Se muestra mensaje de error y se impide el registro<br>
        <span class="highlight">EX2: Ingreso de datos inválidos</span> - Validaciones previas alertan al usuario<br>
        <span class="highlight">EX3: Rol sin permisos</span> - Acceso denegado para acciones restringidas
      </td>
    </tr>
  </tbody>
</table>

### Tabla de especificación Actividades.

---

<table class="iot-table">
  <thead>
    <tr>
      <th>Campo</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="highlight">NOMBRE</td>
      <td>Módulo Actividades</td>
    </tr>
    <tr>
      <td class="highlight">AUTORES</td>
      <td>Maiber Jhadir Cordoba Cabezas</td>
    </tr>
    <tr>
      <td class="highlight">DESCRIPCIÓN</td>
      <td>
        El módulo de actividades permite gestionar las tareas agrícolas, incluyendo la asignación de actividades, el registro de tiempo invertido y el uso de insumos. Facilita el seguimiento de estados (asignada, completada, cancelada), costos laborales y consumo de recursos, mejorando la planificación y el control de las operaciones agrícolas.
      </td>
    </tr>
    <tr>
      <td class="highlight">ACTORES</td>
      <td>
        <span class="highlight">Admin:</span> Puede realizar todas las acciones (ver y editar actividades, tiempos, insumos, etc.)<br>
        <span class="highlight">Instructor:</span> Puede ver todos los registros, pero solo editar actividades<br>
        <span class="highlight">Pasante:</span> Puede ver todos los registros, pero solo editar actividades<br>
        <span class="highlight">Visitante:</span> No tiene acceso a ver ni editar nada
      </td>
    </tr>
    <tr>
      <td class="highlight">PRIORIDAD</td>
      <td>Alta</td>
    </tr>
    <tr>
      <td class="highlight">PRECONDICIONES</td>
      <td>
        - Haber iniciado sesión con un rol válido (Admin, Instructor, Pasante)<br>
        - Tener al menos un tipo de actividad, unidad de tiempo y unidad de medida creados
      </td>
    </tr>
    <tr>
      <td class="highlight">FLUJO NORMAL</td>
      <td>
        1. Crear un Tipo de Actividad (e.g., siembra)<br>
        2. Crear una Unidad de Tiempo (e.g., horas)<br>
        3. Crear una Unidad de Medida (e.g., litros)<br>
        4. Registrar una Actividad (título, descripción, fecha, usuario)<br>
        5. Registrar Tiempo invertido en una actividad (tiempo, unidad, salario)<br>
        6. Registrar Uso de Insumos en una actividad (insumo, cantidad)<br>
        7. Consultar registros de actividades, tiempos o insumos
      </td>
    </tr>
    <tr>
      <td class="highlight">FLUJOS ALTERNOS</td>
      <td>
        <span class="highlight">FA1: Actividad sin usuario asignado</span><br>
        - Se puede registrar con usuario "Sin asignar"<br><br>
        <span class="highlight">FA2: Uso de insumos sin actividad</span><br>
        - Se puede asociar a un control en lugar de una actividad
      </td>
    </tr>
    <tr>
      <td class="highlight">POSTCONDICIÓN</td>
      <td>
        - Registro completo de actividades, tiempos e insumos<br>
        - Datos disponibles para análisis operativo y reportes
      </td>
    </tr>
    <tr>
      <td class="highlight">EXCEPCIONES</td>
      <td>
        <span class="highlight">EX1: Error de conexión con la base de datos</span> - Se muestra mensaje de error y se impide el registro<br>
        <span class="highlight">EX2: Ingreso de datos inválidos</span> - Validaciones previas alertan al usuario<br>
        <span class="highlight">EX3: Rol sin permisos</span> - Acceso denegado para acciones restringidas (e.g., Pasante intenta editar tiempos)
      </td>
    </tr>
  </tbody>
</table>

### Tabla de especificación Finanzas.

---

<table class="iot-table">
  <thead>
    <tr>
      <th>Campo</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="highlight">NOMBRE</td>
      <td>Módulo Finanzas</td>
    </tr>
    <tr>
      <td class="highlight">AUTORES</td>
      <td>Maiber Jhadir Cordoba Cabezas</td>
    </tr>
    <tr>
      <td class="highlight">DESCRIPCIÓN</td>
      <td>
        El módulo de finanzas permite gestionar los aspectos económicos de la producción agrícola, incluyendo el registro de cosechas, ventas y salarios. Facilita el cálculo de valores totales, descuentos y costos laborales, proporcionando un control detallado de los ingresos y gastos. Este módulo mejora la planificación financiera y la toma de decisiones basadas en datos históricos.
      </td>
    </tr>
    <tr>
      <td class="highlight">ACTORES</td>
      <td>
        <span class="highlight">Admin:</span> Puede realizar todas las acciones (ver y editar cosechas, ventas, salarios, unidades de medida)<br>
        <span class="highlight">Instructor:</span> Puede ver todos los registros, pero solo editar cosechas<br>
        <span class="highlight">Pasante:</span> Puede ver todos los registros, pero solo editar cosechas<br>
        <span class="highlight">Visitante:</span> No tiene acceso a ver ni editar nada
      </td>
    </tr>
    <tr>
      <td class="highlight">PRIORIDAD</td>
      <td>Alta</td>
    </tr>
    <tr>
      <td class="highlight">PRECONDICIONES</td>
      <td>
        - Haber iniciado sesión con un rol válido (Admin, Instructor, Pasante)<br>
        - Tener al menos una unidad de medida creada para cosechas y ventas
      </td>
    </tr>
    <tr>
      <td class="highlight">FLUJO NORMAL</td>
      <td>
        1. Crear una Unidad de Medida (e.g., kg, gramos)<br>
        2. Registrar una Cosecha (cantidad, precio por unidad, fecha)<br>
        3. Registrar una Venta asociada a una cosecha (cantidad, descuento)<br>
        4. Registrar un Salario (nombre, monto, horas)<br>
        5. Consultar registros de cosechas, ventas o salarios
      </td>
    </tr>
    <tr>
      <td class="highlight">FLUJOS ALTERNOS</td>
      <td>
        <span class="highlight">FA1: Cosecha sin unidad de medida</span><br>
        - Se puede registrar con unidad por defecto (si aplica)<br><br>
        <span class="highlight">FA2: Venta sin cosecha</span><br>
        - No se permite registrar si no hay cosecha asociada
      </td>
    </tr>
    <tr>
      <td class="highlight">POSTCONDICIÓN</td>
      <td>
        - Registro completo de transacciones financieras<br>
        - Datos disponibles para análisis económico y reportes
      </td>
    </tr>
    <tr>
      <td class="highlight">EXCEPCIONES</td>
      <td>
        <span class="highlight">EX1: Error de conexión con la base de datos</span> - Se muestra mensaje de error y se impide el registro<br>
        <span class="highlight">EX2: Ingreso de datos inválidos</span> - Validaciones previas alertan al usuario<br>
        <span class="highlight">EX3: Rol sin permisos</span> - Acceso denegado para acciones restringidas (e.g., Instructor intenta editar ventas)
      </td>
    </tr>
  </tbody>
</table>

### Tabla de especificación IoT.

---

<table class="iot-table">
  <thead>
    <tr>
      <th>Campo</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="highlight">NOMBRE</td>
      <td>Módulo IoT </td>
    </tr>
    <tr>
      <td class="highlight">AUTORES</td>
      <td>Karen Yuliana Semanate Bolaños </td>
    </tr>
    <tr>
      <td class="highlight">DESCRIPCIÓN</td>
      <td>
        El módulo permite monitorear en tiempo real variables agrícolas (humedad del suelo, temperatura, 
        luminosidad, lluvia, viento y PH) mediante sensores IoT. Los datos se validan contra umbrales, 
        generan alertas automáticas y se visualizan en un dashboard interactivo para optimizar la gestión de cultivos.
      </td>
    </tr>
    <tr>
      <td class="highlight">ACTORES</td>
      <td>
        <span class="highlight">Administrador:</span> Configura sensores, umbrales y gestiona lotes/eras<br>
        <span class="highlight">Usuario Agricultor:</span> Visualiza datos y alertas en el dashboard<br>
        <span class="highlight">Sensores IoT:</span> Envían datos al sistema (actores no humanos)
      </td>
    </tr>
    <tr>
      <td class="highlight">PRIORIDAD</td>
      <td>Alta</td>
    </tr>
    <tr>
      <td class="highlight">PRECONDICIONES</td>
      <td>
        - Sensores registrados en el sistema<br>
        - Lotes y eras configurados<br>
        - Umbrales mínimos/máximos definidos para alertas (opcional)
      </td>
    </tr>
    <tr>
      <td class="highlight">FLUJO NORMAL</td>
      <td>
        1. Sensores envían datos cada 10 minutos<br>
        2. Sistema valida y almacena datos<br>
        3. Comparación con umbrales configurados<br>
        4. Actualización del dashboard en tiempo real<br>
        5. Generación de alertas visuales/acústicas
      </td>
    </tr>
    <tr>
      <td class="highlight">FLUJOS ALTERNOS</td>
      <td>
        <span class="highlight">FA1: Sensor no vinculado</span><br>
        - Datos almacenados como "No asignados"<br>
        <span class="highlight">FA2: Umbrales no configurados</span><br>
        - Almacenamiento sin validación
      </td>
    </tr>
    <tr>
      <td class="highlight">POSTCONDICIÓN</td>
      <td>
        - Datos históricos disponibles<br>
        - Alertas registradas con marca de tiempo<br>
        - Dashboard actualizado
      </td>
    </tr>
    <tr>
      <td class="highlight">EXCEPCIONES</td>
      <td>
        <span class="highlight">EX1: Datos corruptos</span> - Descartar y notificar<br>
        <span class="highlight">EX2: Sensor inactivo</span> - Alerta de desconexión<br>
        <span class="highlight">EX3: Error de comunicación</span> - Reintento cada 5 min
      </td>
    </tr>
  </tbody>
</table>
