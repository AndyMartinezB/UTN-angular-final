# Chat App -- Trabajo Final Integrador (Angular)

## Descripción

Esta aplicación es una simulación de una interfaz de mensajería
desarrollada con Angular.
Esta app permite visualizar una lista de chats, crear nuevos contactos y enviar
mensajes dentro de cada conversación.

El objetivo del proyecto fue aplicar conceptos vistos en
el Curso de Desarrollo en Angular UTN.BA, tales como:

- Routing
- Formularios reactivos
- Manejo de estado con Signals
- Arquitectura modular

## Funcionalidades

- Visualización de lista de chats
- Creación de nuevos chats
- Envío de mensajes dentro de cada conversación
- Respuesta automática simulada
- Persistencia local usando `localStorage`
- Interfaz dividida en sidebar de chats y área de conversación

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS

## Arquitectura del proyecto

La aplicación se organiza principalmente en:

    src/app
    │
    ├── models
    │   ├── chat.ts
    │   └── message.ts
    │
    ├── services
    │   └── chat.service.ts
    │
    ├── views
    │   ├── chats
    │   ├── chat
    │   └── nuevo-chat
    │
    └── app.routes.ts

### Componentes principales

**Chats** - Vista principal que contiene el layout de la aplicación. -
Incluye la lista de chats y el área de conversación.

**Chat** - Muestra los mensajes de una conversación específica. -
Permite enviar nuevos mensajes.

**NuevoChat** - Formulario para crear una nueva conversación.

### Servicio

**ChatService**

Centraliza la lógica de la aplicación:

- gestión de chats
- envío de mensajes
- simulación de respuestas automáticas
- persistencia en `localStorage`

## Persistencia de datos

La aplicación utiliza `localStorage` del navegador para simular
persistencia de datos.\
De esta forma los chats y mensajes permanecen disponibles incluso
después de recargar la página.

## Ejecución del proyecto

Instalar dependencias:

    npm install

Ejecutar el servidor de desarrollo:

    ng serve

Abrir en el navegador:

    http://localhost:4200

## Creditos

Andrés Martínez Bologna. 2026. Curso de Desarrollo en Angular UTN.BA.
