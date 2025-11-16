-- BookMyShow LLD - Simple Seed Data Script
-- This script inserts sample data for all tables except the ticket table

-- ============================================
-- 1. CITIES TABLE
-- ============================================
INSERT INTO cities (id, name) VALUES
('city-1', 'Mumbai'),
('city-2', 'Delhi'),
('city-3', 'Bangalore');

-- ============================================
-- 2. USERS TABLE
-- ============================================
INSERT INTO users (id, name, email) VALUES
('user-1', 'Rahul Sharma', 'rahul@example.com'),
('user-2', 'Priya Patel', 'priya@example.com'),
('user-3', 'Amit Kumar', 'amit@example.com');

-- ============================================
-- 3. MOVIES TABLE
-- ============================================
INSERT INTO movies (id, name) VALUES
('movie-1', 'Pathaan'),
('movie-2', 'Jawan'),
('movie-3', 'Oppenheimer');

-- ============================================
-- 4. THEATRES TABLE
-- ============================================
INSERT INTO theatres (id, name, cityId) VALUES
('theatre-1', 'PVR Phoenix', 'city-1'),
('theatre-2', 'INOX Nariman', 'city-1'),
('theatre-3', 'PVR Select', 'city-2');

-- ============================================
-- 5. AUDIES TABLE
-- ============================================
INSERT INTO audies (id, name, capacity, theatreId) VALUES
('audi-1', 'Audi 1', '50', 'theatre-1'),
('audi-2', 'Audi 2', '100', 'theatre-1'),
('audi-3', 'Screen 1', '80', 'theatre-2');


-- ============================================
-- 6. SEATS TABLE
-- ============================================
-- Audi 1: 50 seats (1-15 VIP, 16-50 NORMAL)
INSERT INTO seats (id, seatNumber, seatType, audiId) VALUES
('seat-1-1', 1, 'VIP', 'audi-1'),
('seat-1-2', 2, 'VIP', 'audi-1'),
('seat-1-3', 3, 'VIP', 'audi-1'),
('seat-1-4', 4, 'VIP', 'audi-1'),
('seat-1-5', 5, 'VIP', 'audi-1'),
('seat-1-6', 6, 'VIP', 'audi-1'),
('seat-1-7', 7, 'VIP', 'audi-1'),
('seat-1-8', 8, 'VIP', 'audi-1'),
('seat-1-9', 9, 'VIP', 'audi-1'),
('seat-1-10', 10, 'VIP', 'audi-1'),
('seat-1-11', 11, 'VIP', 'audi-1'),
('seat-1-12', 12, 'VIP', 'audi-1'),
('seat-1-13', 13, 'VIP', 'audi-1'),
('seat-1-14', 14, 'VIP', 'audi-1'),
('seat-1-15', 15, 'VIP', 'audi-1'),
('seat-1-16', 16, 'NORMAL', 'audi-1'),
('seat-1-17', 17, 'NORMAL', 'audi-1'),
('seat-1-18', 18, 'NORMAL', 'audi-1'),
('seat-1-19', 19, 'NORMAL', 'audi-1'),
('seat-1-20', 20, 'NORMAL', 'audi-1'),
('seat-1-21', 21, 'NORMAL', 'audi-1'),
('seat-1-22', 22, 'NORMAL', 'audi-1'),
('seat-1-23', 23, 'NORMAL', 'audi-1'),
('seat-1-24', 24, 'NORMAL', 'audi-1'),
('seat-1-25', 25, 'NORMAL', 'audi-1'),
('seat-1-26', 26, 'NORMAL', 'audi-1'),
('seat-1-27', 27, 'NORMAL', 'audi-1'),
('seat-1-28', 28, 'NORMAL', 'audi-1'),
('seat-1-29', 29, 'NORMAL', 'audi-1'),
('seat-1-30', 30, 'NORMAL', 'audi-1'),
('seat-1-31', 31, 'NORMAL', 'audi-1'),
('seat-1-32', 32, 'NORMAL', 'audi-1'),
('seat-1-33', 33, 'NORMAL', 'audi-1'),
('seat-1-34', 34, 'NORMAL', 'audi-1'),
('seat-1-35', 35, 'NORMAL', 'audi-1'),
('seat-1-36', 36, 'NORMAL', 'audi-1'),
('seat-1-37', 37, 'NORMAL', 'audi-1'),
('seat-1-38', 38, 'NORMAL', 'audi-1'),
('seat-1-39', 39, 'NORMAL', 'audi-1'),
('seat-1-40', 40, 'NORMAL', 'audi-1'),
('seat-1-41', 41, 'NORMAL', 'audi-1'),
('seat-1-42', 42, 'NORMAL', 'audi-1'),
('seat-1-43', 43, 'NORMAL', 'audi-1'),
('seat-1-44', 44, 'NORMAL', 'audi-1'),
('seat-1-45', 45, 'NORMAL', 'audi-1'),
('seat-1-46', 46, 'NORMAL', 'audi-1'),
('seat-1-47', 47, 'NORMAL', 'audi-1'),
('seat-1-48', 48, 'NORMAL', 'audi-1'),
('seat-1-49', 49, 'NORMAL', 'audi-1'),
('seat-1-50', 50, 'NORMAL', 'audi-1');

