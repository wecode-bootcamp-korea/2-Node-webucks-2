-- MySQL dump 10.13  Distrib 8.0.26, for macos11.4 (arm64)
--
-- Host: localhost    Database: we_starbucks
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `allergies`
--

DROP TABLE IF EXISTS `allergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allergies` (
  `id` int NOT NULL,
  `name` varchar(5) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allergies`
--

LOCK TABLES `allergies` WRITE;
/*!40000 ALTER TABLE `allergies` DISABLE KEYS */;
INSERT INTO `allergies` VALUES (1,'대두'),(2,'우유');
/*!40000 ALTER TABLE `allergies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allergies_drinks`
--

DROP TABLE IF EXISTS `allergies_drinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allergies_drinks` (
  `id` int NOT NULL,
  `drinks_id` int DEFAULT NULL,
  `allergies_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `drinks_id` (`drinks_id`),
  KEY `allergies_id` (`allergies_id`),
  CONSTRAINT `allergies_drinks_ibfk_1` FOREIGN KEY (`drinks_id`) REFERENCES `drinks` (`id`),
  CONSTRAINT `allergies_drinks_ibfk_2` FOREIGN KEY (`allergies_id`) REFERENCES `allergies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allergies_drinks`
--

LOCK TABLES `allergies_drinks` WRITE;
/*!40000 ALTER TABLE `allergies_drinks` DISABLE KEYS */;
/*!40000 ALTER TABLE `allergies_drinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'콜드 브루 커피'),(2,'브루드 커피'),(3,'에스프레소'),(4,'프라푸치노'),(5,'블렌디드'),(6,'스타벅스 피지오'),(7,'티(티바나)'),(8,'기타 제조 음료'),(9,'스타벅스 주스(병음료)');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drinks`
--

DROP TABLE IF EXISTS `drinks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drinks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categories_id` int NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `drink_new` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_id` (`categories_id`),
  CONSTRAINT `drinks_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drinks`
--

LOCK TABLES `drinks` WRITE;
/*!40000 ALTER TABLE `drinks` DISABLE KEYS */;
INSERT INTO `drinks` VALUES (1,1,'시그니쳐 더 블랙 콜드 브루','콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 부드럽고 진한 풍미의 콜드브루를 딜리버리로 원하는 곳에서 편하게 즐겨보세요 (전용 리유저블 보틀 /500ml)',1),(2,1,'나이트로 바닐라 크림','부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!',0),(3,1,'나이트로 콜드 브루','나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마!',0),(4,1,'돌체 콜드 브루','무더운 여름철, \n 동남아 휴가지에서 즐기는 커피를 떠오르게 하는 돌체 콜드 브루를 만나보세요!',0),(5,1,'바닐라 크림 콜드 브루','콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료입니다.',0),(6,1,'벨벳 다크 뫄 나이트로','다크 초콜릿 모카의 진한 바디감과 함께 \n 헤이즐넛 향과 달콤한 카라멜 크림 폼으로 \n 벨벳같은 부드러움까지 살린 리저브 나이트로 커피',0),(7,1,'제주 비자림 콜드 브루','[제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는\n 음료로 제주에서 유기농 말차로 만든\n파우더와 Cold Brew를 활용한 음료.',0),(8,1,'콜드 브루','스타벅스 바리스타의 정성으로 탄생한 콜드 브루!\n콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 한정된 양만 제공됩니다.\n깊은 풍미의 새로운 커피 경험을 즐겨보세요.',0),(9,1,'콜드 브루 몰트','[리저브 전용음료] 리저브 콜드 브루, 바닐라 아이스크림, 몰트가 블렌딩된 리저브만의 쉐이크',0),(10,1,'콜드 브루 오트 라떼','콜드 브루의 풍미와 깔끔한 오트 밀크가 어우러진 달콤 고소한 라떼.\n식물성 밀크를 사용해 모든 고객이 부담없이 즐길 수 있는 콜드 브루 음료',0);
/*!40000 ALTER TABLE `drinks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL,
  `drinks_id` int DEFAULT NULL,
  `images_url` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `drinks_id` (`drinks_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`drinks_id`) REFERENCES `drinks` (`id`),
  CONSTRAINT `images_ibfk_2` FOREIGN KEY (`drinks_id`) REFERENCES `drinks` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg'),(2,2,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg'),(3,3,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg'),(4,4,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg'),(5,5,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg'),(6,6,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg'),(7,7,'https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg'),(8,8,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg'),(9,9,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg'),(10,10,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrients`
--j

DROP TABLE IF EXISTS `nutrients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrients` (
  `id` int NOT NULL,
  `drinks_id` int DEFAULT NULL,
  `calories` double DEFAULT NULL,
  `natrium` double DEFAULT NULL,
  `fat` double DEFAULT NULL,
  `sugars` double DEFAULT NULL,
  `protain` double DEFAULT NULL,
  `caffeine` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrients`
--

LOCK TABLES `nutrients` WRITE;
/*!40000 ALTER TABLE `nutrients` DISABLE KEYS */;
INSERT INTO `nutrients` VALUES (1,1,25,50,0,0,0,680),(2,2,75,20,2,10,1,245),(3,3,5,5,0,0,0,245),(4,4,265,115,9,29,8,150),(5,5,125,58,6,11,3,150),(6,6,150,15,6,17,2,160),(7,7,340,115,8,44,10,105),(8,8,5,11,0,0,0,150),(9,9,510,147.8,20,40,10,150),(10,10,105,95,0.3,11,1,65);
/*!40000 ALTER TABLE `nutrients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-15 18:48:29
