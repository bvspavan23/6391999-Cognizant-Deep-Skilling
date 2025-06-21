package com.designs;

public class Test {
    public static void main(String[] args) {
        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();

        log1.getLog("Pavan joined the meet");
        log2.getLog("Papi joined the meet");

        if (log1 == log2) {
            System.out.println("Same Instance");
        } else {
            System.out.println("Different Instance");
        }
    }
}
