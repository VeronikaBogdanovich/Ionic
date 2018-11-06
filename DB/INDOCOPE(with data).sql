CREATE DATABASE  IF NOT EXISTS `indocope` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `indocope`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: indocope
-- ------------------------------------------------------
-- Server version	5.6.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `idUser` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `birthday` varchar(45) NOT NULL,
  `money` decimal(5,3) NOT NULL DEFAULT '0.000',
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Andrew','Mirugin','25-02-1998',99.999,'a.mirugin@example.com'),(2,'Vlad','Demyanovich','07-04-1998',99.999,'zaptot@example.com'),(3,'Anna','Metelskaya','26-10-1999',99.999,'anna.metelskaya@example.com'),(4,'Veronika','Bogdanovich','22-08-1999',99.999,'v.bogdanovich@example.com'),(5,'Pavel','Komarovski','12-07-1998',0.000,'p.k.n@example.com'),(6,'Alex','Romanchenko','04-09-1998',50.000,'alex.roman@example.com');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cards` (
  `idcard` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `card_number` varchar(45) NOT NULL,
  `card_name` varchar(45) NOT NULL,
  `card_date` decimal(5,3) NOT NULL,
  PRIMARY KEY (`idcard`),
  KEY `fk_cards_Users_idx` (`idUser`),
  CONSTRAINT `fk_cards_Users` FOREIGN KEY (`idUser`) REFERENCES `Users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,1,'123456789','CARD',8.000),(2,2,'123456879','SMART',7.000),(3,3,'123456784','ANN',9.230),(4,4,'135268935','VERONIKA',5.000),(5,5,'235239765','MYCARD',11.000),(6,6,'637823756','ALEX',12.000),(7,3,'846269027','CARD2',2.000),(8,4,'357390237','MY2',0.000);
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `request` (
  `idrequest` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `id_timetable` int(11) NOT NULL,
  `time` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  PRIMARY KEY (`idrequest`),
  KEY `fk_request_timetable1_idx` (`id_timetable`),
  CONSTRAINT `fk_request_timetable1` FOREIGN KEY (`id_timetable`) REFERENCES `timetable` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (1,3,2,'22:30','04-07-18'),(2,1,5,'21:45','08-7-18'),(3,4,2,'18:00','');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable`
--

DROP TABLE IF EXISTS `timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `timetable` (
  `idUser` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL,
  `time` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `money` decimal(5,3) NOT NULL,
  `idBlogger` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `tick` decimal(5,3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_timetable_Users1_idx` (`idBlogger`),
  KEY `fk_timetable_Users2_idx` (`idUser`),
  CONSTRAINT `fk_timetable_Users1` FOREIGN KEY (`idBlogger`) REFERENCES `Users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_timetable_Users2` FOREIGN KEY (`idUser`) REFERENCES `Users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable`
--

LOCK TABLES `timetable` WRITE;
/*!40000 ALTER TABLE `timetable` DISABLE KEYS */;
INSERT INTO `timetable` VALUES (1,0,'12:30','12-07-2018',20.000,2,1,2.000),(NULL,1,'11:00','03-08-2018',15.000,3,2,1.000),(3,0,'10:20','15-07-2018',50.000,2,3,3.000),(4,0,'18:00','23-10-2018',50.000,1,4,1.000),(NULL,1,'17:45','07-07-2018',1.000,5,5,1.000),(NULL,1,'09:00','09-11-2018',10.000,4,6,1.000);
/*!40000 ALTER TABLE `timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `translation`
--

DROP TABLE IF EXISTS `translation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `translation` (
  `idtranslation` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idBlogger` int(11) NOT NULL,
  `time` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  PRIMARY KEY (`idtranslation`),
  KEY `fk_translation_Users1_idx` (`idUser`),
  KEY `fk_translation_Users2_idx` (`idBlogger`),
  CONSTRAINT `fk_translation_Users1` FOREIGN KEY (`idUser`) REFERENCES `Users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_translation_Users2` FOREIGN KEY (`idBlogger`) REFERENCES `Users` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `translation`
--

LOCK TABLES `translation` WRITE;
/*!40000 ALTER TABLE `translation` DISABLE KEYS */;
INSERT INTO `translation` VALUES (1,2,1,'30','08-07-18'),(2,6,4,'60','06-07-18'),(3,5,3,'45','');
/*!40000 ALTER TABLE `translation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-27 20:59:14
