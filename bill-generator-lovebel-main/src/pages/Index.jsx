import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {Loader2, FileText, RotateCw} from "lucide-react";
import {Button} from "@/components/ui/button";
import Receipt1 from "../components/templates/Receipt1";
import Receipt4 from "../components/templates/Receipt4";
import {formatCurrency} from "../utils/formatCurrency";
import {generateReceiptPDF} from "../utils/receiptPDFGenerator";
import {generateGSTNumber} from "../utils/invoiceCalculations";
import FloatingLabelInput from "../components/FloatingLabelInput";
import ItemDetails from "../components/ItemDetails";

const generateRandomInvoiceNumber = () => {
  const length = Math.floor(Math.random() * 6) + 3;
  const alphabetCount = Math.min(Math.floor(Math.random() * 4), length);
  let result = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  for (let i = 0; i < alphabetCount; i++) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  for (let i = alphabetCount; i < length; i++) {
    result += numbers[Math.floor(Math.random() * numbers.length)];
  }

  return result;
};

const Index = () => {
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);
  const receiptRef = useRef(null);

  const [billTo, setBillTo] = useState("");
  const [invoice, setInvoice] = useState({
    date: "",
    number: generateRandomInvoiceNumber(),
  });
  const [yourCompany, setYourCompany] = useState({
    name: "",
    address: "",
    phone: "",
    gst: "",
  });
  const [cashier, setCashier] = useState("");
  const [items, setItems] = useState([
    {name: "", description: "", quantity: 0, amount: 0, total: 0},
  ]);
  const [taxPercentage, setTaxPercentage] = useState(0);
  const [theme, setTheme] = useState("Receipt1");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  useEffect(() => {
    // Load form data from localStorage on component mount
    const savedFormData = localStorage.getItem("receiptFormData");
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setBillTo(parsedData.billTo || "");
      setInvoice(
        parsedData.invoice || {date: "", number: generateRandomInvoiceNumber()}
      );
      setYourCompany(
        parsedData.yourCompany || {name: "", address: "", phone: "", gst: ""}
      );
      setCashier(parsedData.cashier || "");
      setItems(
        parsedData.items || [
          {name: "", description: "", quantity: 0, amount: 0, total: 0},
        ]
      );
      setTaxPercentage(parsedData.taxPercentage || 0);
      setSelectedCurrency("USD");
    } else {
      // Initialize with default values if nothing in localStorage
      setInvoice((prev) => ({...prev, number: generateRandomInvoiceNumber()}));
      setItems([{name: "", description: "", quantity: 0, amount: 0, total: 0}]);
    }
  }, []);

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    const formData = {
      billTo,
      invoice,
      yourCompany,
      cashier,
      items,
      taxPercentage,
      selectedCurrency,
    };
    localStorage.setItem("receiptFormData", JSON.stringify(formData));
  }, [
    billTo,
    invoice,
    yourCompany,
    cashier,
    items,
    taxPercentage,
    selectedCurrency,
  ]);

  const handleDownloadPDF = async () => {
    if (!isDownloading && receiptRef.current) {
      setIsDownloading(true);
      const receiptData = {
        // Prepare receiptData object
        billTo,
        invoice,
        yourCompany,
        cashier,
        items,
        taxPercentage,
        selectedCurrency,
      };
      try {
        await generateReceiptPDF(receiptRef.current, theme, receiptData);
      } catch (error) {
        console.error("Error generating PDF:", error);
      } finally {
        setIsDownloading(false);
      }
    }
  };

  const handleInputChange = (setter) => (e) => {
    const {name, value} = e.target;
    setter((prev) => ({...prev, [name]: value}));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    if (field === "quantity" || field === "amount") {
      newItems[index].total = newItems[index].quantity * newItems[index].amount;
    }
    setItems(newItems);
  };

  const addItem = () => {
    setItems([
      ...items,
      {name: "", description: "", quantity: 0, amount: 0, total: 0},
    ]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const calculateSubTotal = () => {
    return items.reduce((sum, item) => sum + item.total, 0).toFixed(2);
  };

  const calculateTaxAmount = () => {
    const subTotal = parseFloat(calculateSubTotal());
    return (subTotal * (taxPercentage / 100)).toFixed(2);
  };

  const calculateGrandTotal = () => {
    const subTotal = parseFloat(calculateSubTotal());
    const taxAmount = parseFloat(calculateTaxAmount());
    return (subTotal + taxAmount).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Receipt Generator</h1>
        <div className="flex items-center">
          <Button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="mr-4"
          >
            {isDownloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : (
              "Download Receipt PDF"
            )}
          </Button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
            aria-label="Switch to Bill Generator"
          >
            <FileText size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Your Company</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingLabelInput
                  id="yourCompanyName"
                  label="Name"
                  value={yourCompany.name}
                  onChange={handleInputChange(setYourCompany)}
                  name="name"
                />
                <FloatingLabelInput
                  id="yourCompanyPhone"
                  label="Phone"
                  value={yourCompany.phone}
                  onChange={handleInputChange(setYourCompany)}
                  name="phone"
                />
              </div>
              <FloatingLabelInput
                id="yourCompanyAddress"
                label="Address"
                value={yourCompany.address}
                onChange={handleInputChange(setYourCompany)}
                name="address"
                className="mt-4"
              />
              <div className="relative mt-4">
                <FloatingLabelInput
                  id="yourCompanyGST"
                  label="GST No."
                  value={yourCompany.gst}
                  onChange={(e) => {
                    const value = e.target.value.slice(0, 15);
                    handleInputChange(setYourCompany)({
                      target: {name: "gst", value},
                    });
                  }}
                  name="gst"
                  maxLength={15}
                />
                <button
                  type="button"
                  onClick={() => {
                    const newGST = generateGSTNumber();
                    setYourCompany((prev) => ({...prev, gst: newGST}));
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-200"
                  title="Generate new GST number"
                >
                  <RotateCw size={16} />
                </button>
              </div>
              <FloatingLabelInput
                id="cashier"
                label="Cashier"
                value={cashier}
                onChange={(e) => setCashier(e.target.value)}
                name="cashier"
                className="mt-4"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Bill To</h2>
              <FloatingLabelInput
                id="billTo"
                label="Bill To"
                value={billTo}
                onChange={(e) => setBillTo(e.target.value)}
                name="billTo"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Invoice Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FloatingLabelInput
                  id="invoiceNumber"
                  label="Invoice Number"
                  value={invoice.number}
                  onChange={handleInputChange(setInvoice)}
                  name="number"
                />
                <FloatingLabelInput
                  id="invoiceDate"
                  label="Invoice Date"
                  type="date"
                  value={invoice.date}
                  onChange={handleInputChange(setInvoice)}
                  name="date"
                />
              </div>
            </div>

            <ItemDetails
              items={items}
              handleItemChange={handleItemChange}
              addItem={addItem}
              removeItem={removeItem}
            />

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Totals</h3>
              <div className="flex justify-between mb-2">
                <span>Sub Total:</span>
                <span>
                  {formatCurrency(
                    parseFloat(calculateSubTotal()),
                    selectedCurrency
                  )}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax (%):</span>
                <input
                  type="number"
                  value={taxPercentage}
                  onChange={(e) =>
                    setTaxPercentage(parseFloat(e.target.value) || 0)
                  }
                  className="w-24 p-2 border rounded"
                  min="0"
                  max="28"
                  step="1"
                />
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax Amount:</span>
                <span>
                  {formatCurrency(
                    parseFloat(calculateTaxAmount()),
                    selectedCurrency
                  )}
                </span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Grand Total:</span>
                <span>
                  {formatCurrency(
                    parseFloat(calculateGrandTotal()),
                    selectedCurrency
                  )}
                </span>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Receipt Preview</h2>
          <div className="mb-4 flex items-center">
            <h3 className="text-lg font-medium mr-4">Receipt Type</h3>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="Receipt1"
                  checked={theme === "Receipt1"}
                  onChange={() => setTheme("Receipt1")}
                  className="mr-2"
                />
                Receipt1
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="Receipt4"
                  checked={theme === "Receipt4"}
                  onChange={() => setTheme("Receipt4")}
                  className="mr-2"
                />
                Receipt2
              </label>
            </div>
          </div>
          <div ref={receiptRef} className="w-[380px] mx-auto border shadow-lg">
            {theme === "Receipt1" && (
              <Receipt1
                data={{
                  billTo,
                  invoice,
                  yourCompany,
                  cashier,
                  items,
                  taxPercentage,
                  selectedCurrency,
                }}
              />
            )}
            {theme === "Receipt4" && (
              <Receipt4
                data={{
                  billTo,
                  invoice,
                  yourCompany,
                  items,
                  taxPercentage,
                  cashier,
                  selectedCurrency,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