-- Audi 2: 100 seats (1-30 VIP, 31-100 NORMAL)
-- Inserting first 30 VIP seats
INSERT INTO seats (id, seatNumber, seatType, audiId) VALUES
('seat-2-1', 1, 'VIP', 'audi-2'),
('seat-2-2', 2, 'VIP', 'audi-2'),
('seat-2-3', 3, 'VIP', 'audi-2'),
('seat-2-4', 4, 'VIP', 'audi-2'),
('seat-2-5', 5, 'VIP', 'audi-2'),
('seat-2-6', 6, 'VIP', 'audi-2'),
('seat-2-7', 7, 'VIP', 'audi-2'),
('seat-2-8', 8, 'VIP', 'audi-2'),
('seat-2-9', 9, 'VIP', 'audi-2'),
('seat-2-10', 10, 'VIP', 'audi-2'),
('seat-2-11', 11, 'VIP', 'audi-2'),
('seat-2-12', 12, 'VIP', 'audi-2'),
('seat-2-13', 13, 'VIP', 'audi-2'),
('seat-2-14', 14, 'VIP', 'audi-2'),
('seat-2-15', 15, 'VIP', 'audi-2'),
('seat-2-16', 16, 'VIP', 'audi-2'),
('seat-2-17', 17, 'VIP', 'audi-2'),
('seat-2-18', 18, 'VIP', 'audi-2'),
('seat-2-19', 19, 'VIP', 'audi-2'),
('seat-2-20', 20, 'VIP', 'audi-2'),
('seat-2-21', 21, 'VIP', 'audi-2'),
('seat-2-22', 22, 'VIP', 'audi-2'),
('seat-2-23', 23, 'VIP', 'audi-2'),
('seat-2-24', 24, 'VIP', 'audi-2'),
('seat-2-25', 25, 'VIP', 'audi-2'),
('seat-2-26', 26, 'VIP', 'audi-2'),
('seat-2-27', 27, 'VIP', 'audi-2'),
('seat-2-28', 28, 'VIP', 'audi-2'),
('seat-2-29', 29, 'VIP', 'audi-2'),
('seat-2-30', 30, 'VIP', 'audi-2');

