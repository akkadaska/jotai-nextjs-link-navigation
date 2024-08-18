import { ShowAtom, ShowGlobalAtom } from '@/app/components/show-atom';
import { sampleAtom } from '@/atom/atom';
import { HydrationBoundary } from 'jotai-ssr';
import { useHydrateAtoms } from 'jotai/utils';

export default function Page({ params: { sampleAtomValue }}: {
  params: { sampleAtomValue: string };
}) {
  return (
    <HydrationBoundary hydrateAtoms={[[sampleAtom, sampleAtomValue]]}>
      <main>
        <h1 className='text-2xl'>Hydrate by HydrationBoundary with value of {sampleAtomValue}</h1>
        <ShowAtom expected={sampleAtomValue} />
        <ShowGlobalAtom />
      </main>
    </HydrationBoundary>
  );
}

export const dynamic = 'force-dynamic';
