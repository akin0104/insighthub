CREATE TABLE `opsflow_activities` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`ownerId` int NOT NULL,
	`type` varchar(80) NOT NULL,
	`summary` varchar(240) NOT NULL,
	`outcome` varchar(120) NOT NULL,
	`occurredAt` timestamp NOT NULL,
	CONSTRAINT `opsflow_activities_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `opsflow_automation_rules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`trigger` varchar(240) NOT NULL,
	`action` varchar(240) NOT NULL,
	`status` enum('Active','Draft','Paused') NOT NULL,
	CONSTRAINT `opsflow_automation_rules_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `opsflow_events` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int,
	`ruleId` int,
	`eventType` varchar(100) NOT NULL,
	`payload` text NOT NULL,
	`occurredAt` timestamp NOT NULL,
	CONSTRAINT `opsflow_events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `opsflow_leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`company` varchar(160) NOT NULL,
	`contactName` varchar(160) NOT NULL,
	`stage` enum('New','Qualified','Proposal','Won','Lost') NOT NULL,
	`source` varchar(80) NOT NULL,
	`ownerId` int NOT NULL,
	`value` decimal(12,2) NOT NULL,
	`nextAction` varchar(240) NOT NULL,
	`dueAt` timestamp NOT NULL,
	`createdAt` timestamp NOT NULL,
	CONSTRAINT `opsflow_leads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `opsflow_owners` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(120) NOT NULL,
	`role` varchar(120) NOT NULL,
	`email` varchar(240) NOT NULL,
	CONSTRAINT `opsflow_owners_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `opsflow_tasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`title` varchar(200) NOT NULL,
	`status` enum('Todo','In progress','Done','Blocked') NOT NULL,
	`assigneeId` int NOT NULL,
	`priority` enum('Low','Medium','High') NOT NULL,
	`dueAt` timestamp NOT NULL,
	`completedAt` timestamp,
	`createdAt` timestamp NOT NULL,
	CONSTRAINT `opsflow_tasks_id` PRIMARY KEY(`id`)
);
