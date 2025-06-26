INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (3, 'Pavan', TO_DATE('1950-01-01', 'YYYY-MM-DD'), 20000, SYSDATE);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (2, 3, 7000, 6.5, SYSDATE - 90, SYSDATE + 30);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (4, 'Pavan Papi', TO_DATE('1948-12-30', 'YYYY-MM-DD'), 5000, SYSDATE);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (3, 4, 10000, 7.0, SYSDATE, ADD_MONTHS(SYSDATE, 48));

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (5, 'Prabath', TO_DATE('1955-02-10', 'YYYY-MM-DD'), 13000, SYSDATE);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (4, 5, 8000, 6.0, SYSDATE - 100, SYSDATE + 30);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (6, 'Arthur Morgan', TO_DATE('1960-06-01', 'YYYY-MM-DD'), 18000, SYSDATE);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (5, 6, 6000, 5.5, SYSDATE - 50, SYSDATE + 30);

COMMIT;