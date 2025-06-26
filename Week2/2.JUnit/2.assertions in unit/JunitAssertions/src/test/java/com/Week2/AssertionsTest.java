package com.Week2;
import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {
	@Test
	public void equalsmethod() {
		assertEquals(5, 2+3);
	}
	
	@Test
	public void truemethod() {
		assertTrue(5>3);
	}
	
	@Test
	public void falsemethod() {
		assertFalse(5<3);
	}
	
	@Test
	public void nullmethod() {
		assertNull(null);
	}
	
	@Test
	public void notnullmethod() {
		assertNotNull(new Object());
	}
}
