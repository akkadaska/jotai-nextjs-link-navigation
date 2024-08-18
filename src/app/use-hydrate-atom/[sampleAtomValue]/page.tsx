'use client';

import { ShowAtom, ShowGlobalAtom } from '@/app/components/show-atom';
import { sampleAtom } from '@/atom/atom';
import { useHydrateAtoms } from 'jotai/utils';

export default function Page({ params: { sampleAtomValue }}: {
  params: { sampleAtomValue: string };
}) {
  useHydrateAtoms([[sampleAtom, sampleAtomValue]]);
  return (
    <main>
      <h1 className='text-2xl'>Hydrate by useHydrateAtom with value of {sampleAtomValue}</h1>
      <ShowAtom expected={sampleAtomValue} />
      <ShowGlobalAtom />
    </main>
  );
}

export const dynamic = 'force-dynamic';