-- Inserting remaining 70 NORMAL seats for Audi 2
INSERT INTO seats (id, seatNumber, seatType, audiId) VALUES
('seat-2-31', 31, 'NORMAL', 'audi-2'),
('seat-2-32', 32, 'NORMAL', 'audi-2'),
('seat-2-33', 33, 'NORMAL', 'audi-2'),
('seat-2-34', 34, 'NORMAL', 'audi-2'),
('seat-2-35', 35, 'NORMAL', 'audi-2'),
('seat-2-36', 36, 'NORMAL', 'audi-2'),
('seat-2-37', 37, 'NORMAL', 'audi-2'),
('seat-2-38', 38, 'NORMAL', 'audi-2'),
('seat-2-39', 39, 'NORMAL', 'audi-2'),
('seat-2-40', 40, 'NORMAL', 'audi-2'),
('seat-2-41', 41, 'NORMAL', 'audi-2'),
('seat-2-42', 42, 'NORMAL', 'audi-2'),
('seat-2-43', 43, 'NORMAL', 'audi-2'),
('seat-2-44', 44, 'NORMAL', 'audi-2'),
('seat-2-45', 45, 'NORMAL', 'audi-2'),
('seat-2-46', 46, 'NORMAL', 'audi-2'),
('seat-2-47', 47, 'NORMAL', 'audi-2'),
('seat-2-48', 48, 'NORMAL', 'audi-2'),
('seat-2-49', 49, 'NORMAL', 'audi-2'),
('seat-2-50', 50, 'NORMAL', 'audi-2'),
('seat-2-51', 51, 'NORMAL', 'audi-2'),
('seat-2-52', 52, 'NORMAL', 'audi-2'),
('seat-2-53', 53, 'NORMAL', 'audi-2'),
('seat-2-54', 54, 'NORMAL', 'audi-2'),
('seat-2-55', 55, 'NORMAL', 'audi-2'),
('seat-2-56', 56, 'NORMAL', 'audi-2'),
('seat-2-57', 57, 'NORMAL', 'audi-2'),
('seat-2-58', 58, 'NORMAL', 'audi-2'),
('seat-2-59', 59, 'NORMAL', 'audi-2'),
('seat-2-60', 60, 'NORMAL', 'audi-2'),
('seat-2-61', 61, 'NORMAL', 'audi-2'),
('seat-2-62', 62, 'NORMAL', 'audi-2'),
('seat-2-63', 63, 'NORMAL', 'audi-2'),
('seat-2-64', 64, 'NORMAL', 'audi-2'),
('seat-2-65', 65, 'NORMAL', 'audi-2'),
('seat-2-66', 66, 'NORMAL', 'audi-2'),
('seat-2-67', 67, 'NORMAL', 'audi-2'),
('seat-2-68', 68, 'NORMAL', 'audi-2'),
('seat-2-69', 69, 'NORMAL', 'audi-2'),
('seat-2-70', 70, 'NORMAL', 'audi-2'),
('seat-2-71', 71, 'NORMAL', 'audi-2'),
('seat-2-72', 72, 'NORMAL', 'audi-2'),
('seat-2-73', 73, 'NORMAL', 'audi-2'),
('seat-2-74', 74, 'NORMAL', 'audi-2'),
('seat-2-75', 75, 'NORMAL', 'audi-2'),
('seat-2-76', 76, 'NORMAL', 'audi-2'),
('seat-2-77', 77, 'NORMAL', 'audi-2'),
('seat-2-78', 78, 'NORMAL', 'audi-2'),
('seat-2-79', 79, 'NORMAL', 'audi-2'),
('seat-2-80', 80, 'NORMAL', 'audi-2'),
('seat-2-81', 81, 'NORMAL', 'audi-2'),
('seat-2-82', 82, 'NORMAL', 'audi-2'),
('seat-2-83', 83, 'NORMAL', 'audi-2'),
('seat-2-84', 84, 'NORMAL', 'audi-2'),
('seat-2-85', 85, 'NORMAL', 'audi-2'),
('seat-2-86', 86, 'NORMAL', 'audi-2'),
('seat-2-87', 87, 'NORMAL', 'audi-2'),
('seat-2-88', 88, 'NORMAL', 'audi-2'),
('seat-2-89', 89, 'NORMAL', 'audi-2'),
('seat-2-90', 90, 'NORMAL', 'audi-2'),
('seat-2-91', 91, 'NORMAL', 'audi-2'),
('seat-2-92', 92, 'NORMAL', 'audi-2'),
('seat-2-93', 93, 'NORMAL', 'audi-2'),
('seat-2-94', 94, 'NORMAL', 'audi-2'),
('seat-2-95', 95, 'NORMAL', 'audi-2'),
('seat-2-96', 96, 'NORMAL', 'audi-2'),
('seat-2-97', 97, 'NORMAL', 'audi-2'),
('seat-2-98', 98, 'NORMAL', 'audi-2'),
('seat-2-99', 99, 'NORMAL', 'audi-2'),
('seat-2-100', 100, 'NORMAL', 'audi-2');

