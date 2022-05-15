INSERT INTO applicants (socialworker_id,name, email, phone, isHoused, address, known_locations, dependants, resource_provided, isFlagged, applied_at, isActive)
VALUES
(1, 'test', 'test@test.com', '123456', true, 'test_address', 'test_knownlocation', 'kid1, kid 2', 'legal', false, '01-01-2022', true),
(2, 'test1', 'test1@test.com', '123456', false, 'test_address1', 'test_knownlocation1', 'kid1, kid 2', 'child_care', false, '01-01-2022', true),
(1, 'test2', 'test2@test.com', '123456', true, 'test_address2', 'test_knownlocation2', 'kids', 'addictions', true, '01-01-2022', false),
(3, 'test3', 'test3@test.com', '123456', false, 'test_address3', 'test_knownlocation3', 'mother', 'housing', false, '01-01-2022', true),
(4, 'test4', 'test4@test.com', '123456', true, 'test_address4', 'test_knownlocation4', 'partner', 'shelter', true, '01-01-2022', false);