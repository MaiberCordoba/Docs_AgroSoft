---
title: "Documento Plan de Pruebas - Agrosoft"
layout: "../layouts/DefaultLayout.astro"
date: "2022-07-25"
version: "1.0.0"
author: "Centro de Gestión y Desarrollo Sostenible Yamboró - SENA"
---

<section>
  <h1>Introducción</h1>
  <p>
    Agrosoft es un software de trazabilidad agropecuaria desarrollado por aprendices del SENA. Su objetivo es optimizar la gestión de datos relacionados con procesos agrícolas y pecuarios. Este documento describe el plan de pruebas para validar el correcto funcionamiento del sistema.
  </p>

  <h2>Alcance</h2>
  <p>
    Aplica a los módulos: Home, Usuarios, IoT, Cultivos, Actividades, Finanzas, Inventario, Fitosanitario, Calendario y Mapa. Se incluyen pruebas funcionales, de flujo y reportes.
  </p>

  <h2>Definiciones</h2>
  <ul>
    <li><strong>IoT:</strong> Internet de las Cosas</li>
    <li><strong>UI:</strong> Interfaz de Usuario</li>
    <li><strong>CRUD:</strong> Crear, Leer, Actualizar, Eliminar</li>
    <li><strong>SENA:</strong> Servicio Nacional de Aprendizaje</li>
    <li><strong>Yamboró:</strong> Centro de Gestión y Desarrollo Sostenible Yamboró</li>
  </ul>

  <h2>Responsables</h2>
  <ul>
    <li>Maiber Cordoba (Líder y desarrollador)</li>
    <li>Carlos Zuñiga (Desarrollador)</li>
    <li>Nicolas Sabi (Desarrollador)</li>
    <li>Andres Vargas (Desarrollador)</li>
    <li>Karen Semanate (Desarrollador)</li>
    <li>Ramiro Fajardo (Desarrollador)</li>
  </ul>

  <h2>Plan de Pruebas</h2>
  <p>Cada módulo tiene pruebas funcionales diseñadas. Se detallan entradas, resultados esperados y condiciones.</p>

  <ul>
    <li><strong>Módulo Usuarios:</strong> crear, login válido/inválido, editar, eliminar, recuperar contraseña.</li>
    <li><strong>Módulo IoT:</strong> conexión de sensores, datos en tiempo real, alertas, historial.</li>
    <li><strong>Módulo Cultivos:</strong> registrar, editar, consultar, reportes. Submódulos: Tipos de especie, Especies, Semilleros, Plantaciones, Lotes, Eras.</li>
    <li><strong>Módulo Actividades:</strong> registrar, editar, asignar responsable, marcar como realizadas. Incluye tipos, unidades de tiempo y medida.</li>
    <li><strong>Módulo Inventario:</strong> registrar insumos, herramientas, movimientos de bodega, usos.</li>
    <li><strong>Módulo Fitosanitario:</strong> tipos de afecciones, registro de afecciones, controles fitosanitarios.</li>
    <li><strong>Módulo Finanzas:</strong> cosechas, ventas, salarios, pagos, resumen financiero. Exportación a PDF.</li>
    <li><strong>Módulo Calendario:</strong> visualización de actividades y controles por fecha.</li>
    <li><strong>Módulo Mapa:</strong> visualización de lotes y eras, con filtros por cultivo.</li>
  </ul>

  <h2>Casos de Prueba</h2>

