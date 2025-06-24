BEGIN
    FOR l IN (
        SELECT L.LoanID, C.Name, L.EndDate
        FROM Loans L
        JOIN Customers C ON L.CustomerID = C.CustomerID
        WHERE L.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || l.LoanID || ' for ' || l.Name || ' is due on ' || TO_CHAR(l.EndDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/
