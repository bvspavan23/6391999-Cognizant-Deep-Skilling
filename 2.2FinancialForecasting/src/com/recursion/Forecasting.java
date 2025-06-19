package com.recursion;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Forecasting {

	public float lastSum(List<Float> pastData) {
		int n = pastData.size();
		float sum =pastData.get(n-1)+pastData.get(n-2)+pastData.get(n-3);
		return sum;
	}
	public void recursionFunction(List<Float> pastData, int years, List<Float> predicted) {
        if (years == 0) {
            return;
        }

        float value = lastSum(pastData);
        predicted.add(value);
        pastData.add(value); // Update past data for next prediction

        recursionFunction(pastData, years - 1, predicted); // Recurse with updated lists
    }
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the next number of years you want to predict:");
		int years = sc.nextInt();
        Forecasting forecast = new Forecasting();
        List<Float> pastData = new ArrayList<>();
        pastData.add(1.0f);
        pastData.add(1.5f);
        pastData.add(2.5f);
        List<Float> predicted = new ArrayList<>();

        // Start recursion
        forecast.recursionFunction(pastData, years, predicted);

        System.out.println("Forecasted data:");
        for (Float f : predicted) {
            System.out.print(f + " ");
        }
    }
}
