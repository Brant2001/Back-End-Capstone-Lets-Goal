USE [master]

IF db_id('LetsGoal') IS NULL
  CREATE DATABASE [LetsGoal]
GO

USE [LetsGoal]
GO


DROP TABLE IF EXISTS [Action];
DROP TABLE IF EXISTS [Goal];
DROP TABLE IF EXISTS [Difficulty];
DROP TABLE IF EXISTS [GoalType];
DROP TABLE IF EXISTS [UserProfile];
GO


CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY,
  [FirebaseUserId] nvarchar(28) NOT NULL,
  [DisplayName] nvarchar(50) NOT NULL,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50) NOT NULL,
  [Email] nvarchar(555) NOT NULL,
  [ImageUrl] nvarchar(255),
  [IsPublic] bit NOT NULL,

  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)
GO

CREATE TABLE [GoalType] (
  [Id] int PRIMARY KEY IDENTITY,
  [Title] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Difficulty] (
  [Id] int PRIMARY KEY IDENTITY,
  [Title] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Goal] (
  [Id] int PRIMARY KEY IDENTITY,
  [UserProfileId] int NOT NULL,
  [GoalTypeId] int NOT NULL,
  [DifficultyId] int NOT NULL,
  [Title] nvarchar(255) NOT NULL,
  [Description] nvarchar(255),
  [DateCreated] datetime NOT NULL,
  [IsComplete] bit NOT NULL,

  CONSTRAINT [FK_Goal_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_Goal_GoalType] FOREIGN KEY ([GoalTypeId]) REFERENCES [GoalType] ([Id]),
  CONSTRAINT [FK_Goal_Difficulty] FOREIGN KEY ([DifficultyId]) REFERENCES [Difficulty] ([Id])
)
GO

CREATE TABLE [Action] (
  [Id] int PRIMARY KEY IDENTITY,
  [GoalId] int NOT NULL,
  [DifficultyId] int NOT NULL,
  [Title] nvarchar(255) NOT NULL,
  [Description] nvarchar(255),
  [DateCreated] datetime NOT NULL,
  [IsComplete] bit NOT NULL,

  CONSTRAINT [FK_Action_Goal] FOREIGN KEY ([GoalId]) REFERENCES [Goal] ([Id]),
  CONSTRAINT [FK_Action_Difficulty] FOREIGN KEY ([DifficultyId]) REFERENCES [Difficulty] ([Id])
)
GO

ALTER TABLE [Goal] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Action] ADD FOREIGN KEY ([GoalId]) REFERENCES [Goal] ([Id])
GO

ALTER TABLE [Goal] ADD FOREIGN KEY ([GoalTypeId]) REFERENCES [GoalType] ([Id])
GO

ALTER TABLE [Goal] ADD FOREIGN KEY ([DifficultyId]) REFERENCES [Difficulty] ([Id])
GO

ALTER TABLE [Action] ADD FOREIGN KEY ([DifficultyId]) REFERENCES [Difficulty] ([Id])
GO
