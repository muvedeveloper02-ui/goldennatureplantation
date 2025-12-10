import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

//  ALL PLANS (CORRECT DATA)
const plans = [
  { id: "1", name: "Eco Flash", duration: 6, rate: 0.25 }, // 25% yearly → monthly calc
  { id: "2", name: "Supreme", duration: 12, rate: 0.4 }, // 40% yearly
  { id: "3", name: "Golden Harvest", duration: 24, rate: 0.45 }, // 45% yearly
  { id: "4", name: "Diamond", duration: 60, rate: 5 }, // 500% after 5 years
];

// ORMAT NUMBER (1,000,000.00)
const formatNumber = (num: number) =>
  num.toLocaleString("en-LK", { minimumFractionDigits: 2 });

const Quotation = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const defaultPlan = plans.find((p) => p.id === id) || plans[0];

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    contact: "",
    amount: "",
    planId: defaultPlan.id,
  });

  const selectedPlan = plans.find((p) => p.id === form.planId);

  const [result, setResult] = useState<any>(null);

  //  AMOUNT INPUT FORMAT (1,000,000)
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/,/g, "");

    if (!/^\d*$/.test(rawValue)) return;

    const formattedValue = rawValue
      ? Number(rawValue).toLocaleString("en-LK")
      : "";

    setForm({ ...form, amount: formattedValue });
  };

  // EXACT MATH CALCULATION (NO ROUNDING ERRORS)
  const handleCalculate = () => {
    if (!selectedPlan) return;

    const amount = Number(form.amount.replace(/,/g, ""));
    if (!amount) return;

    let monthlyHarvest = 0;
    let totalHarvest = 0;

    //  LOGIC BASED ON YOUR BUSINESS RULES
    if (selectedPlan.name === "Eco Flash") {
      totalHarvest = amount * 0.25;
      monthlyHarvest = totalHarvest / 6;
    }

    if (selectedPlan.name === "Supreme") {
      totalHarvest = amount * 0.4;
      monthlyHarvest = totalHarvest / 12;
    }

    if (selectedPlan.name === "Golden Harvest") {
      totalHarvest = amount * 0.45;
      monthlyHarvest = totalHarvest / 12;
    }

    if (selectedPlan.name === "Diamond") {
      totalHarvest = amount * 5;
      monthlyHarvest = totalHarvest / 60;
    }

    const totalReturn = amount + totalHarvest;

    setResult({
      investment: amount,
      monthlyHarvest,
      totalHarvest,
      totalReturn,
    });
  };

  //PDF DOWNLOAD WITH LOGO + HEADER
  const handleDownloadPDF = () => {
    if (!result || !selectedPlan) return;

    const doc = new jsPDF();

    const logoUrl = `${import.meta.env.BASE_URL}images/logo3.png`;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = logoUrl;

    img.onload = () => {
      doc.addImage(img, "PNG", 15, 10, 28, 28);

      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("Golden Nature Plantation (Pvt) Ltd", 48, 18);

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text("Premium Sri Lankan Plantation & Investment Solutions", 48, 24);

      doc.text(
        "Website: www.goldennatureplantation.com | Contact: +94 77 123 4567",
        48,
        30
      );

      doc.line(15, 42, 195, 42);

      doc.setFontSize(14);
      doc.text("Investment Quotation Report", 15, 52);

      doc.setFontSize(10);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 15, 59);

      autoTable(doc, {
        startY: 66,
        head: [["Field", "Details"]],
        body: [
          ["Investor Name", form.name],
          ["Contact", form.contact],
          ["Plan", selectedPlan.name],
          ["Duration", `${selectedPlan.duration} Months`],
        ],
      });

      autoTable(doc, {
        startY: (doc as any).lastAutoTable.finalY + 10,
        head: [["Description", "Amount (Rs.)"]],
        body: [
          ["Investment", formatNumber(result.investment)],
          ["Monthly Harvest", formatNumber(result.monthlyHarvest)],
          ["Total Harvest", formatNumber(result.totalHarvest)],
          ["Total Expected Return", formatNumber(result.totalReturn)],
        ],
      });

      const y = (doc as any).lastAutoTable.finalY + 15;
      doc.setFontSize(9);
      doc.text(
        "This quotation is generated based on estimated agricultural yields and market conditions.",
        15,
        y
      );
      doc.text(
        "Final agreements will be issued officially by Golden Nature Plantation (Pvt) Ltd.",
        15,
        y + 6
      );

      doc.save(`Golden_Nature_Quotation_${form.name || "Investor"}.pdf`);
    };
  };

  return (
    <main className="min-h-screen bg-ivory-warm">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-emerald overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Investment background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="font-body text-sm tracking-widest uppercase text-gold">
              Investor Relations
            </span>
            <h1 className="font-display text-4xl md:text-6xl text-ivory mt-4 mb-6 leading-tight">
              Invest in
              <span className="text-gold"> Nature's</span> Future
            </h1>
            <p className="font-elegant text-xl text-ivory/85 leading-relaxed mb-8">
              Join us in cultivating a sustainable future. Golden Nature
              Plantation offers a unique opportunity to invest in premium
              agriculture with proven returns and positive environmental impact.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Investor Pack
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl">
                Download Annual Report
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* ✅ FORM */}
          <div className="bg-white rounded-2xl shadow-elevated p-10 mb-12">
            <h2 className="font-display text-3xl mb-8 text-center">
              Investment Quotation Generator
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-lg"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="text"
                placeholder="Contact Number"
                className="border p-3 rounded-lg"
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />

              <input
                type="text"
                placeholder="Investment Amount (Rs.)"
                className="border p-3 rounded-lg"
                value={form.amount}
                onChange={handleAmountChange}
              />

              <select
                className="border p-3 rounded-lg"
                value={form.planId}
                onChange={(e) => setForm({ ...form, planId: e.target.value })}
              >
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </div>

            <Button
              variant="emerald"
              className="w-full mt-8"
              onClick={handleCalculate}
            >
              Generate Investment Quotation
            </Button>
          </div>

          {/*  REPORT */}
          {result && selectedPlan && (
            <div className="bg-white rounded-2xl shadow-elevated p-10 border border-gray-200">
              {/* HEADER */}
              <div className="flex items-center gap-4 border-b pb-6 mb-6">
                <img
                  src={import.meta.env.BASE_URL + "images/logo3.png"}
                  className="w-16"
                  alt="Golden Nature"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-bold">
                    Golden Nature Plantation (Pvt) Ltd
                  </h2>
                  <p className="text-sm text-gray-500">
                    Premium Sri Lankan Plantation & Investment Solutions
                  </p>
                  <p className="text-xs text-gray-400">
                    www.goldennatureplantation.com | +94 77 123 4567
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  Date: {new Date().toLocaleDateString()}
                </div>
              </div>

              {/* REPORT TITLE */}
              <h3 className="text-xl font-semibold mb-6">
                Investment Quotation Report
              </h3>

              {/* INVESTOR INFO */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-sm text-gray-500">Investor Name</p>
                  <p className="font-semibold">{form.name}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-semibold">{form.contact}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Plan</p>
                  <p className="font-semibold">{selectedPlan.name}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">
                    {selectedPlan.duration} Months
                  </p>
                </div>
              </div>

              {/* FINANCIAL TABLE */}
              <div className="overflow-hidden rounded-xl border mb-8">
                <table className="w-full text-left">
                  <thead className="bg-emerald text-white">
                    <tr>
                      <th className="p-4">Description</th>
                      <th className="p-4 text-right">Amount (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Investment</td>
                      <td className="p-4 text-right">
                        {formatNumber(result.investment)}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-4">Monthly Harvest</td>
                      <td className="p-4 text-right">
                        {formatNumber(result.monthlyHarvest)}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-4">Total Harvest</td>
                      <td className="p-4 text-right">
                        {formatNumber(result.totalHarvest)}
                      </td>
                    </tr>

                    <tr className="bg-emerald/10 font-bold">
                      <td className="p-4">Total Expected Return</td>
                      <td className="p-4 text-right text-emerald-dark">
                        {formatNumber(result.totalReturn)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* DISCLAIMER */}
              <div className="text-sm text-gray-500 leading-relaxed mb-8">
                <p>
                  This quotation is generated based on estimated agricultural
                  yields and market conditions. Actual returns may vary.
                </p>
                <p className="mt-2">
                  Final agreements will be issued officially by Golden Nature
                  Plantation (Pvt) Ltd.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-end gap-4">
                <Button variant="emerald-outline" onClick={handleDownloadPDF}>
                  Download PDF
                </Button>

                <Button variant="emerald" onClick={() => navigate("/contact")}>
                  Proceed to Investment
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Quotation;
