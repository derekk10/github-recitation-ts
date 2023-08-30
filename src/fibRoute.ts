// Endpoint for querying the fibonacci numbers
type Parameter = {
  num: number;
};

type Request = {
  params: Parameter;
};

type Response = {
  send: (value: string) => void;
};

function fibonacci(n: number): number {
  // Your Fibonacci logic here
  return n;
}

export default (req: Request, res: Response): void => {
  const { num } = req.params;

  const fibN: number = fibonacci(parseInt(num));
  let result  = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
