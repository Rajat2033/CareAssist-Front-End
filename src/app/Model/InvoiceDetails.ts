export interface InvoiceDetails {
    invoiceId: number;
    invoiceDate: Date;
    invoicedueDate: Date;
    invoiceTax: number;
    consultationFee: number;
    diagnosticTestsFee: number;
    diagnosticScanFee: number;
    invoiceTotalAmount: number;
    totalBillAmount: number;
}