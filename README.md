# SEMMP

![React](https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react)
![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-green?style=flat-square&logo=springboot)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=flat-square&logo=bootstrap)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

---

## Descripción

**SEMMP** es una aplicación **web** diseñada para gestionar solicitudes de mantenimiento, monitoreo y soporte técnico de equipos.  
El sistema permite a los usuarios **registrarse**, **iniciar sesión**, **gestionar solicitudes** y **visualizar estados** de sus equipos.

Este proyecto está dividido en dos partes:

- **Frontend:** Construido con **React + TypeScript** y **Bootstrap**.
- **Backend:** Desarrollado con **Spring Boot**, usando **JPA/Hibernate** para la persistencia de datos.

---

## Características principales

✅ Registro e inicio de sesión de usuarios.  
✅ Roles diferenciados: **cliente** y **técnico**.  
✅ Integración con **API REST** desarrollada en Spring Boot.  
✅ Validación de formularios en tiempo real.  
✅ Interfaz moderna, responsiva y optimizada con **Bootstrap**.  
✅ Comunicación segura con el servidor vía **fetch API**.

---

## Tecnologías utilizadas

### **Frontend**

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap 5.3](https://getbootstrap.com/)
- [React Router DOM](https://reactrouter.com/)
- [FontAwesome](https://fontawesome.com/)

### **Backend**

- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [XAMPP (MySQL)](https://www.apachefriends.org/es/index.html)

---

# Guía de instalación y ejecución — **SEMMP**

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) **v18+**
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Java JDK 17+](https://jdk.java.net/)
- [Maven](https://maven.apache.org/)
- [XAMPP](https://www.apachefriends.org/es/index.html) (para MySQL y Apache)
- [Visual Studio Code](https://code.visualstudio.com/)

---

## Configuración de la base de datos

1. Inicia **XAMPP** y asegúrate de levantar los servicios:
   - ✅ **Apache**
   - ✅ **MySQL**
2. Accede a **phpMyAdmin** desde tu navegador:  
   **👉 [http://localhost/phpmyadmin](http://localhost/phpmyadmin)**
3. Crea una base de datos para el proyecto, por ejemplo:

   ```sql
   CREATE DATABASE base_holamundo;
   ```



4. Configura las credenciales de conexión en el archivo:

   ```
   SEMMP-API/src/main/resources/application.properties
   ```

   Ejemplo:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/semmp_db
   spring.datasource.username=root
   spring.datasource.password=
   spring.jpa.hibernate.ddl-auto=update
   ```

   > Si tienes contraseña para el usuario **root**, reemplaza el valor vacío (`spring.datasource.password=`).

---

## Ejecutar el **backend** (Spring Boot)

1. Abre una terminal dentro de Visual Studio Code.

2. Ve a la carpeta del backend:

   ```bash
   cd SEMMP-API
   ```

3. Compila y ejecuta el proyecto:

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. Una vez iniciado, la API estará disponible en:
   ** [http://localhost:8080/api/usuarios](http://localhost:8080/api/usuarios)**

---

##  Ejecutar el **frontend** (React + TypeScript)

1. Abre una nueva terminal.

2. Ve a la carpeta del frontend:

   ```bash
   cd SEMMP-React
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Accede a la aplicación desde tu navegador:
   ** [http://localhost:5173](http://localhost:5173)**

---

##  Roles y autenticación

* El **primer usuario** que se registre será asignado como **administrador** automáticamente.
* Los usuarios registrados posteriormente serán considerados **clientes**.

---

## Endpoints principales (API REST)

| **Método** | **Endpoint**          | **Descripción**              |
| ---------- | --------------------- | ---------------------------- |
| **POST**   | `/api/usuarios`       | Crear usuario nuevo          |
| **POST**   | `/api/usuarios/login` | Iniciar sesión               |
| **GET**    | `/api/usuarios`       | Listar todos los usuarios    |
| **GET**    | `/api/usuarios/{id}`  | Obtener usuario por ID       |
| **PUT**    | `/api/usuarios/{id}`  | Actualizar datos del usuario |
| **DELETE** | `/api/usuarios/{id}`  | Eliminar usuario             |

---

## Notas importantes

* Asegúrate de que **XAMPP** esté corriendo antes de iniciar el backend.
* Si cambias el puerto del backend, actualiza las llamadas a la API en el **frontend**.
* Puedes cambiar el nombre de la base de datos, pero recuerda actualizarlo en `application.properties`.

---
````
