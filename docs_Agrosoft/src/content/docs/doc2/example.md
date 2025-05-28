---
title: Especificación de Requerimientos de Software AgroSis
description: Documento de especificación de requerimientos para el sistema AgroSis.
version: 1.1
---

# Especificación de Requerimientos de Software AgroSis

## Historial de Revisión

| Versión | Elaboración         | Revisión           |
|---------|---------------------|--------------------|
|         | Fecha      | Responsable        | Fecha      | Responsable |
| 1       | 2025/04/01 | Nicolas Sabi       |            |             |


## Cambios respecto a la versión anterior

| Versión | Modificación respecto a versión anterior |
|---------|------------------------------------------|
|         |                                          |

## Tabla de Contenido

1. [Introducción](#1-introducción)

   1.1 [Propósito](#11-propósito)  
   1.2 [Alcance](#12-alcance)  
   1.3 [Definiciones, Acrónimos y Abreviaturas](#13-definiciones-acrónimos-y-abreviaturas)  
   1.4 [Responsables e involucrados](#14-responsables-e-involucrados)  
   1.5 [Referencias](#15-referencias-bibliografía-o-web-grafía)  
2. [Descripción general](#2-descripción-general)

   2.1 [Perspectiva del producto](#21-perspectiva-del-producto)  
   2.2 [Características del producto](#22-características-del-producto)  
   2.3 [Características del usuario](#23-características-del-usuario)  
3. [Especificación de requisitos](#3-especificación-de-requisitos)

   3.1 [Requisitos funcionales](#31-requisitos-funcionales)  
   3.2 [Requisitos técnicos](#32-requisitos-técnicos)  
   3.3 [Requisitos no funcionales](#33-requisitos-no-funcionales)  
4. [Aspectos legales](#4-aspectos-legales-normas-o-leyes)  
5. [Restricciones del software](#5-restricciones-del-software)  
6. [Anexos](#6-anexos)  

## 1. Introducción

En el desarrollo de sistemas de software, es fundamental contar con una especificación clara y detallada de los requisitos. Para esto se asegura que el sistema cumpla con su propósito, sea eficiente y se ajuste a las necesidades reales de los usuarios. La Especificación de Requerimientos de Software (ERS) cumple un papel central en este proceso, ya que define de forma estructurada las funciones y limitaciones del sistema.

Este documento tiene como objetivo establecer los requisitos necesarios para el desarrollo del sistema, abarcando tanto aspectos funcionales, como las acciones que debe ejecutar el software, como no funcionales, relacionados con la seguridad, el rendimiento y la usabilidad. La especificación sirve de base para la planificación, el diseño y la implementación, reduciendo ambigüedades y mejorando la comunicación entre los diferentes participantes del proyecto.

### 1.1 Propósito

Este documento tiene como objetivo describir de manera clara los requerimientos funcionales y no funcionales necesarios para el desarrollo del sistema de software. Su propósito es asegurar que la solución propuesta responda adecuadamente a las necesidades específicas de los usuarios y cumpla con la demanda del usuario. La especificación servirá como una guía clave para el equipo de desarrollo, detallando las funcionalidades, características y restricciones que debe cumplir el sistema.

### 1.2 Alcance

El sistema de software descrito en este documento tiene como propósito ofrecer una solución integral que responda a los requerimientos funcionales y no funcionales definidos. Su desarrollo contempla la implementación de funcionalidades clave que permitan una gestión eficiente, así como el monitoreo y control de los procesos relacionados con el uso del sistema, priorizando la seguridad, la eficiencia y la facilidad de uso.

La arquitectura del sistema estará compuesta por módulos que cubrirán áreas fundamentales como la gestión de usuarios, el control de accesos, la administración de datos y la generación de reportes analíticos. Asimismo, se incorporarán mecanismos de seguridad que garanticen la protección y la integridad de la información manejada.

El objetivo es mejorar la operatividad del entorno donde se implemente el software, proporcionando una interfaz amigable y accesible que facilite la interacción del usuario. Gracias a su diseño modular, el sistema podrá adaptarse con facilidad a futuras actualizaciones o ampliaciones, sin afectar su rendimiento ni comprometer su estabilidad.

### 1.3 Definiciones, Acrónimos y Abreviaturas

[Incluir aquí definiciones de términos técnicos si es necesario]

### 1.4 Responsables e involucrados

| Nombre                     | Tipo               | Rol                |
|----------------------------|--------------------|--------------------|
| Maiber Jhadir Cordoba      | Aprendiz           | Líder y desarrollador |
| Nicolas Sabi Rojas         | Aprendiz           | Desarrollador      |
| Carlos Manuel Zuñiga       | Aprendiz           | Desarrollador      |
| Andres Vargas              | Aprendiz           | Desarrollador      |
| Ramiro Fajardo             | Aprendiz           | Desarrollador      |
| Karen Semanate             | Aprendiz           | Desarrollador      |

### 1.5 Referencias (bibliografía o web grafía)

[Incluir aquí referencias si es necesario]

## 2. Descripción general

### 2.1 Perspectiva del producto

El sistema de software a desarrollar está diseñado para proporcionar una solución integral que permita la gestión eficiente de los procesos definidos en el proyecto. Su objetivo principal es optimizar la administración de la información, facilitar la toma de decisiones estratégicas y mejorar la experiencia del usuario mediante una plataforma intuitiva y de alto rendimiento.

Este sistema se estructura en distintos módulos que abarcan funcionalidades esenciales, tales como la gestión de usuarios, almacenamiento y procesamiento de datos, generación de reportes y cumplimiento de requisitos de seguridad. La herramienta será capaz de integrarse con tecnologías existentes y podrá escalar en función de las necesidades del entorno en el que se implemente.

Desde una perspectiva general, el software actuará como un facilitador de procesos, asegurando que los datos sean accesibles, seguros y organizados. Su desarrollo sigue principios de usabilidad y eficiencia, garantizando que los usuarios puedan interactuar de manera intuitiva con la plataforma para realizar sus tareas de forma efectiva.

Este documento complementa la información previa proporcionando una visión detallada del sistema y su contexto de uso, sentando las bases para su correcta planificación y ejecución.

#### 2.1.1 Interfaces del usuario

- **Ventana de Login**: Permite a los usuarios autenticarse en el sistema mediante un rol definido (administrador, agricultor, etc.).
- **Dashboard Principal**: Muestra un resumen de la información clave del sistema, como estadísticas de cultivos, estado del riego y alertas importantes.
- **Gestión de Cultivos**: Permite registrar y monitorear los cultivos, incluyendo datos como fecha de siembra, tipo de cultivo y estado de crecimiento.
- **Gestión de Riego**: Interfaz para programar y controlar el riego de los cultivos, optimizando el uso del agua.
- **Aplicación de Fertilizantes e Insumos**: Sección para registrar y gestionar la aplicación de fertilizantes y otros insumos en los cultivos.
- **Gestión de Inventario**: Permite llevar un control de insumos agrícolas, herramientas y otros recursos disponibles en la finca.
- **Gestión de Usuarios y Roles**: Permite administrar los usuarios del sistema, asignar roles y definir permisos.
- **Reportes y Análisis**: Genera informes sobre producción, consumo de recursos y otros datos clave para la toma de decisiones.
- **Módulo de Alertas y Notificaciones**: Envía notificaciones sobre eventos importantes, como riego pendiente, enfermedades detectadas en los cultivos o niveles bajos de insumos.
- **Configuración del Sistema**: Permite modificar parámetros del sistema, como preferencias de usuario, unidades de medida y personalización de reportes.

#### 2.1.2 Mapa de Navegación  
![Mapa de navegación de Agrosoft]()  

### 2.2 Características del producto

- **Desarrollo Web**: AGROSIS será una aplicación web accesible desde cualquier navegador sin necesidad de instalación local.
- **Lenguajes de Programación**: El sistema será desarrollado utilizando PHP para la lógica de backend y JavaScript para la interacción en el frontend.
- **Gestión de Usuarios y Roles**: Permitirá la creación, edición y eliminación de usuarios con diferentes niveles de acceso según su rol (administrador, agricultor, técnico, etc.).
- **Monitoreo y Gestión Agrícola**: Incluirá módulos para la administración de cultivos, programación de riego y aplicación de fertilizantes e insumos.
- **Generación de Reportes**: Proveerá informes detallados sobre la producción, el uso de insumos y otros datos clave para la toma de decisiones.
- **Alertas y Notificaciones**: Enviará alertas sobre tareas pendientes, niveles críticos de inventario o condiciones adversas para los cultivos.
- **Interfaz Amigable y Responsiva**: Diseñado con una interfaz intuitiva y adaptada a dispositivos móviles y de escritorio.
- **Base de Datos Centralizada**: Utilizará una base de datos estructurada para almacenar y gestionar toda la información de manera segura y eficiente.
- **Seguridad y Autenticación**: Implementará autenticación de usuarios, cifrado de datos sensibles y restricciones de acceso basadas en roles.
- **Escalabilidad y Mantenimiento**: El sistema se desarrollará con una arquitectura modular que permitirá futuras mejoras y expansión de funcionalidades.

#### 2.2.1 Funciones del producto

1. **Gestión de Inventario**: Este módulo permitirá el control de stock, ingreso y salida de productos, gestión de proveedores y reportes de inventario.
2. **Gestión de Sanidad**: Este módulo gestionará controles de calidad, seguimiento de normativas sanitarias y registro de inspecciones.
3. **Gestión de Usuarios**: Este módulo permitirá realizar la gestión de usuarios mediante los procesos de registro, consulta, actualización y eliminación.
4. **Gestión Financiera**: Este módulo administrará transacciones, generación de reportes financieros y control de presupuesto.
5. **IoT**: Este módulo integrará dispositivos inteligentes para la monitorización de procesos en tiempo real y generación de alertas automatizadas.

### 2.3 Características del usuario

1. **Administrador**: Este usuario tendrá acceso total al sistema y será responsable de la gestión de usuarios, configuración de parámetros del sistema, monitoreo de actividades y generación de reportes generales.
2. **Instructor**: Este usuario podrá gestionar el contenido de capacitación, supervisar el progreso de los aprendices y pasantes, y evaluar su desempeño dentro del sistema.
3. **Pasante**: Este usuario tendrá acceso a módulos específicos según su área de práctica, podrá registrar información, consultar datos relevantes y generar reportes según los permisos asignados.
4. **Aprendiz**: Este usuario tendrá acceso limitado al sistema, permitiendo la consulta de información relevante, el registro de actividades de aprendizaje y la participación en evaluaciones o capacitaciones.

## 3. Especificación de requisitos

### 3.1 Requisitos funcionales

| ID    | Nombre del requerimiento                     | Tipo        | Prioridad |
|-------|----------------------------------------------|-------------|-----------|
| RF01  | Registro de usuario                          | Esencial    | Alta      |
| RF02  | Autenticación y gestión de roles             | Esencial    | Alta      |
| RF03  | Gestión de inventario                        | Esencial    | Alta      |
| RF04  | Control de stock y generación de alertas     | Ideal       | Media     |
| RF05  | Registro de inspecciones sanitarias          | Esencial    | Alta      |

#### 3.1.1 Clasificación de requisitos funcionales

### 3.1 Requisitos funcionales

#### Gestión de Usuarios

**RF01 - Inicio de sesión**  
- **Descripción**: El sistema ofrecerá un formulario con campos Correo y Contraseña. Validará los datos para autenticar al usuario.
- **Prioridad**: Alta

**RF02 - Registro de usuarios**  
- **Descripción**: Formulario con campos: Tipo de Documento, Número de Documento, Nombre Completo, Teléfono, Correo, Contraseña y Rol (define permisos).
- **Prioridad**: Alta

**RF03 - Listar usuarios**  
- **Descripción**: Mostrará lista de usuarios con indicador de estado (activo/inactivo) y opción de edición.
- **Prioridad**: Alta

**RF04 - Editar usuarios**  
- **Descripción**: Solo el administrador podrá editar/eliminar usuarios para garantizar seguridad.
- **Prioridad**: Alta

#### Gestión de Insumos y Herramientas

**RF05 - Registrar insumos agrícolas**  
- **Descripción**: Permite registrar insumos para cultivos con lista interactiva para visualizar/editar/eliminar.
- **Prioridad**: Alta

**RF06 - Listar insumos registrados**  
- **Descripción**: Muestra listado detallado de insumos para consulta.
- **Prioridad**: Alta

**RF07 - Actualizar información de insumos**  
- **Descripción**: Permite modificar datos de insumos existentes.
- **Prioridad**: Alta

**RF08 - Registrar herramientas agrícolas**  
- **Descripción**: Apartado para registrar herramientas con opciones de visualización/edición.
- **Prioridad**: Alta

**RF09 - Listar herramientas registradas**  
- **Descripción**: Muestra detalles completos de herramientas.
- **Prioridad**: Alta

**RF10 - Actualizar información de herramientas**  
- **Descripción**: Permite modificar datos de herramientas existentes.
- **Prioridad**: Alta

#### Monitoreo IoT

**RF11 - Panel de sensores en tiempo real**  
- **Descripción**: Muestra datos de: velocidad viento (km/h), temperatura (°C), luz solar (%), humedad suelo/ambiente, lluvia (intensidad) con iconos identificativos.
- **Prioridad**: Alta

**RF12 - Humedad de eras**  
- **Descripción**: Visualización clara de datos de humedad en áreas de cultivo.
- **Prioridad**: Alta

**RF13 - Humedad ambiente**  
- **Descripción**: Monitoreo de niveles de humedad ambiental.
- **Prioridad**: Alta

**RF14 - Luminosidad**  
- **Descripción**: Datos de sensores distribuidos para gestión de iluminación.
- **Prioridad**: Alta

**RF15 - Lluvia**  
- **Descripción**: Datos de pluviómetro (cantidad, intensidad, frecuencia).
- **Prioridad**: Alta

**RF16 - Temperatura**  
- **Descripción**: Monitoreo térmico en áreas de cultivo.
- **Prioridad**: Alta

**RF17 - Velocidad y dirección del viento**  
- **Descripción**: Datos capturados por sensores y enviados a la nube.
- **Prioridad**: Alta

**RF18 - pH del suelo**  
- **Descripción**: Lecturas de acidez/alcalinidad del suelo.
- **Prioridad**: Alta

**RF19 - Evapotranspiración**  
- **Descripción**: Estimación de evaporación + transpiración para riego eficiente.
- **Prioridad**: Alta

**RF20 - Almacenamiento histórico**  
- **Descripción**: Base de datos para consulta y análisis de tendencias.
- **Prioridad**: Alta

#### Gestión Agrícola

**RF21 - Registrar tipo de cultivo**  
- **Descripción**: Formulario para nombre y tipo de cultivo.
- **Prioridad**: Alta

**RF22 - Registrar semilleros**  
- **Descripción**: Formulario con: unidades, fecha siembra, fecha estimada producción.
- **Prioridad**: Alta

**RF23 - Gestión de lotes**  
- **Descripción**: Registrar/editar información de lotes.
- **Prioridad**: Alta

**RF24 - Gestión de eras**  
- **Descripción**: Implementación de eras en lotes para optimización.
- **Prioridad**: Alta

**RF25 - Registrar cultivos**  
- **Descripción**: Formulario para datos clave de nuevos cultivos.
- **Prioridad**: Alta

**RF26 - Actividades en cultivos**  
- **Descripción**: Registrar actividades (nombre, descripción, fecha creación).
- **Prioridad**: Alta

**RF27 - Asignar actividades**  
- **Descripción**: Instructores asignan actividades con: lote, cultivo, descripción, fecha, personal, insumos/herramientas y estado.
- **Prioridad**: Alta

**RF28 - Finalizar actividades**  
- **Descripción**: Cambiar estado, registrar tiempo/minutos, insumos usados.
- **Prioridad**: Alta

**RF29 - Registrar producción**  
- **Descripción**: Datos de cosecha (cultivo, cantidad, unidad, fecha, foto).
- **Prioridad**: Alta

**RF30 - Registrar plagas/enfermedades**  
- **Descripción**: Fecha, organismo (nombre científico/común), ubicación, daño, métodos erradicación.
- **Prioridad**: Alta

**RF31 - Control fitosanitario**  
- **Descripción**: Seguimiento de acciones contra plagas.
- **Prioridad**: Alta

**RF32 - Fases lunares (admin)**  
- **Descripción**: Registrar/editar imágenes y recomendaciones por fase lunar.
- **Prioridad**: Alta

**RF33 - Visualizar fases lunares**  
- **Descripción**: Calendario con fases (nueva, creciente, llena, menguante) y semáforo de actividades.
- **Prioridad**: Alta

**RF34 - Calendario agrícola**  
- **Descripción**: Registrar eventos (siembra, fertilización, cosechas) con recordatorios.
- **Prioridad**: Alta

**RF35 - Mapa interactivo**  
- **Descripción**: Visualizar cultivos con historial (riego, abono).
- **Prioridad**: Alta

**RF36 - Asignación de roles**  
- **Descripción**: Administrador asigna permisos por rol (instructor, pasante, etc.).
- **Prioridad**: Alta

**RF37 - Gestión de precios**  
- **Descripción**: Registrar/actualizar precios con impuestos y vigencia.
- **Prioridad**: Alta

**RF38 - Control de Arduinos**  
- **Descripción**: Almacenar/alternar configuraciones de microcontroladores.
- **Prioridad**: Alta

**RF39 - Registro de ventas**  
- **Descripción**: Capturar fecha, producto, cantidad, ingresos, cliente.
- **Prioridad**: Alta

**RF40 - Rentabilidad de cultivos**  
- **Descripción**: Cálculo comparativo (ingresos/egresos) con exportación a PDF/Excel.
- **Prioridad**: Alta

#### Reportes

**RF41 - Reporte de usuarios**  
- **Descripción**: Análisis de actividad de aprendices.
- **Prioridad**: Alta

**RF42 - Reporte de insumos**  
- **Descripción**: Listado con nombre, cantidad, caducidad.
- **Prioridad**: Alta

**RF43 - Reporte de herramientas**  
- **Descripción**: Listado con nombre, estado, ubicación.
- **Prioridad**: Alta

**RF44 - Reporte de sensores**  
- **Descripción**: Datos IoT con gráficas (humedad, temperatura, etc.).
- **Prioridad**: Alta

**RF45 - Reporte de especies**  
- **Descripción**: Listado de especies/tipos registrados.
- **Prioridad**: Alta

**RF46 - Reporte de semilleros**  
- **Descripción**: PDF con datos de semilleros activos (fecha siembra, estado).
- **Prioridad**: Alta

**RF47 - Reporte de lotes**  
- **Descripción**: Dimensiones, tipo suelo, fechas siembra.
- **Prioridad**: Alta

**RF48 - Reporte de eras**  
- **Descripción**: Estado, tipo suelo, ubicación en lotes.
- **Prioridad**: Alta

**RF49 - Reporte de cultivos activos**  
- **Descripción**: PDF con ubicación, estado, fechas clave.
- **Prioridad**: Alta

**RF50 - Reporte de actividades**  
- **Descripción**: Historial de mantenimiento por cultivo.
- **Prioridad**: Alta

**RF51 - Reporte mensual de plagas**  
- **Descripción**: Enfermedades detectadas por mes con acciones de control.
- **Prioridad**: Alta

**RF52 - Reporte de controles fitosanitarios**  
- **Descripción**: PDF con medidas aplicadas contra plagas.
- **Prioridad**: Alta

**RF53 - Reporte de ingresos**  
- **Descripción**: Desglose de ventas por producto (unidades, márgenes).
- **Prioridad**: Alta


### 3.2 Requisitos técnicos

| ID    | Nombre del requerimiento                     | Tipo        | Prioridad |
|-------|----------------------------------------------|-------------|-----------|
| RT01  | Acceso a Internet estable                   | Esencial    | Alta      |
| RT02  | Base de datos relacional                    | Esencial    | Alta      |
| RT03  | Compatibilidad con navegadores              | Esencial    | Alta      |
| RT04  | Infraestructura escalable en la nube       | Ideal       | Media     |
| RT05  | Integración con dispositivos IoT            | Opcional    | Baja      |

#### 3.2.1 Clasificación de requisitos Técnicos

**RT01 - Acceso a Internet**  
Descripción: El sistema requiere una conexión estable a Internet para garantizar el acceso en línea a la plataforma, sincronización de datos y comunicación con servidores.  
Prioridad: Alta

**RT02 - Base de Datos Relacional**  
Descripción: Se requiere una base de datos relacional (MySQL, PostgreSQL) para el almacenamiento seguro de la información, garantizando la integridad de los datos y permitiendo consultas eficientes.  
Prioridad: Alta

### 3.3 Requisitos no funcionales

| Código | Nombre                          | Categoría       | Descripción                                      |
|--------|---------------------------------|-----------------|--------------------------------------------------|
| RNF01  | Aprendizaje del sistema         | Usabilidad      | Tiempo de aprendizaje menor a 4 horas           |
| RNF02  | Manuales de usuario             | Usabilidad      | Manuales estructurados dentro de la aplicación  |
| RNF03  | Interfaz intuitiva              | Usabilidad      | Diseño amigable y fácil navegación              |
| RNF04  | Disponibilidad                  | Confiabilidad   | 99.5% de disponibilidad                         |
| RNF05  | Recuperación ante fallos        | Confiabilidad   | Recuperación en menos de 10 minutos             |
| RNF06  | Control de acceso               | Seguridad       | Autenticación en dos pasos para administradores |
| RNF07  | Privacidad de datos             | Seguridad       | Cifrado AES-256 para información sensible       |
| RNF08  | Tiempo de respuesta             | Eficiencia      | Máximo 2 segundos para operaciones críticas     |
| RNF09  | Capacidad de usuarios           | Eficiencia      | Soporte para 500 usuarios concurrentes          |
| RNF10  | Compatibilidad multiplataforma  | Portabilidad    | Funcionamiento en Windows, MacOS y Linux        |
| RNF11  | Adaptabilidad a móviles         | Portabilidad    | Versión optimizada para dispositivos móviles    |
| RNF12  | Actualizaciones automáticas     | Mantenibilidad  | Mecanismo para actualizaciones automáticas      |
| RNF13  | Registro de errores             | Mantenibilidad  | Log detallado de fallas del sistema             |
| RNF14  | Soporte técnico                 | Soportabilidad  | Respuesta en menos de 24 horas                  |
| RNF15  | Operatividad en la nube         | Soportabilidad  | Ejecución en entorno cloud                      |

## 4. Aspectos legales (normas o leyes)

El sistema debe cumplir con las regulaciones y normativas vigentes en protección de datos y tecnología, tales como:

- **Ley de Protección de Datos Personales**: Garantiza la seguridad y privacidad de la información de los usuarios.
- **Normas ISO 27001**: Implementa medidas para la gestión de seguridad de la información.
- **Reglamentos de Comercio Electrónico**: En caso de transacciones digitales, el sistema debe cumplir con las normativas de facturación y protección al consumidor.

Se recomienda evaluar constantemente el marco legal para asegurar el cumplimiento de nuevas regulaciones.

## 5. Restricciones del software

[Describir aquí cualquier restricción técnica, de tiempo o presupuesto que afecte el desarrollo del sistema]

## 6. Anexos

[Incluir aquí cualquier información adicional, diagramas, o documentación complementaria]

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
