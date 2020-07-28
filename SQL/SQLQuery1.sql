
set identity_insert [GoalType] on
insert into [GoalType] ([ID], [Title]) VALUES (1, 'Short-term'), (2, 'Mid-term'), (3, 'Long-term');
set identity_insert [GoalType] off

set identity_insert [Difficulty] on
insert into [Difficulty] ([Id], [Title])
values (1, 'Easy'), (2, 'Medium'), (3, 'Hard');
set identity_insert [Difficulty] off

set identity_insert [UserProfile] on
insert into UserProfile (Id, DisplayName, FirstName, LastName, Email, ImageUrl, IsPublic, FirebaseUserId) values (1, 'jdoe', 'John', 'Doe', 'john@email.com', 'https://robohash.org/nisiautemet.png?size=150x150&set=set1', 1, 'xElYn7C66baHREwHBhwYFhuIWPa2');
insert into UserProfile (Id, DisplayName, FirstName, LastName, Email, ImageUrl, IsPublic, FirebaseUserId) values (2, 'lberry', 'Larry', 'Barry', 'larry@email.com', 'https://robohash.org/nisiautemet.png?size=150x150&set=set1', 1, 'xElYn7C66baHREwHBhwYFhuIWPa2');
insert into UserProfile (Id, DisplayName, FirstName, LastName, Email, ImageUrl, IsPublic, FirebaseUserId) values (3, 'brob', 'Bob', 'Rob', 'bob@email.com', 'https://robohash.org/molestiaemagnamet.png?size=150x150&set=set1', 1, 'kBzFyUJAXzRBXfVmcX7py6zIoGz1');
set identity_insert [UserProfile] off

set identity_insert [Goal] on
insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (1, 'Goal1', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '2019-12-04', 1, 0, 3, 1);

insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (2, 'Goal2', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '2020-02-16', 2, 0, 1, 3);

insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (3, 'Goal3', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2019-07-29', 3, 0, 2, 1);

insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (4, 'Goal4', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '2019-10-21', 1, 0, 3, 1);

insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (5, 'Goal5', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '2019-12-17', 2, 0, 1, 2);

insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (6, 'Goal6', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '2020-01-19', 3, 0, 2, 1);
insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (7, 'Goal7', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2020-06-25', 1, 1, 3, 1);
insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (8, 'drive front-end portals', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-04-14', 2, 1, 1, 3);
insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (9, 'exploit e-business e-services', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '2019-07-23', 3, 1, 2, 3);
insert into Goal (Id, Title, [Description], DateCreated, GoalTypeId, IsComplete, DifficultyId, UserProfileId) values (10, 'incentivize virtual models', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '2019-10-13', 1, 1, 3, 2);

set identity_insert [Goal] off

set identity_insert [Action] on
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (1, 2, 3, 0, 'Sed sagittis.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-05-19');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (2, 1, 2, 1, 'Pellentesque viverra pede ac diam.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2020-05-11');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (3, 5, 1, 0, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-07-01');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (4, 5, 2, 1, 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '2020-05-10');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (5, 3, 3, 0, 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '2020-05-27');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (6, 5, 1, 1, 'Nulla tempus.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '2020-06-02');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (7, 2, 2, 0, 'Quisque id justo sit amet sapien dignissim vestibulum.', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '2020-06-04');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (8, 2, 3, 1, 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '2020-05-28');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (9, 7, 1, 0, 'Nulla justo.', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2020-05-04');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (10, 1, 2, 1, 'Etiam pretium iaculis justo.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '2020-05-16');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (11, 4, 3, 0, 'Nullam molestie nibh in lectus.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '2020-06-13');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (12, 3, 1, 1, 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'Fusce consequat. Nulla nisl. Nunc nisl.', '2020-06-23');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (13, 3, 2, 0, 'Morbi porttitor lorem id ligula.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '2020-06-21');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (14, 2, 3, 1, 'Nullam molestie nibh in lectus.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '2020-06-09');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (15, 2, 1, 0, 'Phasellus sit amet erat.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '2020-06-21');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (16, 7, 2, 1, 'Nulla ac enim.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '2020-07-02');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (17, 2, 3, 0, 'Donec ut mauris eget massa tempor convallis.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '2020-06-21');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (18, 7, 1, 1, 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '2020-06-07');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (19, 7, 2, 0, 'Nulla tempus.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '2020-05-04');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (20, 5, 3, 1, 'Nulla mollis molestie lorem.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '2020-06-03');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (21, 6, 1, 0, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '2020-06-14');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (22, 2, 2, 1, 'Donec posuere metus vitae ipsum.', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '2020-05-17');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (23, 1, 3, 0, 'Morbi vel lectus in quam fringilla rhoncus.', 'Fusce consequat. Nulla nisl. Nunc nisl.', '2020-06-06');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (24, 3, 1, 1, 'Suspendisse potenti.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '2020-06-27');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (25, 2, 2, 0, 'Curabitur convallis.', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '2020-05-16');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (26, 1, 3, 1, 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '2020-05-22');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (27, 1, 1, 0, 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2020-06-17');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (28, 2, 2, 1, 'Donec ut mauris eget massa tempor convallis.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '2020-06-01');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (29, 1, 3, 0, 'Praesent blandit.', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2020-05-05');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (30, 1, 1, 1, 'Nam dui.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '2020-06-10');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (31, 2, 2, 0, 'Donec ut dolor.', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '2020-06-29');
insert into [Action] (Id, GoalId, DifficultyId, IsComplete, Title, [Description], DateCreated) values (32, 7, 3, 1, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-06-15');
set identity_insert [Action] off