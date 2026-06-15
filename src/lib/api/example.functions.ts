export async function getGreeting(name: string) {
  return {
    greeting: `Hello, ${name}!`,
  };
}
