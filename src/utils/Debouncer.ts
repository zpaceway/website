class Debouncer {
  timeout: NodeJS.Timeout;
  delay: number;

  constructor(delay = 500) {
    this.timeout = setTimeout(() => {}, 0);
    this.delay = delay;
  }

  exec(fn: () => void) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(fn, this.delay);
  }
}
export default Debouncer;
