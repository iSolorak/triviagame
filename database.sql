-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.22-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for reactjs
CREATE DATABASE IF NOT EXISTS `reactjs` /*!40100 DEFAULT CHARACTER SET armscii8 COLLATE armscii8_bin */;
USE `reactjs`;

-- Dumping structure for table reactjs.highscore
CREATE TABLE IF NOT EXISTS `highscore` (
  `username` varchar(50) COLLATE armscii8_bin DEFAULT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Dumping data for table reactjs.highscore: ~5 rows (approximately)
/*!40000 ALTER TABLE `highscore` DISABLE KEYS */;
INSERT INTO `highscore` (`username`, `score`) VALUES
	('Panos', 100),
	('Solorakv2', 100),
	('Solorakv3', 100),
	('3123121', 100),
	('Solorak', 104),
	('RandomEntry', 3);
/*!40000 ALTER TABLE `highscore` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
