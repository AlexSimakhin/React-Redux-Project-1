export const useHead = ({ data, isFetching, currentActive}) => {
  const currentHeadValue = !isFetching && data && data.length && data.find((value, index) => index === currentActive);

  return { currentHeadValue };
};