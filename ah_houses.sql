-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 14 fév. 2020 à 14:42
-- Version du serveur :  5.7.21
-- Version de PHP :  5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `atypikhouse`
--

-- --------------------------------------------------------

--
-- Structure de la table `ah_houses`
--

DROP TABLE IF EXISTS `ah_houses`;
CREATE TABLE IF NOT EXISTS `ah_houses` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `zipcode` int(5) NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `nbBeds` int(3) NOT NULL,
  `price` int(3) NOT NULL,
  `tax` int(2) NOT NULL,
  `listID_activities` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `listID_tags` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `listID_pics` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ID_user` int(11) NOT NULL,
  `ID_category` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ah_house_id_user` (`ID_user`),
  KEY `ah_house_id_category` (`ID_category`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `ah_houses`
--

INSERT INTO `ah_houses` (`ID`, `title`, `description`, `address`, `zipcode`, `city`, `status`, `nbBeds`, `price`, `tax`, `listID_activities`, `listID_tags`, `listID_pics`, `ID_user`, `ID_category`) VALUES
(1, 'Ferme aménagée', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tortor nibh. Praesent scelerisque pellentesque velit, sit amet faucibus magna ultricies et. Nam enim dolor, pulvinar at arcu non, lobortis convallis nibh. Aenean accumsan auctor risus, sit amet eleifend tellus scelerisque vitae. Vestibulum rhoncus aliquet ligula, in maximus magna ullamcorper non. Pellentesque neque diam, tincidunt vel egestas nec, feugiat eget augue. Ut egestas lobortis dui quis efficitur. ', '10 Rue du 19 Mars 1962', 28160, 'Frazé', 2, 10, 213, 10, '1,2,3', '12,18,30,31,33', '4,5,6', 2, 16),
(2, 'Tentes suspendues en pleine fôrét', 'Viverra vitae congue eu consequat. Metus vulputate eu scelerisque felis imperdiet. Ultrices in iaculis nunc sed augue lacus viverra. Nisi vitae suscipit tellus mauris a. Arcu odio ut sem nulla. Viverra vitae congue eu consequat ac felis donec et.', 'Champs de Beau', 58250, 'Fours', 2, 2, 85, 10, '7', '10,16', '7', 3, 12),
(3, 'Cabane dans les arbres', 'Venez dormir suspendu', '48  avenue de Provence', 54500, 'Lorraine', 2, 2, 149, 10, '0', '0', '0', 4, 1),
(4, 'Maison bulle', 'Venez dormir sous les étoiles', '48  avenue de Provence', 54500, 'Vandoeuvre-Lès-Nancy\r\n', 2, 3, 75, 10, '0', '0', '0', 2, 6),
(5, 'Tipi', 'Venez apprendre la vie des peaux rouges', '119  Chemin Du Lavarin Sud', 62100, 'Calais', 2, 2, 250, 10, '0', '0', '0', 2, 13),
(6, 'Duplex les pieds dans l\'eau', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '38  rue Cazade', 59140, 'Dunkerque', 2, 6, 240, 10, '0', '0', '0', 3, 8),
(7, 'Roulotte aménagée', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '135  rue Beauvau', 13003, 'Marseille', 2, 2, 55, 10, '0', '0', '0', 4, 5),
(8, 'Tonneau aménagé', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '90  cours Jean Jaures', 33200, 'Bordeaux', 0, 2, 75, 10, '0', '0', '0', 4, 14),
(9, 'Maison troglodyte', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '87  rue des Chaligny', 6300, 'Nice', 1, 8, 100, 10, '0', '0', '0', 2, 17),
(10, 'Cabane sur pilotis ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '61  rue des Chaligny', 6000, 'Nice', 2, 2, 120, 10, '0', '0', '0', 4, 4);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ah_houses`
--
ALTER TABLE `ah_houses`
  ADD CONSTRAINT `ah_house_id_category` FOREIGN KEY (`ID_category`) REFERENCES `ah_categories` (`ID`),
  ADD CONSTRAINT `ah_house_id_user` FOREIGN KEY (`ID_user`) REFERENCES `ah_users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
