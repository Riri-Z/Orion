
-- -----------------------------------------------------
-- Schema orion_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `orion_db` ;
USE `orion_db` ;


-- -----------------------------------------------------
-- Table `orion_db`.`gender_gen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gender_gen` (
  `id_gen` INT NOT NULL AUTO_INCREMENT,
  `gen_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_gen`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`user_usr`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_usr` (
  `id_usr` INT NOT NULL AUTO_INCREMENT,
  `usr_firstname` VARCHAR(45) NOT NULL,
  `usr_lastname` VARCHAR(45) NOT NULL,
  `usr_email` VARCHAR(255) NOT NULL,
  `usr_password` VARCHAR(255) NOT NULL,
  `usr_birthDate` DATE NOT NULL,
  `usr_createdAt` DATE NOT NULL,
  `usr_updatedAt` DATE NULL,
  `usr_avatar` VARCHAR(255) NULL,
  `id_gen` INT NULL,
  PRIMARY KEY (`id_usr`),
  FOREIGN KEY (`id_gen`) REFERENCES `gender_gen` (`id_gen`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`role_rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `role_rol` (
  `id_rol` INT NOT NULL AUTO_INCREMENT,
  `rol_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_rol`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`role_user_rus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `role_user_rus` (
  `id_rus` INT NOT NULL AUTO_INCREMENT,
  `id_rol` INT NOT NULL,
  `id_usr` INT NOT NULL,
  PRIMARY KEY (`id_rus`),
  FOREIGN KEY (`id_rol`) REFERENCES `role_rol` (`id_rol`),
  FOREIGN KEY (`id_usr`) REFERENCES `user_usr` (`id_usr`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`notification_noc`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notification_noc` (
  `id_noc` INT NOT NULL AUTO_INCREMENT,
  `noc_title` VARCHAR(45) NOT NULL,
  `noc_content` VARCHAR(255) NOT NULL,
  `noc_readAt` DATE NULL,
  `noc_createdAt` DATE NOT NULL,
  `noc_receiver` INT NOT NULL,
  `noc_emitter` INT NOT NULL,
  PRIMARY KEY (`id_noc`),
  FOREIGN KEY (`noc_receiver`) REFERENCES `user_usr` (`id_usr`),
  FOREIGN KEY (`noc_emitter`) REFERENCES `user_usr` (`id_usr`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`group_grp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `group_grp` (
  `id_grp` INT NOT NULL AUTO_INCREMENT,
  `grp_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_grp`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`group_user_gru`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `group_user_gru` (
  `id_gru` INT NOT NULL AUTO_INCREMENT,
  `id_usr` INT NOT NULL,
  `id_grp` INT NOT NULL,
  PRIMARY KEY (`id_gru`),
  FOREIGN KEY (`id_usr`) REFERENCES `user_usr` (`id_usr`),
  FOREIGN KEY (`id_grp`) REFERENCES `group_grp` (`id_grp`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`message_mes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `message_mes` (
  `id_mes` INT NOT NULL AUTO_INCREMENT,
  `mes_content` TEXT NOT NULL,
  `mes_createdAt` DATE NOT NULL,
  `mes_readAt` DATE NULL,
  `mes_emitter` INT NOT NULL,
  `mes_receiver` INT NOT NULL,
  PRIMARY KEY (`id_mes`),
  FOREIGN KEY (`mes_emitter`) REFERENCES `user_usr` (`id_usr`),
  FOREIGN KEY (`mes_receiver`) REFERENCES `user_usr` (`id_usr`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`block_blo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `block_blo` (
  `id_blo` INT NOT NULL AUTO_INCREMENT,
  `blo_createdAt` DATE NOT NULL,
  `blo_emitter` INT NOT NULL,
  `blo_receiver` INT NOT NULL,
  PRIMARY KEY (`id_blo`),
  FOREIGN KEY (`blo_emitter`) REFERENCES `user_usr` (`id_usr`),
  FOREIGN KEY (`blo_receiver`) REFERENCES `user_usr` (`id_usr`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`like_lik`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `like_lik` (
  `id_lik` INT NOT NULL AUTO_INCREMENT,
  `lik_createdAt` DATE NOT NULL,
  `id_usr` INT NOT NULL,
  `id_pos` INT NOT NULL,
  PRIMARY KEY (`id_lik`)
  FOREIGN KEY (`id_usr`) REFERENCES `user_usr` (`id_usr`)
  FOREIGN KEY (`id_pos`) REFERENCES `post_pos` (`id_pos`)) ENGINE = InnoDB;
  
  ALTER TABLE `like_lik` ADD UNIQUE unique_index('id_usr', 'id_pos')


-- -----------------------------------------------------
-- Table `orion_db`.`badge_bab`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `badge_bab` (
  `id_bab` INT NOT NULL AUTO_INCREMENT,
  `bab_name` VARCHAR(45) NOT NULL,
  `bab_description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_bab`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`user_badge_usb`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_badge_usb` (
  `id_usb` INT NOT NULL AUTO_INCREMENT,
  `id_usr` INT NOT NULL,
  `id_bab` INT NOT NULL,
  PRIMARY KEY (`id_usb`),
  FOREIGN KEY (`id_usr`) REFERENCES `user_usr` (`id_usr`),
  FOREIGN KEY (`id_bab`) REFERENCES `badge_bab` (`id_bab`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`exam_exa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `exam_exa` (
  `id_exa` INT NOT NULL AUTO_INCREMENT,
  `exa_title` VARCHAR(45) NOT NULL,
  `exa_cover` VARCHAR(255) NOT NULL,
  `exa_createdAt` DATE NOT NULL,
  `exa_publishedAt` DATE NULL,
  `exa_updatedAt` DATE NULL,
  `exa_deletedAt` DATE NULL,
  `id_usr` INT NOT NULL,
  PRIMARY KEY (`id_exa`),
  FOREIGN KEY (`id_usr`) REFERENCES `user_usr` (`id_usr`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`question_que`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `question_que` (
  `id_que` INT NOT NULL AUTO_INCREMENT,
  `que_content` VARCHAR(255) NOT NULL,
  `id_exa` INT NOT NULL,
  PRIMARY KEY (`id_que`),
  FOREIGN KEY (`id_exa`) REFERENCES `exam_exa` (`id_exa`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`answer_ans`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `answer_ans` (
  `id_ans` INT NOT NULL AUTO_INCREMENT,
  `ans_istrue` TINYINT NOT NULL,
  `ans_content` VARCHAR(255) NOT NULL,
  `id_exa` INT NOT NULL,
  PRIMARY KEY (`id_ans`),
  FOREIGN KEY (`id_exa`) REFERENCES `exam_exa` (`id_exa`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`funfact_fun`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `funfact_fun` (
  `id_fun` INT NOT NULL AUTO_INCREMENT,
  `fun_content` VARCHAR(255) NOT NULL,
  `id_ans` INT NOT NULL,
  PRIMARY KEY (`id_fun`),
  FOREIGN KEY (`id_ans`) REFERENCES `answer_ans` (`id_ans`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`choice_cho`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `choice_cho` (
  `id_cho` INT NOT NULL AUTO_INCREMENT,
  `id_que` INT NOT NULL,
  `id_ans` INT NOT NULL,
  `id_exa` INT NOT NULL,
  `id_usr` INT NOT NULL,
  PRIMARY KEY (`id_cho`),
  FOREIGN KEY (`id_que`) REFERENCES `question_que` (`id_que`),
  FOREIGN KEY (`id_ans`) REFERENCES `answer_ans` (`id_ans`),
  FOREIGN KEY (`id_exa`) REFERENCES `exam_exa` (`id_exa`),
  FOREIGN KEY (`id_usr`) REFERENCES `user_usr` (`id_usr`)) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `orion_db`.`post_pos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `post_pos` (
  `id_pos` INT NOT NULL AUTO_INCREMENT,
  `pos_content` TEXT NOT NULL,
  `pos_createdAt` INT NOT NULL,
  `pos_updateAd` DATE NULL,
  `pos_deletedAt` DATE NULL,
  `id_exa` INT NULL,
  `id_parent` INT NULL,
  `id_usr` INT NOT NULL,
  PRIMARY KEY (`id_pos`),
  FOREIGN KEY (`id_exa`) REFERENCES `exam_exa` (`id_exa`),
  FOREIGN KEY (`id_parent`) REFERENCES `post_pos`(`id_pos`),
  FOREIGN KEY (`id_usr`) REFERENCES `user_usr` (`id_usr`)) ENGINE = InnoDB;
