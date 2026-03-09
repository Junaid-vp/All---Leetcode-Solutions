# Write your MySQL query statement below
SELECT e.unique_id, p.name
FROM Employees p
LEFT JOIN EmployeeUNI e
ON e.id = p.id