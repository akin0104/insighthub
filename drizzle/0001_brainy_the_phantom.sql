CREATE TABLE `activities` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int,
	`projectId` int,
	`type` varchar(80) NOT NULL,
	`summary` varchar(240) NOT NULL,
	`owner` varchar(120) NOT NULL,
	`outcome` varchar(120) NOT NULL,
	`occurredAt` timestamp NOT NULL,
	CONSTRAINT `activities_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contacts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int,
	`name` varchar(160) NOT NULL,
	`role` varchar(120) NOT NULL,
	`email` varchar(240) NOT NULL,
	`company` varchar(160) NOT NULL,
	`status` varchar(40) NOT NULL,
	`createdAt` timestamp NOT NULL,
	CONSTRAINT `contacts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `kpi_definitions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(120) NOT NULL,
	`definition` text NOT NULL,
	`dataSource` text NOT NULL,
	`calculationLogic` text NOT NULL,
	`limitation` text NOT NULL,
	`category` varchar(80) NOT NULL,
	CONSTRAINT `kpi_definitions_id` PRIMARY KEY(`id`),
	CONSTRAINT `kpi_definitions_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`company` varchar(160) NOT NULL,
	`source` varchar(80) NOT NULL,
	`stage` enum('New','Qualified','Proposal','Won','Lost') NOT NULL,
	`owner` varchar(120) NOT NULL,
	`value` decimal(12,2) NOT NULL,
	`createdAt` timestamp NOT NULL,
	`updatedAt` timestamp NOT NULL,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`client` varchar(160) NOT NULL,
	`status` enum('On track','At risk','Complete','Planning') NOT NULL,
	`owner` varchar(120) NOT NULL,
	`budget` decimal(12,2) NOT NULL,
	`spent` decimal(12,2) NOT NULL,
	`progress` int NOT NULL,
	`dueDate` timestamp NOT NULL,
	`createdAt` timestamp NOT NULL,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `satisfaction_scores` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` int,
	`client` varchar(160) NOT NULL,
	`score` int NOT NULL,
	`feedback` text,
	`collectedAt` timestamp NOT NULL,
	CONSTRAINT `satisfaction_scores_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` int,
	`title` varchar(200) NOT NULL,
	`status` enum('Todo','In progress','Done','Blocked') NOT NULL,
	`assignee` varchar(120) NOT NULL,
	`priority` enum('Low','Medium','High') NOT NULL,
	`turnaroundHours` decimal(8,1) NOT NULL,
	`completedAt` timestamp,
	`createdAt` timestamp NOT NULL,
	CONSTRAINT `tasks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `vendors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`category` varchar(100) NOT NULL,
	`projects` int NOT NULL,
	`spend` decimal(12,2) NOT NULL,
	`status` enum('Healthy','Watch','Review') NOT NULL,
	CONSTRAINT `vendors_id` PRIMARY KEY(`id`)
);
