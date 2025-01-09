import localFont from "next/font/local";

const avenirRegular = localFont({
  src: "/AvenirLTStd-Roman.otf",
  weight: "400",
  style: "normal",
  display: "swap",
});

const avenirMedium = localFont({
  src: "/AvenirLTStd-Medium.otf",
  weight: "500",
  style: "normal",
  display: "swap",
});

const avenirBold = localFont({
  src: "/AvenirLTStd-Heavy.otf",
  weight: "700",
  style: "normal",
  display: "swap",
});

const avenirBlack = localFont({
  src: "AvenirLTStd-Black.otf",
  weight: "900",
  style: "normal",
  display: "swap",
});

export { avenirRegular, avenirMedium, avenirBold, avenirBlack };
