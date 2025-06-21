package com.designs;

public class CreatePdf extends DocumentCreator{
	public Document createDocument() {
		return new PdfDocument();
	}
}
