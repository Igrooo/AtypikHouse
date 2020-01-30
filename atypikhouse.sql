-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 30 Janvier 2020 à 03:31
-- Version du serveur :  5.7.29-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Structure de la table `ah_activities`
--

CREATE TABLE `ah_activities` (
  `ID` int(10) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `locationLat` float NOT NULL,
  `locationLng` float NOT NULL,
  `listID_tags` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ID_type` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_activities`
--

INSERT INTO `ah_activities` (`ID`, `title`, `description`, `locationLat`, `locationLng`, `listID_tags`, `ID_type`) VALUES
(1, 'Barques sur le lac', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Aliquam vestibulum morbi blandit cursus risus at ultrices. ', 48.2634, 1.09959, '14,18', 1),
(2, 'Mairie', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 48.2625, 1.09757, '28', 17),
(3, 'L\'Étape des Saveurs', 'Massa eget egestas purus viverra accumsan. Purus in massa tempor nec feugiat nisl. Enim nulla aliquet porttitor lacus luctus accumsan tortor.', 48.2621, 1.09884, '28,18', 6),
(7, 'Canoé-Kayak sur la rivière du Magny', 'Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Sagittis orci a scelerisque purus semper eget duis at tellus. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.', 46.7985, 3.70557, '14', 1);

-- --------------------------------------------------------

--
-- Structure de la table `ah_activities_types`
--

CREATE TABLE `ah_activities_types` (
  `ID` int(10) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_activities_types`
--

INSERT INTO `ah_activities_types` (`ID`, `title`) VALUES
(1, 'Sport nautique'),
(2, 'Bien-être'),
(3, 'Sport de plein air'),
(4, 'Jeu'),
(5, 'Sport d\'intérieur'),
(6, 'Restaurant & snack'),
(7, 'Bar & café'),
(8, 'Fitness'),
(9, 'Cinéma'),
(10, 'Théâtre'),
(11, 'Sport aérien'),
(12, 'Sport extrême'),
(13, 'Discothèque'),
(14, 'Concert'),
(15, 'Club privé'),
(16, 'Commerce'),
(17, 'Service'),
(18, 'Ballade'),
(19, 'Monument');

-- --------------------------------------------------------

--
-- Structure de la table `ah_booking`
--

CREATE TABLE `ah_booking` (
  `ID` int(10) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `nbPersons` int(2) NOT NULL,
  `date` date NOT NULL,
  `dateStart` date NOT NULL,
  `dateEnd` date NOT NULL,
  `ID_user` int(10) NOT NULL,
  `ID_house` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_booking`
--

INSERT INTO `ah_booking` (`ID`, `status`, `nbPersons`, `date`, `dateStart`, `dateEnd`, `ID_user`, `ID_house`) VALUES
(2, 2, 4, '2019-08-20', '2019-09-10', '2019-09-13', 4, 1),
(4, 2, 3, '2019-09-15', '2019-09-18', '2019-09-22', 5, 1),
(12, 0, 2, '2019-12-18', '2019-12-25', '2019-12-29', 1, 1),
(14, 0, 2, '2019-12-18', '2019-12-30', '2020-01-02', 1, 1),
(15, 1, 3, '2019-12-18', '2020-01-16', '2020-01-17', 1, 1),
(24, 1, 2, '2019-12-18', '2020-01-01', '2020-01-03', 1, 1),
(25, 1, 3, '2020-01-23', '2020-01-25', '2020-01-27', 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `ah_categories`
--

CREATE TABLE `ah_categories` (
  `ID` int(10) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_categories`
--

INSERT INTO `ah_categories` (`ID`, `title`, `description`) VALUES
(1, 'Cabane dans les arbres', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem vitae odio finibus fermentum quis ac magna. Etiam nec maximus elit, vel elementum magna. Cras tristique interdum quam, faucibus molestie nulla porttitor eu. Sed malesuada posuere ullamcorper. Mauris congue erat tempus sem hendrerit lobortis. Nulla eu diam tempus, accumsan nibh at, suscipit metus. Ut a tincidunt eros. Phasellus euismod tortor a nisl laoreet sollicitudin. '),
(2, 'Cabane', 'Cras ac scelerisque elit, sit amet efficitur risus. Quisque rhoncus orci vel ante tincidunt malesuada. Phasellus ex quam, porttitor eu dolor sed, ornare mattis nisl. Aenean non leo quis massa ultrices cursus. Praesent feugiat blandit sem, eget mattis quam tempus at. Morbi at luctus elit. Nullam vitae lectus nunc. Maecenas vel rhoncus felis. Etiam at bibendum neque, vel tincidunt tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed gravida libero nulla, vel elementum nunc laoreet non. Duis iaculis nibh sit amet mauris viverra hendrerit. Etiam malesuada eget metus iaculis egestas. Duis lobortis sagittis magna eu euismod. '),
(3, 'Tente et tente lodge', 'Vivamus in dignissim lacus. Mauris tincidunt lectus sed purus tristique tempus. Pellentesque sollicitudin ligula quis lobortis imperdiet. Donec in metus molestie, blandit orci eleifend, rutrum nisi. Praesent nec rutrum tellus. Nulla varius nibh non nibh fermentum molestie. Praesent condimentum orci vitae magna venenatis, quis facilisis nulla condimentum. Mauris egestas ex eros, nec faucibus justo convallis at. Donec augue augue, imperdiet non pharetra at, tincidunt eu massa. '),
(4, 'Cabane sur pilotis', 'Duis libero sem, blandit ac mi eget, tincidunt sagittis tellus. Maecenas maximus tellus nec justo auctor viverra ac at massa. Duis sed tellus eget tortor tempus hendrerit id sed enim. Etiam ligula ante, lacinia vel pharetra et, hendrerit ac eros. Pellentesque pretium commodo luctus. Quisque vitae mi eget est efficitur mattis a id libero. Duis in magna rutrum, tempor eros nec, pretium quam. Etiam eget tempor nisi. Phasellus gravida ex ornare mauris euismod, porta auctor metus aliquam. Nunc finibus massa ac convallis iaculis. Etiam laoreet ex ex, hendrerit aliquet leo aliquet vel. Aenean fermentum eros in lobortis pretium. '),
(5, 'Roulotte', 'Sed sagittis neque a condimentum aliquam. Donec ut elit faucibus, tempus sem id, dignissim mauris. Aliquam id convallis justo. Cras bibendum mauris dui, sit amet eleifend risus mattis nec. Proin convallis lacus sed sagittis dapibus. Vivamus ut nisl sit amet sapien vulputate convallis eu nec dolor. Nullam vel tortor a ex lobortis viverra non sed sapien. Maecenas sit amet nisi est. Nullam ipsum risus, cursus eget leo nec, tincidunt tempor enim. Donec sed condimentum nibh. In sit amet sem nibh. Sed vitae condimentum augue. Fusce venenatis mi quam, sed scelerisque sem vestibulum mollis. Donec quis nisi a quam imperdiet bibendum. Nam consequat varius ligula, non efficitur mauris lobortis a. Fusce pellentesque tincidunt purus in interdum. '),
(6, 'Bulle', 'Suspendisse metus dui, mollis ut ornare at, vestibulum a felis. In hendrerit dolor arcu, ut rutrum urna fermentum rhoncus. Donec mattis risus ut felis iaculis, nec commodo dolor ullamcorper. Nunc nisl orci, porta ac molestie nec, rhoncus quis risus. Sed suscipit viverra urna et fermentum. Aliquam purus mauris, aliquet vitae placerat at, iaculis vitae nisl. Cras a dui arcu. Pellentesque dignissim molestie nisi, tempus interdum purus elementum sit amet. Pellentesque vel justo nec massa consectetur consequat. Curabitur semper odio quis maximus rutrum. Vestibulum id ligula ullamcorper, aliquam massa a, tincidunt ipsum. '),
(7, 'Yourte', 'Duis at magna id odio elementum bibendum ac non ipsum. Vivamus finibus eros eget quam pulvinar, in commodo nulla laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum eget orci eget mauris hendrerit aliquam. Praesent at leo ut nisl rutrum varius. Pellentesque pretium sed orci et tincidunt. Aenean condimentum mattis nulla, et semper justo vulputate non. '),
(8, 'Maison sur l\'eau', 'Proin porttitor massa tortor, a congue quam tristique vitae. Vestibulum tempor imperdiet urna, at efficitur tortor dapibus eu. Donec semper mi et eleifend feugiat. Donec at lacinia velit. Ut consectetur scelerisque nibh a cursus. Cras scelerisque congue eleifend. Ut egestas sagittis purus, a tempus enim convallis a. Proin ac lectus vel mauris rhoncus laoreet. '),
(9, 'Inclassable', 'Aliquam tempus nibh arcu. Pellentesque accumsan augue mi, id molestie arcu molestie ac. Proin et ipsum eget quam placerat porta. Quisque porttitor eros eget viverra iaculis. Proin ullamcorper faucibus nibh ut euismod. Quisque nec sollicitudin dui. Nullam nec dolor a massa facilisis mattis. '),
(10, 'Dôme', 'Sed porta odio in elit dapibus, ut pharetra nisl blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rhoncus malesuada odio, et semper purus. Nullam a efficitur metus. Praesent ornare ligula turpis, nec sollicitudin eros consequat ac. Praesent ullamcorper finibus mauris vitae pretium. Maecenas ligula nibh, consequat vel arcu sed, fermentum tristique lorem. Vivamus ipsum lacus, tempor eu scelerisque nec, gravida id nisi. Sed ac diam orci. '),
(11, 'Chalet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Aliquam vestibulum morbi blandit cursus risus at ultrices.'),
(12, 'Tente suspendue', 'Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Scelerisque in dictum non consectetur a erat nam at lectus. Nunc mi ipsum faucibus vitae. Pharetra pharetra massa massa ultricies mi. Senectus et netus et malesuada fames ac.'),
(13, 'Tipi', 'Enim nulla aliquet porttitor lacus luctus accumsan tortor. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Sagittis orci a scelerisque purus semper eget duis at tellus. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.'),
(14, 'Tonneau', 'Sit amet cursus sit amet dictum. Convallis tellus id interdum velit laoreet id donec ultrices. Quis auctor elit sed vulputate.'),
(15, 'Bateau', 'Ultrices in iaculis nunc sed augue lacus viverra. Nisi vitae suscipit tellus mauris a. Arcu odio ut sem nulla. Viverra vitae congue eu consequat ac felis donec et.'),
(16, 'Tiny House', 'Velit euismod in pellentesque massa placerat. Sem et tortor consequat id porta nibh venenatis cras. Nisl tincidunt eget nullam non nisi est sit amet.'),
(17, 'Maison troglodyte', 'Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Eros in cursus turpis massa tincidunt. '),
(18, 'Chambre à thème', 'Odio tempor orci dapibus ultrices in. Sed ullamcorper morbi tincidunt ornare. Urna et pharetra pharetra massa massa.'),
(19, 'Igloo', 'Viverra nam libero justo laoreet sit amet cursus sit. Pulvinar pellentesque habitant morbi tristique. Elit ut aliquam purus sit amet luctus.'),
(20, 'Caravane & Airstream', 'Pharetra vel turpis nunc eget lorem dolor sed. Et molestie ac feugiat sed. Pulvinar proin gravida hendrerit lectus. ');

-- --------------------------------------------------------

--
-- Structure de la table `ah_comments`
--

CREATE TABLE `ah_comments` (
  `ID` int(10) NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `rating` int(1) NOT NULL,
  `date` date NOT NULL,
  `ID_user` int(11) NOT NULL,
  `ID_booking` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_comments`
--

INSERT INTO `ah_comments` (`ID`, `comment`, `rating`, `date`, `ID_user`, `ID_booking`) VALUES
(1, 'Nice !', 5, '2019-09-16', 4, 2),
(2, 'Très agréable', 4, '2019-09-18', 5, 4);

-- --------------------------------------------------------

--
-- Structure de la table `ah_houses`
--

CREATE TABLE `ah_houses` (
  `ID` int(10) NOT NULL,
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
  `ID_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_houses`
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

-- --------------------------------------------------------

--
-- Structure de la table `ah_payments`
--

CREATE TABLE `ah_payments` (
  `ID` int(10) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `amount` float NOT NULL,
  `date` date NOT NULL,
  `ID_user` int(10) NOT NULL,
  `ID_booking` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_payments`
--

INSERT INTO `ah_payments` (`ID`, `status`, `amount`, `date`, `ID_user`, `ID_booking`) VALUES
(1, 2, 937.2, '2019-08-20', 4, 2),
(2, 2, 703.2, '2019-09-15', 5, 4),
(4, 1, 1872, '2019-12-18', 1, 12),
(8, 1, 1404, '2019-12-18', 1, 14),
(9, 1, 936, '2019-12-18', 1, 24),
(10, 1, 1404, '2020-01-23', 2, 25);

-- --------------------------------------------------------

--
-- Structure de la table `ah_pics`
--

CREATE TABLE `ah_pics` (
  `ID` int(10) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_pics`
--

INSERT INTO `ah_pics` (`ID`, `title`, `date`) VALUES
(4, 'Vue extérieur', '2019-08-01'),
(5, 'Intérieur', '2019-08-01'),
(6, 'Le champ avec les chèvres ! (Merci de ne pas nourrir les animaux)', '2019-08-01'),
(7, 'Les tentes', '2019-08-01');

-- --------------------------------------------------------

--
-- Structure de la table `ah_posts`
--

CREATE TABLE `ah_posts` (
  `ID` int(10) NOT NULL,
  `date` datetime NOT NULL,
  `message` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ID_house` int(10) NOT NULL,
  `ID_userFrom` int(11) NOT NULL,
  `ID_userTo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_posts`
--

INSERT INTO `ah_posts` (`ID`, `date`, `message`, `ID_house`, `ID_userFrom`, `ID_userTo`) VALUES
(1, '2019-08-01 09:14:15', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet urna velit.', 1, 3, 2),
(2, '2019-08-02 10:00:29', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet urna velit.', 1, 2, 3);

-- --------------------------------------------------------

--
-- Structure de la table `ah_tags`
--

CREATE TABLE `ah_tags` (
  `ID` int(10) NOT NULL,
  `type` tinyint(1) NOT NULL,
  `tag` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_tags`
--

INSERT INTO `ah_tags` (`ID`, `type`, `tag`) VALUES
(10, 0, 'Fôret'),
(11, 0, 'Montagne'),
(12, 0, 'Campagne'),
(13, 0, 'Mer'),
(14, 0, 'Étangs & lacs'),
(15, 0, 'Fantasy'),
(16, 0, 'Romantique'),
(17, 0, 'Spa privatif'),
(18, 0, 'Familial'),
(19, 0, 'Luxueux'),
(20, 0, 'Glamping'),
(21, 0, 'Bord de mer'),
(28, 1, 'Wifi'),
(29, 1, 'Piscine privée'),
(30, 1, 'Télévision'),
(31, 1, 'Cuisine'),
(32, 1, 'Climatisation'),
(33, 1, 'Animaux acceptés');

-- --------------------------------------------------------

--
-- Structure de la table `ah_users`
--

CREATE TABLE `ah_users` (
  `ID` int(10) NOT NULL,
  `type` tinyint(1) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `zipcode` int(5) NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `siret` bigint(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `ah_users`
--

INSERT INTO `ah_users` (`ID`, `type`, `email`, `password`, `name`, `firstname`, `address`, `zipcode`, `city`, `siret`) VALUES
(1, 0, 'contact@atypikhouse.com', 'pass', 'Belle-Maison (Admin)', 'Géraldine', '12 avenue des Jardins', 60350, 'Pierrefonds', 12349876465432),
(2, 1, 'user1@atypikhouse.com', 'pass', '1', 'User', '12 avenue des Jardins', 60350, 'Pierrefonds', 98764654321234),
(3, 1, 'user2@atypikhouse.com', 'pass', '2', 'User', '12 avenue des Jardins', 60350, 'Pierrefonds', 46543498763212),
(4, 1, 'user3@atypikhouse.com', 'pass', '3', 'User', '12 avenue des Jardins', 60350, 'Pierrefonds', 87632124654349),
(5, 1, 'user4@atypikhouse.com', 'pass', '4', 'User', '12 avenue des Jardins', 60350, 'Pierrefonds', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `ah_activities`
--
ALTER TABLE `ah_activities`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_type` (`ID_type`) USING BTREE;

--
-- Index pour la table `ah_activities_types`
--
ALTER TABLE `ah_activities_types`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `ah_booking`
--
ALTER TABLE `ah_booking`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ah_booking_id_house` (`ID_house`),
  ADD KEY `ah_booking_id_user` (`ID_user`);

--
-- Index pour la table `ah_categories`
--
ALTER TABLE `ah_categories`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `ah_comments`
--
ALTER TABLE `ah_comments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ah_comment_id_user` (`ID_user`),
  ADD KEY `ah_comment_id_booking` (`ID_booking`);

--
-- Index pour la table `ah_houses`
--
ALTER TABLE `ah_houses`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ah_house_id_user` (`ID_user`),
  ADD KEY `ah_house_id_category` (`ID_category`);

--
-- Index pour la table `ah_payments`
--
ALTER TABLE `ah_payments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ah_payment_id_user` (`ID_user`),
  ADD KEY `ah_payment_id_booking` (`ID_booking`);

--
-- Index pour la table `ah_pics`
--
ALTER TABLE `ah_pics`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `ah_posts`
--
ALTER TABLE `ah_posts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ah_post_id_user_from` (`ID_userFrom`),
  ADD KEY `ah_post_id_user_to` (`ID_userTo`),
  ADD KEY `ah_post_id_house` (`ID_house`);

--
-- Index pour la table `ah_tags`
--
ALTER TABLE `ah_tags`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `ah_users`
--
ALTER TABLE `ah_users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `ah_activities`
--
ALTER TABLE `ah_activities`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `ah_activities_types`
--
ALTER TABLE `ah_activities_types`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT pour la table `ah_booking`
--
ALTER TABLE `ah_booking`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT pour la table `ah_categories`
--
ALTER TABLE `ah_categories`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT pour la table `ah_comments`
--
ALTER TABLE `ah_comments`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `ah_houses`
--
ALTER TABLE `ah_houses`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT pour la table `ah_payments`
--
ALTER TABLE `ah_payments`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `ah_pics`
--
ALTER TABLE `ah_pics`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `ah_posts`
--
ALTER TABLE `ah_posts`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `ah_tags`
--
ALTER TABLE `ah_tags`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT pour la table `ah_users`
--
ALTER TABLE `ah_users`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `ah_activities`
--
ALTER TABLE `ah_activities`
  ADD CONSTRAINT `ah_activity_id_type` FOREIGN KEY (`ID_type`) REFERENCES `ah_activities_types` (`ID`);

--
-- Contraintes pour la table `ah_booking`
--
ALTER TABLE `ah_booking`
  ADD CONSTRAINT `ah_booking_id_house` FOREIGN KEY (`ID_house`) REFERENCES `ah_houses` (`ID`),
  ADD CONSTRAINT `ah_booking_id_user` FOREIGN KEY (`ID_user`) REFERENCES `ah_users` (`ID`);

--
-- Contraintes pour la table `ah_comments`
--
ALTER TABLE `ah_comments`
  ADD CONSTRAINT `ah_comment_id_booking` FOREIGN KEY (`ID_booking`) REFERENCES `ah_booking` (`ID`),
  ADD CONSTRAINT `ah_comment_id_user` FOREIGN KEY (`ID_user`) REFERENCES `ah_users` (`ID`);

--
-- Contraintes pour la table `ah_houses`
--
ALTER TABLE `ah_houses`
  ADD CONSTRAINT `ah_house_id_category` FOREIGN KEY (`ID_category`) REFERENCES `ah_categories` (`ID`),
  ADD CONSTRAINT `ah_house_id_user` FOREIGN KEY (`ID_user`) REFERENCES `ah_users` (`ID`);

--
-- Contraintes pour la table `ah_payments`
--
ALTER TABLE `ah_payments`
  ADD CONSTRAINT `ah_payment_id_booking` FOREIGN KEY (`ID_booking`) REFERENCES `ah_booking` (`ID`),
  ADD CONSTRAINT `ah_payment_id_user` FOREIGN KEY (`ID_user`) REFERENCES `ah_users` (`ID`);

--
-- Contraintes pour la table `ah_posts`
--
ALTER TABLE `ah_posts`
  ADD CONSTRAINT `ah_post_id_house` FOREIGN KEY (`ID_house`) REFERENCES `ah_houses` (`ID`),
  ADD CONSTRAINT `ah_post_id_user_from` FOREIGN KEY (`ID_userFrom`) REFERENCES `ah_users` (`ID`),
  ADD CONSTRAINT `ah_post_id_user_to` FOREIGN KEY (`ID_userTo`) REFERENCES `ah_users` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
