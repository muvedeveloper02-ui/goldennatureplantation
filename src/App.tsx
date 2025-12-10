// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Investment from "./pages/Investment";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import Quotation from "@/pages/Quotation";
// import ProductDetails from "@/pages/ProductDetails";
// import Cart from "@/pages/Cart";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter basename="/goldennatureplantation/">
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/investment" element={<Investment />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/quotation/:id" element={<Quotation />} />
//           <Route path="/product/:id" element={<ProductDetails />} />
//           <Route path="/cart" element={<Cart />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Investment from "./pages/Investment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Quotation from "@/pages/Quotation";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/*BrowserRouter REMOVED FROM HERE */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quotation/:id" element={<Quotation />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
