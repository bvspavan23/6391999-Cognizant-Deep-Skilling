package com.designs;

public class Logger {
	private static Logger instance = new Logger();
	
	private Logger() {
		System.out.println("This is the Constructor...");
	}
	
	public static Logger getInstance() {
		return instance;
	}
	
	public void getLog(String log) {
		System.out.println("LOG:" +log);
	}
}
