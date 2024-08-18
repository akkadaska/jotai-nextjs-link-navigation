import { ShowAtom, ShowGlobalAtom } from '@/app/components/show-atom';
import { sampleAtom } from '@/atom/atom';
import { HydrationBoundary, RenderingBoundary } from 'jotai-ssr';
import { useHydrateAtoms } from 'jotai/utils';

export default function Page({ params: { sampleAtomValue }}: {
  params: { sampleAtomValue: string };
}) {
  return (
    <RenderingBoundary performanceImpactingUseUpperStore>
      <HydrationBoundary hydrateAtoms={[[sampleAtom, sampleAtomValue]]}>
        <main>
          <h1 className='text-2xl'>Hydrate by HydrationBoundary with value of {sampleAtomValue} within RenderingBoundary</h1>
          <ShowAtom expected={sampleAtomValue} />
          <ShowGlobalAtom />
        </main>
      </HydrationBoundary>
    </RenderingBoundary>
    
  );
}

export const dynamic = 'force-dynamic';
