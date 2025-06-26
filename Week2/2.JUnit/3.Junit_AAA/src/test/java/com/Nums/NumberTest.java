package com.Nums;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class NumberTest {
	@Test
	public void testEven() {
		OddorEven obj = new OddorEven();
		String result = obj.isNum(4);
		assertEquals("4is a Even Number",result);
	}
	@Test
	public void testOdd() {
		OddorEven obj = new OddorEven();
		String result = obj.isNum(5);
		assertEquals("5is a Odd Number",result);
	}
}
