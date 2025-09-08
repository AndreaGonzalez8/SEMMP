-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-08-2025 a las 02:13:39
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `base_holamundo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_inventario_orden`
--

CREATE TABLE `detalle_inventario_orden` (
  `IdDetalle` int(11) NOT NULL,
  `IdOrden` int(11) DEFAULT NULL,
  `IdInventario` int(11) DEFAULT NULL,
  `cantidad_usada` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_inventario_orden`
--

INSERT INTO `detalle_inventario_orden` (`IdDetalle`, `IdOrden`, `IdInventario`, `cantidad_usada`) VALUES
(1, 1, 2, 3),
(2, 1, 1, 1),
(3, 2, 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `IdEquipo` varchar(20) NOT NULL,
  `referencia` varchar(50) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_revision` date DEFAULT NULL,
  `IdUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`IdEquipo`, `referencia`, `categoria`, `estado`, `fecha_ingreso`, `fecha_revision`, `IdUsuario`) VALUES
('18154023-204', 'IMX6', 'Multidetector', 'En revisión', '2025-06-01', '2025-06-05', 1),
('23422-129', 'VMX4', 'Multidetector', 'Operativo', '2025-05-28', '2025-06-03', 2),
('2343F-999', 'Tango', 'Multidetector', 'Reparado', '2025-06-02', '2025-06-07', 3),
('A32310Q', 'STORM-PRO', 'Detector_tormentas', 'En reparación', '2025-06-03', '2025-06-06', 5),
('ALCWQEQ-105', 'Dräger 6820', 'Alcoholímetro', 'En reparación', '2025-06-03', '2025-06-06', 4),
('THAQWQW-307', 'THA-PRO', 'Termohigroanemómetro', 'Operativo', '2025-05-30', '2025-06-04', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `IdFactura` int(11) NOT NULL,
  `fecha_emision` date DEFAULT NULL,
  `monto` decimal(10,2) DEFAULT NULL,
  `IdPagos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`IdFactura`, `fecha_emision`, `monto`, `IdPagos`) VALUES
(1, '2025-06-01', 250000.00, 1),
(2, '2025-06-02', 180000.50, 2),
(3, '2025-06-03', 320000.75, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `IdInventario` int(11) NOT NULL,
  `nombre_producto` varchar(50) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `IdEquipo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inventario`
--

INSERT INTO `inventario` (`IdInventario`, `nombre_producto`, `cantidad`, `IdEquipo`) VALUES
(1, 'Sensor CO', 5, '18154023-204'),
(2, 'Filtro HEPA', 3, '23422-129'),
(3, 'Batería Li-Ion', 10, 'THAQWQW-307'),
(4, 'Pantalla LCD', 2, 'ALCWQEQ-105'),
(5, 'Cable USB-C', 7, '2343F-999');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden_servicio`
--

CREATE TABLE `orden_servicio` (
  `IdOrden` int(11) NOT NULL,
  `fechasolicitud` date DEFAULT NULL,
  `comentarios` varchar(350) DEFAULT NULL,
  `IdUsuario` int(11) DEFAULT NULL,
  `IdEquipo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `orden_servicio`
--

INSERT INTO `orden_servicio` (`IdOrden`, `fechasolicitud`, `comentarios`, `IdUsuario`, `IdEquipo`) VALUES
(1, '2025-06-08', 'Equipo ingresado por falla intermitente', 1, '18154023-204'),
(2, '2025-06-07', 'Revisión por calibración', 2, 'THAQWQW-307'),
(3, '2025-06-06', 'Diagnóstico por error de lectura', 3, 'ALCWQEQ-105'),
(4, '2025-06-05', 'Mantenimiento preventivo', 1, 'THAQWQW-307'),
(5, '2025-06-04', 'Ingreso por garantía', 4, '18154023-204');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `IdPagos` int(11) NOT NULL,
  `archivo_url` varchar(100) DEFAULT NULL,
  `fecha_subida` date DEFAULT NULL,
  `estado_validacion` enum('Pendiente','Aprobado','Rechazado') DEFAULT NULL,
  `IdUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`IdPagos`, `archivo_url`, `fecha_subida`, `estado_validacion`, `IdUsuario`) VALUES
(1, 'comprobante1.pdf', '2025-06-01', 'Pendiente', 1),
(2, 'comprobante2.pdf', '2025-06-02', 'Aprobado', 2),
(3, 'comprobante3.pdf', '2025-06-03', 'Rechazado', 3),
(4, 'comprobante4.pdf', '2025-06-04', 'Pendiente', 4),
(5, 'comprobante5.pdf', '2025-06-05', 'Aprobado', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `IdUsuario` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `celular` varchar(20) DEFAULT NULL,
  `rol` varchar(20) DEFAULT NULL,
  `contrasena` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`IdUsuario`, `Nombre`, `email`, `celular`, `rol`, `contrasena`) VALUES
(1, 'Ana Gómez', 'ana@gmail.com', '3001112233', 'cliente', 'ana123'),
(2, 'Carlos Ruiz', 'carlosr@gmail.com', '3012223344', 'técnico', 'carlos456'),
(3, 'Laura Méndez', 'laura.m@gmail.com', '3023334455', 'administrador', 'laura789'),
(4, 'Pedro Torres', 'ptorres@gmail.com', '3034445566', 'técnico', 'pedro321'),
(5, 'Sofía Díaz', 'sofia.d@gmail.com', '3045556677', 'cliente', 'sofia654');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detalle_inventario_orden`
--
ALTER TABLE `detalle_inventario_orden`
  ADD PRIMARY KEY (`IdDetalle`),
  ADD KEY `IdOrden` (`IdOrden`),
  ADD KEY `IdInventario` (`IdInventario`);

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`IdEquipo`),
  ADD KEY `IdUsuario` (`IdUsuario`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`IdFactura`),
  ADD UNIQUE KEY `IdPagos` (`IdPagos`);

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`IdInventario`),
  ADD KEY `IdEquipo` (`IdEquipo`);

--
-- Indices de la tabla `orden_servicio`
--
ALTER TABLE `orden_servicio`
  ADD PRIMARY KEY (`IdOrden`),
  ADD KEY `IdUsuario` (`IdUsuario`),
  ADD KEY `IdEquipo` (`IdEquipo`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`IdPagos`),
  ADD KEY `IdUsuario` (`IdUsuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`IdUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detalle_inventario_orden`
--
ALTER TABLE `detalle_inventario_orden`
  MODIFY `IdDetalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `IdFactura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `IdInventario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `orden_servicio`
--
ALTER TABLE `orden_servicio`
  MODIFY `IdOrden` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `IdPagos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `IdUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_inventario_orden`
--
ALTER TABLE `detalle_inventario_orden`
  ADD CONSTRAINT `detalle_inventario_orden_ibfk_1` FOREIGN KEY (`IdOrden`) REFERENCES `orden_servicio` (`IdOrden`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detalle_inventario_orden_ibfk_2` FOREIGN KEY (`IdInventario`) REFERENCES `inventario` (`IdInventario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `equipo_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`IdPagos`) REFERENCES `pagos` (`IdPagos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `inventario_ibfk_1` FOREIGN KEY (`IdEquipo`) REFERENCES `equipo` (`IdEquipo`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `orden_servicio`
--
ALTER TABLE `orden_servicio`
  ADD CONSTRAINT `orden_servicio_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orden_servicio_ibfk_2` FOREIGN KEY (`IdEquipo`) REFERENCES `equipo` (`IdEquipo`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