-- Audi 3: 80 seats (1-20 VIP, 21-80 NORMAL)
INSERT INTO seats (id, seatNumber, seatType, audiId) VALUES
('seat-3-1', 1, 'VIP', 'audi-3'),
('seat-3-2', 2, 'VIP', 'audi-3'),
('seat-3-3', 3, 'VIP', 'audi-3'),
('seat-3-4', 4, 'VIP', 'audi-3'),
('seat-3-5', 5, 'VIP', 'audi-3'),
('seat-3-6', 6, 'VIP', 'audi-3'),
('seat-3-7', 7, 'VIP', 'audi-3'),
('seat-3-8', 8, 'VIP', 'audi-3'),
('seat-3-9', 9, 'VIP', 'audi-3'),
('seat-3-10', 10, 'VIP', 'audi-3'),
('seat-3-11', 11, 'VIP', 'audi-3'),
('seat-3-12', 12, 'VIP', 'audi-3'),
('seat-3-13', 13, 'VIP', 'audi-3'),
('seat-3-14', 14, 'VIP', 'audi-3'),
('seat-3-15', 15, 'VIP', 'audi-3'),
('seat-3-16', 16, 'VIP', 'audi-3'),
('seat-3-17', 17, 'VIP', 'audi-3'),
('seat-3-18', 18, 'VIP', 'audi-3'),
('seat-3-19', 19, 'VIP', 'audi-3'),
('seat-3-20', 20, 'VIP', 'audi-3'),
('seat-3-21', 21, 'NORMAL', 'audi-3'),
('seat-3-22', 22, 'NORMAL', 'audi-3'),
('seat-3-23', 23, 'NORMAL', 'audi-3'),
('seat-3-24', 24, 'NORMAL', 'audi-3'),
('seat-3-25', 25, 'NORMAL', 'audi-3'),
('seat-3-26', 26, 'NORMAL', 'audi-3'),
('seat-3-27', 27, 'NORMAL', 'audi-3'),
('seat-3-28', 28, 'NORMAL', 'audi-3'),
('seat-3-29', 29, 'NORMAL', 'audi-3'),
('seat-3-30', 30, 'NORMAL', 'audi-3'),
('seat-3-31', 31, 'NORMAL', 'audi-3'),
('seat-3-32', 32, 'NORMAL', 'audi-3'),
('seat-3-33', 33, 'NORMAL', 'audi-3'),
('seat-3-34', 34, 'NORMAL', 'audi-3'),
('seat-3-35', 35, 'NORMAL', 'audi-3'),
('seat-3-36', 36, 'NORMAL', 'audi-3'),
('seat-3-37', 37, 'NORMAL', 'audi-3'),
('seat-3-38', 38, 'NORMAL', 'audi-3'),
('seat-3-39', 39, 'NORMAL', 'audi-3'),
('seat-3-40', 40, 'NORMAL', 'audi-3'),
('seat-3-41', 41, 'NORMAL', 'audi-3'),
('seat-3-42', 42, 'NORMAL', 'audi-3'),
('seat-3-43', 43, 'NORMAL', 'audi-3'),
('seat-3-44', 44, 'NORMAL', 'audi-3'),
('seat-3-45', 45, 'NORMAL', 'audi-3'),
('seat-3-46', 46, 'NORMAL', 'audi-3'),
('seat-3-47', 47, 'NORMAL', 'audi-3'),
('seat-3-48', 48, 'NORMAL', 'audi-3'),
('seat-3-49', 49, 'NORMAL', 'audi-3'),
('seat-3-50', 50, 'NORMAL', 'audi-3'),
('seat-3-51', 51, 'NORMAL', 'audi-3'),
('seat-3-52', 52, 'NORMAL', 'audi-3'),
('seat-3-53', 53, 'NORMAL', 'audi-3'),
('seat-3-54', 54, 'NORMAL', 'audi-3'),
('seat-3-55', 55, 'NORMAL', 'audi-3'),
('seat-3-56', 56, 'NORMAL', 'audi-3'),
('seat-3-57', 57, 'NORMAL', 'audi-3'),
('seat-3-58', 58, 'NORMAL', 'audi-3'),
('seat-3-59', 59, 'NORMAL', 'audi-3'),
('seat-3-60', 60, 'NORMAL', 'audi-3'),
('seat-3-61', 61, 'NORMAL', 'audi-3'),
('seat-3-62', 62, 'NORMAL', 'audi-3'),
('seat-3-63', 63, 'NORMAL', 'audi-3'),
('seat-3-64', 64, 'NORMAL', 'audi-3'),
('seat-3-65', 65, 'NORMAL', 'audi-3'),
('seat-3-66', 66, 'NORMAL', 'audi-3'),
('seat-3-67', 67, 'NORMAL', 'audi-3'),
('seat-3-68', 68, 'NORMAL', 'audi-3'),
('seat-3-69', 69, 'NORMAL', 'audi-3'),
('seat-3-70', 70, 'NORMAL', 'audi-3'),
('seat-3-71', 71, 'NORMAL', 'audi-3'),
('seat-3-72', 72, 'NORMAL', 'audi-3'),
('seat-3-73', 73, 'NORMAL', 'audi-3'),
('seat-3-74', 74, 'NORMAL', 'audi-3'),
('seat-3-75', 75, 'NORMAL', 'audi-3'),
('seat-3-76', 76, 'NORMAL', 'audi-3'),
('seat-3-77', 77, 'NORMAL', 'audi-3'),
('seat-3-78', 78, 'NORMAL', 'audi-3'),
('seat-3-79', 79, 'NORMAL', 'audi-3'),
('seat-3-80', 80, 'NORMAL', 'audi-3');


