CREATE DATABASE  IF NOT EXISTS `sintad` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sintad`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: sintad
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `oauth_access_token`
--

DROP TABLE IF EXISTS `oauth_access_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_access_token` (
  `token_id` varchar(256) DEFAULT NULL,
  `token` blob,
  `authentication_id` varchar(256) DEFAULT NULL,
  `user_name` varchar(256) DEFAULT NULL,
  `client_id` varchar(256) DEFAULT NULL,
  `authentication` blob,
  `refresh_token` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_token`
--

LOCK TABLES `oauth_access_token` WRITE;
/*!40000 ALTER TABLE `oauth_access_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id_role` int NOT NULL,
  `description` varchar(150) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Administrador','ADMIN');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_entidad`
--

DROP TABLE IF EXISTS `tb_entidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_entidad` (
  `id_entidad` int NOT NULL AUTO_INCREMENT,
  `id_tipo_documento` int NOT NULL,
  `nro_documento` varchar(25) NOT NULL,
  `razon_social` varchar(100) NOT NULL,
  `nombre_comercial` varchar(100) DEFAULT NULL,
  `id_tipo_contribuyente` int DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `estado` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`id_entidad`),
  UNIQUE KEY `nro_documento_UNIQUE` (`nro_documento`),
  KEY `fk_tb_entidad_tb_tipo_documento1_idx` (`id_tipo_documento`),
  KEY `fk_tb_entidad_tb_tipo_contribuyente1_idx` (`id_tipo_contribuyente`),
  CONSTRAINT `tb_entidad_ibfk_2` FOREIGN KEY (`id_tipo_contribuyente`) REFERENCES `tb_tipo_contribuyente` (`id_tipo_contribuyente`),
  CONSTRAINT `tb_entidad_ibfk_3` FOREIGN KEY (`id_tipo_documento`) REFERENCES `tb_tipo_documento` (`id_tipo_documento`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_entidad`
--

LOCK TABLES `tb_entidad` WRITE;
/*!40000 ALTER TABLE `tb_entidad` DISABLE KEYS */;
INSERT INTO `tb_entidad` VALUES (3,1,'201456789111','Empresa 4','Comercial 4',1,'Av. Los Alamos 123','123456700',_binary ''),(4,3,'20600131037','CARNICOS MAFER S.A.C.','',2,'CAL.EL UNIVERSO NRO. 327 URB. LA CAMPIÑA ZONA CINCO (ALTURA ','',_binary ''),(5,3,'20556528218','SUMAQUINARIA S.A.C.','',2,'AV. M.SUCRE NRO. 455 DPTO. 603 LIMA - LIMA - MAGDALENA DEL MAR','',_binary ''),(6,3,'20545412528','OASIS FOODS S.A.C.','',2,'CAL. FRANCISCO MASIAS NRO. 370 URB. SAN EUGENIO (PISO 7) LIM','',_binary ''),(7,3,'20510620195','INVERSIONES PRO3 SAC','',2,'AV. AUTOPIDTA RAMIRO PRIALE LOTE. 02 A.V. PROP HUERTOS DE HU','',_binary ''),(8,3,'20498383361','REPUESTOS DAVID DIESEL E.I.R.L.','',2,'CAR.VIA EVITAMIENTO MZA. 857 LOTE. 7 SEC. IRRIGACION EL CURAL 1 AREQUIPA - AREQUIPA - CERRO COLORADO','',_binary ''),(9,5,'2235415748','ANHUI HAYVO PROTECTIVE PRODUCT MANUFACTURING CO.,LTD','Sin nombre',4,'173 FENGLE AVENUE,ECNOMIC DEVELOPMENT ZONE,QUANJIAO COUNTY','985467481',_binary ''),(10,1,'852654789','SINTAD PERÚ','SINTAD ',1,'Callo #555','928996354',_binary '\0'),(11,4,'122654789','Panuby SAC',NULL,1,'Callo #555','928996354',_binary '\0'),(12,5,'2154789653','UPAO SAC','UPAO',2,'AV. Monserrate #999','963457854',_binary ''),(13,5,'2354874575','UPN','Universidad Privada del Norte',2,'Av. Honorio Delgado #214','963753951',_binary ''),(14,1,'2165478963','UNT ','Universidad Nacional de Trujillo',3,'Av. América #222','987852321',_binary ''),(19,2,'2545789654','Rockys SAC','Rockys',3,'Av, América #444','963458741',_binary ''),(20,1,'123456789','Empresa','Comercial',1,'Av. Los Alamos 123','123456789',_binary ''),(22,1,'201456789','Empresa 2','Comercial 2',1,'Av. Los Alamos 123','123456700',_binary ''),(25,1,'20145678900','Empresa 2','Comercial 2',1,'Av. Los Alamos 123','123456700',_binary ''),(26,1,'201456789001','Empresa 3','Comercial 3',1,'Av. Los Alamos 123','123456700',_binary '');
/*!40000 ALTER TABLE `tb_entidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_tipo_contribuyente`
--

DROP TABLE IF EXISTS `tb_tipo_contribuyente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_tipo_contribuyente` (
  `id_tipo_contribuyente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `estado` bit(1) NOT NULL,
  PRIMARY KEY (`id_tipo_contribuyente`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_tipo_contribuyente`
--

LOCK TABLES `tb_tipo_contribuyente` WRITE;
/*!40000 ALTER TABLE `tb_tipo_contribuyente` DISABLE KEYS */;
INSERT INTO `tb_tipo_contribuyente` VALUES (1,'Natural Sin Negocio',_binary ''),(2,'Juridica',_binary ''),(3,'Natural Con Negocio',_binary ''),(4,'No Domiciliado',_binary '');
/*!40000 ALTER TABLE `tb_tipo_contribuyente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_tipo_documento`
--

DROP TABLE IF EXISTS `tb_tipo_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_tipo_documento` (
  `id_tipo_documento` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `estado` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`id_tipo_documento`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_tipo_documento`
--

LOCK TABLES `tb_tipo_documento` WRITE;
/*!40000 ALTER TABLE `tb_tipo_documento` DISABLE KEYS */;
INSERT INTO `tb_tipo_documento` VALUES (1,'4','CARNET DE EXTRANJERIA','CARNET DE EXTRANJERIA',_binary ''),(2,'7','PASAPORTE','PASAPORTE',_binary ''),(3,'11','PARTIDA DE NACIMIENTO - IDENTIDAD','PARTIDA DE NACIMIENTO - IDENTIDAD',_binary '\0'),(4,'99','OTROS','OTROS',_binary '\0'),(5,'6','RUC','REGISTRO UNICO DEL CONTRIBUYENTE',_binary '\0'),(6,'33','DNI','DOCUMENTO NACIONAL DE IDENTIDAD',_binary '');
/*!40000 ALTER TABLE `tb_tipo_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_data`
--

DROP TABLE IF EXISTS `user_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_data` (
  `id_user` int NOT NULL,
  `enabled` bit(1) NOT NULL,
  `password` varchar(60) NOT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `UK_nlc4atex50p892vsfhwccm336` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_data`
--

LOCK TABLES `user_data` WRITE;
/*!40000 ALTER TABLE `user_data` DISABLE KEYS */;
INSERT INTO `user_data` VALUES (1,_binary '','$2a$12$3EME7yeFrs78okD30vCnQ.gm60Xhz2En5Zk1K5N/sTCyUA/N31mt2','sintad@gmail.com');
/*!40000 ALTER TABLE `user_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `id_user` int NOT NULL,
  `id_role` int NOT NULL,
  KEY `FK2aam9nt2tv8vcfymi3jo9c314` (`id_role`),
  KEY `FK9qphm07p6th93qb8p9fnykvwo` (`id_user`),
  CONSTRAINT `FK2aam9nt2tv8vcfymi3jo9c314` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
  CONSTRAINT `FK9qphm07p6th93qb8p9fnykvwo` FOREIGN KEY (`id_user`) REFERENCES `user_data` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-08 10:20:46
