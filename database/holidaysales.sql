-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 08, 2019 at 12:48 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `holidaysales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `IMAGES`
--

CREATE TABLE `IMAGES` (
  `ID` int(11) NOT NULL,
  `ImageURL` varchar(255) NOT NULL,
  `ProductID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `IMAGES`
--

INSERT INTO `IMAGES` (`ID`, `ImageURL`, `ProductID`) VALUES
(1, '/images/flockedwhitetree1.jpg', 1),
(2, '/images/flockedwhitetree2.jpg', 1),
(3, '/images/flockedwhitetree3.jpg', 1),
(4, '/images/2020accessories1.jpg', 2),
(5, '/images/colorfullittree1.jpg', 3),
(6, '/images/ghostblowup1.jpg', 4),
(7, '/images/grimreaperblowup1.jpeg', 5),
(8, '/images/happynewyearacc1.jpg', 6),
(9, '/images/2020accessories2.jpg', 2),
(10, '/images/2020accessories3.jpg', 2),
(11, '/images/colorfullittree2.jpg', 3),
(12, '/images/colorfullittree3.jpg', 3),
(13, '/images/grimreaperblowup2.jpeg', 5),
(14, '/images/grimreaperblowup3.jpeg', 5),
(15, '/images/ghostblowup2.jpg', 4),
(16, '/images/ghostblowup3.jpg', 4),
(17, '/images/happynewyearacc2.jpg', 6),
(18, '/images/happynewyearacc3.jpg', 6),
(19, '/images/newyearsglasses1.jpg', 7),
(20, '/images/newyearsglasses2.jpg', 7),
(21, '/images/newyearsglasses3.jpg', 7),
(22, '/images/pumpkinbonesblowup1.jpg', 8),
(23, '/images/pumpkinbonesblowup2.jpg', 8),
(24, '/images/pumpkinbonesblowup3.jpg', 8),
(25, '/images/snowylittree1.jpg', 9),
(26, '/images/snowylittree2.jpg', 9),
(27, '/images/snowylittree3.jpg', 9);

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int(10) UNSIGNED NOT NULL,
  `Image` varchar(30) NOT NULL,
  `ShortDescription` varchar(150) NOT NULL,
  `LongDescription` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`ID`, `Name`, `Price`, `Image`, `ShortDescription`, `LongDescription`) VALUES
(1, 'Flocked White Artificial Christmas Tree', 130, '/images/flockedwhitetree1.jpg', 'Beautifully crafted white Christmas tree with 448 flocked tips, perfect holiday flocked snow x-mas tree', 'Comes with a free folding metal tree stand, for indoor use only\r\nDimensions: 6\' high (from the base of the stand to the top of the tree) 42\" base diameter (at the widest point). '),
(2, '2020 New Years Set', 80, '/images/2020accessories1.jpg', 'A black and gold party kit for 100 people.', 'The Black and Gold Party Kit for 100 people is an economical way to provide great party favors for larger New Year\'s Eve parties. This elegant party kit is packed with fun hats, noisemakers, and other party favors. Your New Year\'s Eve party will be a big hit with party favors from this kit. '),
(3, 'Colorful Light Up Christmas Tree ', 150, 'images/colorfullittree1.jpg', 'A colorful artificial Christmas tree that you can light up using your phone.', 'This 7.5 foot tree will make your life easier! Made with the quick set automated lighting system, this tree will be lit once poles are connected, making setup a breeze\r\nSetup in 5 minutes - with quick set technology, the tree will be lit once poles are connected: no more messy plugs!'),
(4, 'Ghost Blow Up', 700, 'images/ghostblowup1.jpg', 'A cute ghost blow up decoration.', 'This 5 foot tall blow up ghost is perfect for Halloween or any other occasion. '),
(5, 'Grim Reaper Blow Up', 450, 'images/grimreaperblowup1.jpeg', 'A grim reaper blow up decoration.', 'This grim reaper blow up decoration is sure to entertain you and any visitors you may have this holiday season! '),
(6, 'New Year Decoration Set', 60, 'images/happynewyearacc1.jpg', 'A New Year Decorations Set that will decorate any setting!', '2020 Happy New Year Decorations Kit include: 8pcs tissue pom poms, 2pcs paper lanterns, 2pc tissue paper honeycomb ball, 2pcs paper fans, 1pc HAPPY NEW YEAR flag bunting banner.This black white gold themed birthday party Kit is perfect for coming 2020.'),
(7, 'New Year Glasses', 24, 'images/newyearsglasses1.jpg', 'New Year stylish glasses', 'Get ready to celebrate the new year with this pair of glasses.\r\nA must have for your New Year\'s Eve celebration!\r\nWhether you are kicking it in Times Square or right in your own living room, no New Year\'s Celebration is complete without this pair of glasses.\r\nSize: 14x11x1cm / 5.5x4.3x0.4inch. Fits for kids and adult.'),
(8, 'Pumpkin Blow Up', 578, 'images/pumpkinbonesblowup1.jpg', 'A pumpkin blow up decoration.', 'This 5 foot pumpkin blow up will awe anyone who sees it!'),
(9, 'Snowy Light Up Artificial Christmas Tree', 399, '/images/snowylittree1.jpg', 'An artificial Christmas tree decoration.', 'This artificial light up Christmas tree has holly and snow. It also comes with a tree stand!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartproductid` (`productID`,`cartID`);

--
-- Indexes for table `IMAGES`
--
ALTER TABLE `IMAGES`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `IMAGES`
--
ALTER TABLE `IMAGES`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
