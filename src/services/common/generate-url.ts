export default function generateUrl(
  base: string,
  param?: Record<string, any> | string | number
) {
  const url = new URL(base);

  if (typeof param === "object" && param !== null) {
    Object.entries(param).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  } else if (param !== undefined) {
    url.pathname += `/${param}`;
  }

  return url.toString();
}