<section>
  <h2>6.1 Caso de uso - Nº Prueba CU1. Registro de Usuarios</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU1</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nuevo usuario</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Usuarios</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente un nuevo usuario cuando se ingresan todos los datos requeridos.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener acceso a la plataforma.</li>
    <li>El formulario de registro debe estar disponible.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo de Usuarios.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar nombre, correo, contraseña, rol y demás campos requeridos.</li>
    <li>Hacer clic en “Guardar” o “Registrar”.</li>
    <li>Verificar que el nuevo usuario aparezca en la lista de usuarios.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Identificación</td>
        <td>1083874927</td>
        <td>Positivo</td>
        <td>El sistema debe registrar correctamente al nuevo usuario y mostrar un mensaje de éxito (“Usuario registrado con éxito”).</td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. El usuario aparece en la lista.</td>
      </tr>
      <tr>
        <td>Nombre</td>
        <td>Jua</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Apellido</td>
        <td>Perez</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Teléfono</td>
        <td>3227329257</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Correo electrónico</td>
        <td>juanperez@gmail.com</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Contraseña</td>
        <td>123456</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Estado</td>
        <td>Activo</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Rol</td>
        <td>Visitante</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El usuario queda registrado en la base de datos.<br />
    Se puede iniciar sesión con las credenciales creadas (en otro caso de prueba).
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.2 Caso de uso - Nº Prueba CU2. Inicio de sesión con credenciales inválidas</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU2</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO:</strong></td>
        <td colspan="3">Inicio de sesión con credenciales inválidas</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Usuarios</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba:</strong></td>
        <td colspan="3">
          Verificar que el sistema no permita iniciar sesión cuando se ingresan credenciales inválidas, mostrando un mensaje de error.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Debe existir al menos un usuario registrado previamente.</li>
    <li>El formulario de inicio de sesión debe estar accesible.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al formulario de inicio de sesión.</li>
    <li>Ingresar un correo electrónico no registrado o una contraseña incorrecta.</li>
    <li>Hacer clic en el botón "Iniciar sesión".</li>
    <li>Observar el comportamiento del sistema.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Correo Electrónico</td>
        <td>usuariofake@gmail.com</td>
        <td>Negativo</td>
        <td>
          El sistema debe impedir el inicio de sesión y mostrar un mensaje de error:<br />
          <em>"Credenciales incorrectas. Verifique su correo y/o contraseña."</em>
        </td>
        <td>No</td>
        <td>Se muestra mensaje de error. El usuario no accede al sistema.</td>
      </tr>
      <tr>
        <td>Contraseña</td>
        <td>contraseñaIncorrecta</td>
        <td>Negativo</td>
        <td></td>
        <td>No</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El sistema permanece en la misma pantalla de inicio de sesión.<br />
    No se concede acceso al sistema.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.3 Caso de uso - Nº Prueba CU3. Inicio de sesión con credenciales válidas</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU3</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Inicio de sesión con credenciales válidas</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Usuarios</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita iniciar sesión correctamente cuando se ingresan credenciales válidas de un usuario previamente registrado.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe estar previamente registrado en el sistema.</li>
    <li>Debe estar disponible la pantalla de inicio de sesión.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al formulario de inicio de sesión.</li>
    <li>Ingresar correo y contraseña correctos.</li>
    <li>Hacer clic en “Iniciar sesión”.</li>
    <li>Verificar que se redireccione correctamente al panel principal del sistema.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Correo electrónico</td>
        <td>juanperez@gmail.com</td>
        <td>Positivo</td>
        <td>
          El sistema debe permitir el inicio de sesión, redirigir al usuario al panel principal y mostrar un mensaje de bienvenida.
        </td>
        <td>Sí</td>
        <td>
          Acceso permitido al sistema.<br />
          Redirección a panel principal.<br />
          Se muestra mensaje de bienvenida.
        </td>
      </tr>
      <tr>
        <td>Contraseña</td>
        <td>123456</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El usuario tiene acceso a las funcionalidades autorizadas según su rol.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.4 Caso de uso - Nº Prueba CU4. Editar perfil de usuario</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU4</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Editar información de un usuario</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Usuarios</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita modificar correctamente los datos de un usuario registrado (nombre, apellido, rol, teléfono, estado, etc.).
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe estar previamente registrado.</li>
    <li>El usuario debe tener permisos para editar (según el rol).</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo de Usuarios.</li>
    <li>Ubicar al usuario deseado en la lista.</li>
    <li>Hacer clic en el botón de 3 puntos en la celda "Acciones".</li>
    <li>Modificar algunos datos (por ejemplo: apellido, teléfono, estado).</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que los cambios se reflejen en la lista de usuarios.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>(Campo/s a editar)</td>
        <td>Apellido, Teléfono, Estado</td>
        <td>Positivo</td>
        <td>
          El sistema debe actualizar la información del usuario y mostrar un mensaje de éxito como:<br />
          <em>“Usuario actualizado correctamente.”</em>
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />Datos actualizados aparecen en la lista.</td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El usuario queda actualizado en la base de datos.<br />
    Los datos modificados son visibles al consultar nuevamente el usuario.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.5 Caso de uso - Nº Prueba CU5. Recuperar contraseña</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU5</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Recuperación de contraseña</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Usuarios</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita al usuario recuperar su contraseña mediante el envío de un enlace de restablecimiento al correo electrónico registrado.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe estar registrado con un correo válido.</li>
    <li>La función de recuperación debe estar habilitada en el sistema.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al formulario de inicio de sesión.</li>
    <li>Hacer clic en “¿Olvidaste tu contraseña?”.</li>
    <li>Ingresar el correo electrónico registrado.</li>
    <li>Hacer clic en el botón para solicitar recuperación.</li>
    <li>Verificar que se muestre un mensaje de confirmación y que llegue un correo con el enlace para restablecer la contraseña.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Correo electrónico</td>
        <td>juanperez@gmail.com</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje como:<br />
          <em>"Se ha enviado un enlace de recuperación a su correo electrónico."</em><br />
          Y efectivamente debe llegar el correo.
        </td>
        <td>Sí</td>
        <td>
          Se muestra mensaje de confirmación.<br />
          Se recibe correo con enlace de recuperación.<br />
          El enlace permite restablecer la contraseña.
        </td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El usuario recibe el enlace y puede cambiar su contraseña.<br />
    El sistema guarda la nueva contraseña tras la confirmación.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.6 Caso de uso - Nº Prueba CU6. Registro de nuevo tipo de especie</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU6</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nuevo tipo de especie</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Cultivos – Tipos especie</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente un tipo de especie (como Hortaliza, Frutal, Cereal, etc.), que luego pueda asociarse al registro de especies agrícolas.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para registrar información en el sistema.</li>
    <li>El submódulo Tipos de Especie debe estar habilitado.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Tipos de Especie”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar el nombre, descripción y una imagen del tipo de especie.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el tipo aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Hortaliza</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje de éxito:<br />
          <em>“Tipo de especie registrado correctamente.”</em><br />
          y el nuevo tipo debe aparecer en la tabla.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El tipo aparece en la lista</td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>(Descripción del tipo de especie hortaliza)</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Imagen</td>
        <td>(Imagen representativa del tipo de especie)</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El tipo queda registrado y disponible para asociarse a nuevas especies.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.7 Caso de uso - Nº Prueba CU7. Registro de Especies</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU7</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nueva especie</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Cultivos – Especies</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente una nueva especie agrícola, asociada previamente a un tipo de especie.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para registrar.</li>
    <li>Debe existir al menos un tipo de especie registrado.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Especies”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar los campos requeridos: nombre de la especie, tipo de especie, descripción e imagen.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que la especie se registre correctamente y aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Lechuga</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje de éxito:<br />
          <em>“Especie registrada correctamente.”</em><br />
          y debe aparecer en la tabla de especies disponibles.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />La especie aparece en la lista</td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>(descripción sobre la especie)</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Tipos de especie</td>
        <td>Hortaliza</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Imagen</td>
        <td>(Imagen de la especie)</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    La especie queda registrada y puede usarse en el registro de cultivos, semilleros, etc.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.8 Caso de uso - Nº Prueba CU8. Registro de Cultivo</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU8</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nuevo cultivo</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Cultivos – Cultivos</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente un cultivo con su especie, tipo, ubicación, fecha de siembra y estado.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para registrar cultivos.</li>
    <li>Deben existir especies previamente registradas.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Cultivos”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar los datos requeridos.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el cultivo aparezca correctamente en la tabla.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Lechuga crespa</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje:<br />
          <em>“Cultivo registrado correctamente.”</em><br />
          y mostrar el nuevo cultivo en la lista general.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El cultivo aparece en la lista</td>
      </tr>
      <tr>
        <td>Especie</td>
        <td>Lechuga</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Estado</td>
        <td>Activa</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El cultivo queda disponible para seguimiento, edición y para ser asociado en informes o actividades.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.9 Caso de uso - Nº Prueba CU9. Registro de Semilleros</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU9</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nuevo Semillero</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Cultivos – Semilleros</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar correctamente un semillero con los campos requeridos como nombre, especie, lote, fecha y observaciones.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos de registro.</li>
    <li>Deben existir cultivos previamente registrados.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Semilleros”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar los datos requeridos.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el semillero aparezca en la lista general.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cultivo</td>
        <td>Lechuga crespa</td>
        <td>Positivo</td>
        <td>
          Mensaje de confirmación:<br />
          <em>“Semillero registrado correctamente.”</em><br />
          Y el nuevo registro debe aparecer en la tabla de semilleros.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El semillero aparece en la lista</td>
      </tr>
      <tr>
        <td>Unidades</td>
        <td>23</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Fecha de siembra</td>
        <td>23/07/25</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Fecha estimada</td>
        <td>15/08/25</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El semillero queda disponible para seguimiento y actualización futura.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.10 Caso de uso - Nº Prueba CU10. Registro de Usuarios</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU10</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nuevo lote</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Cultivos – Lote</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar correctamente un lote agrícola.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para registrar lotes.</li>
    <li>El sistema debe contar con acceso al módulo.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Lotes”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar los datos requeridos.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el lote quede visible en la tabla/lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Lote de Hortalizas</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar:<br />
          <em>“Lote registrado correctamente.”</em><br />
          Y debe mostrarse en la vista general.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El lote aparece en la lista</td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>Lote para hortalizas</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Latitudes</td>
        <td>Latitudes inferiores y superiores</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Longitudes</td>
        <td>Longitudes inferiores y superiores</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El lote queda registrado y listo para ser vinculado con eras.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.11 Caso de uso - Nº Prueba CU11. Registro de era</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU11</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nueva era</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Cultivo – Eras</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente una era dentro de un lote, incluyendo su nombre, área y ubicación dentro del lote.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para registrar eras.</li>
    <li>Debe existir al menos un lote registrado.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Eras”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar los datos requeridos.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que la era aparezca en la lista general del sistema.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Número de era</td>
        <td>1</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje:<br />
          <em>“Era registrada correctamente.”</em><br />
          Y debe ser visible en la tabla de eras.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />La era aparece en la lista</td>
      </tr>
      <tr>
        <td>Lote</td>
        <td>Lote de hortalizas</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Latitudes</td>
        <td>Latitudes inferiores y superiores</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Longitudes</td>
        <td>Longitudes inferiores y superiores</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    La era queda asociada al lote.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.12 Caso de uso - Nº Prueba CU12. Registro de Información Cultivos Sembrados</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU12</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro y visualización de información de cultivos sembrados + generación de reporte PDF</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Cultivos – Información cultivos sembrados</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar información sobre un cultivo sembrado, visualizar los datos correctamente y generar un reporte en formato PDF.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir cultivos, semilleros, eras y lotes previamente registrados.</li>
    <li>El usuario debe tener permisos para registrar y exportar.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Información de cultivos sembrados”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Completar los campos: cultivo, semillero, unidades, fecha de siembra, era y lote.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Hacer clic en el botón de descarga (ícono rojo) para generar el PDF.</li>
    <li>Confirmar que el archivo se descarga y contiene la información correspondiente.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cultivo</td>
        <td>Lechuga crespa</td>
        <td>Positivo</td>
        <td>
          Se muestra mensaje de confirmación: <em>“Registro guardado correctamente.”</em><br />
          El nuevo registro aparece en la tabla.<br />
          El PDF generado contiene correctamente los datos listados.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El cultivo sembrado queda registrado para consulta.<br />El reporte puede ser compartido o impreso.</td>
      </tr>
      <tr>
        <td>Semillero</td>
        <td>Lechuga crespa</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Unidades</td>
        <td>23</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Fecha siembra</td>
        <td>23/07/25</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Era - Lote</td>
        <td>Era 1 – Lote de hortalizas</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El cultivo sembrado queda registrado y puede ser visualizado o exportado como PDF.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.13 Caso de uso - Nº Prueba CU13. Registro de Actividad</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU13</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nueva actividad</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Actividades – Actividades</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar correctamente una actividad agrícola como riego, fertilización, poda, etc., asociándola a un cultivo o responsable, junto con fecha y tipo.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir tipos de actividad y cultivos registrados previamente.</li>
    <li>El usuario debe tener permisos de registro.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Actividades”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar los datos requeridos: nombre, tipo de actividad, cultivo, fecha, unidad, responsable.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que aparezca en la lista de actividades.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cultivo</td>
        <td>Lechuga crespa</td>
        <td>Positivo</td>
        <td>
          Mensaje: <em>“Actividad registrada correctamente.”</em><br />
          Y la actividad debe aparecer en la tabla con sus respectivos datos.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />La actividad aparece en la lista</td>
      </tr>
      <tr>
        <td>Plantación</td>
        <td>1</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Usuario</td>
        <td>Juan Perez</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Tipo de actividad</td>
        <td>Abonar</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Título</td>
        <td>Abonar la lechuga</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>Se debe abonar la lechuga</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Fecha</td>
        <td>Activo</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Estado</td>
        <td>Visitante</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    La actividad queda disponible para edición, seguimiento o marcar como realizada.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.14 Caso de uso - Nº Prueba CU14. Registro de Tipo de Actividad</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU14</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de tipo de actividad</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Actividades – Tipo actividad</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar un tipo de actividad agrícola como riego, fertilización, poda, fumigación, entre otros, para que luego pueda ser usado en el registro de actividades.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener acceso y permisos de edición en este submódulo.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Tipos de Actividad”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar el nombre del nuevo tipo de actividad.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el nuevo tipo aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>abonar</td>
        <td>Positivo</td>
        <td>
          Mensaje: <em>“Tipo de actividad registrado correctamente.”</em><br />
          Y debe mostrarse en la tabla para poder seleccionarlo luego en el registro de actividades.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />Tipo aparece en la lista</td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El tipo queda disponible para asociarse al registrar nuevas actividades.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.15 Caso de uso - Nº Prueba CU15. Registrar Unidad de Medida</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU15</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de unidad de medida</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Actividades – Unidad de medida</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar correctamente una unidad de medida que luego pueda ser usada en las actividades (por ejemplo: para insumos, cantidades, etc.).
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos de administración sobre el módulo.</li>
    <li>El módulo debe estar habilitado.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Unidades de Medida”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar nombre de la unidad (por ejemplo: libras).</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que la unidad se agregue correctamente a la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Libra</td>
        <td>Positivo</td>
        <td>
          Mensaje: <em>“Unidad registrada correctamente.”</em><br />
          La nueva unidad debe mostrarse en la tabla y poder ser seleccionada al registrar actividades.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />Unidad aparece en la lista</td>
      </tr>
      <tr>
        <td>Abreviatura</td>
        <td>Lb</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Tipo</td>
        <td>(Sin especificar)</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Equivalencia (g)</td>
        <td>500</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El usuario queda registrado en la base de datos.<br />
    La unidad queda disponible para ser usada en el resto del módulo de Actividades.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.16 Caso de uso - Nº Prueba CU16. Registro de Unidad de Tiempo</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU16</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de unidad de tiempo</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Actividades – Unidad de tiempo</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar una unidad de tiempo (como minutos, horas, días) que pueda ser utilizada en los registros de tiempo de actividades.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos sobre el módulo.</li>
    <li>El submódulo debe estar habilitado.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Unidades de Tiempo”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar el nombre de la unidad (por ejemplo: horas).</li>
    <li>Hacer clic en “Guardar” o “Registrar”.</li>
    <li>Verificar que la unidad aparezca en la tabla de unidades disponibles.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Horas</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje como:<br />
          <em>“Unidad de tiempo registrada correctamente.”</em><br />
          y mostrar la unidad en la tabla para su posterior uso en otras funcionalidades.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />Unidad aparece en la lista</td>
      </tr>
      <tr>
        <td>Equivalencia (min)</td>
        <td>60 min</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    La unidad queda disponible para ser seleccionada al registrar tiempos en actividades.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.17 Caso de uso - Nº Prueba CU17. Registrar Insumo</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU17</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registrar Insumo</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Inventario - Insumos</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente un insumo agrícola, diligenciando todos los campos como nombre, descripción, precio unitario, unidad de medida, compuesto activo, contenido, ficha técnica, unidades disponibles y valor total.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para acceder y registrar insumos.</li>
    <li>Deben existir unidades de medida configuradas.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo de Usuarios.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar todos los campos requeridos.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el insumo quede listado correctamente.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Abono orgánico</td>
        <td>Positivo</td>
        <td>
          Mensaje:<br />
          <em>“Insumo registrado correctamente.”</em><br />
          Y el nuevo registro debe aparecer en la lista de insumos.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El insumo aparece en la tabla</td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>Mejorador del suelo</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    El insumo queda registrado y puede ser consultado o editado.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.18 Caso de uso - Nº Prueba CU18. Registrar Herramienta</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU18</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de herramienta</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Inventario - Herramientas</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar correctamente una herramienta, incluyendo el lote asociado, nombre, descripción, número de unidades y valor total.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos de registro en el módulo de inventario.</li>
    <li>Debe existir al menos un lote disponible.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Herramientas”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar los campos solicitados.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que la herramienta se registre correctamente en la tabla.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lote</td>
        <td>1083874927</td>
        <td>Positivo</td>
        <td>
          Mensaje: <em>“Herramienta registrada correctamente.”</em><br />
          y debe aparecer en la tabla de herramientas con todos los datos ingresados.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />La herramienta aparece en la lista.</td>
      </tr>
      <tr>
        <td>Nombre</td>
        <td>Jua</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>Perez</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Unidades</td>
        <td>3227329257</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Valor herramientas</td>
        <td>juanperez@gmail.com</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Postcondiciones</h4>
  <p>
    La herramienta queda registrada y disponible para ser usada, consultada o editada.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.19 Caso de uso - Nº Prueba CU19. Registrar Movimiento en Bodega</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU19</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de entrada o salida en bodega</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Inventario - Bodega</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar correctamente un movimiento de inventario (entrada o salida) asociando usuario, tipo, cantidad, fecha, y el insumo o herramienta relacionada.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir insumos y herramientas previamente registrados.</li>
    <li>El usuario debe estar autenticado con permisos de edición.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Bodega”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Seleccionar tipo de movimiento (ej. salida).</li>
    <li>Seleccionar insumo o herramienta.</li>
    <li>Ingresar la cantidad, fecha y usuario responsable.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Guardar el registro y verificar que se muestre en la tabla.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Usuario</td>
        <td>Juan perez</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar el mensaje: “Movimiento registrado correctamente.”<br />
          y debe aparecer en la tabla con todos los datos.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. El movimiento aparece en la lista</td>
      </tr>
      <tr>
        <td>Fecha</td>
        <td>24/07/25</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Tipo</td>
        <td>Salida</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Unidades</td>
        <td>2</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Herramientas</td>
        <td>Pala</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El stock del elemento afectado se ajusta en el inventario según el tipo y cantidad registrada.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.20 Caso de uso - Nº Prueba CU20. Registro de uso de herramienta</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU20</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de uso de herramienta</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Inventario – Usos herramientas</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente el uso de una herramienta, asociándola a una actividad, indicando el control y las unidades utilizadas.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para registrar usos de herramientas.</li>
    <li>Deben existir herramientas previamente registradas en el inventario.</li>
    <li>Deben existir actividades y controles registrados.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Usos de herramientas”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Seleccionar la herramienta a usar.</li>
    <li>Seleccionar la actividad o control relacionada.</li>
    <li>Ingresar la cantidad de unidades utilizadas.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el nuevo registro aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Herramienta</td>
        <td>1083874927</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje: “Uso de herramienta registrado correctamente.”<br />
          Y el nuevo registro debe aparecer en la tabla con los datos indicados.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. El registro aparece en la lista.</td>
      </tr>
      <tr>
        <td>Actividad</td>
        <td>Jua</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Control</td>
        <td>Perez</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Unidades</td>
        <td>3227329257</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El uso de la herramienta queda registrado en la base de datos.<br />
    El stock o disponibilidad de la herramienta se ajusta si aplica.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.21 Caso de uso - Nº Prueba CU21. Registro de uso de insumo</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU21</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de uso de insumo</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Inventario – Usos de Insumos</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente el uso de un insumo, asociándolo a una actividad, indicando control, cantidad utilizada, unidad de medida y costo calculado.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para registrar usos de insumos.</li>
    <li>Deben existir insumos previamente registrados en el inventario.</li>
    <li>Deben existir actividades y controles registrados.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Usos de Insumos”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar los campos requeridos.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Comprobar que el nuevo registro aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Insumo</td>
        <td>1083874927</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje:<br>
          “Uso de insumo registrado correctamente.”<br>
          Y el nuevo registro debe aparecer en la tabla con los datos indicados.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. El registro aparece en la lista.</td>
      </tr>
      <tr>
        <td>Actividad</td>
        <td>Jua</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Control</td>
        <td>Perez</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Cantidad usado</td>
        <td>3227329257</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Unidad de medida</td>
        <td>juanperez@gmail.com</td>
        <td>Positivo</td>
        <td></td>
        <td>No</td>
        <td></td>
      </tr>
      <tr>
        <td>Costo producto usado</td>
        <td>123456</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El uso del insumo queda registrado en la base de datos.<br>
    El stock del insumo se reduce automáticamente en el inventario.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.22 Caso de uso - Nº Prueba CU22. Registro de sensor IoT</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU22</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de sensor IoT</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">IoT – Sensores</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar un sensor IoT con su tipo, umbrales de alerta, ubicación y otros datos necesarios para la recolección y visualización de datos en tiempo real.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para agregar sensores.</li>
    <li>El módulo IoT debe estar habilitado.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Sensores”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Completar los campos: tipo de sensor (ej. temperatura), valor inicial (si aplica), umbral mínimo, umbral máximo, ubicación.</li>
    <li>Hacer clic en “Guardar” o “Registrar”.</li>
    <li>Verificar que el nuevo sensor aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tipo de sensor</td>
        <td>Temperatura</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un mensaje:<br />
          “Sensor registrado correctamente.”<br />
          Y el sensor debe aparecer en la tabla/lista de sensores con sus datos.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. Sensor visible en la lista.</td>
      </tr>
      <tr>
        <td>Valor Inicial</td>
        <td>0.00</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Umbral mínimo</td>
        <td>10 °C</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Umbral máximo</td>
        <td>35 °C</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Ubicación</td>
        <td>Lote de hortalizas</td>
        <td>Positivo</td>
        <td></td>
        <td>No</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El sensor queda activo para recibir datos en tiempo real.<br />
    Se habilitan alertas basadas en los umbrales configurados.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.23 Caso de uso - Nº Prueba CU23. Calcular Evapotranspiración</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU23</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Cálculo de Evapotranspiración</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">IoT – Evapotranspiración</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita calcular la evapotranspiración seleccionando una plantación y opcionalmente el coeficiente de cultivo (Kc). El sistema debe devolver el valor estimado con base en las variables climáticas y los datos del cultivo.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir plantaciones registradas en el sistema.</li>
    <li>El usuario debe tener permisos para acceder al módulo IoT.</li>
    <li>Sensores deben proporcionar datos climáticos básicos (temperatura, humedad, radiación, etc.).</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Evapotranspiración”.</li>
    <li>Seleccionar una plantación en el listado.</li>
    <li>(Opcional) Ingresar un valor manual para el coeficiente Kc.</li>
    <li>Hacer clic en “Calcular”.</li>
    <li>Verificar que el sistema muestre el valor calculado.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Plantación</td>
        <td>Plantacion de lechuga</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar un valor numérico correspondiente a la evapotranspiración calculada y un mensaje:<br />
          “Cálculo realizado correctamente.”
        </td>
        <td>Sí</td>
        <td>Mensaje de confirmación. Se muestra el resultado del cálculo.</td>
      </tr>
      <tr>
        <td>Coeficiente de cultivo</td>
        <td>0.8</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El cálculo puede almacenarse en la base de datos o exportarse (si aplica).
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.24 Caso de uso - Nº Prueba CU24. Visualización de actividades y controles en calendario</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU24</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Visualización de actividades y controles en calendario</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Calendario</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el calendario muestre correctamente las actividades agrícolas y controles fitosanitarios en las fechas asignadas al momento de su creación.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir actividades y controles registrados previamente con fecha asignada.</li>
    <li>El usuario debe tener acceso al módulo Calendario.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Calendario”.</li>
    <li>Navegar por el mes actual.</li>
    <li>Ubicar las fechas asignadas a actividades o controles.</li>
    <li>Verificar que las actividades y controles se visualicen en la fecha correspondiente.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2">Control “Aplicación de fungicida” en la fecha 23/07/2025<br>
        Actividad “Abonar la lechuga” en la fecha 23/07/2025</td>
        <td>Positivo</td>
        <td>
          Mensaje visual:<br />
          “Actividades y controles cargados correctamente.”<br />
          Las actividades y controles aparecen en las fechas asignadas.
        </td>
        <td>Sí</td>
        <td>Las actividades y controles aparecen en las fechas asignadas.</td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El calendario mantiene la visualización correcta incluso al cambiar el modo (Mes / Agenda).
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.25 Caso de uso - Nº Prueba CU25. Visualización de lotes y eras en el mapa</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU25</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Visualización de lotes y eras registrados en el mapa, con opción de filtrar por cultivo.</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Mapa</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema muestre correctamente en el mapa todos los lotes y eras registrados en el sistema, y que permita filtrarlos según el cultivo seleccionado.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir lotes y eras registrados en el sistema.</li>
    <li>Deben estar asociados a uno o más cultivos.</li>
    <li>El usuario debe tener acceso al módulo Mapa.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Mapa”.</li>
    <li>Visualizar los lotes y eras en el mapa.</li>
    <li>En el filtro, seleccionar "Todos los cultivos".</li>
    <li>Verificar que se muestren todos los lotes y eras.</li>
    <li>Seleccionar un cultivo específico en el filtro.</li>
    <li>Confirmar que el mapa muestre solo los lotes y eras asociados a dicho cultivo.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Filtro</td>
        <td>Todos los Cultivos</td>
        <td>Positivo</td>
        <td>
          Todos los lotes y eras al seleccionar “Todos los cultivos”.<br />
          Solo los asociados al cultivo seleccionado (ej. Lechuga) cuando se aplique el filtro.<br />
          “Datos cargados correctamente.”
        </td>
        <td>Sí</td>
        <td>Lotes y eras visibles en el mapa.<br />Filtrado funcional por cultivo.</td>
      </tr>
      <tr>
        <td>Filtro</td>
        <td>Lechuga</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>El filtro se mantiene hasta que el usuario lo cambie o actualice la página.</p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.26 Caso de uso - Nº Prueba CU26. Registro de Cosecha</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU26</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de Cosecha</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Finanzas – Cosechas</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar una cosecha con cultivo, cantidad, unidad de medida, fecha y valor calculado.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para acceder a Finanzas.</li>
    <li>Debe existir al menos un cultivo activo.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Cosechas”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Seleccionar el cultivo correspondiente.</li>
    <li>Ingresar la cantidad cosechada y la unidad de medida.</li>
    <li>Indicar la fecha de cosecha.</li>
    <li>Guardar el registro.</li>
    <li>Verificar que aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cultivo</td>
        <td>Lechuga</td>
        <td>Positivo</td>
        <td>El sistema debe mostrar el mensaje “Cosecha registrada correctamente” y listar el nuevo registro.</td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El registro aparece en la lista.</td>
      </tr>
      <tr>
        <td>Cantidad cosechada</td>
        <td>23</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Unidad de medida</td>
        <td>Kilos</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Fecha cosecha</td>
        <td>24/07/25</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Valor cosecha</td>
        <td>5000</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    La cosecha queda disponible para ventas y reportes.<br />
    El usuario queda registrado en la base de datos.<br />
    Se puede iniciar sesión con las credenciales creadas (en otro caso de prueba).
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.27 Caso de uso - Nº Prueba CU27. Registro de Venta</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU27</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de Venta</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Finanzas – Ventas</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar una venta asociada a una o varias cosechas, incluyendo número de factura, usuario, valor total y fecha.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Debe existir al menos una cosecha registrada.</li>
    <li>El usuario debe tener permisos para gestionar Finanzas.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Ventas”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar número de factura, usuario, fecha y valor total.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fecha venta</td>
        <td>25/07/25</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar el mensaje:<br />
          “Venta registrada correctamente”<br />
          Y la venta debe aparecer en la lista con la información ingresada.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El registro aparece en la lista.</td>
      </tr>
      <tr>
        <td>Numero factura</td>
        <td>1</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Valor total</td>
        <td>50000</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Usuario</td>
        <td>Juan perez</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Cosechas</td>
        <td>1</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El registro queda disponible para reportes financieros y control de pagos.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.28 Caso de uso - Nº Prueba CU28. Configuración de Salarios</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU28</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Configuración de Salarios</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Finanzas – Salarios</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita configurar un salario indicando nombre, monto, cantidad de horas, monto por minuto y estado.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para gestionar Finanzas.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Salarios”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Completar los campos.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que aparezca en la lista.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>abono</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar el mensaje:<br />
          “Salario configurado correctamente”<br />
          Y el registro debe aparecer en la lista con los datos ingresados.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación.<br />El registro aparece en la lista.</td>
      </tr>
      <tr>
        <td>Monto</td>
        <td>10000</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Horas</td>
        <td>1</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Monto por minuto</td>
        <td>166</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Estado</td>
        <td>activo</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El salario queda disponible para cálculos de pagos.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.29 Caso de uso - Nº Prueba CU29. Gestión de pagos a usuarios</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU29</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Gestión de pagos a usuarios</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Finanzas – Pagos</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita filtrar los pagos pendientes por usuario, mostrar la información detallada (fecha, valor, tipo, estado), y ejecutar correctamente la acción “Pagar Todo Pendiente” así como visualizar el historial de pagos realizados.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir usuarios registrados con pagos pendientes.</li>
    <li>El usuario autenticado debe tener permisos para visualizar y registrar pagos.</li>
    <li>El sistema debe tener habilitado el submódulo de pagos.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Finanzas” y luego al submódulo “Pagos”.</li>
    <li>En el filtro “Selecciona un usuario”, elegir un usuario con pagos pendientes.</li>
    <li>Verificar que se cargue la tabla con información de pagos (usuario, fecha, valor total, tipo, estado, acciones).</li>
    <li>Hacer clic en el botón “Pagar Todo Pendiente”.</li>
    <li>Confirmar la acción de pago.</li>
    <li>Verificar que se muestre un mensaje de éxito y que los pagos pendientes desaparezcan.</li>
    <li>Hacer clic en el botón “Ver Historial de Pagos”.</li>
    <li>Confirmar que el historial muestre correctamente los pagos realizados, con sus respectivos datos.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Usuario</td>
        <td>Juan perez</td>
        <td>Positivo</td>
        <td>
          Se muestran los pagos pendientes del usuario en la tabla.<br />
          Se realiza el pago y se muestra mensaje: “Pagos realizados correctamente”.<br />
          Se redirige al historial con los pagos realizados (usuario, valor, fecha, estado).
        </td>
        <td>Sí</td>
        <td>
          La tabla carga los datos.<br />
          Pagos eliminados de la lista.<br />
          Historial correctamente cargado.
        </td>
      </tr>
      <tr>
        <td>Botón acción</td>
        <td>Pagar todo pendiente</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Botón acción</td>
        <td>Ver historial de pagos</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    Los pagos quedan registrados como realizados en la base de datos.<br />
    La tabla de pendientes se actualiza y desaparecen los registros pagados.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.30 Caso de uso - Nº Prueba CU30. Visualización de Resumen Financiero</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU30</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Visualización del resumen financiero de cultivos</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Finanzas – Resumen financiero</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita visualizar correctamente la información financiera de un cultivo (ingresos, egresos, mano de obra, depreciación, beneficio, relación B/C), permitiendo también filtrar por tipo de especie, especie y fecha.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir cultivos con fechas de siembra registradas.</li>
    <li>Deben haberse registrado cosechas, ventas, salarios y otros datos financieros relacionados.</li>
    <li>El usuario debe tener permisos para acceder a Finanzas.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al submódulo “Resumen Financiero”.</li>
    <li>Seleccionar un “Tipo de Especie” desde el filtro desplegable.</li>
    <li>Seleccionar una “Especie” asociada.</li>
    <li>(Opcional) Filtrar por una fecha de siembra específica.</li>
    <li>Verificar que el sistema cargue los datos del cultivo seleccionado: nombre, era, fecha de siembra.</li>
    <li>Validar que los campos “Ingresos”, “Egresos”, “Mano de obra”, “Depreciación”, “Beneficio” y “Relación B/C” se muestren correctamente.</li>
    <li>Confirmar que el botón “Ver Historial General” redirija correctamente a la vista histórica.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tipo de especie</td>
        <td>Hortaliza</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar las especies asociadas al tipo seleccionado.<br />
          El resumen del cultivo “Lechuga crespa” debe cargarse con los datos financieros respectivos.<br />
          Se filtra la información a partir de la fecha indicada, si se utiliza el filtro.<br />
          El sistema debe redirigir a una vista general del historial financiero de todos los cultivos.
        </td>
        <td>Sí</td>
        <td>
          Lista de especies visible.<br />
          Información cargada correctamente.<br />
          Cultivo mostrado.<br />
          Redirección exitosa.
        </td>
      </tr>
      <tr>
        <td>Especie</td>
        <td>Lechuga crespa</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Fecha de siembra</td>
        <td>2025-06-04</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Acción: Ver Historial</td>
        <td>Clic botón verde</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El resumen queda visible en pantalla con la información agrupada por cultivo.<br />
    El historial permite revisar múltiples registros de distintos cultivos en el sistema.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.31 Caso de uso - Nº Prueba CU31. Registro de tipo de afección</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU31</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de tipo de afección</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Fitosanitario – Tipos de afecciones</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente un nuevo tipo de afección indicando nombre, descripción e imagen. Además, verificar que este tipo de afección se muestre en la tabla y pueda ser usado posteriormente en otros submódulos.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para gestionar datos en el módulo Fitosanitario.</li>
    <li>El sistema debe tener acceso al submódulo “Tipos de afecciones”.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Fitosanitario”.</li>
    <li>Seleccionar el submódulo “Tipos de afecciones”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar el nombre, descripción e imagen representativa de la afección.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el tipo de afección aparezca en la lista general.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Mancha negra</td>
        <td>Positivo</td>
        <td>
          El sistema debe mostrar el mensaje: “Tipo de afección registrado correctamente.”<br />
          El contenido debe guardarse y visualizarse correctamente en la columna de descripción.<br />
          La imagen debe cargarse correctamente o mostrarse como “Sin imagen” si se omite.
        </td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. El registro aparece en la lista.</td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>Hongos foliares comunes en lechuga</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Imagen</td>
        <td>Imagen</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El tipo de afección queda disponible para ser usado en el registro de afecciones en cultivos.<br />
    El registro se almacena en la base de datos.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.32 Caso de uso - Nº Prueba CU32. Registro de Afección</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU32</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de nueva afección</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Fitosanitario – Afecciones</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar correctamente una afección, diligenciando campos como nombre, descripción, tipo de afección e imagen representativa, y que dicha información se visualice correctamente en la tabla.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Debe existir al menos un tipo de afección previamente registrado.</li>
    <li>El usuario debe tener permisos para gestionar afecciones.</li>
    <li>El submódulo debe estar disponible.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Fitosanitario”.</li>
    <li>Seleccionar el submódulo “Afecciones”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar el nombre de la afección, descripción, tipo de afección e imagen.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que la nueva afección aparezca en la tabla con los datos correctos.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Pudrición basal</td>
        <td>Positivo</td>
        <td>El sistema debe registrar la afección y mostrar mensaje de éxito.</td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. Afección agregada a la tabla.</td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>Daño en base del tallo</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Tipo de afección</td>
        <td>Mancha negra</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Imagen</td>
        <td>imagen</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    La afección queda registrada y puede ser utilizada en controles fitosanitarios y reportes.<br />
    La información se guarda en la base de datos del sistema.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.33 Caso de uso - Nº Prueba CU33. Registro de afección en cultivo</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU33</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de afección en cultivo</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Fitosanitario – Afecciones en cultivos</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Validar que el sistema permita registrar correctamente una afección en un cultivo, seleccionando la especie, era, lote, tipo de afección, descripción de la plaga o enfermedad, fecha de detección y estado actual.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir cultivos, eras y lotes previamente registrados.</li>
    <li>Deben existir tipos de afección y afecciones registradas.</li>
    <li>El usuario debe tener permisos sobre el módulo Fitosanitario.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Fitosanitario”.</li>
    <li>Seleccionar el submódulo “Afecciones en cultivos”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Seleccionar el cultivo, especie, era, lote y plaga o enfermedad.</li>
    <li>Ingresar el tipo de plaga o enfermedad, fecha de detección y estado (“Detectado”, “En seguimiento”, “Resuelto”).</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que la afección aparezca correctamente en la tabla.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cultivo</td>
        <td>Lechuga crespa</td>
        <td>Positivo</td>
        <td>La plaga asociada debe registrarse correctamente con todos los datos.</td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. Registro agregado a la tabla.</td>
      </tr>
      <tr>
        <td>Especie</td>
        <td>Lechuga</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Era</td>
        <td>1</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Lote</td>
        <td>Lote de hortalizas</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Plaga</td>
        <td>Mancha negra</td>
        <td>Positivo</td>
        <td></td>
        <td>No</td>
        <td></td>
      </tr>
      <tr>
        <td>Tipo plaga</td>
        <td>hongo</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Fecha de detección</td>
        <td>24/07/25</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Estado</td>
        <td>En tratamiento</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    La afección queda registrada y puede ser monitoreada o tratada desde otros submódulos como controles o seguimiento.<br />
    Se almacena correctamente en la base de datos.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.34 Caso de uso - Nº Prueba CU34. Registro de tipo de control</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU34</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de tipo de control</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Fitosanitario – Tipos de control</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar un tipo de control fitosanitario (biológico, químico, mecánico, etc.), incluyendo nombre y descripción, y que este quede disponible para ser usado en registros de controles aplicados a cultivos.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>El usuario debe tener permisos para registrar datos en el módulo Fitosanitario.</li>
    <li>El submódulo debe estar activo.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Fitosanitario”.</li>
    <li>Seleccionar el submódulo “Tipos de control”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar el nombre y la descripción del tipo de control.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el nuevo tipo de control se visualice en la tabla.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre</td>
        <td>Biologicos</td>
        <td>Positivo</td>
        <td>El sistema debe mostrar el mensaje: “Tipo de control registrado correctamente.”</td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. Tipo visible en la tabla.</td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>Uso de organismos benéficos</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El tipo de control queda registrado y disponible para asociarse a futuros controles fitosanitarios en los cultivos.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.35 Caso de uso - Nº Prueba CU35. Registro de control fitosanitario</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU35</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Registro de control fitosanitario</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Fitosanitario – Controles</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita registrar correctamente un control fitosanitario sobre una afección específica, especificando la fecha de aplicación, descripción del control, tipo de control y usuario responsable.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir tipos de control y afecciones registrados.</li>
    <li>El usuario debe tener permisos en el módulo Fitosanitario.</li>
    <li>La afección a tratar debe estar activa o en estado "Detectado".</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Fitosanitario”.</li>
    <li>Seleccionar el submódulo “Controles”.</li>
    <li>Hacer clic en “Agregar”.</li>
    <li>Ingresar campos requeridos.</li>
    <li>Hacer clic en “Guardar”.</li>
    <li>Verificar que el nuevo control aparezca en la tabla con los datos correctos.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fecha control</td>
        <td>25/07/25</td>
        <td>Positivo</td>
        <td>El control debe quedar correctamente asociado a la afección seleccionada.</td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. El registro aparece en la lista.</td>
      </tr>
      <tr>
        <td>Descripción</td>
        <td>Aplicación de neem</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Afección</td>
        <td>Macha negra</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Tipo control</td>
        <td>Biológico</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Usuario</td>
        <td>Juan perez</td>
        <td>Positivo</td>
        <td></td>
        <td>No</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>
    El control queda registrado y asociado a la afección correspondiente.<br />
    El historial de controles se actualiza.
  </p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>6.36 Caso de uso - Nº Prueba CU36. Seguimiento de afectaciones y descarga de reporte</h2>

  <h3>INFORMACIÓN GLOBAL DEL CASO DE PRUEBA</h3>
  <table>
    <tbody>
      <tr>
        <td><strong>CASO DE PRUEBA No.</strong></td>
        <td>CU36</td>
        <td><strong>VERSIÓN DE EJECUCIÓN</strong></td>
        <td>1.0</td>
      </tr>
      <tr>
        <td><strong>CASO DE USO</strong></td>
        <td colspan="3">Seguimiento de afectaciones y descarga de reporte</td>
      </tr>
      <tr>
        <td><strong>MÓDULO DEL SISTEMA</strong></td>
        <td colspan="3">Fitosanitario – Seguimiento de afectaciones</td>
      </tr>
      <tr>
        <td><strong>Descripción del caso de prueba</strong></td>
        <td colspan="3">
          Verificar que el sistema permita consultar los controles realizados sobre las afecciones filtrando por tipo de control, cultivo y estado de la afección. Además, validar que la información pueda ser exportada correctamente en formato PDF.
        </td>
      </tr>
    </tbody>
  </table>

  <h3>CASO DE PRUEBA</h3>
  <p><strong>Precondiciones:</strong></p>
  <ul>
    <li>Deben existir registros de controles previamente realizados.</li>
    <li>El usuario debe tener permisos de consulta y descarga en el módulo Fitosanitario.</li>
    <li>Debe estar activa la funcionalidad de generación de reportes PDF.</li>
  </ul>

  <p><strong>Pasos de la prueba:</strong></p>
  <ol>
    <li>Ingresar al módulo “Fitosanitario”.</li>
    <li>Seleccionar el submódulo “Seguimiento de afectaciones”.</li>
    <li>Utilizar los filtros para buscar controles (por tipo de control, cultivo o estado).</li>
    <li>Verificar que los datos se muestren correctamente: fecha del control, descripción, afección, cultivo, tipo de control y estado.</li>
    <li>Hacer clic en el ícono de descarga PDF.</li>
    <li>Validar que el archivo generado contenga la información completa y legible.</li>
  </ol>

  <h4>DATOS DE ENTRADA</h4>
  <table>
    <thead>
      <tr>
        <th>CAMPO</th>
        <th>VALOR</th>
        <th>TIPO ESCENARIO</th>
        <th>RESPUESTA ESPERADA DE LA APLICACIÓN</th>
        <th>COINCIDE</th>
        <th>RESPUESTA DEL SISTEMA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tipo de control</td>
        <td>Biológico</td>
        <td>Positivo</td>
        <td>El sistema filtra los controles que tengan ese tipo asociado, así mismo con los demás campos de entrada.</td>
        <td>Sí</td>
        <td>Se muestra mensaje de confirmación. Resultados filtrados. PDF descargado y legible.</td>
      </tr>
      <tr>
        <td>Cultivo</td>
        <td>Lechuga crespa</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Estado de la afección</td>
        <td>En tratamiento</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
      <tr>
        <td>Botón de descarga PDF</td>
        <td>Hacer click</td>
        <td>Positivo</td>
        <td></td>
        <td>Sí</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <h4>Post condiciones</h4>
  <p>El reporte PDF queda disponible localmente para su consulta o impresión.</p>

  <h4>RESULTADOS DE LA PRUEBA</h4>
  <table>
    <tbody>
      <tr>
        <td><strong>Defectos y desviaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Veredicto</strong></td>
        <td>Aprobado / Fallido (según resultado real)</td>
      </tr>
      <tr>
        <td><strong>Observaciones</strong></td>
        <td>N/A</td>
      </tr>
      <tr>
        <td><strong>Probador</strong></td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</section>

