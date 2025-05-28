---
title: Agrosis
description: A guide in my new Starlight docs site.
---

### Version 1.1

## Tabla de contenido
---
1. Introducción	
    - 1.1 Propósito	
    - 1.2 Alcance	
    - 1.3 Definiciones, Acrónimos y Abreviaturas	
    - 1.4 Responsables e involucrados	
    - 1.5 Referencias (bibliografía o webgrafía)	
2. Descripción General	
3. Situación Actual	
4. Situación Esperada	
5. Justificación	
6. Observaciones	
---

### Introdución
Este documento presenta un proyecto que busca desarrollar una aplicación web para hacerle seguimiento y llevar la trazabilidad de un cultivo, usando tecnología IoT (Internet de las Cosas). La idea es contar con una herramienta práctica que permita ver en tiempo real cómo va el cultivo, midiendo cosas como la humedad del suelo, la temperatura, entre otras variables importantes, todo con el fin de tomar mejores decisiones y manejar el cultivo de forma más eficiente.
Aquí se explica el propósito principal del proyecto, sus objetivos y hasta dónde se quiere llegar con él. La aplicación permitirá a los usuarios ver los datos que envían los sensores instalados en el campo, registrar las labores que se hacen en el cultivo y tener un historial completo de todo el proceso, desde que se siembra hasta que se cosecha. Todo esto apunta a mejorar la forma en que se trabaja en el campo, haciendo uso de la tecnología.
El alcance del proyecto incluye tanto la creación de la plataforma web como la conexión con los sensores que capturan la información. También se tiene en cuenta el desarrollo de un sistema de alertas y reportes, que ayude a tener todo bajo control y garantice una trazabilidad clara y confiable.

---
#### Proposito

El propósito de este documento es presentar de manera clara el proyecto de desarrollo de una aplicación web para el seguimiento y la trazabilidad de cultivos, integrando tecnología IoT. Se busca explicar por qué es importante esta solución, cómo se va a implementar y qué beneficios puede traer para los aprendices e instructores encargadas de manejar los cultivos, también tendrá un apartado para los visitantes. Se pretende mostrar el alcance del proyecto, hasta dónde se quiere llegar con el desarrollo de la plataforma, qué funciones se incluyen, qué tipo de sensores se usarán y cómo todo estará conectado para facilitar la toma de decisiones en el campo.

---

#### Alcance
El presente proyecto abarca el diseño, desarrollo e implementación de una aplicación web orientada al seguimiento y trazabilidad de cultivos agrícolas del CGDSS (centro de gestión y desarrollo sotenible surcolombiano) haciedno uso de la placa ESP32 y algunos sensores para la recolección de datos. La plataforma permitirá visualizar en tiempo real los datos recolectados por sensores instalados en el terreno, como humedad del suelo, temperatura ambiente, luminosidad, entre otros. Estos datos serán almacenados y gestionados desde la aplicación, permitiendo llevar un registro histórico del comportamiento del cultivo.
Además de la visualización de datos, la aplicación contará con funciones para registrar actividades agrícolas (riego, fertilización, siembra, cosecha, etc.), generar alertas en caso de valores anómalos detectados por los sensores, y producir reportes útiles para la toma de decisiones. También permitirá llevar un registro de las ganancias y perdidas de dichos cultivos, esto para saber el beneficio costo de cada uno.
El alcance también incluye:
-	La integración con dispositivos IoT (sensores) mediante comunicación inalámbrica.
-	El desarrollo de una interfaz amigable para el usuario, accesible desde dispositivos móviles y computadores.
-	El manejo de distintos cultivos y etapas productivas.
-	La trazabilidad completa desde la siembra hasta la cosecha.
Este proyecto se implementará inicialmente en una zona de prueba correspondiente al área productiva del programa de Producción Agropecuaria Ecológica (PAE) del CGDSS – sede Yamboró. La aplicación está pensada para apoyar tanto a instructores como a aprendices y demás usuarios vinculados al proceso formativo, facilitando el registro digital de datos, el seguimiento de actividades agrícolas y la organización de la información técnica del cultivo.
Además de mejorar la trazabilidad y el orden en los procesos productivos, la solución busca reducir el uso de formatos físicos y documentos en papel, contribuyendo así a la sostenibilidad ambiental y promoviendo prácticas más responsables dentro del entorno de formación.

---
#### Definiciones, Acrónimos y Abreviaturas