-- ============================================
-- 7. SHOWS TABLE
-- ============================================
INSERT INTO shows (id, showStartTime, showEndTime, date, movieId, audiId) VALUES
-- Pathaan shows
('show-1', '2025-11-16 10:00:00', '2025-11-16 13:00:00', '2025-11-16', 'movie-1', 'audi-1'),
('show-2', '2025-11-16 18:00:00', '2025-11-16 21:00:00', '2025-11-16', 'movie-1', 'audi-1'),
-- Jawan shows
('show-3', '2025-11-16 11:00:00', '2025-11-16 14:00:00', '2025-11-16', 'movie-2', 'audi-2'),
('show-4', '2025-11-16 19:00:00', '2025-11-16 22:00:00', '2025-11-16', 'movie-2', 'audi-2'),
-- Oppenheimer shows
('show-5', '2025-11-17 10:00:00', '2025-11-17 13:00:00', '2025-11-17', 'movie-3', 'audi-3'),
('show-6', '2025-11-17 16:00:00', '2025-11-17 19:00:00', '2025-11-17', 'movie-3', 'audi-3');

-- ============================================
-- 8. SHOWSEATS TABLE
-- ============================================
-- Show 1: All seats OPEN
INSERT INTO showSeats (id, showId, seatId, showSeatStatus)
SELECT 
    CONCAT('showseat-1-', s.id),
    'show-1',
    s.id,
    'OPEN'
FROM seats s
WHERE s.audiId = 'audi-1';

-- Show 2: First 10 seats BOOKED, next 10 LOCKED, rest OPEN
INSERT INTO showSeats (id, showId, seatId, showSeatStatus)
SELECT 
    CONCAT('showseat-2-', s.id),
    'show-2',
    s.id,
    CASE 
        WHEN s.seatNumber <= 10 THEN 'BOOKED'
        WHEN s.seatNumber <= 20 THEN 'LOCKED'
        ELSE 'OPEN'
    END
FROM seats s
WHERE s.audiId = 'audi-1';

-- Show 3: All seats OPEN
INSERT INTO showSeats (id, showId, seatId, showSeatStatus)
SELECT 
    CONCAT('showseat-3-', s.id),
    'show-3',
    s.id,
    'OPEN'
FROM seats s
WHERE s.audiId = 'audi-2';

-- Show 4: First 30 seats BOOKED, rest OPEN
INSERT INTO showSeats (id, showId, seatId, showSeatStatus)
SELECT 
    CONCAT('showseat-4-', s.id),
    'show-4',
    s.id,
    CASE 
        WHEN s.seatNumber <= 30 THEN 'BOOKED'
        ELSE 'OPEN'
    END
FROM seats s
WHERE s.audiId = 'audi-2';

-- Show 5: First 15 seats BOOKED, rest OPEN
INSERT INTO showSeats (id, showId, seatId, showSeatStatus)
SELECT 
    CONCAT('showseat-5-', s.id),
    'show-5',
    s.id,
    CASE 
        WHEN s.seatNumber <= 15 THEN 'BOOKED'
        ELSE 'OPEN'
    END
FROM seats s
WHERE s.audiId = 'audi-3';

-- Show 6: All seats OPEN
INSERT INTO showSeats (id, showId, seatId, showSeatStatus)
SELECT 
    CONCAT('showseat-6-', s.id),
    'show-6',
    s.id,
    'OPEN'
FROM seats s
WHERE s.audiId = 'audi-3';

-- ============================================
-- SEED DATA COMPLETED
-- ============================================
-- Summary:
-- - 3 Cities
-- - 3 Users
-- - 3 Movies
-- - 3 Theatres
-- - 3 Audis (50, 100, 80 seats)
-- - 230 Total Seats
-- - 6 Shows
-- - ShowSeats for all shows with various booking statuses
-- ============================================
