-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2022 at 05:04 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `answer_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer` text NOT NULL,
  `indexes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`answer_id`, `question_id`, `answer`, `indexes`) VALUES
(1, 1, 'pilihan A', 1),
(2, 1, 'pilihan b', 2),
(3, 2, 'pilihan a', 3),
(4, 2, 'pilihan c', 4);

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `result` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `percentage` int(11) NOT NULL,
  `time` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `id_user`, `result`, `description`, `percentage`, `time`) VALUES
(3, 'contohid3', 'pedagang', 'pedagang kerjaannya berdagang', 0, '2022-05-09 12:50:09.000000');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`) VALUES
(1, 'apakah ini?'),
(2, 'Pertanyaan kedua?');

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `usaha` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `jenis_usaha` varchar(255) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `modal` varchar(255) NOT NULL,
  `pegiat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `usaha`, `deskripsi`, `jenis_usaha`, `kategori`, `modal`, `pegiat`) VALUES
(1, 'kelontong', 'asfasdgfvasdfgasdgf', 'UMKM', 'Dagang', '50juta', 1345);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `gender` char(1) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `dob`, `gender`, `status`) VALUES
('0', 'arif', 'asarsif@gmail.com', '2001-01-28', '', ''),
('22222222222222', 'arif', 'asarsif@gmail.com', '2001-01-28', '', ''),
('j6wJlUrJm1ZJsDlDGOIjJUrEGTa2', 'Arif Billah', 'emailcontoh9aja@mail.com', '2001-09-09', 'P', 'mahasiswa'),
('O96JYWClLzTZFMOGZmSlbH6dNwQ2', 'arif', 'emailcontoh5aja@mail.com', '2001-09-09', '', ''),
('tczMUEEDp8g1KjEynrYg6iLUWE13', 'arif', 'emailcontoh6aja@mail.com', '2001-09-09', '', ''),
('tfp4BVRSEvfui3D4HxJTL1Ei3JU2', 'arif', 'emailcontohaja@mail.com', '2001-09-09', '', ''),
('userIDdarifirebase', 'arif', 'asarsif@gmail.com', '2001-01-28', '', ''),
('vMe4mptVaBNE11Uou3BdEBSVdxl2', 'arif', 'emailcontoh3aja@mail.com', '2001-09-09', '', ''),
('weDzEmXE9QS0Q2bkeyxLaheiXwP2', 'arif', 'emailcontoh4aja@mail.com', '2001-09-09', '', ''),
('yIdvAPxWTlSrs2zot2UcPGMz0p12', 'arif', 'emailcontoh2aja@mail.com', '2001-09-09', '', ''),
('YVYhCfePCZQqSwrIvWNogH0wMfF2', 'Arif Billah', 'emailcontoh8aja@mail.com', '2001-09-09', 'P', 'mahasiswa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`answer_id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
