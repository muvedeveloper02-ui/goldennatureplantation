import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

const plan = [
  { id: "1", name: "Starter Grow Plan", duration: 12, rate: 0.06 },
  { id: "2", name: "Green Profit Plan", duration: 24, rate: 0.08 },
  { id: "3", name: "Golden Harvest Plan", duration: 36, rate: 0.1 },
];

const Quotation = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const selectedPlan = plan.find((p) => p.id === id);

  const [form, setForm] = useState({
    name: "",
    amount: "",
    contact: "",
  });

  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const amount = Number(form.amount);
    const monthlyHarvest = amount * selectedPlan.rate;
    const totalReturn = amount + monthlyHarvest * selectedPlan.duration;

    setResult({
      investment: amount,
      monthlyHarvest: monthlyHarvest.toFixed(2),
      totalHarvest: (monthlyHarvest * selectedPlan.duration).toFixed(2),
      totalReturn: totalReturn.toFixed(2),
    });
  };

  return (
    <main className="min-h-screen bg-ivory-warm">
      <Navbar />

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* FORM CARD */}
          <div className="bg-white rounded-2xl shadow-elevated p-10 mb-12">
            <h2 className="font-display text-3xl text-foreground mb-6 text-center">
              Investment Quotation Generator
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="number"
                placeholder="Investment Amount (Rs.)"
                className="w-full border p-3 rounded-lg"
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
              />

              <input
                type="text"
                placeholder="Contact Number"
                className="w-full border p-3 rounded-lg"
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />

              <input
                className="w-full border p-3 rounded-lg bg-gray-100"
                value={selectedPlan?.name}
                disabled
              />
            </div>

            <Button
              variant="gold"
              className="w-full mt-6"
              onClick={handleCalculate}
            >
              Generate Investment Quotation
            </Button>
          </div>

          {/* ✅ PROFESSIONAL REPORT */}
          {result && (
            <div className="bg-white rounded-2xl shadow-elevated p-12 border border-gray-200">
              {/* REPORT HEADER */}
              <div className="flex justify-between items-center border-b pb-6 mb-6">
                <div>
                  <h2 className="font-display text-3xl text-foreground">
                    Investment Quotation Report
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Golden Nature Plantation (Pvt) Ltd
                  </p>
                </div>
                <div className="text-sm text-right text-muted-foreground">
                  Date: {new Date().toLocaleDateString()}
                </div>
              </div>

              {/* CLIENT DETAILS */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Investor Name</p>
                  <p className="font-semibold">{form.name}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Contact Number
                  </p>
                  <p className="font-semibold">{form.contact}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Selected Plan</p>
                  <p className="font-semibold">{selectedPlan.name}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">
                    {selectedPlan.duration} Months
                  </p>
                </div>
              </div>

              {/* FINANCIAL SUMMARY TABLE */}
              <div className="overflow-hidden rounded-xl border">
                <table className="w-full text-left">
                  <thead className="bg-emerald text-ivory">
                    <tr>
                      <th className="p-4">Description</th>
                      <th className="p-4 text-right">Amount (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Initial Investment</td>
                      <td className="p-4 text-right font-semibold">
                        {result.investment.toLocaleString()}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Monthly Harvest Return</td>
                      <td className="p-4 text-right">
                        {Number(result.monthlyHarvest).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Total Harvest (Over Period)</td>
                      <td className="p-4 text-right">
                        {Number(result.totalHarvest).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="bg-emerald/10">
                      <td className="p-4 font-bold">Total Expected Return</td>
                      <td className="p-4 text-right font-bold text-emerald-dark">
                        {Number(result.totalReturn).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* DISCLAIMER */}
              <div className="mt-8 text-sm text-muted-foreground leading-relaxed">
                <p>
                  This quotation is generated based on estimated agricultural
                  yields and prevailing market conditions. Actual returns may
                  vary depending on climatic factors, market prices, and
                  production efficiency.
                </p>
                <p className="mt-2">
                  This document does not constitute a binding financial
                  contract. Final agreements will be issued officially by Golden
                  Nature Plantation (Pvt) Ltd.
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                <Button variant="emerald-outline">Download PDF</Button>
                <Button variant="gold" onClick={() => navigate("/contact")}>
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
