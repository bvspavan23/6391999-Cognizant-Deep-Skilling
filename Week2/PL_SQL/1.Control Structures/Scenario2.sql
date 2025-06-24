ALTER TABLE Customers ADD (IsVIP CHAR(1));

BEGIN
    FOR c IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = c.CustomerID;
        ELSE
            UPDATE Customers
            SET IsVIP = 'N'
            WHERE CustomerID = c.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE('Customer ' || c.CustomerID || ' marked as VIP.');
        END IF;
    END LOOP;

    COMMIT;
END;
/
