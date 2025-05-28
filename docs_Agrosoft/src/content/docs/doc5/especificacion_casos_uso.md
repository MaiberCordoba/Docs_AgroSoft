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