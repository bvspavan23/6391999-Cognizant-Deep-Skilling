package com.designs;

public class CreateExcel extends DocumentCreator{
	public Document createDocument() {
		return new ExcelDocument();
	}
}
