export default function dynamicPriceRangeCalculator(prices:number[]):string[]
{
  if(!prices.length)
  {
    return [];
  }
  const maxPrice = Math.max(...prices);
  // console.log("maximum price is",maxPrice);
  const step = maxPrice / 4;
  const priceRanges =
    maxPrice > 0
      ? [
          `0.00 - ${step.toFixed(2)} taka`,
          `${step.toFixed(2)} - ${(step * 2).toFixed(2)} taka`,
          `${(step * 2).toFixed(2)} - ${(step * 3).toFixed(2)} taka`,
          `${(step * 3).toFixed(2)} taka +`,
        ]
      : [];

  return priceRanges;
}