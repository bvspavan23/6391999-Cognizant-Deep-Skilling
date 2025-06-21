package com.designs;

public class Test {
	public static void main(String [] args) {
		 DocumentCreator word = new CreateWord();
	     Document wordDoc = word.createDocument();
	     wordDoc.Type();
	     
		 DocumentCreator pdf = new CreatePdf();
	     Document pdfDoc = pdf.createDocument();
	     pdfDoc.Type();
	     
		 DocumentCreator excel = new CreateExcel();
	     Document excelDoc = excel.createDocument();
	     excelDoc.Type();
	}
}
