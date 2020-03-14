/*
Navicat MySQL Data Transfer

Source Server         : HW
Source Server Version : 50728
Source Host           : localhost:3306
Source Database       : infectsaticdb

Target Server Type    : MYSQL
Target Server Version : 50728
File Encoding         : 65001

Date: 2020-03-12 21:00:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `details`
-- ----------------------------
DROP TABLE IF EXISTS `details`;
CREATE TABLE `details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `update_time` date DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `confirm` int(11) DEFAULT NULL,
  `confirm_add` int(11) DEFAULT NULL,
  `heal` int(11) DEFAULT NULL,
  `dead` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of details
-- ----------------------------

-- ----------------------------
-- Table structure for `history`
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `ds` date NOT NULL,
  `confirm` int(11) DEFAULT NULL,
  `confirm_add` int(11) DEFAULT NULL,
  `suspect` int(11) DEFAULT NULL,
  `suspect_add` int(11) DEFAULT NULL,
  `heal` int(11) DEFAULT NULL,
  `heal_add` int(11) DEFAULT NULL,
  `dead` int(11) DEFAULT NULL,
  `dead_add` int(11) DEFAULT NULL,
  PRIMARY KEY (`ds`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of history
-- ----------------------------
INSERT INTO `history` VALUES ('2020-01-13', '41', null, '0', null, '0', null, '1', null);
INSERT INTO `history` VALUES ('2020-01-14', '41', null, '0', null, '0', null, '1', null);
INSERT INTO `history` VALUES ('2020-01-15', '41', null, '0', null, '5', null, '2', null);
INSERT INTO `history` VALUES ('2020-01-16', '45', null, '0', null, '8', null, '2', null);
INSERT INTO `history` VALUES ('2020-01-17', '62', null, '0', null, '12', null, '2', null);
INSERT INTO `history` VALUES ('2020-01-18', '198', null, '0', null, '17', null, '3', null);
INSERT INTO `history` VALUES ('2020-01-19', '275', null, '0', null, '18', null, '4', null);
INSERT INTO `history` VALUES ('2020-01-20', '291', '77', '54', '27', '25', '0', '6', '0');
INSERT INTO `history` VALUES ('2020-01-21', '440', '149', '37', '53', '25', '0', '9', '3');
INSERT INTO `history` VALUES ('2020-01-22', '574', '131', '393', '257', '25', '0', '17', '8');
INSERT INTO `history` VALUES ('2020-01-23', '835', '259', '1072', '680', '34', '6', '25', '8');
INSERT INTO `history` VALUES ('2020-01-24', '1297', '444', '1965', '1118', '38', '3', '41', '16');
INSERT INTO `history` VALUES ('2020-01-25', '1985', '688', '2684', '1309', '49', '11', '56', '15');
INSERT INTO `history` VALUES ('2020-01-26', '2761', '769', '5794', '3806', '51', '2', '80', '24');
INSERT INTO `history` VALUES ('2020-01-27', '4535', '1771', '6973', '2077', '60', '9', '106', '26');
INSERT INTO `history` VALUES ('2020-01-28', '5997', '1459', '9239', '3248', '103', '43', '132', '26');
INSERT INTO `history` VALUES ('2020-01-29', '7736', '1737', '12167', '4148', '124', '21', '170', '38');
INSERT INTO `history` VALUES ('2020-01-30', '9720', '1982', '15238', '4812', '171', '47', '213', '43');
INSERT INTO `history` VALUES ('2020-01-31', '11821', '2102', '17988', '5019', '243', '72', '259', '46');
INSERT INTO `history` VALUES ('2020-02-01', '14411', '2590', '19544', '4562', '328', '85', '304', '45');
INSERT INTO `history` VALUES ('2020-02-02', '17238', '2829', '21558', '5173', '475', '147', '361', '57');
INSERT INTO `history` VALUES ('2020-02-03', '20471', '3235', '23214', '5072', '632', '157', '425', '64');
INSERT INTO `history` VALUES ('2020-02-04', '24363', '3893', '23260', '3971', '892', '262', '491', '65');
INSERT INTO `history` VALUES ('2020-02-05', '28060', '3697', '24702', '5328', '1153', '261', '564', '73');
INSERT INTO `history` VALUES ('2020-02-06', '31211', '3143', '26359', '4833', '1542', '387', '637', '73');
INSERT INTO `history` VALUES ('2020-02-07', '34598', '3401', '27657', '4214', '2052', '510', '723', '86');
INSERT INTO `history` VALUES ('2020-02-08', '37251', '2656', '28942', '3916', '2651', '600', '812', '89');
INSERT INTO `history` VALUES ('2020-02-09', '40235', '3062', '23589', '4008', '3283', '632', '909', '97');
INSERT INTO `history` VALUES ('2020-02-10', '42708', '2484', '21675', '3536', '3998', '716', '1017', '108');
INSERT INTO `history` VALUES ('2020-02-11', '44730', '2022', '16067', '3342', '4742', '744', '1114', '97');
INSERT INTO `history` VALUES ('2020-02-12', '59882', '15153', '13435', '2807', '5915', '1173', '1368', '254');
INSERT INTO `history` VALUES ('2020-02-13', '63932', '5093', '10109', '2450', '6728', '1083', '1381', '121');
INSERT INTO `history` VALUES ('2020-02-14', '66576', '2644', '8969', '2277', '8101', '1373', '1524', '143');
INSERT INTO `history` VALUES ('2020-02-15', '68584', '2009', '8228', '1918', '9425', '1324', '1666', '142');
INSERT INTO `history` VALUES ('2020-02-16', '70635', '2051', '7264', '1563', '10853', '1425', '1772', '105');
INSERT INTO `history` VALUES ('2020-02-17', '72528', '1891', '6242', '1432', '12561', '1701', '1870', '98');
INSERT INTO `history` VALUES ('2020-02-18', '74279', '1751', '5248', '1185', '14387', '1826', '2006', '136');
INSERT INTO `history` VALUES ('2020-02-19', '75002', '820', '4922', '1277', '16157', '1781', '2121', '115');
INSERT INTO `history` VALUES ('2020-02-20', '75993', '892', '5206', '1614', '18266', '2109', '2239', '118');
INSERT INTO `history` VALUES ('2020-02-21', '76392', '399', '5365', '1361', '20673', '2394', '2348', '109');
INSERT INTO `history` VALUES ('2020-02-22', '77041', '649', '4148', '882', '22907', '2235', '2445', '97');
INSERT INTO `history` VALUES ('2020-02-23', '77262', '416', '3434', '620', '24757', '1850', '2595', '150');
INSERT INTO `history` VALUES ('2020-02-24', '77779', '517', '2824', '530', '27353', '2596', '2666', '71');
INSERT INTO `history` VALUES ('2020-02-25', '78190', '411', '2491', '439', '29775', '2422', '2718', '52');
INSERT INTO `history` VALUES ('2020-02-26', '78630', '440', '2358', '508', '32531', '2756', '2747', '29');
INSERT INTO `history` VALUES ('2020-02-27', '78959', '329', '2308', '452', '36157', '3626', '2791', '44');
INSERT INTO `history` VALUES ('2020-02-28', '79389', '430', '1418', '248', '39049', '2892', '2838', '47');
INSERT INTO `history` VALUES ('2020-02-29', '79968', '579', '851', '132', '41675', '2626', '2873', '35');
INSERT INTO `history` VALUES ('2020-03-01', '80174', '206', '715', '141', '44518', '2843', '2915', '42');
INSERT INTO `history` VALUES ('2020-03-02', '80302', '128', '587', '129', '47260', '2742', '2946', '31');
INSERT INTO `history` VALUES ('2020-03-03', '80422', '120', '520', '143', '49914', '2654', '2984', '38');
INSERT INTO `history` VALUES ('2020-03-04', '80565', '143', '522', '143', '52109', '2195', '3015', '31');
INSERT INTO `history` VALUES ('2020-03-05', '80710', '145', '482', '102', '53793', '1684', '3045', '30');
INSERT INTO `history` VALUES ('2020-03-06', '80813', '103', '502', '99', '55477', '1684', '3073', '28');
INSERT INTO `history` VALUES ('2020-03-07', '80859', '46', '458', '84', '57143', '1666', '3100', '27');
INSERT INTO `history` VALUES ('2020-03-08', '80904', '45', '421', '60', '58684', '1541', '3123', '23');
INSERT INTO `history` VALUES ('2020-03-09', '80924', '20', '349', '36', '59982', '1298', '3140', '17');
INSERT INTO `history` VALUES ('2020-03-10', '80955', '31', '285', '31', '61567', '1585', '3162', '22');
INSERT INTO `history` VALUES ('2020-03-11', '80980', '25', '253', '33', '62887', '1320', '3173', '11');
