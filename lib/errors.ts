export class HttpError extends Error {
  status: number;
  exit: boolean;

  constructor(message: string, status: number, exit: boolean) {
    super(message);
    this.status = status;
    this.exit = exit;
  }
}