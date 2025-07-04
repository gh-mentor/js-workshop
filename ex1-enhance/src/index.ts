/**
 * Producer class
 * Responsible for producing a message after a delay.
 */
class Producer {
  private resolve: (value: string) => void;

  constructor(resolve: (value: string) => void) {
    this.resolve = resolve;
  }

  /**
   * Simulates a long-running task and resolves the promise with a message.
   */
  produce(): void {
    console.log('Delivering message...');
    setTimeout(() => {
      this.resolve('Message from producer...');
    }, 5000); // 5 seconds delay
  }
}

/**
 * Consumer class
 * Responsible for consuming the message produced by the Producer.
 */
class Consumer {
  private promise: Promise<string>;

  constructor(promise: Promise<string>) {
    this.promise = promise;
  }

  /**
   * Waits for the promise to resolve and logs the message.
   */
  async consume(): Promise<void> {
    try {
      const message = await this.promise;
      console.log(message);
    } catch (error) {
      console.error('Failed to consume message:', error);
    }
  }
}

/**
 * Main function to simulate the producer-consumer workflow.
 */
const main = async (): Promise<void> => {
  let resolve: (value: string) => void;
  let reject: (reason?: any) => void;

  // Create a promise and store its resolve/reject functions
  const promise = new Promise<string>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const producer = new Producer(resolve!);
  const consumer = new Consumer(promise);

  // Simulate producer and consumer running in parallel
  const producerTask = new Promise<void>((resolve) => {
    producer.produce();
    resolve();
  });

  const consumerTask = consumer.consume();

  await Promise.all([producerTask, consumerTask]);
};

// Run the main function
main().catch((error) => console.error('Error in main:', error));