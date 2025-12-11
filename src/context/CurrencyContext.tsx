// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";

// export type Currency = "LKR" | "USD";

// type CurrencyContextType = {
//   currency: Currency;
//   setCurrency: (currency: Currency) => void;
//   lkrPerUsd: number;
//   rateLoaded: boolean;
//   formatPrice: (priceLkr: number) => string;
// };

// const CurrencyContext = createContext<CurrencyContextType | undefined>(
//   undefined
// );

// export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
//   const [currency, setCurrencyState] = useState<Currency>(() => {
//     //  Load saved currency if exists
//     const saved = localStorage.getItem("gnp_currency") as Currency | null;
//     return saved || "LKR";
//   });

//   const [lkrPerUsd, setLkrPerUsd] = useState<number>(306.95);
//   const [rateLoaded, setRateLoaded] = useState(false);

//   // Fetch live USD→LKR rate ONCE for whole app
//   useEffect(() => {
//     const fetchRate = async () => {
//       try {
//         const res = await fetch(
//           "https://api.exchangerate.host/latest?base=USD&symbols=LKR"
//         );
//         if (!res.ok) throw new Error("Failed to fetch rate");

//         const data = await res.json();
//         const rate = data?.rates?.LKR;

//         if (rate && typeof rate === "number") {
//           setLkrPerUsd(rate);
//         }
//       } catch (error) {
//         console.error(
//           "Failed to fetch live exchange rate. Using fallback 300 LKR/USD.",
//           error
//         );
//       } finally {
//         setRateLoaded(true);
//       }
//     };

//     fetchRate();
//   }, []);

//   const setCurrency = (newCurrency: Currency) => {
//     setCurrencyState(newCurrency);
//     localStorage.setItem("gnp_currency", newCurrency);
//   };

//   const formatPrice = (priceLkr: number) => {
//     if (currency === "LKR") {
//       return `LKR ${priceLkr.toLocaleString("en-LK", {
//         minimumFractionDigits: 2,
//       })}`;
//     }

//     const usd = priceLkr / lkrPerUsd;
//     return `$ ${usd.toLocaleString("en-US", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     })}`;
//   };

//   return (
//     <CurrencyContext.Provider
//       value={{ currency, setCurrency, lkrPerUsd, rateLoaded, formatPrice }}
//     >
//       {children}
//     </CurrencyContext.Provider>
//   );
// };

// export const useCurrency = () => {
//   const ctx = useContext(CurrencyContext);
//   if (!ctx) {
//     throw new Error("useCurrency must be used inside <CurrencyProvider>");
//   }
//   return ctx;
// };

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Currency = "LKR" | "USD";

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  lkrPerUsd: number;
  rateLoaded: boolean;
  lastUpdated: string | null;
  formatPrice: (priceLkr: number) => string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

// ✅ Fallback if API fails
const FALLBACK_LKR_PER_USD = 310;

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    // 🔁 Load saved currency if exists
    const saved = localStorage.getItem("gnp_currency") as Currency | null;
    return saved || "LKR";
  });

  const [lkrPerUsd, setLkrPerUsd] = useState<number>(FALLBACK_LKR_PER_USD);
  const [rateLoaded, setRateLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // 🔄 Fetch live USD→LKR rate for the whole app
  useEffect(() => {
    let isMounted = true;

    const fetchRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!res.ok) throw new Error("Failed to fetch rate");

        const data = await res.json();
        const rate = data?.rates?.LKR;

        if (isMounted && rate && typeof rate === "number") {
          setLkrPerUsd(rate);
          setLastUpdated(new Date().toISOString());
          console.log("✅ Live USD→LKR rate updated:", rate);
        }
      } catch (error) {
        if (isMounted) {
          console.error(
            "❌ Failed to fetch live exchange rate. Using fallback",
            FALLBACK_LKR_PER_USD,
            "LKR/USD.",
            error
          );
          // keep fallback lkrPerUsd
        }
      } finally {
        if (isMounted) {
          setRateLoaded(true);
        }
      }
    };

    // First load
    fetchRate();

    // 🔁 Optional: refresh every 1 hour
    const intervalId = setInterval(fetchRate, 1000 * 60 * 60);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("gnp_currency", newCurrency);
  };

  const formatPrice = (priceLkr: number) => {
    if (currency === "LKR") {
      return `LKR ${priceLkr.toLocaleString("en-LK", {
        minimumFractionDigits: 2,
      })}`;
    }

    const usd = priceLkr / lkrPerUsd;
    return `$ ${usd.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        lkrPerUsd,
        rateLoaded,
        lastUpdated,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used inside <CurrencyProvider>");
  }
  return ctx;
};
