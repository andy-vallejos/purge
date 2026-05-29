# Purge

## Descripcion General

Purge es un sistema de gestion para la postulacion de la SCESI (Sociedad cientifca de estudiantes de Sistemas e Informatica).

## Objetivos del Sistema

### Objetivo general

Desarrollar una plataforma web que permita administrar el proceso de postulacion de nuevos integrantes de la SCESI haciendolo intuitivo y rapido de usar.

### Objetivos Especificos

- Gestionar inscripciones
- Gestionar fases de la postulacion
- Gestionar purga de postulantes
- Gestionar examenes virtuales
- Gestionar laboratorios virtuales

## Roles del sistema

### Administrador

Se encargara de poder hacer cambios en las fechas o recepcion de nuevos postulantes.

### Tutor

Se encargara de su area, subiendo contenido, planificando practicas y examenes

### Postulante

Es el que pasara por las diferentes etapas de postulacion, teniendo que aprobar todo para ser un miembro scesi.

## Arquitectura del Sistema

El sistema seguirá una arquitectura cliente-servidor basada en tres capas:

### Frontend

Desarrollada con React, encargada de la interacción con los usuarios.

### Backend

Desarrollada con Express, responsable de procesar solicitudes, validar información y gestionar APIs REST.

### Capa de Datos

Gestionada mediante Supabase utilizando PostgreSQL para almacenamiento seguro y escalable.

## Tecnologías Utilizadas

### Frontend

- React
- HTML5
- CSS3
- JavaScript

### Backend

- Express
- Node.js
- JWT para autenticación

### Base de Datos

- Supabase
- PostgreSQL

### Despliegue y Optimización

- Cloudflare

### Control de Versiones

- Git
- GitHub
