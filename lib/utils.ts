export const formatNumber = (num: number, opts?: Intl.NumberFormatOptions) => {
  const options: Intl.NumberFormatOptions = {
    ...{
      currency: "USD",
      notation: "compact",
      compactDisplay: "short",
    },
    ...opts,
  };
  return new Intl.NumberFormat("en-US", options).format(num);
};
