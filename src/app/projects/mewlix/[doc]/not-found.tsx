import { AlpacaNotFound } from '@/features/alpaca-not-found';

export default function NotFound() {
  return (
    <main>
      <AlpacaNotFound info="No documentation page matches the request!" />
    </main>
  );
}
