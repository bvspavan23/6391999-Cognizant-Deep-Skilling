package com.Nums;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class OddorEvenTest {

    private OddorEven checker;

    @Before
    public void setUp() {
        // Arrange common setup
        checker = new OddorEven();
        System.out.println("Setting up OddorEven instance...");
    }

    @After
    public void tearDown() {
        // Optional cleanup
        System.out.println("Tearing down...\n");
    }

    @Test
    public void testEvenNumber() {
        // Arrange
        int num = 4;

        // Act
        String result = checker.isNum(num);

        // Assert
        assertEquals("4is a Even Number", result);
    }

    @Test
    public void testOddNumber() {
        // Arrange
        int num = 5;

        // Act
        String result = checker.isNum(num);

        // Assert
        assertEquals("5is a Odd Number", result);
    }
}