- **CGDSS**: Centro de Gestión y Desarrollo Sostenible Surcolombiano.
- **SENA**: Servicio Nacional de Aprendizaje.
- **PAE**: Producción Agropecuaria Ecológica.
- **IoT (Internet of Things)**: Internet de las Cosas; red de dispositivos físicos conectados que recopilan e intercambian datos mediante Internet.
- **ESP32**: Microcontrolador de bajo costo con conectividad WiFi y Bluetooth, utilizado en aplicaciones IoT.
- **ID de ficha**: Identificación única de grupo o cohorte en programas del SENA.
- **Mockup**: Boceto o diseño visual preliminar de una interfaz o aplicación.
- **Webgrafía**: Conjunto de fuentes de información consultadas en la web.
- **App/Web**: Aplicación web; software accesible a través de navegadores, sin instalación local.
- **Sensor de humedad del suelo**: Dispositivo que mide la cantidad de agua presente en el suelo.
- **Sensor de humedad ambiental**: Dispositivo que mide la humedad relativa del aire.
- **Sensor de temperatura**: Dispositivo que detecta la temperatura del entorno.
- **Sensor de luminosidad**: Dispositivo que mide la intensidad de la luz.
- **Sensor de calidad del aire**: Dispositivo que detecta contaminantes y otras variables del aire.
- **Plataforma en la nube**: Servicio que permite almacenar, procesar y acceder a datos a través de Internet.
- **Riego automatizado**: Sistema que permite activar o desactivar el riego de cultivos automáticamente según datos de sensores.
- **Notificación**: Alerta emitida por el sistema sobre eventos relevantes o valores críticos detectados.
- **Beneficio/costo**: Relación económica entre los ingresos generados y los costos incurridos en un proceso productivo.

---
#### Responsables e involucrados


| Nombre           | Tipo (Responsable/Involucrado) | Rol               |
|------------------|-------------------------------|-------------------|
| Maiber Cordoba   | Aprendiz | Líder y desarrollador |
| Karen Semanate   | Aprendiz | Desarrollador      |
| Andres Vargas    | Aprendiz | Desarrollador      |
| Manuel Zuñiga    | Aprendiz | Desarrollador      |
| Ramiro Fajardo   | Aprendiz | Desarrollador      |

---

#### Referencias (bibliografía o webgrafía)
-	Zhao, H., & Wang, H. (2019). Research on intelligent irrigation systems based on Internet of Things technology. Journal of Intelligent & Fuzzy Systems, 37(6), 7051-7060. https://doi.org/10.3233/JIFS-190524

---

### Descripcion General


El tecnólogo de Análisis y Desarrollo de Software, con ID de ficha 2846103, ha sido asignado para desarrollar una solución tecnológica que permita mejorar la gestión del programa de Producción Agropecuaria Ecológica (PAE) del CGDSS – sede Yamboró. Durante el diagnóstico inicial, realizado mediante entrevistas y levantamiento de información, se identificaron diversas problemáticas que afectan el control, seguimiento y trazabilidad de los cultivos, entre las cuales se encuentran:
- Falta de un sistema organizado para el registro y control de las actividades agrícolas, semillas, ingresos y egresos asociados a cada cultivo.##
- Ausencia de monitoreo ambiental automatizado que permita conocer en tiempo real variables como humedad del suelo y ambiente, temperatura, precipitación, velocidad del viento y luminosidad.
- Uso predominante de documentos en papel para la recolección y almacenamiento de datos, lo que genera dificultades para la organización, pérdida de información y un impacto ambiental negativo.
- Limitaciones para calcular con precisión costos, beneficios y rendimiento de cada unidad productiva debido a la falta de datos integrados y accesibles.

Para dar respuesta a estas necesidades, se propone el desarrollo de una aplicación web integral que facilite el seguimiento y trazabilidad de los cultivos. Esta plataforma incluirá módulos para la gestión digital de actividades agrícolas, almacenamiento organizado de datos, y un módulo de IoT para la captura automática de variables ambientales en tiempo real a través de sensores.
Con esta solución se espera mejorar la organización y eficiencia en el manejo de los cultivos, facilitar la toma de decisiones basada en datos confiables, y contribuir a la sostenibilidad ambiental mediante la reducción del uso de papel. Así, instructores, aprendices y demás usuarios vinculados al programa podrán optimizar sus procesos productivos y formativos, aumentando la productividad y la calidad en la producción agroecológica.

---

### Situacion Actual

Actualmente, no existe un sistema implementado para llevar el control y la trazabilidad de los cultivos en el área de Producción Agropecuaria Ecológica (PAE). El proyecto se encuentra en fase de análisis y documentación, durante la cual se ha realizado el levantamiento de requerimientos y la definición de cuatro módulos clave que permitirán garantizar la funcionalidad integral del sistema. En el estado actual, no se cuenta con una organización estructurada que permita hacer seguimiento a las semillas, los cultivos, ni a los ingresos y egresos relacionados, lo que dificulta calcular con precisión el beneficio/costo de cada cultivo y limita la toma de decisiones informadas.
El módulo IoT, enfocado en la recolección automática de datos ambientales mediante sensores, será una de las innovaciones más importantes dentro del sistema. Aunque hasta el momento solo se han identificado sus requerimientos y funcionalidades, se proyecta que este módulo registre variables como luminosidad, precipitación, velocidad del viento, humedad del suelo, humedad ambiental y temperatura. La implementación del sistema en general no solo permitirá un mejor orden y control de los procesos agrícolas, sino que también reducirá el uso de papel, minimizando la pérdida de información y aportando a un enfoque más sostenible y eficiente en la gestión productiva.

