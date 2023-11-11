type NextApiFetcherProps = {
  url: string;
  method: "GET" | "POST";
  options?: { body: {} };
};

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://jminney.dev/api";

const nextApiFetcher = async ({
  url,
  method,
  options,
}: NextApiFetcherProps) => {
  const res = await fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: method === "POST" ? JSON.stringify(options?.body) : undefined,
  });

  if (res.status !== 200) return { error: "Internal Server Error" };

  return await res.json();
};

export default nextApiFetcher;
