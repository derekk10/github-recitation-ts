// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
type Parameter {
  num: number
}
type Request {
  params: Parameter
}

export default (req: Request, res: Response) => void {
  const { num: number } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result : string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