---
### Situación esperada

Con la implementación de la aplicación web para el seguimiento y trazabilidad de cultivos en el programa de Producción Agropecuaria Ecológica (PAE) del SENA Yamboró, se espera establecer un sistema digital centralizado que permita registrar, consultar y analizar en tiempo real toda la información relacionada con los procesos agrícolas. Esto incluye desde la planificación de siembras, el seguimiento del estado de los cultivos y sus respectivas actividades, hasta el control de ingresos y egresos asociados.
La solución facilitará que instructores, aprendices y demás usuarios lleven un registro organizado y sistemático de cada cultivo, permitiendo calcular con mayor precisión los costos, beneficios y rendimientos por unidad productiva. Gracias al módulo IoT, también se espera contar con monitoreo ambiental continuo mediante sensores, lo cual aportará datos precisos que ayudarán en la toma de decisiones agronómicas, como el riego o la fertilización, basadas en condiciones reales del entorno.
Además, el sistema reemplazará el uso de registros en papel, disminuyendo la pérdida de datos, mejorando el acceso a la información histórica y contribuyendo al compromiso ambiental del programa mediante una gestión más sostenible y tecnológica del proceso productivo.

---

### Justificación


La agricultura es una actividad fundamental para el desarrollo económico y social, especialmente en regiones donde la producción agropecuaria constituye una fuente importante de sustento. Sin embargo, la falta de sistemas tecnológicos adecuados para el seguimiento y trazabilidad de cultivos limita la capacidad de los productores y técnicos para tomar decisiones informadas, optimizar recursos y mejorar la productividad.

En el contexto del programa de Producción Agropecuaria Ecológica (PAE) del SENA Yamboró, actualmente no existe una plataforma digital que permita organizar y gestionar de manera eficiente la información relacionada con los cultivos, sus semillas, actividades agrícolas, y el control de ingresos y egresos. Esta ausencia dificulta el cálculo preciso de costos y beneficios, además de aumentar la probabilidad de pérdida de datos y el uso excesivo de registros en papel, lo cual impacta negativamente en la sostenibilidad ambiental y en la eficiencia administrativa.

Por lo tanto, la implementación de una aplicación web que integre tecnologías de Internet de las Cosas (IoT) para el monitoreo en tiempo real y el registro sistemático de la trazabilidad de los cultivos representa una solución innovadora y necesaria. Este sistema facilitará el manejo organizado de la información, apoyará a instructores, aprendices y demás usuarios en el proceso formativo y productivo, y contribuirá a mejorar la calidad y sostenibilidad del programa.

Además, al reducir el uso de papel y centralizar los datos, se promueve un impacto ambiental positivo, alineado con los principios de la producción agropecuaria ecológica. En definitiva, este proyecto responde a la necesidad de modernizar y optimizar la gestión agrícola, haciendo uso de la tecnología para fortalecer el desarrollo rural sostenible.

---

### Observaciones

Algunas Observaciones que creemos son importantes y deben ser tomadas en cuenta para el desarrollo del proyecto o sistema son:
-	**Compatibilidad de sensores**: Verificar que los sensores IoT funcionen correctamente con la plataforma y protocolos de comunicación.
-	**Calibración y mantenimiento**: Asegurar el buen funcionamiento de los sensores mediante mantenimiento y ajustes periódicos.
-	**Validación de interfaces**: Revisar los diseños (mockups) con usuarios finales para garantizar que sean intuitivos y útiles.
-	**Comunicación del equipo**: Mantener una comunicación constante entre los integrantes del equipo para alinear objetivos y resolver problemas a tiempo.
-	**Gestión de riesgos**: Anticipar problemas como fallas de red o desgaste de sensores, y planear soluciones preventivas.
-	**Capacitación a usuarios**: Formar a instructores, aprendices y otros usuarios sobre el uso de la plataforma.
-	**Conectividad y energía**: Confirmar que el área de uso tenga acceso a internet y energía constante (o soluciones alternas).
-	**Seguridad de datos**: Proteger la información con accesos controlados, contraseñas seguras y respaldos periódicos.
-	**Escalabilidad**: Diseñar el sistema pensando en futuras expansiones a más cultivos o sedes.
-	**Usabilidad en campo**: Asegurar que la plataforma sea fácil de usar desde celulares o tablets en ambientes rurales.
-	**Documentación técnica**: Registrar adecuadamente el desarrollo, uso y mantenimiento del sistema para futuras mejoras.
-	**Retroalimentación continua**: Recoger opiniones de los usuarios durante el proceso para ajustar el sistema según sus necesidades.

---

